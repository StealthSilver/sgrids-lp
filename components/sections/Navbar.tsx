import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 shadow bg-white flex gap-6">
      <Link href="/">Home</Link>
      <Link href="#about">About us</Link>
      <Link href="#services">Services</Link>
      <Link href="/blogs">News & Updates</Link>
      <Link href="/news">Blogs</Link>
      <Link href="/blogs">Contact Us</Link>
    </nav>
  );
}
