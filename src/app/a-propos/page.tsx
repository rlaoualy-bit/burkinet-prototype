import Link from "next/link";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";

const team = [
  { name: "Antoine Sanon", role: "Fondateur & Directeur de publication", initials: "AS", color: "bg-red-100 text-[#C8102E]" },
  { name: "Équipe Éditoriale", role: "Journalistes & rédacteurs", initials: "ÉÉ", color: "bg-green-100 text-[#009A44]" },
  { name: "Pôle Data", role: "Analystes & développeurs", initials: "PD", color: "bg-yellow-100 text-[#c47800]" },
  { name: "Pôle Diaspora", role: "Community managers", initials: "PD", color: "bg-blue-100 text-blue-700" },
];

const milestones = [
  { year: "2020", event: "Lancement de BurkiNet.org — portail d'actualités burkinabè" },
  { year: "2022", event: "Lancement de la section Investissement et guide de l'investisseur" },
  { year: "2023", event: "Ouverture de l'Annuaire des experts de la diaspora" },
  { year: "2024", event: "Lancement de data.burkinet.org — tableau de bord économique" },
  { year: "2025", event: "Partenariats institutionnels : UNICEF, TotalEnergies, MEN, CGE" },
  { year: "2026", event: "Lancement des Diaspora Bonds, BurkiNetTV et version multilingue" },
];

export default function AProposPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1C1C1C] to-[#2a0808] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            À propos de<br />
            <span className="text-[#F7A800]">BurkiNet.org</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            BurkiNet.org est la plateforme numérique de référence dédiée au Burkina Faso et à sa diaspora mondiale. Notre mission : connecter, informer et inspirer la communauté burkinabè partout dans le monde.
          </p>
        </div>
      </section>

      {/* Mission / Vision / Valeurs */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                Icon: Target,
                title: "Notre mission",
                color: "text-[#C8102E] bg-red-50",
                content: "Être le hub numérique de référence du Burkina Faso : promouvoir l'image du pays, valoriser la diaspora, faciliter l'investissement et partager les données économiques fiables.",
              },
              {
                Icon: Eye,
                title: "Notre vision",
                color: "text-[#009A44] bg-green-50",
                content: "En 2030, BurkiNet.org est la porte d'entrée incontournable sur le Burkina Faso pour tout investisseur, membre de la diaspora, journaliste ou décideur à travers le monde.",
              },
              {
                Icon: Heart,
                title: "Nos valeurs",
                color: "text-[#F7A800] bg-yellow-50",
                content: "Intégrité éditoriale, excellence, ouverture, valorisation des talents burkinabè et engagement pour le développement durable du Pays des Hommes Intègres.",
              },
            ].map(({ Icon, title, color, content }) => (
              <div key={title} className="bg-white rounded-2xl p-7 shadow-sm">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                  <Icon size={22} />
                </div>
                <h2 className="font-black text-xl text-gray-900 mb-3">{title}</h2>
                <p className="text-gray-600 leading-relaxed text-sm">{content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform overview */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-8">Ce que nous offrons</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { emoji: "📰", title: "Actualités", desc: "Couverture complète de l'actualité politique, économique, culturelle et sociale du Burkina Faso." },
              { emoji: "🌍", title: "Espace Diaspora", desc: "Guides pratiques, success stories, annuaire des experts et ressources pour les Burkinabè de l'extérieur." },
              { emoji: "💼", title: "Guide de l'investisseur", desc: "Secteurs porteurs, cadre juridique, Diaspora Bonds et accompagnement pour vos projets d'investissement." },
              { emoji: "📊", title: "BurkiNet Data", desc: "Tableau de bord économique avec indicateurs macro, données régionales et graphiques exportables." },
              { emoji: "🎬", title: "BurkiNetTV", desc: "Reportages vidéo, interviews d'experts et documentaires sur le Burkina Faso." },
              { emoji: "🤝", title: "Réseau & Partenariats", desc: "Mise en relation entre investisseurs, porteurs de projets et professionnels de la diaspora." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-5 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-8">Notre parcours</h2>
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 text-right flex-shrink-0">
                    <span className="font-black text-sm text-[#C8102E]">{m.year}</span>
                  </div>
                  <div className="hidden md:flex w-6 justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-[#C8102E] ring-4 ring-red-50 relative z-10" />
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-4 shadow-sm">
                    <p className="text-gray-700 text-sm">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="equipe" className="py-14 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-8">L&apos;équipe</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {team.map((member) => (
              <div key={member.name} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 text-xl font-black ${member.color}`}>
                  {member.initials}
                </div>
                <div className="font-bold text-gray-900 text-sm">{member.name}</div>
                <div className="text-gray-500 text-xs mt-0.5">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partenaires" className="py-14 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-2">Nos partenaires</h2>
          <p className="text-gray-500 mb-8">Ils nous font confiance et soutiennent la mission BurkiNet</p>
          <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
            {["UNICEF", "TotalEnergies", "MEN", "SAT", "CGE", "ABI", "SONABHY"].map((partner) => (
              <div key={partner} className="bg-white rounded-xl p-4 text-center shadow-sm">
                <div className="font-bold text-gray-500 text-xs">{partner}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 bg-[#C8102E] text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-black mb-3">Rejoignez la communauté BurkiNet</h2>
          <p className="text-red-100 mb-6">Partenaires, investisseurs, membres de la diaspora — ensemble, nous faisons rayonner le Burkina Faso.</p>
          <Link href="/contact" className="bg-white text-[#C8102E] px-8 py-3 rounded-full font-bold hover:bg-red-50 transition-colors inline-flex items-center gap-2">
            Nous contacter <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
