"use client";

import { useState, useEffect, useRef } from "react";
import * as Flags from "country-flag-icons/react/3x2";
import { ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

const languages = [
  {
    locale: "en",
    name: "English",
    Flag: Flags.US,
  },
  {
    locale: "pt",
    name: "Português",
    Flag: Flags.BR,
  },
  {
    locale: "es",
    name: "Español",
    Flag: Flags.ES,
  },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const current =
    languages.find((lang) => lang.locale === locale) ?? languages[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const changeLanguage = (newLocale: string) => {
    setOpen(false);

    router.replace(pathname, {
      locale: newLocale,
    });
  };

  return (
    <div
      ref={ref}
      className="relative w-full lg:w-auto"
    >
      {/* Language Button */}
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className="
          flex
          w-full
          items-center
          justify-between
          gap-2
          rounded-full
          border
          border-[var(--color-border)]
          bg-white
          px-4
          py-2
          shadow-sm
          transition
          hover:border-[var(--color-accent)]
          lg:w-auto
          lg:justify-start
        "
      >
        <span className="flex items-center gap-2">
          <current.Flag className="h-4 w-6 rounded-sm" />

          <span className="text-sm font-medium">
            {current.name}
          </span>
        </span>

        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute
            left-0
            right-0
            top-full
            z-[100]
            mt-2
            overflow-hidden
            rounded-2xl
            border
            border-[var(--color-border)]
            bg-white
            shadow-xl
            lg:left-auto
            lg:right-0
            lg:w-48
          "
          role="listbox"
        >
          {languages.map((lang) => (
            <button
              type="button"
              key={lang.locale}
              onClick={() => changeLanguage(lang.locale)}
              className="
                flex
                w-full
                items-center
                gap-3
                px-4
                py-3
                text-left
                transition
                hover:bg-[var(--color-surface)]
              "
            >
              <lang.Flag className="h-4 w-6 rounded-sm" />

              <span className="text-sm">
                {lang.name}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}