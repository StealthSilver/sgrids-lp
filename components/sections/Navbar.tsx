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
    <nav className="p-4 shadow bg-white dark:bg-black dark:text-white">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        
        <div className="flex items-center gap-6">
          <Link href="/">
            <Image
              src={logoSrc}
              alt="Sgrids Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </Link>
          <Link href="#about">About us</Link>
          <Link href="#services">Services</Link>
          <Link href="/blogs">News & Updates</Link>
          <Link href="/news">Blogs</Link>
          <Link href="#footer">Contact Us</Link>
        </div>

        
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link href="#footer">
            <button className="bg-orange-500 text-white px-4 py-1 rounded-full hover:bg-orange-600 transition">
              GET A DEMO
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
