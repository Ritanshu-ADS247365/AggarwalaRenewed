import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, type LegalSection } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Disclaimer for the Aggarwala website and services.",
};

const sections: LegalSection[] = [
  {
    heading: "General information",
    body: "The content of this website is provided by Aggarwala Inc. (“Aggarwala”, “we”, “us”) for general information about our IT & ITES, software development, mobile app and digital marketing services. We work to keep it accurate and current, but we make no promise that every detail is complete or free of errors at all times.",
  },
  {
    heading: "No guarantee of results",
    body: "Descriptions of our services, such as better device performance, smoother apps or improved search ranking, explain what we aim to deliver. Results depend on your systems, your industry and many factors outside our control, so we cannot guarantee any specific outcome, such as a particular Google ranking, traffic level or revenue.",
  },
  {
    heading: "Support and timelines",
    body: "We aim to be available around the clock and to set a clear timeline for every task. The scope, response times and delivery dates that apply to your work are the ones agreed with you in writing for that task. Delays caused by third-party providers, information we are waiting on from you, or events beyond our reasonable control are not our responsibility.",
  },
  {
    heading: "Advice and guidance",
    body: "Guidance from our team reflects our professional experience and the information you give us. It is not legal, financial, tax or regulatory advice. Please consult a qualified professional for those matters before acting on anything you read here.",
  },
  {
    heading: "Client testimonials",
    body: "Quotes from clients describe their own individual experiences. They are not a promise that you will get the same result.",
  },
  {
    heading: "Third-party links and names",
    body: "This website may mention or link to third-party products, platforms and websites, such as Google. We do not control them and are not responsible for their content, availability or policies. Product and company names belong to their respective owners, and their use here does not imply endorsement.",
  },
  {
    heading: "Limitation of liability",
    body: (
      <>
        To the fullest extent permitted by law, Aggarwala is not liable for any
        loss or damage that arises from your use of this website or from relying
        on its content. Liability for paid services is governed by the written
        agreement for those services and our{" "}
        <Link href="/terms">Terms &amp; Condition</Link>.
      </>
    ),
  },
  {
    heading: "Changes to this disclaimer",
    body: "We may update this disclaimer from time to time. The date at the top shows when it last changed. Continuing to use the website after an update means you accept the revised version.",
  },
  {
    heading: "Contact us",
    body: `Questions about this disclaimer? Email ${site.email} or call ${site.phone}.`,
  },
];

export default function DisclaimerPage() {
  return <LegalLayout title="Disclaimer" sections={sections} />;
}
