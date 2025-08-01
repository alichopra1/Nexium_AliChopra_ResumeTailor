export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-4 px-6 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Resume Tailor. All rights reserved.</p>
        <div className="mt-2">
          <a href="/terms" className="hover:underline mx-2">Terms of Service</a>
          <a href="/privacy" className="hover:underline mx-2">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}