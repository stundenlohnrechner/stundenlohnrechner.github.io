import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Target, ShieldCheck, Globe } from "lucide-react";

const UeberUnsContent = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container max-w-3xl mx-auto px-4 py-12">
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground mb-6">
          {t("Über uns", "About Us")}
        </h1>

        <p className="text-muted-foreground leading-relaxed mb-8">
          {t(
            "Der Stundenlohnrechner ist ein kostenloses Online-Tool, das Arbeitnehmern, Freelancern und Berufseinsteigern in Deutschland hilft, ihren Stundenlohn schnell und transparent zu berechnen. Unser Ziel ist es, finanzielle Transparenz zu schaffen – einfach, kostenlos und ohne Registrierung.",
            "The Stundenlohnrechner is a free online tool that helps employees, freelancers, and career starters in Germany calculate their hourly wage quickly and transparently. Our goal is to create financial transparency – simple, free, and without registration."
          )}
        </p>

        <div className="grid gap-6 sm:grid-cols-2 mb-10">
          <div className="rounded-xl border border-border bg-card p-6">
            <Target className="h-8 w-8 text-primary mb-3" />
            <h2 className="font-heading font-bold text-foreground text-lg mb-2">
              {t("Unsere Mission", "Our Mission")}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t(
                "Wir möchten, dass jeder Arbeitnehmer in Deutschland versteht, was seine Arbeit pro Stunde wert ist. Ob für Gehaltsverhandlungen, den Mindestlohn-Check oder die Überprüfung von Überstundenvergütungen – unser Rechner liefert klare Antworten.",
                "We want every employee in Germany to understand what their work is worth per hour. Whether for salary negotiations, minimum wage checks, or verifying overtime pay – our calculator provides clear answers."
              )}
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <ShieldCheck className="h-8 w-8 text-primary mb-3" />
            <h2 className="font-heading font-bold text-foreground text-lg mb-2">
              {t("Verlässliche Berechnung", "Reliable Calculations")}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t(
                "Alle Berechnungen basieren auf der offiziellen 13-Wochen-Formel, die von der Deutschen Rentenversicherung und Personalabteilungen als Standard verwendet wird. Unsere Daten sind für das Jahr 2026 aktualisiert, einschließlich des aktuellen Mindestlohns von 13,90 € pro Stunde.",
                "All calculations are based on the official 13-week formula used as the standard by the German Pension Insurance and HR departments. Our data is updated for 2026, including the current minimum wage of €13.90 per hour."
              )}
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <Users className="h-8 w-8 text-primary mb-3" />
            <h2 className="font-heading font-bold text-foreground text-lg mb-2">
              {t("Für wen ist der Rechner?", "Who is it for?")}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t(
                "Unser Stundenlohnrechner richtet sich an Angestellte, Teilzeitkräfte, Minijobber, Werkstudenten und Freelancer in Deutschland. Egal ob du dein Monatsgehalt oder Jahresgehalt umrechnen möchtest – das Tool ist für dich gemacht.",
                "Our hourly wage calculator is designed for employees, part-time workers, mini-jobbers, working students, and freelancers in Germany. Whether you want to convert your monthly or annual salary – this tool is made for you."
              )}
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <Globe className="h-8 w-8 text-primary mb-3" />
            <h2 className="font-heading font-bold text-foreground text-lg mb-2">
              {t("Teil von theweblix.com", "Part of theweblix.com")}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t(
                "Der Stundenlohnrechner ist ein Projekt von theweblix.com. Wir entwickeln nützliche, kostenlose Online-Tools, die das tägliche Leben einfacher machen. Alle unsere Projekte legen Wert auf Benutzerfreundlichkeit, Datenschutz und Qualität.",
                "The Stundenlohnrechner is a project by theweblix.com. We develop useful, free online tools that make daily life easier. All our projects prioritize user-friendliness, privacy, and quality."
              )}
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-muted/40 p-6">
          <h2 className="font-heading font-bold text-foreground text-lg mb-2">
            {t("Unsere Standards", "Our Standards")}
          </h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>✓ {t("Offiziell anerkannte 13-Wochen-Formel (Rentenversicherungsstandard)", "Officially recognized 13-week formula (pension insurance standard)")}</li>
            <li>✓ {t("Aktueller Mindestlohn 2026: 13,90 € brutto pro Stunde", "Current minimum wage 2026: €13.90 gross per hour")}</li>
            <li>✓ {t("Keine Speicherung persönlicher Daten – alle Berechnungen erfolgen lokal", "No personal data storage – all calculations are performed locally")}</li>
            <li>✓ {t("DSGVO-konform und werbefinanziert", "GDPR-compliant and ad-supported")}</li>
            <li>✓ {t("Regelmäßig aktualisiert nach aktuellen deutschen Arbeitsrecht-Standards", "Regularly updated according to current German labor law standards")}</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const UeberUns = () => (
  <LanguageProvider>
    <UeberUnsContent />
  </LanguageProvider>
);

export default UeberUns;
