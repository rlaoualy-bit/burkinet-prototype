import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TrendingUp, Users, Globe, BarChart3, ChevronRight, Play } from "lucide-react";
import { news, economicData, successStories } from "@/lib/data";

export default function HomePage() {
  const featuredNews = news.slice(0, 4);

  return (
    <div>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-[#1C1C1C] via-[#2a0808] to-[#C8102E] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#009A44] blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#F7A800] blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#009A44] animate-pulse" />
              Plateforme de référence du Burkina Faso
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              Inspirer.<br />
              <span className="text-[#F7A800]">Réussir.</span><br />
              Rayonner.
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-xl">
              Le hub numérique de la communauté burkinabè mondiale — actualités, opportunités d&apos;investissement, données économiques et connexion diaspora.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/investir" className="bg-[#F7A800] text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-yellow-400 transition-colors flex items-center gap-2">
                Investir au Burkina <ArrowRight size={16} />
              </Link>
              <Link href="/diaspora" className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/20 transition-colors">
                Espace Diaspora
              </Link>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="relative bg-black/20 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "PIB 2025", value: `${economicData.gdp.value} Mrd$`, change: economicData.gdp.change },
              { label: "Population", value: `${economicData.population.value}M`, change: economicData.population.change },
              { label: "IDE entrants", value: `${economicData.fdi.value}M$`, change: economicData.fdi.change },
              { label: "Experts diaspora", value: "2 400+", change: "inscrits" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-black text-xl text-white">{stat.value}</div>
                <div className="text-xs text-gray-300">{stat.label}</div>
                <div className="text-xs text-[#009A44] font-semibold">{stat.change}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST NEWS */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-black text-gray-900">Actualités récentes</h2>
              <p className="text-gray-500 text-sm mt-1">Les dernières nouvelles du Burkina Faso</p>
            </div>
            <Link href="/actualites" className="text-[#C8102E] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
              Tout voir <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredNews.map((article) => (
              <article key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-[#C8102E] text-white text-xs px-2 py-1 rounded-full font-medium">
                    {article.category}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-400 mb-2">{article.date} · {article.readTime}</p>
                  <h3 className="font-bold text-gray-900 text-sm line-clamp-3 leading-snug group-hover:text-[#C8102E] transition-colors">
                    {article.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BURKINET DATA TEASER */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-[#009A44] font-semibold text-sm mb-4">
                <BarChart3 size={18} /> BurkiNet Data
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                Les chiffres clés du Burkina Faso
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Tableau de bord économique mis à jour régulièrement — PIB, investissements, secteurs porteurs, cartographie régionale et indicateurs de développement.
              </p>
              <Link href="/data" className="inline-flex items-center gap-2 bg-[#009A44] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#006E30] transition-colors">
                Explorer les données <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "PIB 2025", value: `${economicData.gdp.value} Mrd$`, change: economicData.gdp.change, Icon: TrendingUp, color: "bg-green-50 border-green-200 text-green-700" },
                { label: "Inflation", value: `${economicData.inflation.value}%`, change: economicData.inflation.change, Icon: BarChart3, color: "bg-blue-50 border-blue-200 text-blue-700" },
                { label: "Exportations", value: `${economicData.exports.value} Mrd$`, change: economicData.exports.change, Icon: Globe, color: "bg-orange-50 border-orange-200 text-orange-700" },
                { label: "IDE entrants", value: `${economicData.fdi.value}M$`, change: economicData.fdi.change, Icon: TrendingUp, color: "bg-purple-50 border-purple-200 text-purple-700" },
              ].map((kpi) => (
                <div key={kpi.label} className={`border rounded-2xl p-5 ${kpi.color}`}>
                  <kpi.Icon size={20} className="mb-2 opacity-70" />
                  <div className="font-black text-2xl">{kpi.value}</div>
                  <div className="text-xs font-medium opacity-70 mt-0.5">{kpi.label}</div>
                  <div className="text-xs font-bold mt-1">{kpi.change}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-[#C8102E] font-semibold text-sm mb-3">
              <Users size={18} /> Diaspora
            </div>
            <h2 className="text-3xl font-black text-gray-900">Success Stories</h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto">Des Burkinabè qui inspirent le monde entier</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <article key={story.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                <div className="relative h-52">
                  <Image src={story.imageUrl} alt={story.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="text-white font-bold text-lg leading-tight">{story.name}</div>
                    <div className="text-gray-300 text-xs">{story.country}</div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="inline-block bg-red-50 text-[#C8102E] text-xs px-2 py-1 rounded-full font-medium mb-3">{story.domain}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{story.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{story.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/diaspora" className="inline-flex items-center gap-2 border-2 border-[#C8102E] text-[#C8102E] px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#C8102E] hover:text-white transition-colors">
              Voir toutes les success stories <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* BURKINET TV */}
      <section className="py-14 bg-[#1C1C1C] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-[#F7A800] font-semibold text-sm mb-2">
                <Play size={16} fill="currentColor" /> BurkiNetTV
              </div>
              <h2 className="text-2xl font-black">Vidéos & Reportages</h2>
            </div>
            <Link href="/actualites" className="text-gray-400 font-semibold text-sm flex items-center gap-1 hover:text-white">
              Tout voir <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Guide de l'investisseur au Burkina 2026", duration: "18:24", category: "Investissement" },
              { title: "FESPACO 2026 : les temps forts de la cérémonie", duration: "12:05", category: "Culture" },
              { title: "Retour au pays : témoignages de la diaspora", duration: "24:11", category: "Diaspora" },
            ].map((video, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden bg-gray-800 aspect-video flex items-center justify-center group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900" />
                <button className="relative z-10 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-[#C8102E] transition-colors">
                  <Play size={22} fill="white" className="ml-1" />
                </button>
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-xs text-gray-300 bg-black/40 px-2 py-0.5 rounded">{video.category}</span>
                  <p className="text-white font-semibold text-sm mt-1 line-clamp-2">{video.title}</p>
                  <p className="text-gray-400 text-xs">{video.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-400 text-xs uppercase tracking-widest mb-6">Nos partenaires institutionnels</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["UNICEF", "TotalEnergies", "MEN", "SAT", "CGE", "ABI", "SONABHY"].map((partner) => (
              <span key={partner} className="text-gray-600 font-bold text-sm tracking-wide">{partner}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
