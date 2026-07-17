import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

import Container from "../ui/Container";
import Text from "../ui/Text";

import FooterColumn from "./FooterColumn";

export default function Footer() {
  const t = useTranslations("footer");
  const footerData = {
    company: [
      {label: t("about"), href: "/about"},
      {label: t("countries"), href: "/countries"},
      {label: t("contact"), href: "/contact"},
    ],

    services: [
      {label: t("immigration"), href: "/services/immigration"},
      {label: t("translations"), href: "/services/translations"},
    ],

    resources: [
      {label: t("faq"), href: "/faq"},
      {label: t("privacy"), href: "/privacy-policy"},
      {label: t("terms"), href: "/terms-of-service"},
    ],
  };
  return (
    <footer className="mt-24 border-t border-[var(--footer-border)] bg-[var(--footer-bg)]">
      <Container>
        <div className="grid gap-16 py-20 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold text-[var(--footer-title)]"
            >
              Four Bridges
            </Link>

            <Text className="mt-6 max-w-sm">
              {t("text")}
            </Text>
          </div>

          {/* Footer Columns */}
          <FooterColumn
            title={t("company")}
            links={footerData.company}
          />

          <FooterColumn
            title={t("services")}
            links={footerData.services}
          />

          <FooterColumn
            title={t("resources")}
            links={footerData.resources}
          />
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-[var(--footer-border)] py-8 md:flex-row md:items-center md:justify-between">
          <Text variant="small">
            © {new Date().getFullYear()} Four Bridges. {t("copyright")}
          </Text>

          <Text variant="small">
            {t("tagline")}
          </Text>
        </div>
      </Container>
    </footer>
  );
}