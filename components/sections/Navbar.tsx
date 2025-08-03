import Link from "next/link";
import Image from "next/image";
import sgridsLogo from "@/assets/sgridsLogo.png"; 

export default function Navbar() {
  return (
    <nav className="p-4 shadow bg-white flex items-center gap-6">
      <Link href="/">
        <Image
          src={sgridsLogo}
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
      <Link href="#footer">
        <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition">
          GET A DEMO
        </button>
      </Link>

    </nav>
  );
}
