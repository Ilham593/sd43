import { useParams, Link } from "react-router-dom";
import posts from "../data/posts";

export default function DetailBerita() {
  const { slug } = useParams();
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Berita tidak ditemukan</h1>
        <Link to="/berita" className="inline-block mt-4 text-blue-900 underline">
          Kembali ke Berita
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">

      <div className="max-w-4xl px-4 py-20 mx-auto">

        <Link
          to="/berita"
          className="font-semibold text-blue-900 hover:underline"
        >
          ← Kembali ke Berita
        </Link>

        <img
          src={post.image}
          alt={post.title}
          className="object-cover w-full mt-6 h-96 rounded-2xl"
        />

        <p className="mt-6 text-sm text-gray-500">
          {post.date}
        </p>

        <h1 className="mt-4 text-3xl font-bold text-blue-900">
          {post.title}
        </h1>

        <div className="mt-6 leading-relaxed text-gray-700 whitespace-pre-line">
          {post.content}
        </div>

      </div>
    </div>
  );
}