import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, Share2, Tag } from "lucide-react";

export default function ArticlePage({ params }: { params: { id: string } }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="max-w-3xl mx-auto flex items-center gap-2 text-sm text-gray-500">
          <Link href="/actualites" className="hover:text-[#C8102E] flex items-center gap-1">
            <ArrowLeft size={14} /> Actualités
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium truncate">Article #{params.id}</span>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-10">
        {/* Catégorie */}
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1 bg-red-50 text-[#C8102E] border border-red-200 text-xs px-3 py-1 rounded-full font-semibold">
            <Tag size={10} /> Burkina au quotidien
          </span>
        </div>

        {/* Titre */}
        <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight">
          Kundé d&apos;Or 2026 : les grands lauréats de la musique burkinabè récompensés
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6 pb-6 border-b border-gray-200">
          <span className="flex items-center gap-1"><Calendar size={14} /> 15 mai 2026</span>
          <span className="flex items-center gap-1"><Clock size={14} /> 5 min de lecture</span>
          <span>Par <strong className="text-gray-700">Équipe BurkiNet</strong></span>
          <button className="ml-auto flex items-center gap-1.5 text-[#C8102E] font-medium hover:underline">
            <Share2 size={14} /> Partager
          </button>
        </div>

        {/* Image principale */}
        <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden mb-8">
          <Image
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80"
            alt="Kundé d'Or 2026"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-3 py-1 rounded-full">
            © Photo illustrative — Prototype
          </div>
        </div>

        {/* Chapeau */}
        <p className="text-lg text-gray-700 font-medium leading-relaxed mb-6 border-l-4 border-[#C8102E] pl-5">
          La 20e édition du Kundé d&apos;Or a célébré l&apos;excellence musicale burkinabè avec une cérémonie exceptionnelle à Ouagadougou, réunissant les plus grands artistes du pays et de la diaspora.
        </p>

        {/* Corps de l'article */}
        <div className="prose prose-gray max-w-none space-y-4 text-gray-700 leading-relaxed">
          <p>
            Le Palais des Sports de Ouagadougou vibrait au rythme des percussions et des balafons ce vendredi soir, pour la grande cérémonie de remise des Kundé d&apos;Or 2026. Créée en 1997 par Issouf Ouédraogo, cette distinction est devenue en près de trois décennies le rendez-vous incontournable de la musique burkinabè.
          </p>
          <p>
            Cette 20e édition avait une saveur particulière, marquant un double anniversaire pour la scène musicale nationale. Plus de 2 000 spectateurs ont assisté en présentiel à la soirée, tandis que plusieurs dizaines de milliers de Burkinabè ont suivi la retransmission en direct depuis la diaspora — France, Côte d&apos;Ivoire, Canada, Italie.
          </p>
          <h2 className="text-xl font-black text-gray-900 mt-8 mb-3">Les grands lauréats 2026</h2>
          <p>
            Le prix du <strong>meilleur artiste de l&apos;année</strong> a été décerné à Smarty, qui continue de dominer la scène rap burkinabè avec son album <em>Yandé</em>, certifié disque d&apos;or en mars 2026. La <strong>révélation de l&apos;année</strong> est allée à la jeune chanteuse Fatima Konaté, 23 ans, originaire de Bobo-Dioulasso.
          </p>
          <p>
            Dans la catégorie <strong>musique traditionnelle</strong>, le légendaire balaphoniste Noufou Ouédraogo a reçu un Kundé d&apos;or honorifique pour l&apos;ensemble de sa carrière — une ovation de plusieurs minutes a salué ce monument de la musique du Burkina.
          </p>
          <h2 className="text-xl font-black text-gray-900 mt-8 mb-3">La diaspora en vedette</h2>
          <p>
            Pour la première fois, un prix spécial <strong>« Artiste diaspora »</strong> a été créé et remis à Didier Bawa, beatmaker burkinabè installé à Paris, dont les productions ont accompagné plusieurs artistes internationaux de renom en 2025–2026.
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-gray-200">
          {["Musique", "Culture", "Kundé d'Or", "Ouagadougou", "Diaspora"].map((tag) => (
            <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full hover:bg-red-50 hover:text-[#C8102E] cursor-pointer transition-colors">
              #{tag}
            </span>
          ))}
        </div>

        {/* Navigation articles */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link href="/actualites" className="flex-1 bg-white border border-gray-200 rounded-2xl p-4 hover:border-[#C8102E] transition-colors group">
            <div className="text-xs text-gray-400 mb-1 flex items-center gap-1"><ArrowLeft size={12} /> Article précédent</div>
            <div className="font-semibold text-sm text-gray-700 group-hover:text-[#C8102E] line-clamp-2">Retour à la liste des actualités</div>
          </Link>
        </div>
      </article>
    </div>
  );
}
