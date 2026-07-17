import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfor";

export default function ContactSection() {
    return (
        <Section>
            <Container>
                <div
                    id="contact-form"
                    className="grid gap-12 lg:grid-cols-7">
                    <div className="lg:col-span-4">
                        <ContactForm />
                    </div>
                    <div className="lg:col-span-3">
                        <ContactInfo />
                    </div>
                </div>
            </Container>
        </Section>
    );
}