import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — CoolNameGen",
  description:
    "Terms and conditions for using CoolNameGen's free name generator.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-8 py-20">
        <h1 className="text-4xl font-headline font-black text-primary mb-8">
          Terms of Service
        </h1>
        <div className="space-y-6 text-on-surface-variant font-body leading-relaxed">
          <p className="text-sm text-primary/60 uppercase tracking-widest font-label">
            Last updated: April 2026
          </p>

          <h2 className="text-2xl font-headline font-bold text-primary mt-8">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using CoolNameGen, you agree to be bound by these
            Terms of Service. If you do not agree with any part of these terms,
            please do not use this service.
          </p>

          <h2 className="text-2xl font-headline font-bold text-primary mt-8">
            2. Service Description
          </h2>
          <p>
            CoolNameGen provides a free name generation tool. Names are produced
            from curated linguistic databases and are provided for inspiration only.
            We do not guarantee that any generated name is unique, available, or
            suitable for any specific purpose.
          </p>

          <h2 className="text-2xl font-headline font-bold text-primary mt-8">
            3. Disclaimer
          </h2>
          <p>
            This service is provided &quot;as is&quot; without warranties of any kind,
            express or implied. We do not guarantee uninterrupted availability,
            error-free operation, or that results will meet your expectations.
          </p>

          <h2 className="text-2xl font-headline font-bold text-primary mt-8">
            4. Intellectual Property
          </h2>
          <p>
            Generated names may already exist in the public domain or be similar
            to existing trademarks or copyrights. You are solely responsible for
            conducting your own due diligence before adopting any name for
            commercial or legal use. CoolNameGen assumes no liability for name
            conflicts arising from your use of any generated content.
          </p>

          <h2 className="text-2xl font-headline font-bold text-primary mt-8">
            5. Acceptable Use
          </h2>
          <p>You agree not to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              Use this service for any illegal or unauthorized purpose
            </li>
            <li>
              Attempt to interfere with the proper functioning of the website
            </li>
            <li>
              Use automated systems to access the service in a manner that sends
              more requests than a human could reasonably produce
            </li>
          </ul>

          <h2 className="text-2xl font-headline font-bold text-primary mt-8">
            6. Third-Party Content & Ads
          </h2>
          <p>
            This website may display third-party advertisements. The appearance
            of third-party ads does not constitute an endorsement of the
            advertisers. We are not responsible for the content or practices of
            any third-party websites linked from our service.
          </p>

          <h2 className="text-2xl font-headline font-bold text-primary mt-8">
            7. Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by law, CoolNameGen and its operators
            shall not be liable for any indirect, incidental, special, or
            consequential damages arising from your use of this service.
          </p>

          <h2 className="text-2xl font-headline font-bold text-primary mt-8">
            8. Changes to Terms
          </h2>
          <p>
            We reserve the right to modify these terms at any time. Continued
            use of the service after any changes constitutes acceptance of the
            updated terms.
          </p>

          <h2 className="text-2xl font-headline font-bold text-primary mt-8">
            9. Governing Law
          </h2>
          <p>
            These terms shall be governed by and construed in accordance with
            applicable law. Any disputes arising from the use of this service
            shall be resolved amicably where possible.
          </p>

          <h2 className="text-2xl font-headline font-bold text-primary mt-8">
            10. Contact
          </h2>
          <p>
            For questions about these terms, please contact us at{" "}
            <a
              href="mailto:legal@coolnamegen.com"
              className="text-primary underline"
            >
              legal@coolnamegen.com
            </a>
            .
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-outline-variant">
          <Link href="/" className="text-primary font-bold hover:underline">
            ← Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
