"use client"
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useTheme } from "@/components/ThemeProvider";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Resume Tailor
        </Link>
        <nav className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li>
              <Link href="/dashboard" className="hover:underline">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/results" className="hover:underline">
                Results
              </Link>
            </li>
          </ul>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? (
              <MoonIcon className="h-5 w-5" />
            ) : (
              <SunIcon className="h-5 w-5" />
            )}
          </Button>
        </nav>
      </div>
    </header>
  );
}