import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 shadow bg-white flex gap-6">
      <Link href="/">Home</Link>
      <Link href="/blogs">Blogs</Link>
      <Link href="/news">News</Link>
    </nav>
  );
}
