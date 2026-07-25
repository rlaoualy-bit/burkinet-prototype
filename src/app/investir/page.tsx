import Link from "next/link";
import { ArrowRight, Download, CheckCircle, TrendingUp, Users, Building } from "lucide-react";
import { sectors } from "@/lib/data";

export default function InvestirPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#F7A800] via-[#e89500] to-[#c47800] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-black/10 rounded-full px-4 py-1.5 text-sm mb-6">
              💼 Opportunités d&apos;investissement
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight text-[#1C1C1C]">
              Le Burkina Faso,<br />
              <span className="text-white">terre d&apos;opportunités</span>
            </h1>
            <p className="text-yellow-800 text-lg leading-relaxed mb-8">
              Découvrez les secteurs porteurs, le cadre juridique et les mécanismes d&apos;accompagnement pour réussir votre investissement au Burkina Faso.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="bg-[#C8102E] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#9B0B22] transition-colors flex items-center gap-2">
                Parler à un conseiller <ArrowRight size={16} />
              </Link>
              <a href="#" className="bg-black/10 text-[#1C1C1C] border border-black/20 px-6 py-3 rounded-full font-semibold text-sm hover:bg-black/20 transition-colors flex items-center gap-2">
                <Download size={14} /> Guide de l&apos;investisseur (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key reasons */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">Pourquoi investir au Burkina Faso ?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                Icon: TrendingUp,
                title: "Croissance économique soutenue",
                desc: "Un PIB en croissance de +6,5% en 2025, parmi les plus dynamiques de la région UEMOA.",
                stat: "+6,5% PIB",
                color: "text-green-600 bg-green-50",
              },
              {
                Icon: Users,
                title: "Population jeune & qualifiée",
                desc: "70% de la population a moins de 30 ans. Un vivier de talents formés et motivés.",
                stat: "23,5M hab.",
                color: "text-blue-600 bg-blue-50",
              },
              {
                Icon: Building,
                title: "Cadre légal favorable",
                desc: "Code des investissements incitatif, exonérations fiscales, guichet unique CEFORE et protection des capitaux.",
                stat: "Code inv. 2021",
                color: "text-purple-600 bg-purple-50",
              },
            ].map(({ Icon, title, desc, stat, color }) => (
              <div key={title} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                  <Icon size={22} />
                </div>
                <div className="text-2xl font-black text-gray-900 mb-1">{stat}</div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section id="secteurs" className="py-14 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-2">Secteurs porteurs</h2>
          <p className="text-gray-500 mb-8">Les domaines à fort potentiel d&apos;investissement au Burkina Faso</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sectors.map((sector) => (
              <div key={sector.id} className={`border rounded-2xl p-6 ${sector.color} hover:shadow-md transition-shadow cursor-pointer group`}>
                <div className="text-3xl mb-3">{sector.icon}</div>
                <h3 className={`font-bold text-lg mb-2 ${sector.accentColor}`}>{sector.name}</h3>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">{sector.description}</p>
                <div className="flex gap-3 mb-4">
                  {sector.indicators.map((ind) => (
                    <div key={ind.label} className="text-center">
                      <div className={`font-black text-lg ${sector.accentColor}`}>{ind.value}</div>
                      <div className="text-xs text-gray-500">{ind.label}</div>
                    </div>
                  ))}
                </div>
                <button className={`text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all ${sector.accentColor}`}>
                  Explorer ce secteur <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diaspora Bonds */}
      <section id="diaspora-bonds" className="py-14 px-6 bg-[#1C1C1C] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-[#F7A800] font-semibold text-sm mb-4">
                🏦 Instrument financier innovant
              </div>
              <h2 className="text-3xl font-black mb-4">Diaspora Bonds</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                L&apos;État burkinabè offre aux Burkinabè de l&apos;extérieur la possibilité d&apos;investir directement dans le développement national via des obligations à rendement attractif.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Taux d'intérêt de 6,5% par an",
                  "Maturité de 5 ans, remboursement mensuel possible",
                  "Investissement minimum : 100 000 FCFA (150 €)",
                  "Souscription en ligne 100% sécurisée",
                  "Financement de projets d'infrastructure nationaux",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-gray-300 text-sm">
                    <CheckCircle size={16} className="text-[#009A44] mt-0.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="bg-[#F7A800] text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-yellow-400 transition-colors inline-flex items-center gap-2">
                Souscrire aux Diaspora Bonds <ArrowRight size={16} />
              </Link>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="font-bold text-white mb-6">Simulation d&apos;investissement</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">Montant à investir (FCFA)</label>
                  <input
                    type="number"
                    defaultValue="500000"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F7A800]"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">Durée</label>
                  <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F7A800]">
                    <option value="3">3 ans</option>
                    <option value="5" selected>5 ans</option>
                    <option value="7">7 ans</option>
                  </select>
                </div>
                <div className="bg-[#F7A800]/10 border border-[#F7A800]/30 rounded-xl p-4 mt-4">
                  <div className="text-gray-400 text-xs mb-1">Rendement estimé sur 5 ans</div>
                  <div className="text-[#F7A800] font-black text-2xl">162 500 FCFA</div>
                  <div className="text-gray-400 text-xs mt-1">Pour un investissement de 500 000 FCFA à 6,5%/an</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal framework */}
      <section id="cadre" className="py-14 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-2">Cadre juridique & accompagnement</h2>
          <p className="text-gray-500 mb-8">Les ressources disponibles pour sécuriser votre investissement</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Code des investissements 2021",
                desc: "Exonérations fiscales et douanières, protection des investissements, garanties de transfert de capitaux et de rapatriement des bénéfices.",
                action: "Télécharger le PDF",
              },
              {
                title: "CEFORE — Guichet unique",
                desc: "Création d'entreprise en ligne en 72h, accompagnement personnalisé, suivi administratif simplifié pour les investisseurs diaspora.",
                action: "Accéder au portail",
              },
              {
                title: "Agence Burkinabè des Investissements (ABI)",
                desc: "Accompagnement des investisseurs, facilitation administrative, mise en relation avec les partenaires institutionnels.",
                action: "Contacter l'ABI",
              },
              {
                title: "Zones économiques spéciales",
                desc: "Zones franches industrielles et agro-industrielles avec régimes fiscaux préférentiels et infrastructures dédiées.",
                action: "Voir les zones",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.desc}</p>
                <button className="text-[#C8102E] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  {item.action} <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 bg-[#C8102E] text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-black mb-3">Prêt à investir au Burkina ?</h2>
          <p className="text-red-100 mb-6">Notre équipe vous accompagne à chaque étape de votre projet d&apos;investissement.</p>
          <Link href="/contact" className="bg-white text-[#C8102E] px-8 py-3 rounded-full font-bold hover:bg-red-50 transition-colors inline-flex items-center gap-2">
            Prendre rendez-vous <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
