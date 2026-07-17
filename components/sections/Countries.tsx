import Container from "@/components/ui/Container";
import CountryCard from "@/components/ui/CountryCard";
import Highlight from "@/components/ui/Highlight";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { useTranslations } from "next-intl";

export default function Countries() {
  const t = useTranslations("countries");
  const countries = [
    {
      code: "US",
      name: t("us"),
      visas: [
        t("work"),
        t("student"),
        t("employment"),
        t("humanitarian"),
      ],
      href: "/countries/united-states",
    },
    {
      code: "PT",
      name: t("pt"),
      visas: [
        t("nomad"),
        t("work"),
        t("student"),
      ],
      href: "/countries/portugal",
    },
    {
      code: "AU",
      name: t("au"),
      visas: [
        t("skill"),
        t("student"),
        t("partner"),
        t("holiday"),
      ],
      href: "/countries/australia",
    },
    {
      code: "CA",
      name: t("ca"),
      visas: [
        t("wpermit"),
        t("spermit"),
        t("permanent"),
      ],
      href: "/countries/canada",
    },
    {
      code: "ES",
      name: t("es"),
      visas: [
        t("nomad"),
        t("student"),
        t("work"),
        t("golden"),
      ],
      href: "/countries/spain",
    },
    {
      code: "FR",
      name: t("fr"),
      visas: [
        t("student"),
        t("work"),
        t("talent"),
        t("family"),
      ],
      href: "/countries/france",
    },
    {
      code: "IE",
      name: t("ie"),
      visas: [
        t("student"),
        t("work"),
      ],
      href: "/countries/ireland",
    },
    {
      code: "IT",
      name: t("it"),
      visas: [
        t("nomad"),
        t("student"),
        t("work"),
        t("investor"),
        t("reunification"),
        t("elective"),
      ],
      href: "/countries/italy",
    },
    {
      code: "DE",
      name: t("de"),
      visas: [
        t("job"),
        t("student"),
        t("work"),
        t("freelance"),
      ],
      href: "/countries/germany",
    },
    {
      code: "GB",
      name: t("gb"),
      visas: [
        t("family"),
        t("student"),
        t("work"),
      ],
      href: "/countries/unitedkingdom",
    },
  ]
  return (
    <Section>
      <Container>

        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            title={
              <>
                {t("title1")} <Highlight>{t("title2")}</Highlight>
              </>
            }
            subtitle={t("subtitle")}
          />
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {countries.map((country) => (
            <CountryCard
              key={country.name}
              {...country}
            />
          ))}
        </div>

      </Container>
    </Section>
  );
}