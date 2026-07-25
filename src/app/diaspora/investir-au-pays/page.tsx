import Link from "next/link";
import { ArrowRight, ArrowLeft, Building, MapPin, Home, Banknote, Scale, CheckCircle } from "lucide-react";

const sections = [
  {
    id: "creation-entreprise",
    Icon: Building,
    titre: "Créer son entreprise au Burkina",
    couleur: "bg-blue-50 border-blue-200 text-blue-700",
    accentBg: "bg-blue-100",
    intro: "La diaspora burkinabè peut créer une entreprise à distance via le portail CEFORE, sans être physiquement présente au Burkina.",
    etapes: [
      { num: "1", label: "Choisir votre forme juridique", detail: "SARL (Société À Responsabilité Limitée) recommandée pour la diaspora : capital minimum 1 FCFA symbolique, responsabilité limitée aux apports. SA pour les projets plus importants (+10 M FCFA)." },
      { num: "2", label: "Constituer votre dossier en ligne", detail: "Via le portail CEFORE : pièce d'identité, statuts de la société (modèles téléchargeables), justificatif d'adresse du siège (peut être chez un parent au Burkina), attestation de domiciliation." },
      { num: "3", label: "Déposer en ligne et payer les frais", detail: "Frais de création : environ 45 000 FCFA (≈ 68 €). Paiement mobile money accepté. Délai : 72h ouvrées pour obtenir le registre de commerce (RCCM) et l'IFU (numéro fiscal)." },
      { num: "4", label: "Ouvrir un compte bancaire professionnel", detail: "Banque Atlantique, SGBF, Coris Bank ou Orabank proposent des offres dédiées aux entrepreneurs diaspora avec ouverture de compte à distance." },
    ],
    contacts: [
      { label: "Portail CEFORE", val: "cefore.bf" },
      { label: "CCI-BF (accompagnement)", val: "info@cci.bf" },
    ],
    avantages: ["Exonération IS pendant 5 ans (secteurs prioritaires)", "Pas de visa requis pour les Burkinabè", "Protection des apports par le code OHADA"],
  },
  {
    id: "terrain",
    Icon: MapPin,
    titre: "Acquérir un terrain",
    couleur: "bg-green-50 border-green-200 text-green-700",
    accentBg: "bg-green-100",
    intro: "L'accès au foncier pour la diaspora est possible, mais demande vigilance et accompagnement pour éviter les litiges fréquents sur les titres.",
    etapes: [
      { num: "1", label: "Choisir la zone et le type de lot", detail: "Ouagadougou (secteurs 17, 21, 23 en périphérie) : 400–800 m² pour 3 à 8 M FCFA. Bobo-Dioulasso : 20–40 % moins cher. Koudougou et villes secondaires : 1–3 M FCFA. Éviter les terrains sans titre officiel (« lettre d'attribution » seule ne suffit pas)." },
      { num: "2", label: "Vérifier le titre foncier (TF)", detail: "Exiger un Titre Foncier (TF) ou à défaut une Attestation de Cession de Droit Immobilier (ACDI) délivrée par la mairie. Une simple lettre d'attribution ou « permis urbain d'habiter » (PUH) n'est pas opposable aux tiers." },
      { num: "3", label: "Passer devant notaire", detail: "Acte authentique notarié obligatoire pour sécuriser la transaction. Honoraires : 2 à 5 % du prix. Notaires recommandés diaspora : Me Kaboré (Ouaga), Me Traoré (Bobo). La procuration notariée permet d'agir à distance." },
      { num: "4", label: "Enregistrement et bornage", detail: "Enregistrement à la Conservation Foncière : taxes et droits ≈ 7 % du prix. Bornage contradictoire par un géomètre agréé (15 000 à 40 000 FCFA). Obtention du TF définitif : 3 à 6 mois." },
    ],
    contacts: [
      { label: "Conservation Foncière de Ouagadougou", val: "+226 25 30 68 00" },
      { label: "Chambre des Notaires", val: "notaires.bf" },
    ],
    avantages: ["Droit de propriété garanti par la Constitution", "Pas de restriction pour les ressortissants burkinabè", "Marché en forte appréciation +8 %/an en zones urbanisées"],
  },
  {
    id: "logement",
    Icon: Home,
    titre: "Acquérir une maison ou un logement",
    couleur: "bg-orange-50 border-orange-200 text-orange-700",
    accentBg: "bg-orange-100",
    intro: "Le marché immobilier résidentiel burkinabè est accessible à la diaspora, avec des prix très inférieurs aux marchés européens ou nord-américains.",
    etapes: [
      { num: "1", label: "Choisir votre type de bien", detail: "Villa individuelle (3–5 pièces) : 25–80 M FCFA selon quartier. Appartement en résidence sécurisée : 15–35 M FCFA. Maison en construction progressive sur terrain propre : budget maîtrisé, livraison en 18–36 mois. Logements sociaux FASO LOGEMENT : quota réservé diaspora (contact spécifique)." },
      { num: "2", label: "Sélectionner un promoteur sérieux", detail: "Promoteurs audités par BurkiNet (fictif — liste à valider) : Immo-Faso SARL, Résidences du Sahel, Habitat Plus Burkina. Demander systématiquement le permis de construire, le titre foncier du terrain et les garanties d'achèvement." },
      { num: "3", label: "Sécuriser l'achat à distance", detail: "Procuration notariée pour un représentant de confiance sur place. Versements par virements bancaires traçables (éviter le cash). Contrat de réservation avec clauses suspensives sur l'obtention du TF et du permis de construire." },
      { num: "4", label: "Financement diaspora", detail: "Coris Bank et SGBF proposent des prêts immobiliers diaspora (revenus étrangers acceptés, durée 10–20 ans, apport 20–30 %). Taux : 8 à 12 % selon profil. Certaines banques partenaires en France, Belgique, Canada facilitent les garanties croisées." },
    ],
    contacts: [
      { label: "FASO LOGEMENT (logements sociaux)", val: "+226 25 34 71 71" },
      { label: "Coris Bank — offre diaspora", val: "diaspora@corisbank.com" },
    ],
    avantages: ["Prix au m² 10 à 20× inférieurs à Paris ou Montréal", "Location possible pendant les absences", "Patrimoine transmissible selon le droit burkinabè"],
  },
  {
    id: "financement",
    Icon: Banknote,
    titre: "Fonds et dispositifs de financement diaspora",
    couleur: "bg-purple-50 border-purple-200 text-purple-700",
    accentBg: "bg-purple-100",
    intro: "Plusieurs mécanismes de financement sont spécialement conçus pour mobiliser les capitaux de la diaspora vers le Burkina.",
    etapes: [
      { num: "1", label: "Diaspora Bonds", detail: "Obligations d'État à 6,5 %/an sur 5 ans, souscription minimum 100 000 FCFA (≈ 150 €). Financement direct de la zone franche agro-industrielle et de la centrale hydroélectrique de Samandéni." },
      { num: "2", label: "APEC — Actionnariat Populaire et d'Épargne Communautaire", detail: "Fond d'investissement collectif diaspora. Participation dès 50 000 FCFA. Investissements dans l'immobilier locatif, l'agro-industrie et les PME burkinabè. Dividendes annuels." },
      { num: "3", label: "Terra Biga — Crowdfunding communautaire", detail: "Plateforme de financement participatif pour projets agricoles, artisanaux et sociaux au Burkina. Tickets dès 10 000 FCFA avec retour sur investissement ou contrepartie en nature." },
      { num: "4", label: "Transferts d'argent optimisés", detail: "Meilleures plateformes : Wave (frais 0 %), Orange Money, Western Union (réseau dense au Burkina). Limite légale : 10 M FCFA/mois sans déclaration. Au-delà, déclaration à la BCEAO obligatoire." },
    ],
    contacts: [
      { label: "Diaspora Bonds", val: "diaspora-bonds-burkina.com" },
      { label: "APEC Burkina", val: "contact@apec-burkina.bf" },
    ],
    avantages: ["Rendements attractifs vs épargne bancaire européenne", "Impact direct sur le développement du pays", "Patrimoine en FCFA — zone franc, devise stable"],
  },
  {
    id: "avantages-fiscaux",
    Icon: Scale,
    titre: "Avantages fiscaux spécifiques diaspora",
    couleur: "bg-red-50 border-red-200 text-red-700",
    accentBg: "bg-red-100",
    intro: "Le code des investissements 2021 prévoit des dispositions spécifiques pour favoriser le retour des capitaux de la diaspora.",
    etapes: [
      { num: "1", label: "Exonération sur création d'entreprise", detail: "Exonération de droits d'enregistrement pour les entreprises créées par des membres de la diaspora dans les 24 mois suivant leur retour au pays. Applicable aux secteurs prioritaires (agro, énergie, numérique, santé, éducation)." },
      { num: "2", label: "Régime fiscal diaspora investisseur", detail: "Sur demande auprès de l'ABI : exonération IS de 5 ans pour les investissements supérieurs à 50 M FCFA dans les secteurs prioritaires. Exonération de TVA sur équipements importés pour la production." },
      { num: "3", label: "Déductions dans le pays de résidence", detail: "France : déduction possible des dons à des associations burkinabè reconnues d'utilité publique (vérifier statut au cas par cas). Canada (Québec) : dispositif similaire. Consulter un expert fiscal transnational." },
      { num: "4", label: "Double imposition — Conventions fiscales", detail: "Le Burkina Faso a signé des conventions de non-double imposition avec : France, Sénégal, Côte d'Ivoire, Maroc. Pour les résidents dans d'autres pays, vérifier au cas par cas auprès de la DGI (Direction Générale des Impôts)." },
    ],
    contacts: [
      { label: "ABI — accompagnement fiscal diaspora", val: "abi@investburkina.bf" },
      { label: "DGI — Direction Générale des Impôts", val: "+226 25 30 89 89" },
    ],
    avantages: ["Pas de double imposition avec la France", "Exonérations jusqu'à 10 ans selon secteur et zone", "Régime simplifié pour les investisseurs diaspora < 200 M FCFA"],
  },
];

export default function InvestirAuPaysPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-gray-500">
          <Link href="/diaspora" className="hover:text-[#009A44] flex items-center gap-1">
            <ArrowLeft size={14} /> Espace Diaspora
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Investir au pays</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#009A44] to-[#006E30] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 text-sm mb-6 font-medium">
              🌍 Espace Diaspora · Investir au pays
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
              Investir au pays :<br />
              <span className="text-[#F7A800]">votre guide pratique</span>
            </h1>
            <p className="text-green-100 text-base leading-relaxed mb-4">
              Démarches concrètes pour les membres de la diaspora souhaitant <strong>créer une entreprise</strong>, <strong>acheter un terrain</strong>, <strong>acquérir un logement</strong> ou <strong>placer de l&apos;épargne</strong> au Burkina Faso — à titre individuel.
            </p>
            <p className="text-green-200 text-xs bg-white/10 rounded-lg px-4 py-2 border border-white/20 mb-8">
              ℹ️ Ce guide couvre les démarches <strong>individuelles</strong> de la diaspora. Pour les investissements sectoriels institutionnels (énergie, mines, PPP, agro), consultez le{" "}
              <Link href="/investir" className="underline hover:text-white">Portail Investisseur</Link>.
            </p>
            <div className="flex flex-wrap gap-2">
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="bg-white/15 border border-white/30 text-white text-xs px-4 py-2 rounded-full hover:bg-white/25 transition-colors font-medium">
                  {s.titre.split(" ")[0]} {s.titre.split(" ")[1]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <div className="max-w-7xl mx-auto px-6 py-14 space-y-14">
        {sections.map((s) => (
          <section key={s.id} id={s.id} className="scroll-mt-24">
            <div className={`border-2 rounded-2xl overflow-hidden ${s.couleur.split(" ")[0]} ${s.couleur.split(" ")[1]}`}>
              {/* Section header */}
              <div className={`px-7 py-5 flex items-center gap-4 border-b ${s.couleur.split(" ")[1]}`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${s.accentBg}`}>
                  <s.Icon size={20} className={s.couleur.split(" ")[2]} />
                </div>
                <h2 className={`text-xl font-black ${s.couleur.split(" ")[2]}`}>{s.titre}</h2>
              </div>

              <div className="p-7">
                <p className="text-gray-700 mb-7 leading-relaxed">{s.intro}</p>

                {/* Étapes */}
                <div className="space-y-5 mb-7">
                  {s.etapes.map((e) => (
                    <div key={e.num} className="flex gap-4">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5 ${s.accentBg} ${s.couleur.split(" ")[2]}`}>
                        {e.num}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-sm mb-1">{e.label}</div>
                        <div className="text-gray-600 text-sm leading-relaxed">{e.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Avantages */}
                <div className="bg-white/60 rounded-xl p-4 mb-5">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Points clés à retenir</p>
                  <ul className="space-y-1.5">
                    {s.avantages.map((a) => (
                      <li key={a} className={`flex items-start gap-2 text-sm ${s.couleur.split(" ")[2]}`}>
                        <CheckCircle size={14} className="mt-0.5 flex-shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contacts */}
                <div className="flex flex-wrap gap-3">
                  {s.contacts.map((c) => (
                    <div key={c.label} className="bg-white/80 border border-gray-200 rounded-full px-4 py-1.5 text-xs">
                      <span className="text-gray-500">{c.label} : </span>
                      <span className={`font-semibold ${s.couleur.split(" ")[2]}`}>{c.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Guichet Diaspora */}
      <section className="py-14 px-6 bg-[#009A44] text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black mb-2">Guichet Diaspora virtuel</h2>
          <p className="text-green-100 mb-8">Besoin d&apos;un accompagnement personnalisé ? Notre réseau de facilitateurs vous répond sous 72h.</p>
          <form className="space-y-4" action="#">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-green-200 mb-1.5 block">Nom complet *</label>
                <input type="text" required className="w-full bg-white/10 border border-white/25 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F7A800] placeholder:text-green-300" placeholder="Votre nom" />
              </div>
              <div>
                <label className="text-xs text-green-200 mb-1.5 block">Email *</label>
                <input type="email" required className="w-full bg-white/10 border border-white/25 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F7A800] placeholder:text-green-300" placeholder="votre@email.com" />
              </div>
            </div>
            <div>
              <label className="text-xs text-green-200 mb-1.5 block">Pays de résidence *</label>
              <input type="text" required className="w-full bg-white/10 border border-white/25 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F7A800] placeholder:text-green-300" placeholder="Ex : France, Canada, Allemagne..." />
            </div>
            <div>
              <label className="text-xs text-green-200 mb-1.5 block">Votre projet *</label>
              <select required className="w-full bg-[#006E30] border border-white/25 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F7A800]">
                <option value="">Sélectionner votre projet...</option>
                <option>Création d&apos;entreprise</option>
                <option>Achat d&apos;un terrain</option>
                <option>Achat d&apos;un logement</option>
                <option>Placement / épargne diaspora</option>
                <option>Avantages fiscaux</option>
                <option>Autre</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-green-200 mb-1.5 block">Votre message</label>
              <textarea rows={3} className="w-full bg-white/10 border border-white/25 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F7A800] resize-none placeholder:text-green-300" placeholder="Décrivez votre situation et vos questions..." />
            </div>
            <button type="submit" className="w-full bg-[#F7A800] text-black py-3.5 rounded-xl font-bold text-sm hover:bg-yellow-400 transition-colors">
              Envoyer au Guichet Diaspora
            </button>
          </form>
        </div>
      </section>

      {/* Agenda */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-8">Agenda diaspora</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { date: "15 sept. 2026", titre: "Forum Investir au Burkina — Paris", lieu: "Paris, France 🇫🇷", type: "Forum" },
              { date: "8 oct. 2026", titre: "Salon Immobilier Diaspora — Ouagadougou", lieu: "Ouaga, Burkina 🇧🇫", type: "Salon" },
              { date: "22 nov. 2026", titre: "Webinaire CEFORE : créer son entreprise à distance", lieu: "En ligne 💻", type: "Webinaire" },
              { date: "10 jan. 2027", titre: "BurkiNet Summit Diaspora — Montréal", lieu: "Montréal, Canada 🇨🇦", type: "Summit" },
            ].map((ev) => (
              <div key={ev.titre} className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <span className="inline-block bg-green-50 text-[#009A44] text-xs px-3 py-1 rounded-full font-semibold mb-3">{ev.type}</span>
                <div className="text-xs text-gray-400 font-medium mb-2">{ev.date}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-2 leading-snug">{ev.titre}</h3>
                <div className="text-xs text-gray-500">{ev.lieu}</div>
                <button className="mt-3 text-[#009A44] text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  S&apos;inscrire <ArrowRight size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
