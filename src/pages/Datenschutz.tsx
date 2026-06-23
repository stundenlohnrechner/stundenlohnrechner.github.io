import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DatenschutzContent = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container max-w-3xl mx-auto px-4 py-12">
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground mb-6">
          {t("Datenschutzerklärung", "Privacy Policy")}
        </h1>

        <div className="space-y-8">
          {/* Intro */}
          <section>
            <h2 className="font-heading font-bold text-foreground text-xl mb-3">
              {t("1. Datenschutz auf einen Blick", "1. Privacy at a Glance")}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t(
                "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit deinen personenbezogenen Daten passiert, wenn du diese Website besuchst. Personenbezogene Daten sind alle Daten, mit denen du persönlich identifiziert werden kannst.",
                "The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to personally identify you."
              )}
            </p>
          </section>

          {/* Verantwortlicher */}
          <section>
            <h2 className="font-heading font-bold text-foreground text-xl mb-3">
              {t("2. Verantwortlicher", "2. Data Controller")}
            </h2>
            <div className="text-sm text-muted-foreground leading-relaxed space-y-1">
              <p>{t("Verantwortlich für die Datenverarbeitung auf dieser Website:", "Responsible for data processing on this website:")}</p>
              <p>Theweblix</p>
              <p>[Straße und Hausnummer]</p>
              <p>[PLZ Ort]</p>
              <p>E-Mail: <a href="mailto:theweblix@gmail.com" className="text-primary hover:underline">theweblix@gmail.com</a></p>
            </div>
          </section>

          {/* Datenerfassung */}
          <section>
            <h2 className="font-heading font-bold text-foreground text-xl mb-3">
              {t("3. Datenerfassung auf dieser Website", "3. Data Collection on This Website")}
            </h2>
            <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
              {t("Server-Log-Dateien", "Server Log Files")}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {t(
                "Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die dein Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.",
                "The provider of the pages automatically collects and stores information in so-called server log files, which your browser automatically transmits to us. These are: browser type and version, operating system used, referrer URL, hostname of the accessing computer, time of server request, and IP address. This data is not merged with other data sources. This data is collected on the basis of Art. 6 Abs. 1 lit. f GDPR."
              )}
            </p>

            <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
              {t("Keine Speicherung von Berechnungsdaten", "No Storage of Calculation Data")}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t(
                "Unser Stundenlohnrechner speichert, überträgt oder protokolliert keinerlei von dir eingegebene Finanzdaten (z. B. Gehalt, Stundenlohn, Arbeitszeit). Alle Berechnungen werden ausschließlich lokal in deinem Browser durchgeführt. Es werden keine personenbezogenen Finanzdaten an unsere Server oder an Dritte übermittelt.",
                "Our hourly wage calculator does not store, transmit, or log any financial data you enter (e.g., salary, hourly wage, working hours). All calculations are performed exclusively locally in your browser. No personal financial data is transmitted to our servers or to third parties."
              )}
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="font-heading font-bold text-foreground text-xl mb-3">
              {t("4. Cookies", "4. Cookies")}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t(
                "Diese Website verwendet Cookies. Cookies sind kleine Textdateien, die auf deinem Endgerät gespeichert werden und die dein Browser speichert. Einige Cookies sind notwendig, damit die Website ordnungsgemäß funktioniert (technisch notwendige Cookies). Andere Cookies werden verwendet, um dein Nutzungserlebnis zu verbessern oder Werbung anzuzeigen (siehe Abschnitt Google AdSense). Du kannst deinen Browser so einstellen, dass du über das Setzen von Cookies informiert wirst, und Cookies nur im Einzelfall erlauben. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.",
                "This website uses cookies. Cookies are small text files stored on your device by your browser. Some cookies are necessary for the website to function properly (technically necessary cookies). Other cookies are used to improve your user experience or display advertising (see Google AdSense section). You can set your browser to inform you about the setting of cookies and only allow cookies on a case-by-case basis. Disabling cookies may limit the functionality of this website."
              )}
            </p>
          </section>

          {/* Google AdSense */}
          <section>
            <h2 className="font-heading font-bold text-foreground text-xl mb-3">
              {t("5. Google AdSense", "5. Google AdSense")}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              {t(
                "Diese Website nutzt Google AdSense, einen Dienst der Google Ireland Limited (\u201EGoogle\u201C), Gordon House, Barrow Street, Dublin 4, Irland, zum Einbinden von Werbeanzeigen. Google AdSense verwendet Cookies, um die Anzeige relevanter Werbung zu ermöglichen. Dabei wird deinem Browser eine pseudonyme Identifikationsnummer (Cookie-ID) zugewiesen, um zu überprüfen, welche Anzeigen in deinem Browser eingeblendet wurden und welche Anzeigen aufgerufen wurden.",
                "This website uses Google AdSense, a service by Google Ireland Limited ('Google'), Gordon House, Barrow Street, Dublin 4, Ireland, for embedding advertisements. Google AdSense uses cookies to enable the display of relevant advertising. A pseudonymous identification number (cookie ID) is assigned to your browser to check which ads were displayed and which ads were accessed."
              )}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              {t(
                "Die Verwendung von Cookies durch Google AdSense ermöglicht es Google und seinen Partnerwebsites, Anzeigen basierend auf früheren Besuchen auf dieser oder anderen Websites zu schalten. Google kann die erhobenen Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben ist oder soweit Dritte diese Daten im Auftrag von Google verarbeiten.",
                "The use of cookies by Google AdSense allows Google and its partner websites to serve ads based on previous visits to this or other websites. Google may transfer the collected information to third parties where required by law or where third parties process this data on behalf of Google."
              )}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t(
                "Die Rechtsgrundlage für die Nutzung von Google AdSense ist deine Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Du kannst die Einwilligung jederzeit widerrufen. Weitere Informationen findest du in der Datenschutzerklärung von Google: https://policies.google.com/privacy. Du kannst personalisierte Werbung in den Google-Anzeigeneinstellungen deaktivieren: https://adssettings.google.com.",
                "The legal basis for using Google AdSense is your consent according to Art. 6 Abs. 1 lit. a GDPR. You can revoke your consent at any time. For more information, see Google's privacy policy: https://policies.google.com/privacy. You can disable personalized advertising in Google's ad settings: https://adssettings.google.com."
              )}
            </p>
          </section>

          {/* Deine Rechte */}
          <section>
            <h2 className="font-heading font-bold text-foreground text-xl mb-3">
              {t("6. Deine Rechte als betroffene Person", "6. Your Rights as a Data Subject")}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              {t(
                "Du hast gemäß der DSGVO folgende Rechte in Bezug auf deine personenbezogenen Daten:",
                "Under the GDPR, you have the following rights regarding your personal data:"
              )}
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>{t("Auskunftsrecht (Art. 15 DSGVO):", "Right of access (Art. 15 GDPR):")}</strong> {t("Du hast das Recht, Auskunft über deine bei uns gespeicherten personenbezogenen Daten zu erhalten.", "You have the right to obtain information about your personal data stored by us.")}</li>
              <li><strong>{t("Recht auf Berichtigung (Art. 16 DSGVO):", "Right to rectification (Art. 16 GDPR):")}</strong> {t("Du hast das Recht, unrichtige personenbezogene Daten berichtigen zu lassen.", "You have the right to have inaccurate personal data corrected.")}</li>
              <li><strong>{t("Recht auf Löschung (Art. 17 DSGVO):", "Right to erasure (Art. 17 GDPR):")}</strong> {t("Du hast das Recht, die Löschung deiner personenbezogenen Daten zu verlangen, sofern keine gesetzliche Aufbewahrungspflicht besteht.", "You have the right to request the deletion of your personal data, provided there is no legal obligation to retain it.")}</li>
              <li><strong>{t("Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):", "Right to restriction of processing (Art. 18 GDPR):")}</strong> {t("Du hast das Recht, die Einschränkung der Verarbeitung deiner Daten zu verlangen.", "You have the right to request the restriction of processing of your data.")}</li>
              <li><strong>{t("Recht auf Datenübertragbarkeit (Art. 20 DSGVO):", "Right to data portability (Art. 20 GDPR):")}</strong> {t("Du hast das Recht, deine Daten in einem gängigen, maschinenlesbaren Format zu erhalten.", "You have the right to receive your data in a commonly used, machine-readable format.")}</li>
              <li><strong>{t("Widerspruchsrecht (Art. 21 DSGVO):", "Right to object (Art. 21 GDPR):")}</strong> {t("Du hast das Recht, jederzeit gegen die Verarbeitung deiner personenbezogenen Daten Widerspruch einzulegen.", "You have the right to object to the processing of your personal data at any time.")}</li>
            </ul>
          </section>

          {/* Beschwerderecht */}
          <section>
            <h2 className="font-heading font-bold text-foreground text-xl mb-3">
              {t("7. Beschwerderecht bei einer Aufsichtsbehörde", "7. Right to Lodge a Complaint")}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t(
                "Wenn du der Ansicht bist, dass die Verarbeitung deiner personenbezogenen Daten gegen die DSGVO verstößt, hast du das Recht, eine Beschwerde bei einer Datenschutz-Aufsichtsbehörde einzureichen. Du kannst dich an die zuständige Behörde deines Bundeslandes wenden.",
                "If you believe that the processing of your personal data violates the GDPR, you have the right to file a complaint with a data protection supervisory authority. You can contact the competent authority in your federal state."
              )}
            </p>
          </section>

          {/* SSL */}
          <section>
            <h2 className="font-heading font-bold text-foreground text-xl mb-3">
              {t("8. SSL-Verschlüsselung", "8. SSL Encryption")}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t(
                "Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung personenbezogener Daten eine SSL-Verschlüsselung. Du erkennst eine verschlüsselte Verbindung daran, dass die Adresszeile des Browsers von \u201Ehttp://\u201C auf \u201Ehttps://\u201C wechselt und an dem Schloss-Symbol in deiner Browserzeile.",
                "This website uses SSL encryption for security reasons and to protect the transmission of personal data. You can recognize an encrypted connection by the browser's address bar changing from 'http://' to 'https://' and by the lock icon in your browser bar."
              )}
            </p>
          </section>

          {/* Aktualisierung */}
          <section>
            <h2 className="font-heading font-bold text-foreground text-xl mb-3">
              {t("9. Aktualität und Änderung dieser Datenschutzerklärung", "9. Updates to This Privacy Policy")}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t(
                "Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Januar 2026. Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf dieser Seite abgerufen werden.",
                "This privacy policy is currently valid as of January 2026. Due to the further development of our website or changes in legal or regulatory requirements, it may become necessary to amend this privacy policy. The current version can be accessed at any time on this page."
              )}
            </p>
          </section>

          {/* Kontakt */}
          <section className="rounded-xl border border-border bg-muted/40 p-6">
            <h2 className="font-heading font-bold text-foreground text-lg mb-2">
              {t("Fragen zum Datenschutz?", "Questions about privacy?")}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t(
                "Bei Fragen zur Erhebung, Verarbeitung oder Nutzung deiner personenbezogenen Daten, bei Auskünften, Berichtigung, Sperrung oder Löschung von Daten wende dich bitte an:",
                "For questions about the collection, processing, or use of your personal data, or for information, correction, blocking, or deletion of data, please contact:"
              )}
              {" "}
              <a href="mailto:theweblix@gmail.com" className="text-primary hover:underline">theweblix@gmail.com</a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const Datenschutz = () => (
  <LanguageProvider>
    <DatenschutzContent />
  </LanguageProvider>
);

export default Datenschutz;
