import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";

type TermSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export default function TermsContent() {
  const t = useTranslations("terms");

  const sections = t.raw("sections") as TermSection[];

  return (
    <main className="bg-[var(--color-background)]">
      {/* Header */}
      <section className="border-b border-[var(--color-border)] bg-[var(--hero-bg)]">
        <Container>
          <div className="mx-auto max-w-4xl py-20 md:py-24">
            <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Four Bridges
            </p>

            <h1 className="text-center text-3xl font-bold tracking-tight text-[var(--heading-color)] md:text-5xl">
              {t("title")}
            </h1>

            <p className="mt-5 text-center text-sm text-[var(--color-text-muted)]">
              {t("lastUpdated")}
            </p>
          </div>
        </Container>
      </section>

      {/* Terms content */}
      <section className="py-16 md:py-20">
        <Container>
          <article className="mx-auto max-w-4xl rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--card-bg)] p-6 shadow-[var(--shadow-sm)] md:p-10 lg:p-14">
            {/* Introduction */}
            <div className="mb-12 space-y-5">
              <p className="leading-8 text-[var(--paragraph-color)]">
                {t("welcome")}
              </p>

              <p className="leading-8 text-[var(--paragraph-color)]">
                {t("introduction")}
              </p>

              <p className="leading-8 text-[var(--paragraph-color)]">
                {t("acceptance")}
              </p>
            </div>

            {/* Sections */}
            <div>
              {sections.map((section, index) => (
                <section
                  key={index}
                  className={
                    index === sections.length - 1
                      ? ""
                      : "mb-10 border-b border-[var(--color-border)] pb-10"
                  }
                >
                  <h2 className="mb-5 text-xl font-semibold text-[var(--heading-color)] md:text-2xl">
                    {section.title}
                  </h2>

                  {section.paragraphs?.map((paragraph, paragraphIndex) => (
                    <p
                      key={paragraphIndex}
                      className="mb-4 leading-8 text-[var(--paragraph-color)] last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="my-5 list-disc space-y-3 pl-6 text-[var(--paragraph-color)]">
                      {section.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="leading-7">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {/* Contact information */}
            <div className="mt-12 rounded-[var(--radius-md)] bg-[var(--color-surface)] p-6">
              <h2 className="mb-4 text-lg font-semibold text-[var(--heading-color)]">
                {t("contact.title")}
              </h2>

              <p className="text-sm leading-7 text-[var(--paragraph-color)]">
                <strong className="text-[var(--color-text)]">
                  {t("contact.company")}
                </strong>
                <br />

                {t("contact.emailLabel")}:{" "}
                <a
                  href="mailto:info@fourbridgesassessoria.com"
                  className="text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)]"
                >
                  info@fourbridgesassessoria.com
                </a>
                <br />

                {t("contact.cnpjLabel")}: {t("contact.cnpj")}
              </p>
            </div>
          </article>
        </Container>
      </section>
    </main>
  );
}