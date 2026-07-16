import Link from "next/link";

import Container from "../ui/Container";
import Text from "../ui/Text";

import FooterColumn from "./FooterColumn";

import { footerData } from "@/data/footer";

export default function Footer() {
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
              Helping individuals and families navigate immigration,
              visas, residency, and certified translations with
              confidence.
            </Text>
          </div>

          {/* Footer Columns */}
          <FooterColumn
            title="Company"
            links={footerData.company}
          />

          <FooterColumn
            title="Services"
            links={footerData.services}
          />

          <FooterColumn
            title="Resources"
            links={footerData.resources}
          />
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-[var(--footer-border)] py-8 md:flex-row md:items-center md:justify-between">
          <Text variant="small">
            © {new Date().getFullYear()} Four Bridges. All rights reserved.
          </Text>

          <Text variant="small">
            Immigration Consulting • Certified Translation • Global Support
          </Text>
        </div>
      </Container>
    </footer>
  );
}