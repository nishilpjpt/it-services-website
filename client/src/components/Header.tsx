import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

/**
 * Reusable Header Component
 * Features:
 * - CYLOES logo with clickable link to home
 * - White background always
 * - Responsive navigation
 * - Consistent across all pages
 */

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img
            src="/images/cyloes-logo.png"
            alt="CYLOES Logo"
            className="h-12 md:h-14 w-auto"
          />
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 md:gap-8">
          <a
            href="/"
            className={`text-sm font-medium transition-colors ${
              currentPage === "home"
                ? "text-accent"
                : "text-foreground hover:text-accent"
            }`}
          >
            Home
          </a>
          <a
            href="/#services"
            className={`text-sm font-medium transition-colors ${
              currentPage === "services"
                ? "text-accent"
                : "text-foreground hover:text-accent"
            }`}
          >
            Services
          </a>
          <a
            href="/about-us"
            className={`text-sm font-medium transition-colors ${
              currentPage === "about"
                ? "text-accent"
                : "text-foreground hover:text-accent"
            }`}
          >
            About
          </a>
          <a
            href="/blog"
            className={`text-sm font-medium transition-colors ${
              currentPage === "blog"
                ? "text-accent"
                : "text-foreground hover:text-accent"
            }`}
          >
            Blog
          </a>
          <a
            href="/contact-us"
            className={`text-sm font-medium transition-colors ${
              currentPage === "contact"
                ? "text-accent"
                : "text-foreground hover:text-accent"
            }`}
          >
            Contact
          </a>
          <Button className="bg-accent text-foreground hover:bg-accent/90 text-sm">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}
