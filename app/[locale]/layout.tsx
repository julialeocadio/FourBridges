import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/floating/WhatsAppButton";

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <Navbar />

      <main>{children}</main>

      <Footer />

      <WhatsAppButton />
    </NextIntlClientProvider>
  );
}