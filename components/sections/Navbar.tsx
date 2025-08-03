'use client';

import Link from "next/link";
import Image from "next/image";
import { Sun, Moon, Menu } from "lucide-react";
import sgridsLogo from "@/assets/sgridsLogo.png";
import sgridsLogoDark from "@/assets/sgridsLogoDark.png";
import { useTheme } from "@/components/ui/ThemeToggle";
import { useState } from "react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const logoSrc = theme === "dark" ? sgridsLogoDark : sgridsLogo;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 z-50 p-4 border-b border-gray-200 dark:border-white/20 bg-white dark:bg-black dark:text-white">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between relative">
        
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={logoSrc}
              alt="Sgrids Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Center Section: Navigation Links (Desktop Only) */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="#about">About us</Link>
          <Link href="#services">Services</Link>
          <Link href="/blogs">News & Updates</Link>
          <Link href="/news">Blogs</Link>
          <Link href="#footer">Contact Us</Link>
        </div>

        {/* Right Section: Theme Toggle & CTA Button (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link href="#footer">
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">
              GET A DEMO
            </button>
          </Link>
        </div>

        {/* Right Section (Mobile Only): Theme Toggle + Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={handleMobileToggle}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            aria-label="Open Mobile Menu"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Dropdown Menu (Positioned absolutely) */}
        {isMobileMenuOpen && (
          <div className="absolute top-full right-0 mt-2 w-1/2 bg-white dark:bg-black border border-gray-200 dark:border-white/20 rounded-lg shadow-lg p-4 flex flex-col gap-4 animate-slide-down z-50">
            <Link href="#about" onClick={handleMobileToggle}>About us</Link>
            <Link href="#services" onClick={handleMobileToggle}>Services</Link>
            <Link href="/blogs" onClick={handleMobileToggle}>News & Updates</Link>
            <Link href="/news" onClick={handleMobileToggle}>Blogs</Link>
            <Link href="#footer" onClick={handleMobileToggle}>Contact Us</Link>
            <Link href="#footer">
              <button
                className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition w-full"
                onClick={handleMobileToggle}
              >
                GET A DEMO
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
