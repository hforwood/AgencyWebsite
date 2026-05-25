import type { Metadata } from "next";

import { Contact2 } from "@/components/ui/contact-2";

export const metadata: Metadata = {
  title: "Contact Us | Flooencer.",
  description:
    "Contact Flooencer to discuss B2B influencer marketing campaigns for SaaS, AI, and technology brands.",
};

export default function ContactPage() {
  return (
    <main>
      <Contact2 />
    </main>
  );
}
