import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";

type PrivacySubsection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type PrivacySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  subsections?: PrivacySubsection[];
};

export default function PrivacyPolicyContent() {
  const t = useTranslations("privacyPolicy");

  const sections = t.raw("sections") as PrivacySection[];

  return (
    <main className="bg-[var(--color-background)]">
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

      <section className="py-16 md:py-20">
        <Container>
          <article className="mx-auto max-w-4xl rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--card-bg)] p-6 shadow-[var(--shadow-sm)] md:p-10 lg:p-14">
            <div className="mb-12 space-y-5">
              <p className="leading-8 text-[var(--paragraph-color)]">
                {t("introduction")}
              </p>

              <p className="leading-8 text-[var(--paragraph-color)]">
                {t("scope")}
              </p>
            </div>

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

                  {section.subsections?.map((subsection, subsectionIndex) => (
                    <div
                      key={subsectionIndex}
                      className="mt-7"
                    >
                      <h3 className="mb-4 text-lg font-semibold text-[var(--heading-color)]">
                        {subsection.title}
                      </h3>

                      {subsection.paragraphs?.map(
                        (paragraph, paragraphIndex) => (
                          <p
                            key={paragraphIndex}
                            className="mb-4 leading-8 text-[var(--paragraph-color)] last:mb-0"
                          >
                            {paragraph}
                          </p>
                        )
                      )}

                      {subsection.bullets &&
                        subsection.bullets.length > 0 && (
                          <ul className="my-5 list-disc space-y-3 pl-6 text-[var(--paragraph-color)]">
                            {subsection.bullets.map(
                              (bullet, bulletIndex) => (
                                <li
                                  key={bulletIndex}
                                  className="leading-7"
                                >
                                  {bullet}
                                </li>
                              )
                            )}
                          </ul>
                        )}
                    </div>
                  ))}
                </section>
              ))}
            </div>
          </article>
        </Container>
      </section>
    </main>
  );
}