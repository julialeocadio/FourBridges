import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) || "en";

  const messages = {
    navbar: (await import(`../messages/${locale}/navbar.json`)).default,

    hero: (await import(`../messages/${locale}/hero.json`)).default,

    about: (await import(`../messages/${locale}/about.json`)).default,

    services: (await import(`../messages/${locale}/services.json`)).default,

    whyChooseUs: (await import(`../messages/${locale}/whyChooseUs.json`)).default,

    countries: (await import(`../messages/${locale}/countries.json`)).default,

    solutions: (await import(`../messages/${locale}/solutions.json`)).default,

    cta: (await import(`../messages/${locale}/cta.json`)).default,

    contact: (await import(`../messages/${locale}/contact.json`)).default,

    servicesPage: (await import(`../messages/${locale}/servicesPage.json`)).default,

    servicesHomePage: (await import(`../messages/${locale}/servicesHomePage.json`)).default,

    internationalServices: (await import(`../messages/${locale}/internationalServices.json`)).default,
    
    translationsPage: (await import(`../messages/${locale}/translationsPage.json`)).default,

    countriesPage: (await import(`../messages/${locale}/countriesPage.json`)).default,

    blog: (await import(`../messages/${locale}/blog.json`)).default,

    businessPlan: (await import(`../messages/${locale}/businessPlan.json`)).default,

    expertWitness: (await import(`../messages/${locale}/expertWitness.json`)).default,

    driverLicense: (await import(`../messages/${locale}/driverLicense.json`)).default,
    
    cap: (await import(`../messages/${locale}/cap.json`)).default,

    criminalRecordCertificate: (await import(`../messages/${locale}/criminalRecordCertificate.json`)).default,

    foreignJudgment: (await import(`../messages/${locale}/foreignJudgment.json`)).default,

    diplomaRecognition: (await import(`../messages/${locale}/diplomaRecognition.json`)).default,

    footer: (await import(`../messages/${locale}/footer.json`)).default,

  };

  return {
    locale,
    messages,
  };
});