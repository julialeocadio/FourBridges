import ServicesPage from "@/app/[locale]/services/page";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) || "en";

  const messages = {
    navbar: (await import(`../messages/${locale}/navbar.json`)).default,

    hero: (await import(`../messages/${locale}/hero.json`)).default,

    services: (await import(`../messages/${locale}/services.json`)).default,

    whyChooseUs: (await import(`../messages/${locale}/whyChooseUs.json`)).default,

    countries: (await import(`../messages/${locale}/countries.json`)).default,

    solutions: (await import(`../messages/${locale}/solutions.json`)).default,

    cta: (await import(`../messages/${locale}/cta.json`)).default,

    contact: (await import(`../messages/${locale}/contact.json`)).default,

    servicesPage: (await import(`../messages/${locale}/servicesPage.json`)).default,

    footer: (await import(`../messages/${locale}/footer.json`)).default,

  };

  return {
    locale,
    messages,
  };
});