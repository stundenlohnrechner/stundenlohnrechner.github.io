import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Calculator from "@/components/Calculator";
import ContentSections from "@/components/ContentSections";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calculator as CalcIcon } from "lucide-react";

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section className="hero-gradient py-16 sm:py-20 px-4">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 px-4 py-1.5 mb-6">
          <CalcIcon className="h-4 w-4 text-primary-foreground" />
          <span className="text-sm font-medium text-primary-foreground">
            {t("Kostenloser Rechner 2026", "Free Calculator 2026")}
          </span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-foreground leading-tight mb-4">
          Stundenlohnrechner
        </h1>
        <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
          {t(
            "Berechne deinen Stundenlohn aus Monatsgehalt oder Jahresgehalt – schnell, einfach und kostenlos. Inkl. 13-Wochen-Formel und Mindestlohn-Check.",
            "Calculate your hourly wage from monthly or annual salary – fast, easy, and free. Including 13-week formula and minimum wage check."
          )}
        </p>
      </div>
    </section>
  );
};

const IndexContent = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <HeroSection />
      <main className="flex-1 container max-w-4xl mx-auto px-4 -mt-8 relative z-10 pb-8">
        <Calculator />
        <ContentSections />
      </main>
      <Footer />
    </div>
  );
};

const Index = () => {
  return (
    <LanguageProvider>
      <IndexContent />
    </LanguageProvider>
  );
};

export default Index;
