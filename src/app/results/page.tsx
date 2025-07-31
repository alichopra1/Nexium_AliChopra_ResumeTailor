"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../api/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import jsPDF from "jspdf";

interface Resume {
  id: string;
  original_text: string;
  tailored_text: string;
  job_description: string;
  feedback: string;
  created_at: string;
}

export default function ResultsPage() {
  const [latestResume, setLatestResume] = useState<Resume | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchLatestResume = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        router.push("/login");
        return;
      }

      const { data, error } = await supabase
        .from('resumes')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (error) {
        alert("Error fetching resume data");
        router.push("/dashboard");
      } else {
        setLatestResume(data);
      }
      setLoading(false);
    };

    fetchLatestResume();
  }, [router]);

  const handleDownloadTxt = () => {
    if (!latestResume) return;
    const blob = new Blob([latestResume.tailored_text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tailored_resume_${latestResume.id}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadPdf = () => {
    if (!latestResume) return;
    const doc = new jsPDF();
    doc.setFont('courier');
    doc.setFontSize(10);
    
    const lines = latestResume.tailored_text.split('\n');
    const lineHeight = 10;
    const pageHeight = 550; // Approximate height in points for A4 page
    const linesPerPage = Math.floor(pageHeight / lineHeight);
    
    let currentLine = 0;
    while (currentLine < lines.length) {
      const pageLines = lines.slice(currentLine, currentLine + linesPerPage);
      doc.text(pageLines, 10, 10);
      currentLine += linesPerPage;
      if (currentLine < lines.length) {
        doc.addPage();
      }
    }
    
    doc.save(`tailored_resume_${latestResume.id}.pdf`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading your tailored resume...</p>
      </div>
    );
  }

  if (!latestResume) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <h2 className="text-2xl font-semibold mb-4">No Resume Found</h2>
        <Button onClick={() => router.push("/dashboard")}>
          Go Back to Dashboard
        </Button>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Your Tailored Resume</h2>
        <Button onClick={() => router.push("/dashboard")}>
          Create New Resume
        </Button>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="text-lg font-medium mb-2">Tailored Resume</h3>
          <div className="p-4 border rounded-lg bg-gray-50 text-sm leading-relaxed">
            <div className="whitespace-pre-wrap">
              {latestResume.tailored_text}
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">AI Feedback</h3>
          <div className="p-4 border rounded-lg bg-blue-50 text-sm leading-relaxed">
            <div className="whitespace-pre-wrap">
              {latestResume.feedback}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center space-x-4">
        <Button onClick={handleDownloadTxt}>Download as TXT</Button>
        <Button onClick={handleDownloadPdf}>Download as PDF</Button>
      </div>
    </div>
  );
}