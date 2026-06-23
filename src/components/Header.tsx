import { Calculator, Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navItems = [
    { href: "#rechner", label: t("Rechner", "Calculator") },
    { href: "#formeln", label: t("Formeln", "Formulas") },
    { href: "#mindestlohn", label: t("Mindestlohn", "Minimum Wage") },
    { href: "#branchen", label: t("Branchen", "Industries") },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="rounded-lg bg-primary p-1.5">
              <Calculator className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-heading font-bold text-lg text-foreground">
              Stundenlohnrechner
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label={t("Hauptnavigation", "Main navigation")}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Language Toggle + Mobile Menu */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "de" ? "en" : "de")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border border-border bg-secondary text-secondary-foreground hover:bg-muted transition-colors"
              aria-label={t("Sprache wechseln", "Switch language")}
            >
              <Globe className="h-4 w-4" />
              <span className="uppercase">{lang === "de" ? "EN" : "DE"}</span>
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-muted text-foreground"
              aria-label={t("Menü öffnen", "Open menu")}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav className="lg:hidden pb-4 border-t border-border pt-3 animate-fade-in-up" aria-label={t("Mobile Navigation", "Mobile navigation")}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
