import { Link } from "react-router-dom";
import posts from "../data/posts";
import { motion } from "framer-motion";

export default function NewsPreview() {
  const latestPosts = posts.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl px-4 mx-auto">

        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-blue-900">
            Berita Terbaru
          </h2>
          <p className="mt-4 text-gray-600">
            Informasi dan kegiatan terkini SD Negeri 43 Kota Bengkulu
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {latestPosts.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ y: -5 }}
              className="overflow-hidden transition shadow-md bg-gray-50 rounded-2xl hover:shadow-xl"
            >
              <img
                src={post.image}
                alt={post.title}
                className="object-cover w-full h-52"
              />

              <div className="p-6">
                <p className="mb-2 text-sm text-gray-500">
                  {post.date}
                </p>

                <h3 className="font-semibold text-blue-900 line-clamp-2">
                  {post.title}
                </h3>

                <Link
                  to={`/berita/${post.slug}`}
                  className="inline-block mt-4 font-semibold text-blue-900 hover:underline"
                >
                  Baca →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12 text-center">
          <Link
            to="/berita"
            className="px-6 py-3 font-semibold text-white transition bg-blue-900 rounded-xl hover:bg-blue-800"
          >
            Lihat Semua Berita
          </Link>
        </div>

      </div>
    </section>
  );
}