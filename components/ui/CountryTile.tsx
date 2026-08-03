import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import * as Flags from "country-flag-icons/react/3x2";

interface CountryTileProps {
  code: string;
  name: string;
  href: string;
}

export default function CountryTile({
  code,
  name,
  href,
}: CountryTileProps) {
  const Flag = Flags[code as keyof typeof Flags];

  return (
    <Link
      href={href}
      className="
        group
        rounded-2xl
        border
        border-[var(--card-border)]
        bg-[var(--card-bg)]
        p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[var(--highlight-color)]
        hover:shadow-lg
      "
    >
      <div className="flex items-start justify-between">

        <div>

          <div className="flex items-center gap-3">

            {Flag && (
              <Flag className="h-7 w-auto rounded-sm shadow-sm" />
            )}

            <h3 className="font-semibold text-lg text-[var(--heading-color)]">
              {name}
            </h3>

          </div>

        </div>

        <ArrowRight
          size={18}
          className="
            mt-1
            text-[var(--highlight-color)]
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />

      </div>
    </Link>
  );
}