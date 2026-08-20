import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Hero } from "@/components/ui/hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { createMetadata } from "@/data/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Learn how Birkert Technology handles information, website analytics, and client communication.",
  path: "/privacy",
  keywords: ["privacy policy", "website data handling", "client information"],
});

const privacySections = [
  {
    title: "Information we collect",
    content:
      "We collect information that is necessary to deliver our services, respond to inquiries, and improve the performance of our website. This may include contact details supplied through forms, business information shared during consultations, and analytics data such as page views and interaction patterns.",
  },
  {
    title: "How we use it",
    content:
      "Information is used to communicate with prospective and current clients, scope projects, provide service updates, improve the quality of our work, and maintain the security and reliability of the site. We do not sell personal information or distribute it to third parties for marketing purposes.",
  },
  {
    title: "Third-party tools",
    content:
      "Our website may use analytics, hosting, or platform services to understand traffic, troubleshoot issues, and maintain uptime. These tools may process information in accordance with their own privacy policies, and we limit the data we share to what is needed for reliable operation.",
  },
  {
    title: "Your choices",
    content:
      "If you contact us, you may request access to, correction of, or deletion of personal information we hold about you, subject to applicable professional or legal obligations. If you have questions about our privacy practices, please reach out using the contact information on our site.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Hero
        badge="Legal"
        title="Privacy policy"
        description="This page explains how we handle information collected through our website and client engagements."
      />

      <section className="pb-20">
        <SectionHeading
          eyebrow="Overview"
          title="How we protect and use information"
          description="We are committed to clear, minimal, and respectful handling of personal information."
        />

        <div className="mt-10 grid gap-5">
          {privacySections.map((section) => (
            <Card key={section.title} className="transition duration-300">
              <h3 className="text-xl font-semibold tracking-tight text-white">
                {section.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {section.content}
              </p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
