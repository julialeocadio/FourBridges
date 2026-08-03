"use client"

import { useTranslations } from "next-intl";
import { useState } from "react";

import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

export default function ContactForm() {
    const t = useTranslations("contact");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
}

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  setLoading(true);
  setError("");
  setSuccess(false);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong.");
    }

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

  } catch (err) {
    if (err instanceof Error) {
      setError(err.message);
    } else {
      setError("An unexpected error occurred.");
    }
  } finally {
    setLoading(false);
  }
}
   
    return (
        <Card>
            <Heading level={3}>
                {t("send")}
            </Heading>
            <Text className="mt-4">
                {t("form")}
            </Text>

            {success && (
                <div className="mt-6 rounded-lg bg-green-200 bg-green-50 p-4 text-green-700">
                    {t("success")}
                </div>
            )}

            {error && ( 
                <div className="mt-6 rounded-2xl border border-red-200 bg-green-50 p-4 text-green-700">
                    {t("error")}
                </div>
            )}

            <form onSubmit={handleSubmit} className="mt-10 space-y-6">

                {/*Name*/}
                <div>
                    <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-[var(--heading-color)]">
                            {t("name")}
                    </label>
                    
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
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
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
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
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        type="tel"
                        placeholder={t("phonePlaceholder")}
                        className="w-full rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] px-5 py-3 outline-none transition focus:border-[var(--highlight-color)]" />
                </div>

                {/*Subject*/}
                <div>
                    <label
                        htmlFor="subject"
                        className="mb-2 block text-sm font-medium text-[var(--heading-color)]">
                            {t("subject")}
                    </label>
                    
                    <input
                        id="subject"
                        type="text"
                        placeholder={t("subjectPlaceholder")}
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] px-5 py-3 outline-none transition focus:border-[var(--highlight-color)]" />
                </div>

                {/*Message*/}
                <div>
                    <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-[var(--heading-color)]">
                            {t("message")}
                    </label>
                    
                    <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t("messagePlaceholder")}
                        className="w-full rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] px-5 py-3 outline-none transition focus:border-[var(--highlight-color)] resize-none"
                    />
                </div>

                <Button>
                    {loading ? t("sending") : t("submit")}
                </Button>
            </form>
        </Card>
    )
}