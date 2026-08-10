"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

export default function Team() {
  const t = useTranslations("about.team");

  const members = [
    {
      id: "member1",
      image: "/images/team/Paula.jpeg",
    },
    {
      id: "member2",
      image: "/images/team/Julia.jpeg",
    },
    {
      id: "member3",
      image: "/images/team/Aline.jpeg",
    },
  ];

  return (
    <Section>
      <Container>
        <SectionTitle
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {members.map((member) => (
            <Card
              key={member.id}
              className="overflow-hidden p-0"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={member.image}
                  alt={t(`${member.id}.name`)}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6 text-center">
                <Heading level={3}>
                  {t(`${member.id}.name`)}
                </Heading>

                <Text className="mt-4">
                  {t(`${member.id}.bio`)}
                </Text>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}