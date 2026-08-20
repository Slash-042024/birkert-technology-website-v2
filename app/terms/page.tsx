import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Hero } from "@/components/ui/hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { createMetadata } from "@/data/seo";

export const metadata: Metadata = createMetadata({
  title: "Terms and Conditions",
  description:
    "Review the terms governing website use, project engagement, and business communications with Birkert Technology.",
  path: "/terms",
  keywords: ["terms and conditions", "website terms", "client agreement"],
});

const termsSections = [
  {
    title: "Website use",
    content:
      "The content on this website is provided for informational purposes and should not be interpreted as legal, financial, or technical advice. You agree to use the site in a lawful manner and not to interfere with the integrity, security, or performance of the platform.",
  },
  {
    title: "Project engagement",
    content:
      "Any services discussed through this site are subject to a separate written agreement between Birkert Technology and the client. Project scope, timelines, pricing, and responsibilities are defined in the engagement terms agreed before work begins.",
  },
  {
    title: "Intellectual property",
    content:
      "All site content, branding, written materials, design assets, and code examples are the property of Birkert Technology unless otherwise stated. You may not reuse or redistribute these materials without explicit permission.",
  },
  {
    title: "Liability and accuracy",
    content:
      "Although we aim to provide accurate and useful information, the website may be updated at any time and should not be treated as a guarantee of service outcomes. Birkert Technology is not liable for indirect, incidental, or consequential damages arising from use of the site or reliance on its content.",
  },
  {
    title: "Changes to these terms",
    content:
      "We may revise these terms from time to time to reflect changes in operations, legal obligations, or service offerings. Continued use of the website after updates indicates acceptance of the revised terms.",
  },
];

export default function TermsPage() {
  return (
    <>
      <Hero
        badge="Legal"
        title="Terms and conditions"
        description="These terms outline how the website may be used and how client engagements are governed."
      />

      <section className="pb-20">
        <SectionHeading
          eyebrow="Overview"
          title="Operating guidelines and responsibilities"
          description="Please read these terms carefully before using this website or engaging with our services."
        />

        <div className="mt-10 grid gap-5">
          {termsSections.map((section) => (
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
