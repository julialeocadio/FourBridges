import {
    Mail,
    Phone,
    Globe,
    Clock3,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

export default function ContactInfo() {
    const t = useTranslations("contact");
    return (
        <Card className="h-full">
            <Heading level={3}>
                {t("info")}
            </Heading>

            <Text className="mt-4">
                {t("available")}
            </Text>

            <div className="mt-10 space-y-8">
                {/*Email*/}
                <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--badge-bg)]">
                        <Mail
                            size={22}
                            className="text-[var(--highlight-color)]" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-[var(--heading-color)]">
                            {t("email")}
                        </h4>
                        <p className="text-[var(--text-secondary)]">
                            info@fourbridgesassessoria.com
                        </p>
                    </div>
                </div>

                {/*WhatsApp*/}
                <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--badge-bg)]">
                        <Phone
                            size={22}
                            className="text-[var(--highlight-color)]" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-[var(--heading-color)]">
                            {t("whatsapp")}
                        </h4>
                        <p className="text-[var(--text-secondary)]">
                            +34 631 81 72 42
                        </p>
                    </div>
                </div>

                {/*Hours*/}
                <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--badge-bg)]">
                        <Clock3
                            size={22}
                            className="text-[var(--highlight-color)]" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-[var(--heading-color)]">
                            {t("hours")}
                        </h4>
                        <p className="text-[var(--text-secondary)]">
                            {t("hours2")}
                        </p>
                        <p className="text-[var(--text-secondary)]">
                            {t("hours3")}
                        </p>
                    </div>
                </div>

                {/*Countries*/}
                <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--badge-bg)]">
                        <Globe
                            size={22}
                            className="text-[var(--highlight-color)]" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-[var(--heading-color)]">
                            {t("countries")}
                        </h4>
                        <p className="text-[var(--text-secondary)]">
                            {t("countries2")}
                        </p>
                    </div>
                </div>
            </div>
        </Card>
    );
}