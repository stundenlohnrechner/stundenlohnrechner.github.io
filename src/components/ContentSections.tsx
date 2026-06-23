import { useLanguage } from "@/contexts/LanguageContext";
import { Calculator, Clock, TrendingUp, HelpCircle, BookOpen, Shield, Users, AlertTriangle } from "lucide-react";

const ContentSections = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* Intro */}
      <section className="mt-10">
        <p className="text-muted-foreground leading-relaxed text-base">
          {t(
            "Mit unserem kostenlosen Stundenlohnrechner berechnest du blitzschnell deinen Lohn pro Stunde. Inkl. 13-Wochen-Formel, Brutto-Netto-Check und aktuellem Mindestlohn (13,90 €). Alle Berechnungen folgen den aktuellen deutschen Arbeitsrecht Standards und sind für 2026 aktualisiert.",
            "With our free hourly wage calculator, you can quickly calculate your wage per hour. Including the 13-week formula, gross-net check, and current minimum wage (€13.90). All calculations follow current German labor law standards and are updated for 2026."
          )}
        </p>
      </section>

      {/* Feature Cards */}
      <section aria-label={t("Vorteile", "Benefits")} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {[
          {
            icon: Calculator,
            title: t("Einfache Berechnung", "Easy Calculation"),
            desc: t(
              "Rechne Monatsgehalt, Jahresgehalt oder Stundenlohn in Sekundenschnelle um.",
              "Convert monthly salary, annual salary, or hourly wage in seconds."
            ),
          },
          {
            icon: Clock,
            title: t("Flexible Arbeitszeiten", "Flexible Hours"),
            desc: t(
              "Passe die Wochenstunden individuell an – ob Vollzeit, Teilzeit oder Minijob.",
              "Adjust weekly hours individually – whether full-time, part-time, or mini-job."
            ),
          },
          {
            icon: TrendingUp,
            title: t("Gehaltsvergleich", "Salary Comparison"),
            desc: t(
              "Vergleiche verschiedene Gehaltsangebote auf Basis des Stundenlohns.",
              "Compare different salary offers based on the hourly wage."
            ),
          },
        ].map((f) => (
          <article key={f.title} className="rounded-xl bg-card border border-border p-6 card-elevated">
            <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-accent/10 p-3">
              <f.icon className="h-6 w-6 text-accent" strokeWidth={1.8} />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </article>
        ))}
      </section>

      {/* Warum Stundenlohn berechnen */}
      <section className="mt-16">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">
          {t("Warum den Stundenlohn berechnen?", "Why Calculate Your Hourly Wage?")}
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          {t(
            "Es gibt viele praktische Gründe, deinen Stundenlohn genau zu kennen – unabhängig davon, ob du angestellt bist oder auf Stundenlohnbasis arbeitest.",
            "There are many practical reasons to know your exact hourly wage – regardless of whether you are employed or working on an hourly basis."
          )}
        </p>

        <div className="space-y-6">
          {[
            {
              icon: TrendingUp,
              title: t("Transparenz bei Gehaltsverhandlungen", "Transparency in Salary Negotiations"),
              text: t(
                "Wenn du deinen Stundenlohn kennst, kannst du bei Gehaltsverhandlungen besser argumentieren. Du siehst auf einen Blick, wie viel deine Arbeit pro Stunde wert ist, und kannst das mit Branchendurchschnitten vergleichen. Das ist besonders hilfreich, wenn du ein Angebot für einen neuen Job erhältst und nicht sofort erkennbar ist, ob es besser oder schlechter ausfällt als deine aktuelle Position.",
                "When you know your hourly wage, you can argue better in salary negotiations. You can see at a glance how much your work is worth per hour and compare it with industry averages. This is especially helpful when you receive an offer for a new job and it's not immediately clear whether it's better or worse than your current position."
              ),
            },
            {
              icon: Shield,
              title: t("Überprüfung des Mindestlohns", "Minimum Wage Verification"),
              text: t(
                "Seit dem 1. Januar 2026 gilt ein Mindestlohn von 13,90 Euro brutto pro Stunde in Deutschland. Wenn dein Stundenlohn darunter liegt, verstößt dein Arbeitgeber möglicherweise gegen das Mindestlohngesetz. Mit unserem Rechner kannst du schnell prüfen, ob du angemessen bezahlt wirst.",
                "Since January 1, 2026, a minimum wage of €13.90 gross per hour applies in Germany. If your hourly wage is below this, your employer may be violating the Minimum Wage Act. With our calculator, you can quickly check if you are being paid appropriately."
              ),
            },
            {
              icon: Clock,
              title: t("Berechnung von Überstundenvergütung", "Overtime Compensation Calculation"),
              text: t(
                "Viele Arbeitsverträge sehen Zuschläge für Überstunden vor – typischerweise 25%, 50% oder sogar 100% des Stundenlohns. Um deine Überstundenvergütung korrekt zu berechnen, musst du zunächst deinen Basis-Stundenlohn kennen.",
                "Many employment contracts provide for overtime surcharges – typically 25%, 50%, or even 100% of the hourly wage. To correctly calculate your overtime compensation, you first need to know your base hourly wage."
              ),
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl bg-card border border-border p-6 card-elevated">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-accent/10 p-2.5 flex-shrink-0">
                  <item.icon className="h-5 w-5 text-accent" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Formeln Section */}
      <section id="formeln" className="mt-16 scroll-mt-20">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">
          {t("Die Formeln: So berechnest du deinen Stundenlohn", "The Formulas: How to Calculate Your Hourly Wage")}
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          {t(
            "Es gibt verschiedene Methoden, den Stundenlohn zu berechnen. Je nach Situation sind unterschiedliche Formeln sinnvoll.",
            "There are different methods to calculate the hourly wage. Depending on the situation, different formulas are useful."
          )}
        </p>

        {/* Simple Formula */}
        <div className="rounded-xl bg-card border border-border p-6 sm:p-8 card-elevated mb-6">
          <h3 className="font-heading text-xl font-bold text-foreground mb-4">
            {t("Die einfache Formel: Schnell & unkompliziert", "The Simple Formula: Quick & Easy")}
          </h3>
          <div className="rounded-lg bg-secondary p-4 mb-4">
            <p className="font-heading font-bold text-foreground text-center text-lg">
              {t("Stundenlohn = Monatslohn ÷ (Wochenstunden × 4)", "Hourly Wage = Monthly Salary ÷ (Weekly Hours × 4)")}
            </p>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            {t(
              "Beispiel: Du verdienst 3.000 Euro im Monat und arbeitest 40 Stunden pro Woche:",
              "Example: You earn €3,000 per month and work 40 hours per week:"
            )}
          </p>
          <div className="rounded-lg bg-muted p-4 space-y-1 text-sm text-foreground">
            <p>40 × 4 = 160 {t("Stunden pro Monat (vereinfacht)", "hours per month (simplified)")}</p>
            <p>3.000 € ÷ 160 = <strong>18,75 € {t("pro Stunde", "per hour")}</strong></p>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mt-4">
            {t(
              "Diese Methode ist schnell und einfach, hat aber einen Nachteil: Sie berücksichtigt nicht, dass Monate unterschiedlich lang sind und nicht genau vier Wochen haben.",
              "This method is quick and easy but has a disadvantage: it doesn't account for the fact that months have different lengths and aren't exactly four weeks."
            )}
          </p>
        </div>

        {/* 13-Week Formula */}
        <div className="rounded-xl bg-card border border-border p-6 sm:p-8 card-elevated mb-6">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="h-5 w-5 text-accent" />
            <h3 className="font-heading text-xl font-bold text-foreground">
              {t("Die offizielle 13-Wochen-Formel: Der HR-Standard", "The Official 13-Week Formula: The HR Standard")}
            </h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {t(
              "Personalentwicklungen, Behörden und offizielle Institutionen wie die Rentenversicherung verwenden die 13-Wochen-Formel. Sie ist der Standard im deutschen Arbeitsrecht.",
              "HR departments, authorities, and official institutions like pension insurance use the 13-week formula. It is the standard in German labor law."
            )}
          </p>
          <div className="rounded-lg bg-accent/10 border border-accent/20 p-4 mb-4">
            <p className="font-heading font-bold text-foreground text-center text-lg">
              {t(
                "Stundenlohn = (3 × Monatslohn) ÷ 13 ÷ Wochenstunden",
                "Hourly Wage = (3 × Monthly Salary) ÷ 13 ÷ Weekly Hours"
              )}
            </p>
          </div>

          <h4 className="font-heading font-bold text-foreground mt-6 mb-3">
            {t("Warum gerade 13 Wochen?", "Why 13 weeks?")}
          </h4>
          <div className="rounded-lg bg-muted p-4 text-sm text-foreground space-y-1 mb-4">
            <p>{t("Ein Jahr hat 52 Kalenderwochen", "A year has 52 calendar weeks")}</p>
            <p>{t("Ein Jahr hat 12 Monate", "A year has 12 months")}</p>
            <p>52 ÷ 4 = 13 {t("Wochen pro Quartal durchschnittlich", "weeks per quarter on average")}</p>
          </div>

          <h4 className="font-heading font-bold text-foreground mt-6 mb-3">
            {t("Beispiel mit der 13-Wochen-Formel", "Example with the 13-Week Formula")}
          </h4>
          <p className="text-sm text-muted-foreground mb-3">
            {t(
              "Du verdienst 3.000 Euro brutto im Monat und arbeitest 40 Stunden pro Woche:",
              "You earn €3,000 gross per month and work 40 hours per week:"
            )}
          </p>
          <div className="rounded-lg bg-muted p-4 space-y-1 text-sm text-foreground">
            <p>3 × 3.000 € = 9.000 €</p>
            <p>9.000 € ÷ 13 = 692,31 € ({t("Wochenlohn", "weekly wage")})</p>
            <p>692,31 € ÷ 40 = <strong>17,31 € {t("pro Stunde", "per hour")}</strong></p>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mt-4">
            {t(
              "Im Vergleich zur einfachen Formel (18,75 €) zeigt sich der Unterschied: Die 13-Wochen-Formel berücksichtigt, dass Monate länger sind als genau vier Wochen, und liefert deshalb einen präziseren Wert.",
              "Compared to the simple formula (€18.75), the difference is clear: the 13-week formula accounts for the fact that months are longer than exactly four weeks, providing a more precise value."
            )}
          </p>
        </div>

        {/* Yearly conversion */}
        <div className="rounded-xl bg-card border border-border p-6 sm:p-8 card-elevated">
          <h3 className="font-heading text-xl font-bold text-foreground mb-4">
            {t("Umrechnung vom Jahresgehalt", "Conversion from Annual Salary")}
          </h3>
          <div className="rounded-lg bg-secondary p-4 mb-4">
            <p className="font-heading font-bold text-foreground text-center">
              {t(
                "Stundenlohn = (Jahresgehalt ÷ 12 ÷ 13) ÷ Wochenstunden",
                "Hourly Wage = (Annual Salary ÷ 12 ÷ 13) ÷ Weekly Hours"
              )}
            </p>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            {t(
              "Beispiel: Jahresgehalt 40.000 Euro, 40 Stunden pro Woche:",
              "Example: Annual salary €40,000, 40 hours per week:"
            )}
          </p>
          <div className="rounded-lg bg-muted p-4 space-y-1 text-sm text-foreground">
            <p>40.000 € ÷ 12 = 3.333,33 € {t("Durchschnittsmonatslohn", "average monthly salary")}</p>
            <p>{t("Ergebnis: ca.", "Result: approx.")} <strong>19,23 € {t("pro Stunde", "per hour")}</strong></p>
          </div>
        </div>
      </section>

      {/* Brutto vs Netto */}
      <section className="mt-16">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">
          {t("Brutto vs. Netto Stundenlohn", "Gross vs. Net Hourly Wage")}
        </h2>
        <div className="rounded-xl bg-card border border-border p-6 sm:p-8 card-elevated">
          <p className="text-muted-foreground leading-relaxed mb-6">
            {t(
              "Ein häufig übersehener Punkt: Der Stundenlohn wird immer brutto angegeben – das ist die wichtigste Regel.",
              "A frequently overlooked point: The hourly wage is always stated as gross – that's the most important rule."
            )}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="rounded-lg bg-accent/10 border border-accent/20 p-5">
              <h3 className="font-heading font-bold text-foreground mb-2">{t("Brutto-Stundenlohn", "Gross Hourly Wage")}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(
                  "Das ist, was in deinem Arbeitsvertrag steht oder aus deinem Monatslohn errechnet wird, bevor Steuern oder Sozialabgaben abgezogen werden.",
                  "This is what's in your employment contract or calculated from your monthly salary, before taxes or social contributions are deducted."
                )}
              </p>
            </div>
            <div className="rounded-lg bg-secondary p-5">
              <h3 className="font-heading font-bold text-foreground mb-2">{t("Netto-Stundenlohn", "Net Hourly Wage")}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(
                  "Das ist, was dir tatsächlich auf dem Lohnkonto ankommt – nach Abzug von Steuern und Sozialabgaben.",
                  "This is what actually arrives in your bank account – after deduction of taxes and social contributions."
                )}
              </p>
            </div>
          </div>

          <h3 className="font-heading font-bold text-foreground mb-3">
            {t("Sozialversicherungsbeiträge 2026", "Social Insurance Contributions 2026")}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-heading font-semibold text-foreground">{t("Beitrag", "Contribution")}</th>
                  <th className="text-right py-3 font-heading font-semibold text-foreground">{t("Anteil", "Rate")}</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50"><td className="py-2.5 pr-4">{t("Krankenversicherung", "Health Insurance")}</td><td className="text-right">~17,5%</td></tr>
                <tr className="border-b border-border/50"><td className="py-2.5 pr-4">{t("Pflegeversicherung", "Care Insurance")}</td><td className="text-right">3,6% – 4,2%</td></tr>
                <tr className="border-b border-border/50"><td className="py-2.5 pr-4">{t("Rentenversicherung", "Pension Insurance")}</td><td className="text-right">18,6%</td></tr>
                <tr className="border-b border-border/50"><td className="py-2.5 pr-4">{t("Arbeitslosenversicherung", "Unemployment Insurance")}</td><td className="text-right">2,6%</td></tr>
                <tr className="font-semibold text-foreground"><td className="py-2.5 pr-4">{t("Gesamt (ca.)", "Total (approx.)")}</td><td className="text-right">~37–38%</td></tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-lg bg-muted p-5 mt-6">
            <h4 className="font-heading font-bold text-foreground mb-2">{t("Beispiel: Von Brutto zu Netto", "Example: Gross to Net")}</h4>
            <p className="text-sm text-muted-foreground mb-3">
              {t("Brutto-Stundenlohn: 20,00 €, Steuerklasse I:", "Gross hourly wage: €20.00, Tax class I:")}
            </p>
            <div className="space-y-1 text-sm text-foreground">
              <p>{t("Brutto pro Stunde", "Gross per hour")}: 20,00 €</p>
              <p>{t("Sozialversicherung (ca. 37%)", "Social insurance (approx. 37%)")}: −7,40 €</p>
              <p>{t("Einkommensteuer + Soli (ca. 12–15%)", "Income tax + solidarity (approx. 12-15%)")}: −2,40 € – −3,00 €</p>
              <p className="font-bold pt-1 border-t border-border/50">{t("Netto ungefähr", "Net approximately")}: 10,20 € – 10,60 €</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mindestlohn */}
      <section id="mindestlohn" className="mt-16 scroll-mt-20">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">
          {t("Gesetzlicher Mindestlohn 2026 in Deutschland", "Legal Minimum Wage 2026 in Germany")}
        </h2>

        <div className="rounded-xl bg-card border border-border p-6 sm:p-8 card-elevated mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-lg bg-accent/10 p-2.5">
              <Shield className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{t("Seit 1. Januar 2026", "Since January 1, 2026")}</p>
              <p className="text-3xl font-heading font-extrabold text-foreground">13,90 € <span className="text-base font-normal text-muted-foreground">{t("brutto / Stunde", "gross / hour")}</span></p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {t(
              "Das ist eine Erhöhung von 8,42% gegenüber dem Vorjahr (2025: 12,82 €). Im Jahr 2027 wird der Mindestlohn dann auf 14,60 Euro pro Stunde steigen.",
              "This is an increase of 8.42% compared to the previous year (2025: €12.82). In 2027, the minimum wage will rise to €14.60 per hour."
            )}
          </p>

          <h3 className="font-heading font-bold text-foreground mt-6 mb-3">
            {t("Wer hat Anspruch auf den Mindestlohn?", "Who is Entitled to the Minimum Wage?")}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            {t(
              "Der Mindestlohn gilt grundsätzlich für alle Arbeitnehmer über 18 Jahren in Deutschland, einschließlich:",
              "The minimum wage applies to all employees over 18 years in Germany, including:"
            )}
          </p>
          <ul className="space-y-1.5 text-sm text-muted-foreground mb-6">
            {[
              t("Minijobber und geringfügig Beschäftigte", "Mini-jobbers and marginally employed"),
              t("Teilzeitbeschäftigte", "Part-time employees"),
              t("Beschäftigte in Saisonjobs", "Seasonal workers"),
              t("Nach Deutschland entsandte Arbeitnehmer", "Workers posted to Germany"),
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <svg className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="font-heading font-bold text-foreground mb-3">
            {t("Wer ist vom Mindestlohn ausgenommen?", "Who is Exempt from the Minimum Wage?")}
          </h3>
          <ul className="space-y-1.5 text-sm text-muted-foreground mb-6">
            {[
              t("Auszubildende (eigene Mindestausbildungsvergütung)", "Apprentices (separate minimum training remuneration)"),
              t("Pflichtpraktikanten", "Mandatory interns"),
              t("Freiwillige Praktikanten (unter 3 Monaten)", "Voluntary interns (under 3 months)"),
              t("Ehrenamtlich tätige Personen", "Volunteers"),
              t("Selbstständige und Freiberufler", "Self-employed and freelancers"),
              t("Jugendliche unter 18 ohne abgeschlossene Berufsausbildung", "Youths under 18 without completed vocational training"),
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <svg className="h-4 w-4 text-muted-foreground/50 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="font-heading font-bold text-foreground mb-3">
            {t("Minijob-Grenze 2026", "Mini-Job Threshold 2026")}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {t(
              "Die Minijob-Grenze ist dynamisch an den Mindestlohn gekoppelt. Im Jahr 2026 liegt sie bei 603 Euro monatlich. Zum Januar 2027 steigt die Minijob-Grenze auf 633 Euro.",
              "The mini-job threshold is dynamically linked to the minimum wage. In 2026, it is €603 per month. In January 2027, the mini-job threshold will rise to €633."
            )}
          </p>
        </div>

        {/* Violations */}
        <div className="rounded-xl bg-card border border-border p-6 card-elevated">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-heading font-bold text-foreground mb-2">
                {t("Was passiert bei Verstößen gegen den Mindestlohn?", "What Happens in Case of Minimum Wage Violations?")}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {t(
                  "Wenn dein Arbeitgeber dir weniger als den Mindestlohn zahlt, kannst du:",
                  "If your employer pays you less than the minimum wage, you can:"
                )}
              </p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {[
                  t("Nachzahlungen fordern", "Demand back payments"),
                  t("Die Finanzkontrolle Schwarzarbeit einschalten", "Contact the Financial Control of Undeclared Work"),
                  t("Dich an Gewerkschaften oder Beratungsstellen wenden", "Contact trade unions or advisory centers"),
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Comparison Table */}
      <section id="branchen" className="mt-16 scroll-mt-20">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">
          {t("Durchschnittlicher Stundenlohn nach Branchen", "Average Hourly Wage by Industry")}
        </h2>
        <div className="rounded-xl bg-card border border-border card-elevated overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted">
                  <th className="text-left py-3 px-5 font-heading font-semibold text-foreground">{t("Branche", "Industry")}</th>
                  <th className="text-right py-3 px-5 font-heading font-semibold text-foreground">{t("Stundenlohn (brutto, ca.)", "Hourly Wage (gross, approx.)")}</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[
                  { de: "IT & Software", en: "IT & Software", wage: "32–45 €" },
                  { de: "Gesundheit & Pflege", en: "Healthcare & Nursing", wage: "16–30 €" },
                  { de: "Handwerk", en: "Skilled Trades", wage: "18–28 €" },
                  { de: "Einzelhandel", en: "Retail", wage: "12–15 €" },
                  { de: "Gastronomie", en: "Hospitality", wage: "12–16 €" },
                  { de: "Verwaltung & Öff. Dienst", en: "Public Administration", wage: "18–26 €" },
                  { de: "Maschinenbau", en: "Mechanical Engineering", wage: "22–35 €" },
                  { de: "Bauwirtschaft", en: "Construction", wage: "20–32 €" },
                  { de: "Bildungssektor", en: "Education", wage: "20–40 €" },
                  { de: "Logistik & Lagerung", en: "Logistics & Warehousing", wage: "14–18 €" },
                ].map((row) => (
                  <tr key={row.de} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                    <td className="py-2.5 px-5">{t(row.de, row.en)}</td>
                    <td className="text-right py-2.5 px-5 font-medium text-foreground">{row.wage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="px-5 py-3 text-xs text-muted-foreground border-t border-border">
            {t(
              "Richtwerte – tatsächliche Löhne variieren nach Standort, Unternehmensgröße, Tarifbindung und Qualifikation.",
              "Guide values – actual wages vary by location, company size, collective agreements, and qualifications."
            )}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-16 scroll-mt-20">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">
          {t("FAQ – Häufig gestellte Fragen", "FAQ – Frequently Asked Questions")}
        </h2>
        <div className="space-y-3">
          {[
            {
              q: t("Zählen Pausen zum Stundenlohn?", "Do breaks count towards hourly wages?"),
              a: t(
                "Nein, normalerweise nicht. Gesetzliche Ruhepausen sind in der Regel unbezahlt. Nach deutschem Arbeitsrecht: Mindestens 30 Minuten bei 6–9 Stunden Arbeitszeit, mindestens 45 Minuten bei mehr als 9 Stunden.",
                "No, usually not. Statutory rest breaks are generally unpaid. Under German labor law: At least 30 minutes for 6-9 hours of work, at least 45 minutes for more than 9 hours."
              ),
            },
            {
              q: t("Wie rechnet man den Jahreslohn in Stundenlohn um?", "How do you convert annual salary to hourly wage?"),
              a: t(
                "Mit der 13-Wochen-Formel: Stundenlohn = (Jahresgehalt ÷ 12 ÷ 13) ÷ Wochenstunden. Beispiel: 50.000 € ÷ 12 = 4.166,67 € → (3 × 4.166,67 €) ÷ 13 ÷ 40 = 24,04 € pro Stunde.",
                "Using the 13-week formula: Hourly Wage = (Annual Salary ÷ 12 ÷ 13) ÷ Weekly Hours. Example: €50,000 ÷ 12 = €4,166.67 → (3 × €4,166.67) ÷ 13 ÷ 40 = €24.04 per hour."
              ),
            },
            {
              q: t("Kann ich meinen Netto-Stundenlohn selbst berechnen?", "Can I calculate my net hourly wage myself?"),
              a: t(
                "Theoretisch ja, aber es ist kompliziert. Grobe Faustregel: Vom Brutto-Stundenlohn gehen etwa 40–45% für Steuern und Sozialversicherung ab. Für genaue Werte empfehlen wir einen Brutto-Netto-Rechner.",
                "Theoretically yes, but it's complicated. Rough rule of thumb: about 40-45% of the gross hourly wage goes to taxes and social insurance. For exact values, we recommend a gross-net calculator."
              ),
            },
            {
              q: t("Wie oft kann sich mein Stundenlohn ändern?", "How often can my hourly wage change?"),
              a: t(
                "Das kommt auf die Art deines Arbeitsvertrags an. Bei monatlichem Gehalt ändert sich der Stundenlohn nur bei Gehaltsanpassungen oder Änderung der Wochenarbeitszeit. Bei Tarifverträgen steigt er regelmäßig nach Tarifverhandlungen.",
                "It depends on your employment contract. With a monthly salary, the hourly wage only changes with salary adjustments or changes in weekly hours. With collective agreements, it increases regularly after negotiations."
              ),
            },
            {
              q: t("Sind Überstundenzuschläge im Stundenlohn enthalten?", "Are overtime surcharges included in the hourly wage?"),
              a: t(
                "Nein. Der Stundenlohn ist dein regulärer Verdienst. Überstundenzuschläge (meist 25%, 50% oder 100%) kommen zusätzlich hinzu.",
                "No. The hourly wage is your regular earnings. Overtime surcharges (usually 25%, 50%, or 100%) are added on top."
              ),
            },
            {
              q: t("Zählen Weihnachtsgeld und Urlaubsgeld zum Stundenlohn?", "Do Christmas and holiday bonuses count towards hourly wages?"),
              a: t(
                "Für die Standard-Berechnung nicht. Aber bei einer genauen Jahresberechnung sollte dein Jahresgehalt Weihnachts- und Urlaubsgeld einschließen für ein präziseres Ergebnis.",
                "Not for the standard calculation. But for an exact annual calculation, your annual salary should include Christmas and holiday bonuses for a more precise result."
              ),
            },
            {
              q: t("Was ist die 173,33-Formel?", "What is the 173.33 formula?"),
              a: t(
                "Eine Faustregel: Durchschnittliche Monatsstunden = Wochenstunden × 13 ÷ 3. Bei 40h/Woche: 40 × 13 ÷ 3 = 173,33 h/Monat. Also: 3.000 € ÷ 173,33 h = 17,31 € pro Stunde – identisch mit der 13-Wochen-Formel.",
                "A rule of thumb: Average monthly hours = Weekly hours × 13 ÷ 3. At 40h/week: 40 × 13 ÷ 3 = 173.33 h/month. So: €3,000 ÷ 173.33 h = €17.31 per hour – identical to the 13-week formula."
              ),
            },
          ].map((item) => (
            <details key={item.q} className="group rounded-xl bg-card border border-border p-5 card-elevated">
              <summary className="flex cursor-pointer items-center gap-3 font-heading font-semibold text-foreground list-none">
                <HelpCircle className="h-5 w-5 text-accent flex-shrink-0" strokeWidth={1.8} />
                <span className="flex-1">{item.q}</span>
                <svg className="h-5 w-5 text-muted-foreground transition-transform group-open:rotate-180 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed pl-8">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Wichtige Hinweise */}
      <section className="mt-16">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">
          {t("Wichtige Hinweise", "Important Notes")}
        </h2>
        <div className="rounded-xl bg-card border border-border p-6 sm:p-8 card-elevated">
          <ul className="space-y-3 text-sm text-muted-foreground">
            {[
              t("Alle Beträge sind Bruttowerte, sofern nicht anders angegeben", "All amounts are gross values unless otherwise stated"),
              t("Die 13-Wochen-Formel ist die von der Rentenversicherung anerkannte Standardmethode", "The 13-week formula is the standard method recognized by pension insurance"),
              t("Der Mindestlohn von 13,90 € (2026) wird berücksichtigt", "The minimum wage of €13.90 (2026) is taken into account"),
              t("Pausen sind nicht enthalten in der Arbeitszeitberechnung", "Breaks are not included in working time calculations"),
              t("Für die genaue Netto-Berechnung empfehlen wir einen Brutto-Netto-Rechner", "For exact net calculations, we recommend a gross-net calculator"),
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <svg className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-lg bg-muted p-4">
            <h3 className="font-heading font-bold text-foreground text-sm mb-2">
              {t("Hinweis zur Steuerberatung", "Tax Advisory Notice")}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t(
                "Die hier bereitgestellten Informationen sind allgemeiner Natur und ersetzen keine professionelle Steuerberatung. Für Fragen zu deiner persönlichen Steuersituation konsultiere bitte einen Steuerberater.",
                "The information provided here is of a general nature and does not replace professional tax advice. For questions about your personal tax situation, please consult a tax advisor."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Quellen */}
      <section className="mt-16">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">
          {t("Quellen & Verlässlichkeit", "Sources & Reliability")}
        </h2>
        <div className="rounded-xl bg-card border border-border p-6 card-elevated">
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              t("Bundesregierung und Bundesministerium für Arbeit und Soziales (BMAS)", "Federal Government and Federal Ministry of Labour and Social Affairs"),
              t("Deutsche Rentenversicherung", "German Pension Insurance"),
              t("Mindestlohnkommission (amtliche Beschlüsse)", "Minimum Wage Commission (official decisions)"),
              t("Aktuelles Mindestlohngesetz (MiLoG)", "Current Minimum Wage Act (MiLoG)"),
              t("TVöD (Tarifvertrag für den öffentlichen Dienst)", "TVöD (Collective Agreement for Public Service)"),
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <BookOpen className="h-4 w-4 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted-foreground mt-4">
            {t("Alle Informationen sind auf den Stand 2026 aktualisiert und überprüft.", "All information is updated and verified as of 2026.")}
          </p>
        </div>
      </section>

      {/* Fazit / CTA */}
      <section className="mt-16">
        <div className="rounded-2xl hero-gradient p-8 sm:p-10 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-primary-foreground mb-4">
            {t("Fazit: Warum ein Stundenlohnrechner wichtig ist", "Conclusion: Why an Hourly Wage Calculator Matters")}
          </h2>
          <p className="text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto mb-6">
            {t(
              "Dein Stundenlohn ist eine zentrale Größe für Gehaltsverhandlungen, Jobwechsel und Lebensplanung.",
              "Your hourly wage is a key figure for salary negotiations, job changes, and life planning."
            )}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto text-left">
            {[
              t("Stundenlohn in Sekunden berechnen", "Calculate hourly wage in seconds"),
              t("Vergleich mit Mindestlohn (13,90 €)", "Compare with minimum wage (€13.90)"),
              t("Faire Bezahlung prüfen", "Check fair compensation"),
              t("Starke Argumente für Gehaltsverhandlungen", "Strong arguments for salary negotiations"),
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-primary-foreground/90">
                <svg className="h-4 w-4 text-primary-foreground flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <a href="#rechner" className="inline-block mt-6 px-6 py-3 rounded-lg bg-card text-foreground font-heading font-bold text-sm hover:bg-card/90 transition-colors shadow-lg">
            {t("Jetzt Stundenlohn berechnen", "Calculate Hourly Wage Now")}
          </a>
        </div>
      </section>
    </>
  );
};

export default ContentSections;
