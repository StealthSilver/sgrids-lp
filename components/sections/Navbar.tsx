'use client';

import Link from "next/link";
import Image from "next/image";
import { Sun, Moon } from "lucide-react";
import sgridsLogo from "@/assets/sgridsLogo.png";
import sgridsLogoDark from "@/assets/sgridsLogoDark.png";
import { useTheme } from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const logoSrc = theme === "dark" ? sgridsLogoDark : sgridsLogo;

  return (
    <nav className="sticky top-0 z-50 p-4 border-b border-gray-200 dark:border-white/20 bg-white dark:bg-black dark:text-white">
  <div className="max-w-screen-xl mx-auto flex items-center justify-between">
    
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

    {/* Center Section: Navigation Links */}
    <div className="hidden md:flex items-center gap-6">
      <Link href="#about">About us</Link>
      <Link href="#services">Services</Link>
      <Link href="/blogs">News & Updates</Link>
      <Link href="/news">Blogs</Link>
      <Link href="#footer">Contact Us</Link>
    </div>

    {/* Right Section: Theme Toggle & CTA Button */}
    <div className="flex items-center gap-4">
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

  </div>
</nav>
  );
}
