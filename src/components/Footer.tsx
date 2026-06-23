import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calculator } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  const legalLinks = [
    { to: "/ueber-uns", de: "Über uns", en: "About Us" },
    { to: "/kontakt", de: "Kontakt", en: "Contact" },
    { to: "/impressum", de: "Impressum", en: "Imprint" },
    { to: "/datenschutz", de: "Datenschutz", en: "Privacy" },
  ];

  return (
    <footer className="border-t border-border bg-card mt-20">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        {/* Top row: brand + legal links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-6">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="rounded-lg bg-primary p-1.5">
              <Calculator className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-heading font-bold text-foreground">
              Stundenlohnrechner
            </span>
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(link.de, link.en)}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider + bottom */}
        <div className="border-t border-border pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Stundenlohnrechner &middot;{" "}
            <a
              href="https://theweblix.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              theweblix.com
            </a>
          </p>
          <p className="text-xs text-muted-foreground text-center sm:text-right max-w-md">
            {t(
              "Alle Angaben ohne Gewähr. Keine Steuerberatung.",
              "All information without guarantee. Not tax advice."
            )}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
