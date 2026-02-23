import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import posts from "../data/posts";

export default function Berita() {
  return (
    <div className="bg-gray-50">

      {/* Header */}
      <section className="py-16 text-center text-white bg-blue-900">
        <h1 className="text-4xl font-bold">Berita Sekolah</h1>
        <p className="mt-4 text-gray-200">
          Informasi dan kegiatan terbaru SD Negeri 43 Kota Bengkulu
        </p>
      </section>

      <div className="max-w-6xl px-4 py-20 mx-auto">

        <div className="grid gap-12 md:grid-cols-2">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ y: -5 }}
              className="overflow-hidden transition bg-white shadow-lg rounded-2xl hover:shadow-xl"
            >
              <img
                src={post.image}
                alt={post.title}
                className="object-cover w-full h-64"
              />

              <div className="p-8">
                <p className="mb-2 text-sm text-gray-500">
                  {post.date}
                </p>

                <h2 className="text-xl font-semibold text-blue-900">
                  {post.title}
                </h2>

                <p className="mt-4 text-gray-600">
                  {post.excerpt}
                </p>

                <Link
                  to={`/berita/${post.slug}`}
                  className="inline-block mt-6 font-semibold text-blue-900 hover:underline"
                >
                  Baca Selengkapnya →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}