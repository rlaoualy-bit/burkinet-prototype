import Link from "next/link";
import { ArrowRight, Download, CheckCircle, Zap, Mountain, Building2, Wheat } from "lucide-react";

const secteurs = [
  {
    id: "energie",
    Icon: Zap,
    label: "Énergie",
    couleur: "bg-orange-50 border-orange-200",
    accentText: "text-orange-700",
    accentBg: "bg-orange-100",
    titre: "Énergie & Électricité",
    accroche: "300 jours d'ensoleillement par an — l'énergie solaire est le levier stratégique numéro un du Burkina Faso.",
    chiffres: [
      { val: "42 %", lab: "Taux d'accès à l'électricité" },
      { val: "500 MW", lab: "Capacité cible solaire 2027" },
      { val: "1,2 Mrd$", lab: "Besoins d'investissement estimés" },
    ],
    acteur: "SONABEL (Société Nationale d'Électricité du Burkina) — partenariats PPP ouverts.",
    contact: "investissement@sonabel.bf",
    opportunites: [
      "Centrales solaires photovoltaïques (zones rurales & péri-urbaines)",
      "Mini-réseaux hybrides solaire-stockage pour l'off-grid",
      "Efficacité énergétique industrielle et bâtiments publics",
    ],
  },
  {
    id: "mines",
    Icon: Mountain,
    label: "Mines & Ressources",
    couleur: "bg-yellow-50 border-yellow-200",
    accentText: "text-yellow-700",
    accentBg: "bg-yellow-100",
    titre: "Mines & Ressources naturelles",
    accroche: "4e producteur d'or en Afrique subsaharienne — un sous-sol parmi les plus riches du continent.",
    chiffres: [
      { val: "15", lab: "Mines industrielles actives" },
      { val: "2,4 Mrd$", lab: "Exportations minières annuelles" },
      { val: "18 %", lab: "Part du PIB national" },
    ],
    acteur: "BUMIGEB (Bureau des Mines et de la Géologie du Burkina) — guichet unique pour les permis.",
    contact: "contact@bumigeb.bf",
    opportunites: [
      "Or, zinc, manganèse, phosphate — permis d'exploration disponibles",
      "Industrie de transformation sur place (raffinage, joaillerie, métallurgie)",
      "Fourniture de services miniers (logistique, équipements, laboratoires d'analyse)",
    ],
  },
  {
    id: "ppp",
    Icon: Building2,
    label: "PPP",
    couleur: "bg-blue-50 border-blue-200",
    accentText: "text-blue-700",
    accentBg: "bg-blue-100",
    titre: "Partenariats Public-Privé (PPP)",
    accroche: "Le gouvernement ouvre les grands projets d'infrastructure aux investisseurs privés — cadre PPP renforcé depuis 2017.",
    chiffres: [
      { val: "8", lab: "Projets PPP actifs en 2026" },
      { val: "450 Mrd FCFA", lab: "Enveloppe globale programmée" },
      { val: "25 ans", lab: "Durée maximale de concession" },
    ],
    acteur: "Unité PPP du Ministère des Finances — cadre Loi PPP 2017.",
    contact: "unite-ppp@finances.gov.bf",
    opportunites: [
      "Routes et autoroutes à péage (axe Ouagadougou–Bobo-Dioulasso)",
      "Infrastructures hospitalières et universités en BOT (Build-Operate-Transfer)",
      "Zones industrielles, parcs logistiques et marchés de gros",
    ],
  },
  {
    id: "agro",
    Icon: Wheat,
    label: "Agro-industrie",
    couleur: "bg-green-50 border-green-200",
    accentText: "text-green-700",
    accentBg: "bg-green-100",
    titre: "Agro-industrie",
    accroche: "80 % de la population active dans l'agriculture — un potentiel de transformation agroalimentaire encore peu exploité.",
    chiffres: [
      { val: "32 %", lab: "Part du PIB agricole" },
      { val: "4,2 M", lab: "Exploitations agricoles actives" },
      { val: "65 %", lab: "Exportations non-minières" },
    ],
    acteur: "CCI-BF (Chambre de Commerce et d'Industrie du Burkina Faso) — guichet agro-investisseurs.",
    contact: "agro@cci.bf",
    opportunites: [
      "Unités de transformation : karité, sésame, coton, anacarde",
      "Chaînes du froid et logistique agricole post-récolte",
      "Agriculture irriguée et hydro-agricole (périmètres de la Volta)",
    ],
  },
];

export default function InvestirPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#F7A800] via-[#e89500] to-[#c47800] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-black/10 rounded-full px-4 py-1.5 text-sm mb-6 text-[#1C1C1C] font-medium">
              💼 Portail investisseur — Secteurs prioritaires nationaux
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight text-[#1C1C1C]">
              Investir au Burkina Faso :<br />
              <span className="text-white">4 secteurs prioritaires</span>
            </h1>
            <p className="text-yellow-900 text-base leading-relaxed mb-3">
              Ce portail s&apos;adresse aux investisseurs institutionnels, entreprises et fonds souhaitant investir dans les secteurs stratégiques burkinabè.
            </p>
            <p className="text-yellow-800 text-sm mb-8 bg-black/5 rounded-lg px-4 py-2.5 border border-black/10">
              💡 Membre de la diaspora ? Pour vos démarches individuelles (création d&apos;entreprise, achat immobilier, investissement personnel), rendez-vous dans{" "}
              <Link href="/diaspora/investir-au-pays" className="underline font-semibold hover:text-[#C8102E]">
                Espace Diaspora → Investir au pays
              </Link>.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="#guichet" className="bg-[#C8102E] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#9B0B22] transition-colors flex items-center gap-2">
                Guichet virtuel investisseur <ArrowRight size={16} />
              </Link>
              <a href="#" className="bg-black/10 text-[#1C1C1C] border border-black/20 px-6 py-3 rounded-full font-semibold text-sm hover:bg-black/20 transition-colors flex items-center gap-2">
                <Download size={14} /> Guide investisseur 2026 (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="py-8 px-6 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-5">
          {[
            { val: "+6,5 %", lab: "Croissance PIB 2025", color: "text-green-600" },
            { val: "72 h", lab: "Création d'entreprise (CEFORE)", color: "text-blue-600" },
            { val: "0–10 %", lab: "IS en zones économiques spéciales", color: "text-purple-600" },
          ].map((s) => (
            <div key={s.lab} className="bg-white rounded-2xl p-5 shadow-sm text-center">
              <div className={`font-black text-3xl ${s.color} mb-1`}>{s.val}</div>
              <div className="text-gray-600 text-sm">{s.lab}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Secteurs */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-2">Les 4 secteurs prioritaires</h2>
          <p className="text-gray-500 mb-10">Identifiés par le gouvernement burkinabè dans le Plan National de Développement Économique et Social (PNDES) 2024–2030</p>

          <div className="space-y-8">
            {secteurs.map((s) => (
              <div key={s.id} id={s.id} className={`border-2 rounded-2xl p-7 ${s.couleur} scroll-mt-24`}>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${s.accentBg}`}>
                        <s.Icon size={20} className={s.accentText} />
                      </div>
                      <span className={`text-xs font-bold uppercase tracking-widest ${s.accentText}`}>{s.label}</span>
                    </div>
                    <h3 className="text-xl font-black text-gray-900 mb-2">{s.titre}</h3>
                    <p className="text-gray-700 mb-5 leading-relaxed italic">&ldquo;{s.accroche}&rdquo;</p>

                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Opportunités d&apos;investissement</p>
                    <ul className="space-y-2 mb-5">
                      {s.opportunites.map((o) => (
                        <li key={o} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle size={14} className={`${s.accentText} mt-0.5 flex-shrink-0`} />
                          {o}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-gray-500">
                      <span className="font-semibold">Interlocuteur :</span> {s.acteur}{" "}
                      <a href={`mailto:${s.contact}`} className={`underline ${s.accentText}`}>{s.contact}</a>
                    </p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Chiffres clés</p>
                    {s.chiffres.map((c) => (
                      <div key={c.lab} className="bg-white/80 rounded-xl p-4">
                        <div className={`font-black text-2xl ${s.accentText}`}>{c.val}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{c.lab}</div>
                      </div>
                    ))}
                    <Link
                      href="#guichet"
                      className={`block text-center text-sm font-semibold ${s.accentText} border border-current rounded-full px-4 py-2 hover:opacity-80 transition-opacity`}
                    >
                      Contacter un conseiller →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cadre légal */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-6">Cadre légal de l&apos;investissement</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { titre: "Code des investissements 2021", desc: "Exonérations fiscales (0 à 10 ans selon zone), protection des investissements, garantie de rapatriement des bénéfices." },
              { titre: "Guichet unique CEFORE", desc: "Création d'entreprise en ligne en 72h. Accompagnement dédié aux investisseurs diaspora et étrangers." },
              { titre: "Zones économiques spéciales", desc: "Régimes préférentiels à Ouagadougou, Bobo-Dioulasso et Koudougou : exonérations IS et TVA, foncier facilité." },
              { titre: "Agence Burkinabè des Investissements (ABI)", desc: "Accompagnement de bout en bout : permis, partenariats institutionnels, mise en relation avec partenaires locaux." },
            ].map((item) => (
              <div key={item.titre} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">{item.titre}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{item.desc}</p>
                <button className="text-[#C8102E] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  En savoir plus <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guichet virtuel */}
      <section id="guichet" className="py-14 px-6 bg-[#1C1C1C] text-white scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black mb-2">Guichet virtuel investisseur</h2>
          <p className="text-gray-400 mb-8">Notre équipe vous répond sous 48h ouvrées et vous oriente vers les bons interlocuteurs institutionnels.</p>
          <form className="space-y-4" action="#">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-400 mb-1.5 block">Nom complet *</label>
                <input type="text" required className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F7A800] placeholder:text-gray-500" placeholder="Votre nom" />
              </div>
              <div>
                <label className="text-xs text-gray-400 mb-1.5 block">Email *</label>
                <input type="email" required className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F7A800] placeholder:text-gray-500" placeholder="votre@email.com" />
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-400 mb-1.5 block">Secteur d&apos;intérêt *</label>
              <select required className="w-full bg-gray-800 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F7A800]">
                <option value="">Sélectionner un secteur...</option>
                {secteurs.map((s) => <option key={s.id} value={s.id}>{s.titre}</option>)}
                <option value="autre">Autre secteur</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-400 mb-1.5 block">Volume d&apos;investissement envisagé</label>
              <select className="w-full bg-gray-800 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F7A800]">
                <option value="">Non précisé</option>
                <option>Moins de 50 M FCFA</option>
                <option>50 M – 500 M FCFA</option>
                <option>500 M – 5 Mrd FCFA</option>
                <option>Plus de 5 Mrd FCFA</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-400 mb-1.5 block">Décrivez votre projet</label>
              <textarea rows={4} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F7A800] resize-none placeholder:text-gray-500" placeholder="Présentez brièvement votre projet d'investissement..." />
            </div>
            <button type="submit" className="w-full bg-[#F7A800] text-black py-3.5 rounded-xl font-bold text-sm hover:bg-yellow-400 transition-colors">
              Envoyer ma demande au guichet investisseur
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
