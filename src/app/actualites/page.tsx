import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ChevronRight, ArrowRight } from "lucide-react";

const sousRubriques = [
  {
    id: "quotidien",
    label: "Burkina au quotidien",
    emoji: "🇧🇫",
    desc: "Politique, société, économie locale",
    color: "bg-red-50 text-[#C8102E] border-red-200",
  },
  {
    id: "diaspora-monde",
    label: "Diaspora dans le monde",
    emoji: "🌍",
    desc: "Communautés, événements, portraits",
    color: "bg-green-50 text-[#009A44] border-green-200",
  },
  {
    id: "culture-sport",
    label: "Culture & Sport",
    emoji: "🎭",
    desc: "Arts, musique, FESPACO, sport",
    color: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    id: "opportunites",
    label: "Opportunités & Alertes",
    emoji: "📢",
    desc: "Appels d'offres, bourses, recrutements",
    color: "bg-orange-50 text-orange-700 border-orange-200",
  },
  {
    id: "agenda",
    label: "Agenda",
    emoji: "📅",
    desc: "Événements, forums, salons",
    color: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    id: "success-stories",
    label: "Success Stories",
    emoji: "⭐",
    desc: "Portraits inspirants de la diaspora",
    color: "bg-yellow-50 text-yellow-700 border-yellow-200",
  },
];

const articles = [
  {
    id: 1,
    sousCat: "quotidien",
    titre: "Kundé d'Or 2026 : les grands lauréats de la musique burkinabè récompensés",
    chapeau: "La 20e édition du Kundé d'Or a célébré l'excellence musicale burkinabè avec une cérémonie exceptionnelle à Ouagadougou, réunissant les plus grands artistes du pays.",
    date: "15 mai 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    uneA: true,
  },
  {
    id: 2,
    sousCat: "opportunites",
    titre: "Diaspora Bonds : 40 milliards FCFA mobilisés en un mois de souscription",
    chapeau: "L'emprunt obligataire diaspora dépasse les attentes avec une souscription record, confirmant l'engouement des Burkinabè de l'extérieur pour le développement national.",
    date: "10 mai 2026",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    uneA: false,
  },
  {
    id: 3,
    sousCat: "quotidien",
    titre: "Agrobusiness : le Burkina Faso attire 3 nouveaux investisseurs internationaux en 2026",
    chapeau: "Le secteur agro-industriel burkinabè confirme son attractivité avec l'annonce de trois projets d'investissement majeurs totalisant plus de 15 milliards FCFA.",
    date: "3 mai 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    uneA: false,
  },
  {
    id: 4,
    sousCat: "success-stories",
    titre: "Dr. Lassina Zerbo : « Investir dans la science burkinabè, c'est investir dans l'avenir »",
    chapeau: "L'ancien secrétaire général de l'OTICE partage sa vision pour le développement scientifique du Burkina et son engagement pour la prochaine génération.",
    date: "28 avril 2026",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    uneA: false,
  },
  {
    id: 5,
    sousCat: "culture-sport",
    titre: "FESPACO 2026 : le cinéma burkinabè rayonne sur la scène internationale",
    chapeau: "La 29e édition du Festival Panafricain du Cinéma de Ouagadougou affirme la place du Burkina comme capitale du cinéma africain, avec 22 films en compétition officielle.",
    date: "22 avril 2026",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80",
    uneA: false,
  },
  {
    id: 6,
    sousCat: "diaspora-monde",
    titre: "Forum diaspora Paris 2026 : 800 Burkinabè se mobilisent pour le développement",
    chapeau: "La troisième édition du Forum des Burkinabè de France a réuni investisseurs, entrepreneurs et associations autour de projets concrets pour le pays.",
    date: "15 avril 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    uneA: false,
  },
  {
    id: 7,
    sousCat: "agenda",
    titre: "Agenda mai–juin 2026 : les événements incontournables de la communauté burkinabè",
    chapeau: "Forums d'investissement, salons immobiliers diaspora, webinaires CEFORE : votre agenda complet pour rester connecté au Burkina.",
    date: "10 avril 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
    uneA: false,
  },
  {
    id: 8,
    sousCat: "opportunites",
    titre: "Appel à candidatures : bourses d'excellence BurkiNet pour étudiants burkinabè à l'étranger",
    chapeau: "BurkiNet et ses partenaires lancent un programme de 20 bourses pour soutenir les étudiants burkinabè en master ou doctorat dans les filières prioritaires.",
    date: "5 avril 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    uneA: false,
  },
];

export default function ActualitesPage() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-black text-gray-900 mb-1">Actualités</h1>
          <p className="text-gray-500">Toutes les nouvelles du Burkina Faso et de la diaspora</p>
        </div>
      </div>

      {/* Sous-rubriques */}
      <div className="bg-white border-b border-gray-100 sticky top-[calc(var(--header-h,90px)+28px)] z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-2">
            <Link
              href="/actualites"
              className="whitespace-nowrap px-4 py-2 text-sm font-semibold rounded-lg bg-[#C8102E] text-white"
            >
              Toutes
            </Link>
            {sousRubriques.map((sr) => (
              <Link
                key={sr.id}
                href={`/actualites?rubrique=${sr.id}`}
                className="whitespace-nowrap px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#C8102E] hover:bg-red-50 rounded-lg transition-colors flex items-center gap-1.5"
              >
                <span>{sr.emoji}</span>
                {sr.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Article à la une */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-10 group cursor-pointer">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto min-h-64 overflow-hidden">
              <Image src={featured.image} alt={featured.titre} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              <span className="absolute top-4 left-4 bg-[#C8102E] text-white text-xs px-3 py-1 rounded-full font-semibold">
                À la une
              </span>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                {sousRubriques.filter((s) => s.id === featured.sousCat).map((s) => (
                  <span key={s.id} className={`text-xs px-3 py-1 rounded-full border font-medium ${s.color}`}>
                    {s.emoji} {s.label}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-3 leading-tight group-hover:text-[#C8102E] transition-colors">{featured.titre}</h2>
              <p className="text-gray-600 mb-5 leading-relaxed text-sm">{featured.chapeau}</p>
              <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                <span className="flex items-center gap-1"><Calendar size={12} />{featured.date}</span>
                <span className="flex items-center gap-1"><Clock size={12} />{featured.readTime} de lecture</span>
              </div>
              <Link href={`/actualites/${featured.id}`} className="text-[#C8102E] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all w-fit">
                Lire l&apos;article <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Grille articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {rest.map((article) => {
            const sr = sousRubriques.find((s) => s.id === article.sousCat);
            return (
              <article key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <Image src={article.image} alt={article.titre} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  {sr && (
                    <span className={`absolute top-3 left-3 text-xs px-2 py-1 rounded-full border font-medium ${sr.color} bg-white/90`}>
                      {sr.emoji} {sr.label}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                    <span className="flex items-center gap-1"><Calendar size={10} />{article.date}</span>
                    <span className="flex items-center gap-1"><Clock size={10} />{article.readTime}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-3 leading-snug group-hover:text-[#C8102E] transition-colors text-sm">{article.titre}</h3>
                  <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">{article.chapeau}</p>
                  <Link href={`/actualites/${article.id}`} className="mt-3 text-[#C8102E] text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all w-fit">
                    Lire l&apos;article <ArrowRight size={12} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Sous-rubriques en bandes */}
        <div className="mb-10">
          <h2 className="text-xl font-black text-gray-900 mb-5">Explorer par rubrique</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sousRubriques.map((sr) => (
              <Link
                key={sr.id}
                href={`/actualites?rubrique=${sr.id}`}
                className={`flex items-center gap-4 p-4 rounded-2xl border-2 hover:shadow-md transition-shadow ${sr.color.split(" ")[0]} ${sr.color.split(" ")[2]}`}
              >
                <span className="text-3xl">{sr.emoji}</span>
                <div>
                  <div className={`font-bold text-sm ${sr.color.split(" ")[1]}`}>{sr.label}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{sr.desc}</div>
                </div>
                <ChevronRight size={16} className={`ml-auto ${sr.color.split(" ")[1]} opacity-60`} />
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-[#C8102E] rounded-2xl p-8 text-white text-center">
          <h3 className="font-black text-2xl mb-2">Ne manquez aucune actualité</h3>
          <p className="text-red-100 mb-6">Abonnez-vous à la newsletter hebdomadaire BurkiNet</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" action="#">
            <input type="email" placeholder="Votre adresse email" className="flex-1 px-4 py-3 rounded-full text-gray-900 text-sm focus:outline-none" />
            <button type="submit" className="bg-white text-[#C8102E] px-6 py-3 rounded-full font-bold text-sm hover:bg-red-50 transition-colors">
              S&apos;abonner
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
