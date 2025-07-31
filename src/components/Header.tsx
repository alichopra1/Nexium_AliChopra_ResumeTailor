import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Resume Tailor
        </Link>
      </div>
    </header>
  );
}