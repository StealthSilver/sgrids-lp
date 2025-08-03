import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function BlogsPage() {
  return (
    <main>
      <Navbar />
      <section className="min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-4">Blogs</h1>
        <p className="text-lg text-gray-700">This is the Blogs page. Add your blog list or blog content here.</p>
      </section>
      <Footer />
    </main>
  );
}
