"use client"

import { useTranslations } from "next-intl";

import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

export default function ContactForm() {
    const t = useTranslations("contact");
    return (
        <Card>
            <Heading level={3}>
                {t("send")}
            </Heading>
            <Text className="mt-4">
                {t("form")}
            </Text>

            <form className="mt-10 space-y-6">

                {/*Name*/}
                <div>
                    <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-[var(--heading-color)]">
                            {t("name")}
                    </label>
                    
                    <input
                        id="name"
                        type="text"
                        placeholder={t("namePlaceholder")}
                        className="w-full rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] px-5 py-3 outline-none transition focus:border-[var(--highlight-color)]" />
                </div>

                {/*Email*/}
                <div>
                    <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-[var(--heading-color)]">
                            {t("email")}
                    </label>
                    
                    <input
                        id="email"
                        type="email"
                        placeholder={t("emailPlaceholder")}
                        className="w-full rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] px-5 py-3 outline-none transition focus:border-[var(--highlight-color)]" />
                </div>

                {/*Phone*/}
                <div>
                    <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-[var(--heading-color)]">
                            {t("phone")}
                    </label>
                    
                    <input
                        id="phone"
                        type="tel"
                        placeholder={t("phonePlaceholder")}
                        className="w-full rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] px-5 py-3 outline-none transition focus:border-[var(--highlight-color)]" />
                </div>

                {/*Country*/}
                <div>
                    <label
                        htmlFor="country"
                        className="mb-2 block text-sm font-medium text-[var(--heading-color)]">
                            {t("country")}
                    </label>
                    
                    <input
                        id="country"
                        type="text"
                        placeholder={t("countryPlaceholder")}
                        className="w-full rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] px-5 py-3 outline-none transition focus:border-[var(--highlight-color)]" />
                </div>

                {/*Message*/}
                <div>
                    <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-[var(--heading-color)]">
                            {t("message")}
                    </label>
                    
                    <input
                        id="name"
                        type="text"
                        placeholder={t("messagePlaceholder")}
                        className="w-full rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] px-5 py-3 outline-none transition focus:border-[var(--highlight-color)]" />
                </div>

                <Button>
                    {t("submit")}
                </Button>
            </form>
        </Card>
    )
}