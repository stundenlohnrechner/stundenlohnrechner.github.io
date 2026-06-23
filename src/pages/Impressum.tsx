import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ImpressumContent = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container max-w-3xl mx-auto px-4 py-12">
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground mb-6">
          Impressum
        </h1>

        <div className="prose-custom space-y-8">
          <section>
            <h2 className="font-heading font-bold text-foreground text-xl mb-3">
              {t("Angaben gemäß § 5 TMG", "Information according to § 5 TMG")}
            </h2>
            <div className="text-sm text-muted-foreground leading-relaxed space-y-1">
              <p>Theweblix</p>
              <p>[Straße und Hausnummer]</p>
              <p>[PLZ Ort]</p>
              <p>{t("Deutschland", "Germany")}</p>
            </div>
          </section>

          <section>
            <h2 className="font-heading font-bold text-foreground text-xl mb-3">
              {t("Kontakt", "Contact")}
            </h2>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>E-Mail: <a href="mailto:theweblix@gmail.com" className="text-primary hover:underline">theweblix@gmail.com</a></p>
              <p>Website: <a href="https://theweblix.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">theweblix.com</a></p>
            </div>
          </section>

          <section>
            <h2 className="font-heading font-bold text-foreground text-xl mb-3">
              {t("Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV", "Responsible for content according to § 55 Abs. 2 RStV")}
            </h2>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Theweblix</p>
              <p>[Straße und Hausnummer]</p>
              <p>[PLZ Ort]</p>
            </div>
          </section>

          <section>
            <h2 className="font-heading font-bold text-foreground text-xl mb-3">
              {t("Haftung für Inhalte", "Liability for Content")}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t(
                "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.",
                "As a service provider, we are responsible for our own content on these pages in accordance with § 7 Abs. 1 TMG under general laws. According to §§ 8 to 10 TMG, however, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under general laws remain unaffected. However, liability in this regard is only possible from the time of knowledge of a specific infringement. Upon becoming aware of corresponding infringements, we will remove this content immediately."
              )}
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-foreground text-xl mb-3">
              {t("Haftung für Links", "Liability for Links")}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t(
                "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.",
                "Our website contains links to external third-party websites over whose content we have no influence. Therefore, we cannot assume any liability for this third-party content. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking. However, permanent content control of the linked pages is not reasonable without concrete evidence of a legal violation. Upon becoming aware of legal violations, we will remove such links immediately."
              )}
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-foreground text-xl mb-3">
              {t("Urheberrecht", "Copyright")}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t(
                "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.",
                "The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution, and any form of commercialization beyond the scope of copyright law require the written consent of the respective author or creator. Downloads and copies of this page are only permitted for private, non-commercial use. Insofar as the content on this page was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is identified as such. Should you nevertheless become aware of a copyright infringement, we ask for a corresponding notification. Upon becoming aware of legal violations, we will remove such content immediately."
              )}
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-foreground text-xl mb-3">
              {t("Streitschlichtung", "Dispute Resolution")}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t(
                "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/. Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
                "The European Commission provides a platform for online dispute resolution (OS): https://ec.europa.eu/consumers/odr/. You can find our email address in the imprint above. We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board."
              )}
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const Impressum = () => (
  <LanguageProvider>
    <ImpressumContent />
  </LanguageProvider>
);

export default Impressum;
