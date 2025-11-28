import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const dePath = path.join(__dirname, 'messages', 'de.json');
const enPath = path.join(__dirname, 'messages', 'en.json');
const routesPath = path.join(__dirname, 'src', 'routes');

const de = JSON.parse(fs.readFileSync(dePath, 'utf-8'));
const en = JSON.parse(fs.readFileSync(enPath, 'utf-8'));

const folderToCamelMap = {
  'about-us': 'aboutUs',
  'financial-institution': 'financialInstitution',
  'pharma-healthcare': 'pharmaAndHealthcare',
  'telecoms-media-hightech': 'telecomsMediaAndHighTech',
  'travel-transport-logistics': 'travelTransportAndLogistics',
  'finance-controlling': 'financeAndControlling',
  'change-management': 'changeManagement',
  'collaboration-platform': 'collaborationPlatform',
  'cultural-change-facilliation': 'culturalChangeFacilliation',
  'digital-transformation': 'digitalTransformation',
  'management-coaching': 'managementCoaching',
  'post-merge-integration': 'postMergeIntegration',
  'strategy-optimization-and-implementation': 'strategyOptimizationAndImplementation',
  'workflow-and-business-process-alignment': 'workflowAndBusinessProcessAlignment',
  'brand-and-loyality-management': 'brandAndLoyalityManagement',
  'business-intelligence': 'businessIntelligence',
  'customer-feedback': 'customerFeedback',
  'customer-interaction': 'customerInteraction',
  'data-management': 'dataManagement',
  'social-media-monitoring': 'socialMediaMonitoring',
  'speech-analytics': 'speechAnalytics',
  'text-analytics': 'textAnalytics',
  'document-management': 'documentManagement',
  reporting: 'reporting',
  analysis: 'analysis',
  architecture: 'architecture',
  intranet: 'intranet',
  processes: 'processes',
  strategy: 'strategy',
  workflows: 'workflows',
  sharepoint: 'sharepoint',
  'behavioural-marketing': 'behaviouralMarketing',
  'customer-relationship-management': 'customerRelationshipManagement',
  'lead-management': 'leadManagement',
  leadgenerierung: 'leadgenerierung',
  'marketing-as-a-service': 'marketingAsAService',
  'marketing-automation': 'marketingAutomation',
  'kamakura-integrated-risk': 'kamakuraIntegratedRisk',
  'partnership-with-kamakura-corp': 'partnershipWithKamakuraCorp',
  'reporting-and-analysis': 'reportingAndAnalysis',
  'sell-side-buy-side': 'sellSideBuySide'
};

function toCamel(s) {
  if (folderToCamelMap[s]) return folderToCamelMap[s];
  return s.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace('-', '').replace('_', '');
  });
}

// Helper to look up text in navigation
function getNavText(langObj, segments) {
  // Attempt 1: precise path in navigation
  let current = langObj.navigation;
  for (const seg of segments) {
    if (current && current[seg]) {
      current = current[seg];
    } else {
      current = null;
      break;
    }
  }
  if (typeof current === 'string') return current;

  // Attempt 2: flattened lookup in topics/expertise
  // segments like ['topics', 'financeAndControlling', 'businessIntelligence']
  // navigation.topics.businessIntelligence
  if (segments.length > 2 && segments[0] === 'topics') {
    const last = segments[segments.length - 1];
    if (langObj.navigation.topics && langObj.navigation.topics[last]) {
      return langObj.navigation.topics[last];
    }
  }
  if (segments.length > 1 && segments[0] === 'expertise') {
    const last = segments[segments.length - 1];
    if (langObj.navigation.expertise && langObj.navigation.expertise[last]) {
      return langObj.navigation.expertise[last];
    }
  }

  // Attempt 3: check last segment in base nav
  const last = segments[segments.length - 1];
  if (langObj.navigation[last] && typeof langObj.navigation[last] === 'string') return langObj.navigation[last];
  if (langObj.navigation[last] && langObj.navigation[last].self) return langObj.navigation[last].self;

  return null;
}

// Function to safely set value in object at path
function setVal(obj, pathArr, val) {
  let current = obj;
  for (let i = 0; i < pathArr.length - 1; i++) {
    const key = pathArr[i];
    if (!current[key]) current[key] = {};
    current = current[key];
  }
  const last = pathArr[pathArr.length - 1];
  if (!current[last]) {
    current[last] = val;
  }
}

// Function to check if value exists
function getVal(obj, pathArr) {
  let current = obj;
  for (let i = 0; i < pathArr.length; i++) {
    const key = pathArr[i];
    if (!current || !current[key]) return undefined;
    current = current[key];
  }
  return current;
}

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (file === '+page.svelte') {
      processPage(fullPath);
    }
  }
}

function processPage(filePath) {
  const relPath = path.relative(routesPath, filePath);
  const dirName = path.dirname(relPath);
  let segments = [];

  if (dirName === '.') {
    segments = ['home'];
  } else {
    const parts = dirName.split(path.sep);
    segments = parts.map((p) => toCamel(p));
  }

  // Construct key path
  const titleKeyPath = [...segments, 'title'];
  const keyString = titleKeyPath.join('.');

  console.log(`Processing: ${relPath} -> Key: ${keyString}`);

  // Update DE JSON
  let existingTitle = getVal(de, titleKeyPath);
  if (!existingTitle) {
    // Find default title from navigation
    let navTitle = getNavText(de, segments) || 'STRATECO';
    setVal(de, titleKeyPath, navTitle);
    console.log(`  Added DE key: ${keyString} = "${navTitle}"`);
  } else {
    console.log(`  Key exists DE: ${keyString} = "${existingTitle}"`);
  }

  // Update EN JSON
  let existingTitleEn = getVal(en, titleKeyPath);
  if (!existingTitleEn) {
    let navTitle = getNavText(en, segments) || 'STRATECO';
    setVal(en, titleKeyPath, navTitle);
    console.log(`  Added EN key: ${keyString} = "${navTitle}"`);
  }

  // Update Svelte File
  let content = fs.readFileSync(filePath, 'utf-8');

  // Check if head already exists
  if (content.includes('<svelte:head>')) {
    console.log(`  Skipping svelte modification (head exists)`);
    // TODO: Could implement update logic if needed, but 'insert' implies adding where missing.
    // Or user said "füge ... ein", implying it's not there.
    // If it is there, we might want to ensure it has the right content, but let's be careful.
  } else {
    const scriptEnd = '</script>';
    if (content.includes(scriptEnd)) {
      const insertion = `
<svelte:head>
  <title>{m['${keyString}']()}</title>
  <meta name="description" content={m['${keyString}']()} />
</svelte:head>`;
      content = content.replace(scriptEnd, scriptEnd + '\n' + insertion);
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`  Updated ${filePath}`);
    } else {
      console.log(`  WARNING: No script tag found in ${filePath}`);
      // Append to top? Or creates script?
      // Assuming all have script setup for messages.
    }
  }
}

processDir(routesPath);

fs.writeFileSync(dePath, JSON.stringify(de, null, 2), 'utf-8');
fs.writeFileSync(enPath, JSON.stringify(en, null, 2), 'utf-8');

console.log('Done.');
