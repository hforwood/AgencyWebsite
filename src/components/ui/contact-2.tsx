"use client";

import type React from "react";

import { FlooencerIcon } from "@/components/flooencer-icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const DEFAULT_RECIPIENT = "contact@flooencer.com";

interface Contact2Props {
  title?: string;
  description?: string;
  recipient?: string;
}

function readFormValue(formData: FormData, key: string) {
  const value = formData.get(key);

  return typeof value === "string" ? value.trim() : "";
}

export const Contact2 = ({
  title = "Contact Us",
  description = "Tell us what you are planning and we will come back with the right next step for your B2B creator campaign.",
  recipient = DEFAULT_RECIPIENT,
}: Contact2Props) => {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const firstName = readFormValue(formData, "firstName");
    const lastName = readFormValue(formData, "lastName");
    const name = [firstName, lastName].filter(Boolean).join(" ");
    const workEmail = readFormValue(formData, "workEmail");
    const company = readFormValue(formData, "company");
    const message = readFormValue(formData, "message");
    const subject = `Flooencer agency contact${company ? ` - ${company}` : ""}`;

    const body = [
      `Name: ${name || "Not provided"}`,
      `Work email: ${workEmail || "Not provided"}`,
      `Company: ${company || "Not provided"}`,
      "",
      "Campaign context:",
      message || "Not provided",
    ].join("\n");

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-flooencer-black px-6 py-20 text-white sm:px-10 lg:px-16">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(135deg,rgba(101,19,209,0.36)_0%,rgba(119,85,250,0.2)_28%,rgba(15,15,15,0)_58%),linear-gradient(180deg,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0)_42%)]"
      />
      <div className="relative mx-auto grid min-h-[calc(100vh-10rem)] w-full max-w-[1080px] content-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="max-w-xl">
          <h1 className="font-display text-5xl font-black leading-[0.92] tracking-normal text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-lg text-pretty text-lg leading-8 text-white/72 sm:text-xl">
            {description}
          </p>
        </div>

        <form
          action={`mailto:${recipient}`}
          method="post"
          encType="text/plain"
          onSubmit={handleSubmit}
          className="w-full rounded-lg border border-white/12 bg-white p-5 text-flooencer-black shadow-[0_24px_80px_rgba(0,0,0,0.34)] sm:p-7"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="firstName">First name</Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                placeholder="Hector"
                required
                className="h-12 rounded-lg border-black/12 bg-white text-base text-flooencer-black placeholder:text-black/34 focus-visible:ring-flooencer-lavender"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lastName">Last name</Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                placeholder="Forwood"
                className="h-12 rounded-lg border-black/12 bg-white text-base text-flooencer-black placeholder:text-black/34 focus-visible:ring-flooencer-lavender"
              />
            </div>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="workEmail">Work email</Label>
              <Input
                id="workEmail"
                name="workEmail"
                type="email"
                autoComplete="email"
                placeholder="name@company.com"
                required
                className="h-12 rounded-lg border-black/12 bg-white text-base text-flooencer-black placeholder:text-black/34 focus-visible:ring-flooencer-lavender"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                placeholder="Company name"
                className="h-12 rounded-lg border-black/12 bg-white text-base text-flooencer-black placeholder:text-black/34 focus-visible:ring-flooencer-lavender"
              />
            </div>
          </div>

          <div className="mt-5 grid gap-2">
            <Label htmlFor="message">Campaign context</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your campaign, target audience, market, timeline, or budget."
              required
              className="min-h-40 rounded-lg border-black/12 bg-white text-base text-flooencer-black placeholder:text-black/34 focus-visible:ring-flooencer-lavender"
            />
          </div>

          <Button
            type="submit"
            className="mt-6 h-12 w-full rounded-lg bg-[linear-gradient(135deg,#6513D1_0%,#7755FA_100%)] text-base font-bold text-white shadow-[0_18px_50px_rgba(101,19,209,0.26)] hover:brightness-110"
          >
            Send Message
            <FlooencerIcon
              data-icon="inline-end"
              name="arrow-right"
              className="size-6"
            />
          </Button>
        </form>
      </div>
    </section>
  );
};
