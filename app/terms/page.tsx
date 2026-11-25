import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, type LegalSection } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Condition",
  description: "Terms and conditions for the Aggarwala website and services.",
};

const sections: LegalSection[] = [
  {
    heading: "1. Agreement to these terms",
    body: "These terms govern your use of the Aggarwala website and the services provided by Aggarwala Inc. (“Aggarwala”, “we”, “us”). By using the website or engaging us, you agree to them. If you do not agree, please do not use the website or our services.",
  },
  {
    heading: "2. Our services",
    body: "We provide IT & ITES, software development, mobile app and digital marketing services. The scope, deliverables, timeline and price of each piece of work are set out in a written quote, proposal or service agreement. If that document conflicts with these terms, the document for that work applies.",
  },
  {
    heading: "3. Using the website",
    body: "You agree to use the website lawfully and not to interfere with it, attempt to gain unauthorized access to it or its systems, copy its content for resale, or use it to send harmful or misleading material.",
  },
  {
    heading: "4. Your responsibilities",
    body: "To deliver on time, we need accurate information, timely feedback and access to the devices, accounts and systems involved in the work. You are responsible for the lawfulness of the content and data you give us, for keeping your own backups, and for keeping your account credentials secure.",
  },
  {
    heading: "5. Fees and payment",
    body: "Fees are stated in the quote or agreement for your work. Payment terms: [PAYMENT TERMS, e.g. deposit, milestones, due dates, late fees]. Third-party costs such as hosting, licences and advertising spend are billed separately unless the agreement says otherwise.",
  },
  {
    heading: "6. Intellectual property",
    body: "The website, its text, design and logo belong to Aggarwala or its licensors. Ownership of work we create for you is set out in your agreement; unless it says otherwise, we keep ownership of our pre-existing tools and methods and you receive the right to use the final deliverables once they are paid for in full.",
  },
  {
    heading: "7. Confidentiality and privacy",
    body: "We treat non-public information you share with us as confidential and use it only to provide the services. We handle personal information in line with our Privacy Policy.",
  },
  {
    heading: "8. Third-party services",
    body: "Our work may rely on third-party platforms, tools and providers. Their own terms apply, and we are not responsible for their outages, changes or policies.",
  },
  {
    heading: "9. Disclaimer and limitation of liability",
    body: (
      <>
        The website and our general information are provided as is, as
        described in our <Link href="/disclaimer">Disclaimer</Link>. To the
        fullest extent permitted by law, we are not liable for indirect,
        incidental or consequential loss, including lost profits or data. Our
        total liability for any claim relating to paid services is limited to
        the fees you paid for the work that gave rise to the claim.
      </>
    ),
  },
  {
    heading: "10. Ending the relationship",
    body: "Either of us may end an engagement by written notice as set out in the agreement for the work. You remain responsible for fees for work already done, and sections that are meant to continue, such as intellectual property, confidentiality and liability, stay in force.",
  },
  {
    heading: "11. Governing law",
    body: "These terms are governed by the laws of [GOVERNING STATE / COUNTRY]. Any dispute will be handled in the courts of [VENUE], unless we agree on another method in writing.",
  },
  {
    heading: "12. Changes to these terms",
    body: "We may update these terms from time to time. The date at the top shows the latest version. Changes do not affect work already agreed in writing.",
  },
  {
    heading: "13. Contact us",
    body: `${site.legalName}, ${site.addressLines[0]}, ${site.addressLines[1]}. Email ${site.email} or call ${site.phone}.`,
  },
];

export default function TermsPage() {
  return <LegalLayout title="Terms & Condition" sections={sections} />;
}
