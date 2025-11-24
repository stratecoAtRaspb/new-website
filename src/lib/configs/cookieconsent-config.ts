import * as CookieConsent from 'vanilla-cookieconsent';

const config: CookieConsent.CookieConsentConfig = {
  categories: {
    necessary: {
      enabled: true,
      readOnly: true
    },
    analytics: {},
    ads: {}
  },

  guiOptions: {
    consentModal: {
      layout: 'box inline',
      position: 'bottom left',
      equalWeightButtons: true,
      flipButtons: false
    },
    preferencesModal: {
      layout: 'box',
      equalWeightButtons: true,
      flipButtons: false
    }
  },

  language: {
    default: 'de',
    translations: {
      de: {
        consentModal: {
          title: 'Wir verwenden Cookies...',
          description:
            '...und ähnliche Technologien, um Dienste bzw. Funktionen auf unserer Website zu gewährleisten und um zu verstehen, wie Sie diese nutzen. Indem Sie auf „akzeptieren“ klicken, stimmen Sie deren Verwendung für Marketing- und Analysezwecke zu.',
          acceptAllBtn: 'Alle akzeptieren',
          acceptNecessaryBtn: 'Alle ablehnen',
          showPreferencesBtn: 'Individuelle Einstellungen',
          footer: `<a href="/imprint" target="_blank">Impressum</a> <a href="/privacy-notice" target="_blank">Datenschutzbestimmungen</a>`
        },
        preferencesModal: {
          title: 'Cookie Einstellungen',
          acceptAllBtn: 'Alle akzeptieren',
          acceptNecessaryBtn: 'Alle ablehnen',
          savePreferencesBtn: 'Aktuelle Einstellungen speichern',
          closeIconLabel: 'Modal schließen',
          serviceCounterLabel: 'Service|Services',
          sections: [
            {
              title: 'Ihre Privatsphäreeinstellungen',
              description: `In diesem Bereich können Sie einige Präferenzen im Zusammenhang mit der Verarbeitung Ihrer persönlichen Daten äußern. Sie können Ihre getroffenen Entscheidungen jederzeit überprüfen und ändern, indem Sie dieses Panel über den bereitgestellten Link erneut aufrufen. Um Ihre Zustimmung zu den unten beschriebenen spezifischen Verarbeitungsaktivitäten zu verweigern, schalten Sie die Schalter auf „Aus“ oder verwenden Sie die Schaltfläche „Alle ablehnen“ und bestätigen Sie, dass Sie Ihre Auswahl speichern möchten.`
            },
            {
              title: 'Zwingend notwendige Cookies',
              description: 'Diese Cookies sind für das ordnungsgemäße Funktionieren der Website unerlässlich und können nicht deaktiviert werden.',
              linkedCategory: 'necessary'
            },
            {
              title: 'Weitere Informationen',
              description: 'Bei Fragen zu unseren Richtlinien zu Cookies und Ihren Auswahlmöglichkeiten <a href="/contact">wenden Sie sich bitte an uns</a>.'
            }
          ]
        }
      }
    }
  }
};

export default config;
