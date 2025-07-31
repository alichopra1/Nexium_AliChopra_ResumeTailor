"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function PrivacyPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col p-8 max-w-4xl mx-auto">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Privacy Policy</h2>
        <Button onClick={() => router.push("/")}>Back to Home</Button>
      </div>
      <div className="bg-card text-card-foreground p-6 border rounded-lg shadow-sm">
        <h3 className="text-lg font-medium mb-2">Last updated: July 31, 2025</h3>
        <div className="text-sm leading-relaxed space-y-4">
          <section>
            <h4 className="text-base font-semibold mb-2">Introduction</h4>
            <p>
              At Resume Tailor, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and protect your information when you use our App.
            </p>
          </section>
          <section>
            <h4 className="text-base font-semibold mb-2">Data Collection</h4>
            <p>We collect the following information:</p>
            <ul className="list-disc pl-5">
              <li>Your email address for authentication purposes.</li>
              <li>Your resume text and job descriptions to provide the resume tailoring service.</li>
            </ul>
          </section>
          <section>
            <h4 className="text-base font-semibold mb-2">Data Usage</h4>
            <p>We use your data to:</p>
            <ul className="list-disc pl-5">
              <li>Authenticate your account and provide access to the App.</li>
              <li>Analyze your resume and job description using AI to generate tailored suggestions.</li>
              <li>Improve the App&apos;s functionality and user experience.</li>
            </ul>
            <p>Please note that the AI processes your resume and job description data but does not store this data beyond the duration of your session.</p>
          </section>
          <section>
            <h4 className="text-base font-semibold mb-2">Data Sharing</h4>
            <p>We do not share your personal data with third parties except:</p>
            <ul className="list-disc pl-5">
              <li>With Supabase, our authentication service provider, for the purpose of managing user accounts.</li>
              <li>As required by law or to protect our rights.</li>
            </ul>
          </section>
          <section>
            <h4 className="text-base font-semibold mb-2">Data Security</h4>
            <p>We take the following measures to protect your data:</p>
            <ul className="list-disc pl-5">
              <li>Encryption of sensitive information.</li>
              <li>Use of secure servers for data storage.</li>
              <li>Regular security audits and updates.</li>
            </ul>
          </section>
          <section>
            <h4 className="text-base font-semibold mb-2">User Rights</h4>
            <p>You have the following rights regarding your data:</p>
            <ul className="list-disc pl-5">
              <li><strong>Access</strong>: You can request a copy of your data by contacting us.</li>
              <li><strong>Update</strong>: You can update your data through the App&apos;s settings.</li>
              <li><strong>Delete</strong>: You can delete your data by deleting your account or contacting us.</li>
            </ul>
          </section>
          <section>
            <h4 className="text-base font-semibold mb-2">Changes to Privacy Policy</h4>
            <ul className="list-disc pl-5">
              <li>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Policy on this page.</li>
              <li>Your continued use of the App after any changes to the Policy constitutes your acceptance of the new Policy.</li>
            </ul>
          </section>
          <section>
            <p>For any questions about this Privacy Policy, please contact us at <a href="mailto:support@resumetailor.app" className="text-primary hover:underline">support@resumetailor.app</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
} 