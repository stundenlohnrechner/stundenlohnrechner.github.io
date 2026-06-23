import { useState, useCallback } from "react";
import { ArrowRightLeft, AlertTriangle, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type CalculationMode = "monthToHour" | "yearToHour" | "hourToMonth";

const MINDESTLOHN = 13.90;

const Calculator = () => {
  const { t } = useLanguage();
  const [mode, setMode] = useState<CalculationMode>("monthToHour");
  const [salary, setSalary] = useState<string>("");
  const [hoursPerWeek, setHoursPerWeek] = useState<string>("40");
  const [use13Week, setUse13Week] = useState(true);

  const hoursPerMonth = useCallback(() => {
    const h = parseFloat(hoursPerWeek) || 0;
    if (use13Week) return (h * 13) / 3;
    return h * 4;
  }, [hoursPerWeek, use13Week]);

  const result = useCallback(() => {
    const val = parseFloat(salary) || 0;
    const hpm = hoursPerMonth();
    if (hpm === 0 || val === 0) return null;

    switch (mode) {
      case "monthToHour":
        return { stundenlohn: val / hpm, monatslohn: val, jahreslohn: val * 12 };
      case "yearToHour":
        return { stundenlohn: val / (hpm * 12), monatslohn: val / 12, jahreslohn: val };
      case "hourToMonth":
        return { stundenlohn: val, monatslohn: val * hpm, jahreslohn: val * hpm * 12 };
    }
  }, [salary, hoursPerWeek, mode, hoursPerMonth, use13Week]);

  const r = result();
  const belowMinimum = r && r.stundenlohn < MINDESTLOHN;

  const modeConfig = {
    monthToHour: {
      label: t("Monatslohn (Brutto)", "Monthly Salary (Gross)"),
      placeholder: t("z.B. 3.000", "e.g. 3,000"),
      unit: t("EUR / Monat", "EUR / Month"),
    },
    yearToHour: {
      label: t("Jahresgehalt (Brutto)", "Annual Salary (Gross)"),
      placeholder: t("z.B. 42.000", "e.g. 42,000"),
      unit: t("EUR / Jahr", "EUR / Year"),
    },
    hourToMonth: {
      label: t("Stundenlohn (Brutto)", "Hourly Wage (Gross)"),
      placeholder: t("z.B. 20", "e.g. 20"),
      unit: t("EUR / Stunde", "EUR / Hour"),
    },
  };

  const current = modeConfig[mode];

  return (
    <section id="rechner" className="w-full" aria-label="Stundenlohnrechner">
      <div className="rounded-2xl bg-card p-6 sm:p-8 card-elevated border border-border">
        {/* Mode Selector */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-muted-foreground mb-3">
            {t("Berechnungsart wählen", "Select calculation type")}
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {([
              ["monthToHour", t("Monatslohn", "Monthly"), t("Stundenlohn", "Hourly")],
              ["yearToHour", t("Jahresgehalt", "Yearly"), t("Stundenlohn", "Hourly")],
              ["hourToMonth", t("Stundenlohn", "Hourly"), t("Monatslohn", "Monthly")],
            ] as const).map(([key, from, to]) => (
              <button
                key={key}
                onClick={() => { setMode(key as CalculationMode); setSalary(""); }}
                className={`flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                  mode === key
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
                aria-pressed={mode === key}
              >
                <span>{from}</span>
                <ArrowRightLeft className="h-3.5 w-3.5 flex-shrink-0" />
                <span>{to}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Formula Toggle */}
        <div className="mb-6 flex items-center gap-3">
          <label className="text-sm font-medium text-foreground">
            {t("13-Wochen-Formel (empfohlen)", "13-Week Formula (recommended)")}
          </label>
          <button
            onClick={() => setUse13Week(!use13Week)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              use13Week ? "bg-accent" : "bg-border"
            }`}
            role="switch"
            aria-checked={use13Week}
          >
            <span
              className={`inline-block h-4 w-4 rounded-full bg-card transition-transform ${
                use13Week ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span className="text-xs text-muted-foreground">
            {use13Week
              ? t("HR-Standard", "HR Standard")
              : t("Vereinfacht (×4)", "Simplified (×4)")}
          </span>
        </div>

        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label htmlFor="salary-input" className="block text-sm font-medium text-foreground mb-2">
              {current.label}
            </label>
            <div className="relative">
              <input
                id="salary-input"
                type="number"
                inputMode="decimal"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                placeholder={current.placeholder}
                className="calculator-input pr-28"
                aria-describedby="salary-unit"
              />
              <span id="salary-unit" className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                {current.unit}
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="hours-input" className="block text-sm font-medium text-foreground mb-2">
              {t("Wochenstunden", "Weekly Hours")}
            </label>
            <div className="relative">
              <input
                id="hours-input"
                type="number"
                inputMode="decimal"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(e.target.value)}
                placeholder="40"
                className="calculator-input pr-24"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                {t("Std / Woche", "hrs / week")}
              </span>
            </div>
          </div>
        </div>

        {/* Results */}
        {r && (
          <div className="animate-fade-in-up">
            <div className={`rounded-xl p-6 sm:p-8 mb-4 ${belowMinimum ? "bg-destructive" : "bg-primary"}`}>
              <p className={`text-sm font-medium mb-1 ${belowMinimum ? "text-destructive-foreground/70" : "text-primary-foreground/70"}`}>
                {t("Ihr Stundenlohn (Brutto)", "Your Hourly Wage (Gross)")}
              </p>
              <p className={`text-4xl sm:text-5xl font-heading font-extrabold ${belowMinimum ? "text-destructive-foreground" : "text-primary-foreground"}`}>
                {r.stundenlohn.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}{" "}
                <span className={`text-2xl font-semibold ${belowMinimum ? "text-destructive-foreground/80" : "text-primary-foreground/80"}`}>EUR</span>
              </p>
            </div>

            {/* Minimum Wage Check */}
            {belowMinimum ? (
              <div className="flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/5 p-4 mb-4">
                <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">
                  {t(
                    `Achtung: Ihr Stundenlohn liegt unter dem gesetzlichen Mindestlohn von ${MINDESTLOHN.toLocaleString("de-DE", { minimumFractionDigits: 2 })} EUR (2026). Ihr Arbeitgeber verstößt möglicherweise gegen das Mindestlohngesetz.`,
                    `Warning: Your hourly wage is below the legal minimum wage of ${MINDESTLOHN.toLocaleString("de-DE", { minimumFractionDigits: 2 })} EUR (2026). Your employer may be violating the Minimum Wage Act.`
                  )}
                </p>
              </div>
            ) : (
              <div className="flex items-start gap-3 rounded-xl border border-accent/30 bg-accent/5 p-4 mb-4">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">
                  {t(
                    `Ihr Stundenlohn liegt über dem gesetzlichen Mindestlohn von ${MINDESTLOHN.toLocaleString("de-DE", { minimumFractionDigits: 2 })} EUR (2026).`,
                    `Your hourly wage is above the legal minimum wage of ${MINDESTLOHN.toLocaleString("de-DE", { minimumFractionDigits: 2 })} EUR (2026).`
                  )}
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-secondary p-5">
                <p className="text-sm text-muted-foreground mb-1">{t("Monatslohn (Brutto)", "Monthly Salary (Gross)")}</p>
                <p className="text-2xl font-heading font-bold text-foreground">
                  {r.monatslohn.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR
                </p>
              </div>
              <div className="rounded-xl bg-secondary p-5">
                <p className="text-sm text-muted-foreground mb-1">{t("Jahresgehalt (Brutto)", "Annual Salary (Gross)")}</p>
                <p className="text-2xl font-heading font-bold text-foreground">
                  {r.jahreslohn.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR
                </p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground mt-4">
              {t(
                `Berechnung: ${use13Week ? "13-Wochen-Formel" : "Vereinfachte Formel"} | ${hoursPerWeek} Wochenstunden = ${hoursPerMonth().toLocaleString("de-DE", { maximumFractionDigits: 2 })} Stunden / Monat`,
                `Calculation: ${use13Week ? "13-week formula" : "Simplified formula"} | ${hoursPerWeek} weekly hours = ${hoursPerMonth().toLocaleString("de-DE", { maximumFractionDigits: 2 })} hours / month`
              )}
            </p>
          </div>
        )}

        {!r && (
          <div className="rounded-xl bg-muted p-8 text-center">
            <p className="text-muted-foreground">
              {t(
                "Geben Sie einen Betrag ein, um Ihren Stundenlohn zu berechnen.",
                "Enter an amount to calculate your hourly wage."
              )}
            </p>
          </div>
        )}

        {/* Formula Explanation */}
        <div className="mt-8 rounded-xl bg-muted/60 border border-border p-5">
          <h3 className="font-heading font-bold text-foreground text-sm mb-3">
            {t("Verwendete Formel", "Formula Used")}
          </h3>
          {use13Week ? (
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t(
                  "Da die Anzahl der Arbeitstage pro Monat variiert, basiert die Berechnung auf einem vollen Quartal. Der Rechner geht davon aus, dass drei Monate 13 Wochen umfassen.",
                  "Since the number of working days per month varies, the calculation is based on a full quarter. The calculator assumes that three months comprise 13 weeks."
                )}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-lg bg-card border border-border p-3">
                  <p className="text-xs text-muted-foreground mb-1">
                    {t("Monatslohn → Stundenlohn", "Monthly → Hourly")}
                  </p>
                  <p className="font-heading font-bold text-foreground text-sm">
                    {t(
                      "Stundenlohn = 3 · Monatslohn ÷ 13 ÷ Wochenstunden",
                      "Hourly Wage = 3 · Monthly Wage ÷ 13 ÷ Weekly Hours"
                    )}
                  </p>
                </div>
                <div className="rounded-lg bg-card border border-border p-3">
                  <p className="text-xs text-muted-foreground mb-1">
                    {t("Stundenlohn → Monatslohn", "Hourly → Monthly")}
                  </p>
                  <p className="font-heading font-bold text-foreground text-sm">
                    {t(
                      "Monatslohn = Stundenlohn · Wochenstunden · 13 ÷ 3",
                      "Monthly Wage = Hourly Wage · Weekly Hours · 13 ÷ 3"
                    )}
                  </p>
                </div>
              </div>
              <div className="rounded-lg bg-accent/10 border border-accent/20 p-3">
                <p className="text-xs text-muted-foreground">
                  {t(
                    `Beispiel: Mindestlohn (13,90 €) bei 40h/Woche → Monatslohn = 13,90 € · 40 · 13 ÷ 3 ≈ 2.409,33 €`,
                    `Example: Minimum wage (€13.90) at 40h/week → Monthly salary = €13.90 · 40 · 13 ÷ 3 ≈ €2,409.33`
                  )}
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="rounded-lg bg-card border border-border p-3">
                <p className="text-xs text-muted-foreground mb-1">
                  {t("Vereinfachte Formel", "Simplified Formula")}
                </p>
                <p className="font-heading font-bold text-foreground text-sm">
                  {t(
                    "Stundenlohn = Monatslohn ÷ (Wochenstunden × 4)",
                    "Hourly Wage = Monthly Salary ÷ (Weekly Hours × 4)"
                  )}
                </p>
              </div>
              <p className="text-xs text-muted-foreground">
                {t(
                  "Hinweis: Diese Methode ist weniger präzise, da Monate nicht genau 4 Wochen haben. Die 13-Wochen-Formel wird empfohlen.",
                  "Note: This method is less precise as months are not exactly 4 weeks. The 13-week formula is recommended."
                )}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Calculator;
