"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function TermsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col p-8 max-w-4xl mx-auto">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Terms of Service</h2>
        <Button onClick={() => router.push("/")}>Back to Home</Button>
      </div>
      <div className="bg-card text-card-foreground p-6 border rounded-lg shadow-sm">
        <h3 className="text-lg font-medium mb-2">Last updated: July 31, 2025</h3>
        <div className="text-sm leading-relaxed space-y-4">
          <section>
            <h4 className="text-base font-semibold mb-2">Introduction</h4>
            <p>
              By using the Resume Tailor App (&quot;the App&quot;), you agree to these Terms of Service (&quot;Terms&quot;). If you do not agree with these Terms, please do not use the App.
            </p>
          </section>
          <section>
            <h4 className="text-base font-semibold mb-2">User Responsibilities</h4>
            <ul className="list-disc pl-5">
              <li>You must provide accurate and truthful information when using the App.</li>
              <li>You must not misuse the App or attempt to access unauthorized areas or features.</li>
            </ul>
          </section>
          <section>
            <h4 className="text-base font-semibold mb-2">Service Usage</h4>
            <ul className="list-disc pl-5">
              <li>The App is intended for personal use only to tailor your resume for specific job descriptions.</li>
              <li>You must not use the App for any illegal or unauthorized purpose.</li>
              <li>The App uses artificial intelligence (&quot;AI&quot;) to analyze your resume and job description to provide tailored suggestions. You are responsible for reviewing and accepting any suggestions made by the AI.</li>
            </ul>
          </section>
          <section>
            <h4 className="text-base font-semibold mb-2">Intellectual Property</h4>
            <ul className="list-disc pl-5">
              <li>The App and all its content, including but not limited to text, graphics, logos, and software, are the property of Resume Tailor and are protected by copyright and other intellectual property laws.</li>
              <li>You may not copy, distribute, or modify any part of the App without our prior written permission.</li>
            </ul>
          </section>
          <section>
            <h4 className="text-base font-semibold mb-2">Limitation of Liability</h4>
            <ul className="list-disc pl-5">
              <li>The App is provided &quot;as is&quot; without any warranties, express or implied.</li>
              <li>We are not liable for any damages arising from your use of the App, including but not limited to direct, indirect, incidental, or consequential damages.</li>
            </ul>
          </section>
          <section>
            <h4 className="text-base font-semibold mb-2">Changes to Terms</h4>
            <ul className="list-disc pl-5">
              <li>We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on this page.</li>
              <li>Your continued use of the App after any changes to the Terms constitutes your acceptance of the new Terms.</li>
            </ul>
          </section>
          <section>
            <p>For any questions about these Terms, please contact us at <a href="mailto:support@resumetailor.app" className="text-primary hover:underline">support@resumetailor.app</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}