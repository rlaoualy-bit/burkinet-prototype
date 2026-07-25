import Image from "next/image";
import Link from "next/link";
import { MapPin, Tag, ArrowRight, BookOpen, DollarSign, Home } from "lucide-react";
import { experts, successStories, diasporaGuides } from "@/lib/data";

export default function DiasporaPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#009A44] to-[#006E30] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 text-sm mb-6">
              🌍 Communauté diaspora burkinabè
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
              Votre pont avec<br />
              <span className="text-[#F7A800]">le Burkina Faso</span>
            </h1>
            <p className="text-green-100 text-lg leading-relaxed mb-8">
              Ressources pratiques, guides d&apos;investissement, annuaire des experts et success stories pour les Burkinabè du monde entier.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/annuaire" className="bg-[#F7A800] text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-yellow-400 transition-colors flex items-center gap-2">
                Annuaire des experts <ArrowRight size={16} />
              </Link>
              <Link href="/investir" className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/30 transition-colors">
                Investir au pays
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "2 400+", label: "Experts inscrits" },
            { value: "50+", label: "Pays représentés" },
            { value: "12 000+", label: "Abonnés newsletter" },
            { value: "150+", label: "Success stories" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-black text-[#F7A800]">{s.value}</div>
              <div className="text-gray-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Guides pratiques */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-2">Guides pratiques</h2>
          <p className="text-gray-500 mb-8">Tout ce que vous devez savoir pour rester connecté au Burkina</p>
          <div className="grid md:grid-cols-3 gap-6">
            {diasporaGuides.map((guide, i) => {
              const icons = [BookOpen, DollarSign, Home];
              const Icon = icons[i];
              return (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={22} className="text-[#009A44]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-4">{guide.title}</h3>
                  <ol className="space-y-2">
                    {guide.steps.map((step, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="w-5 h-5 rounded-full bg-green-100 text-[#009A44] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{j + 1}</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                  <button className="mt-5 text-[#009A44] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    En savoir plus <ArrowRight size={14} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success stories */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-black text-gray-900">Success Stories</h2>
              <p className="text-gray-500 mt-1">Ils ont réussi et continuent d&apos;inspirer</p>
            </div>
            <Link href="/annuaire" className="text-[#009A44] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
              Voir l&apos;annuaire <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <article key={story.id} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
                <div className="relative h-48">
                  <Image src={story.imageUrl} alt={story.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="text-white font-bold">{story.name}</div>
                    <div className="text-gray-300 text-xs">{story.country}</div>
                  </div>
                </div>
                <div className="p-5">
                  <span className="inline-block bg-green-50 text-[#009A44] text-xs px-2 py-1 rounded-full font-medium mb-3">{story.domain}</span>
                  <h3 className="font-bold text-gray-900 mb-2">{story.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{story.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experts preview */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-black text-gray-900">Experts de la diaspora</h2>
              <p className="text-gray-500 mt-1">Connectez-vous avec des professionnels burkinabè dans le monde</p>
            </div>
            <Link href="/annuaire" className="text-[#009A44] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
              Voir l&apos;annuaire complet <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experts.slice(0, 3).map((expert) => (
              <div key={expert.id} className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex gap-4 cursor-pointer group">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                  <Image src={expert.imageUrl} alt={expert.name} fill className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 text-sm group-hover:text-[#009A44] transition-colors">{expert.name}</h3>
                  <p className="text-xs text-gray-500 mb-1">{expert.role}</p>
                  <div className="flex items-center gap-1 text-xs text-gray-400 mb-2">
                    <MapPin size={10} /> {expert.location}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {expert.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-1 text-xs bg-green-50 text-[#009A44] px-2 py-0.5 rounded-full">
                        <Tag size={8} /> {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/annuaire" className="inline-flex items-center gap-2 bg-[#009A44] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#006E30] transition-colors">
              Voir les {experts.length}+ experts inscrits <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA inscription */}
      <section className="py-14 px-6 bg-[#009A44] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4">Inscrivez-vous à l&apos;annuaire</h2>
          <p className="text-green-100 mb-8 leading-relaxed">
            Vous êtes un professionnel burkinabè à l&apos;étranger ? Rejoignez notre réseau et contribuez au développement du pays.
          </p>
          <Link href="/annuaire" className="bg-white text-[#009A44] px-8 py-3 rounded-full font-bold hover:bg-green-50 transition-colors inline-flex items-center gap-2">
            Créer mon profil <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
