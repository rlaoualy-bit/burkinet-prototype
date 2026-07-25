import Image from "next/image";
import { Search, Calendar, Clock, ChevronRight } from "lucide-react";
import { news } from "@/lib/data";

const categories = ["Toutes", "Économie", "Culture", "Diaspora", "Investissement", "Énergie", "Société", "Sport"];

export default function ActualitesPage() {
  const featured = news[0];
  const rest = news.slice(1);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-black text-gray-900 mb-2">Actualités</h1>
          <p className="text-gray-500">Toutes les nouvelles du Burkina Faso et de la diaspora</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search + categories */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-sm">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un article..."
              className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-[#C8102E] bg-white"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${i === 0 ? "bg-[#C8102E] text-white" : "bg-white text-gray-600 border border-gray-200 hover:border-[#C8102E] hover:text-[#C8102E]"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured article */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-8 group cursor-pointer">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto min-h-64 overflow-hidden">
              <Image src={featured.imageUrl} alt={featured.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              <span className="absolute top-4 left-4 bg-[#C8102E] text-white text-xs px-3 py-1 rounded-full font-semibold">
                À la une
              </span>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="inline-block bg-red-50 text-[#C8102E] text-xs px-3 py-1 rounded-full font-medium mb-4 w-fit">{featured.category}</span>
              <h2 className="text-2xl font-black text-gray-900 mb-3 leading-tight group-hover:text-[#C8102E] transition-colors">{featured.title}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1"><Calendar size={12} />{featured.date}</span>
                <span className="flex items-center gap-1"><Clock size={12} />{featured.readTime}</span>
                <span>{featured.author}</span>
              </div>
              <button className="mt-6 text-[#C8102E] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all w-fit">
                Lire l&apos;article <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Article grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((article) => (
            <article key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <Image src={article.imageUrl} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <span className="absolute top-3 left-3 bg-[#C8102E] text-white text-xs px-2 py-1 rounded-full font-medium">
                  {article.category}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1"><Calendar size={10} />{article.date}</span>
                  <span className="flex items-center gap-1"><Clock size={10} />{article.readTime}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-3 leading-snug group-hover:text-[#C8102E] transition-colors">{article.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">{article.excerpt}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Load more */}
        <div className="text-center mt-10">
          <button className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-3 rounded-full font-semibold text-sm hover:border-[#C8102E] hover:text-[#C8102E] transition-colors">
            Charger plus d&apos;articles
          </button>
        </div>

        {/* Newsletter inline */}
        <div className="mt-12 bg-[#C8102E] rounded-2xl p-8 text-white text-center">
          <h3 className="font-black text-2xl mb-2">Ne manquez aucune actualité</h3>
          <p className="text-red-100 mb-6">Abonnez-vous à notre newsletter hebdomadaire</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" action="#">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-full text-gray-900 text-sm focus:outline-none"
            />
            <button type="submit" className="bg-white text-[#C8102E] px-6 py-3 rounded-full font-bold text-sm hover:bg-red-50 transition-colors">
              S&apos;abonner
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
