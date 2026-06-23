import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";

const COOKIE_CONSENT_KEY = "cookie-consent";

type ConsentValue = "all" | "essential" | null;

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = (value: ConsentValue) => {
    if (value) {
      localStorage.setItem(COOKIE_CONSENT_KEY, value);
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center p-4 pointer-events-none">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-foreground/10 pointer-events-auto" />

      {/* Banner */}
      <div className="relative w-full max-w-2xl bg-card border border-border rounded-2xl shadow-2xl p-6 pointer-events-auto animate-fade-in-up">
        {/* Close */}
        <button
          onClick={() => accept("essential")}
          className="absolute top-4 right-4 p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          aria-label="Schließen"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header */}
        <div className="flex items-start gap-3 mb-4">
          <div className="rounded-lg bg-primary/10 p-2 mt-0.5">
            <Cookie className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h2 className="font-heading font-bold text-foreground text-lg">
              Cookie-Einstellungen
            </h2>
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
              Wir verwenden Cookies, um dir die bestmögliche Erfahrung zu bieten. Einige Cookies sind
              technisch notwendig, andere helfen uns, die Website zu verbessern und personalisierte
              Werbung über Google AdSense anzuzeigen.
            </p>
          </div>
        </div>

        {/* Details toggle */}
        {showDetails && (
          <div className="mb-4 rounded-xl bg-muted/50 border border-border p-4 space-y-3 text-sm text-muted-foreground">
            <div>
              <p className="font-semibold text-foreground mb-1">Technisch notwendige Cookies</p>
              <p>Diese Cookies sind für die Grundfunktionen der Website erforderlich (z.&nbsp;B. Spracheinstellungen). Sie können nicht deaktiviert werden.</p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">Marketing- & Werbe-Cookies (Google AdSense)</p>
              <p>Google AdSense verwendet Cookies, um relevante Werbung anzuzeigen. Google kann dabei Daten über dein Surfverhalten erheben und mit Partnern teilen. Die Rechtsgrundlage ist deine Einwilligung gemäß Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;a DSGVO.</p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">Keine Speicherung von Berechnungsdaten</p>
              <p>Der Stundenlohnrechner speichert keine von dir eingegebenen Finanzdaten. Alle Berechnungen erfolgen ausschließlich lokal in deinem Browser.</p>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          <button
            onClick={() => accept("all")}
            className="flex-1 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Alle akzeptieren
          </button>
          <button
            onClick={() => accept("essential")}
            className="flex-1 px-5 py-2.5 rounded-lg border border-border bg-secondary text-secondary-foreground font-medium text-sm hover:bg-muted transition-colors"
          >
            Nur notwendige
          </button>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            {showDetails ? "Weniger" : "Details"}
          </button>
        </div>

        {/* Privacy link */}
        <p className="text-xs text-muted-foreground text-center mt-3">
          Mehr Informationen in unserer{" "}
          <Link to="/datenschutz" className="text-primary hover:underline">
            Datenschutzerklärung
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CookieConsent;
