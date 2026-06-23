import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MessageSquare } from "lucide-react";

const KontaktContent = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container max-w-3xl mx-auto px-4 py-12">
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground mb-6">
          {t("Kontakt", "Contact")}
        </h1>

        <p className="text-muted-foreground leading-relaxed mb-8">
          {t(
            "Du hast Fragen, Anregungen oder Feedback zu unserem Stundenlohnrechner? Wir freuen uns, von dir zu hören! Ob technische Probleme, Verbesserungsvorschläge oder allgemeine Fragen – schreib uns gerne eine E-Mail.",
            "Do you have questions, suggestions, or feedback about our hourly wage calculator? We'd love to hear from you! Whether it's technical issues, improvement ideas, or general questions – feel free to send us an email."
          )}
        </p>

        <div className="grid gap-6 sm:grid-cols-2 mb-10">
          <div className="rounded-xl border border-border bg-card p-6">
            <Mail className="h-8 w-8 text-primary mb-3" />
            <h2 className="font-heading font-bold text-foreground text-lg mb-2">
              {t("E-Mail", "Email")}
            </h2>
            <p className="text-sm text-muted-foreground mb-3">
              {t(
                "Schreib uns eine E-Mail und wir antworten so schnell wie möglich.",
                "Send us an email and we'll respond as soon as possible."
              )}
            </p>
            <a
              href="mailto:theweblix@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              theweblix@gmail.com
            </a>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <MessageSquare className="h-8 w-8 text-primary mb-3" />
            <h2 className="font-heading font-bold text-foreground text-lg mb-2">
              {t("Feedback", "Feedback")}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t(
                "Dein Feedback hilft uns, den Stundenlohnrechner weiter zu verbessern. Lass uns wissen, welche Funktionen du dir wünschst oder was wir besser machen können.",
                "Your feedback helps us improve the hourly wage calculator. Let us know what features you'd like or what we can do better."
              )}
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-muted/40 p-6">
          <h2 className="font-heading font-bold text-foreground text-lg mb-2">
            {t("Wichtiger Hinweis", "Important Note")}
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {t(
              "Bitte beachte, dass wir keine individuelle Steuerberatung oder Rechtsberatung anbieten können. Für Fragen zu deiner persönlichen Steuersituation wende dich bitte an einen Steuerberater oder deine Gewerkschaft. Unser Rechner dient ausschließlich zu Informationszwecken.",
              "Please note that we cannot offer individual tax or legal advice. For questions about your personal tax situation, please consult a tax advisor or your union. Our calculator is for informational purposes only."
            )}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const Kontakt = () => (
  <LanguageProvider>
    <KontaktContent />
  </LanguageProvider>
);

export default Kontakt;
