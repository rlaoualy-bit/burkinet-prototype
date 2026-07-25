export default function MentionsLegalesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <nav className="text-xs text-gray-400 mb-6">
          <a href="/" className="hover:text-[#C8102E]">Accueil</a> &rsaquo; Mentions légales
        </nav>
        <h1 className="text-3xl font-black text-gray-900 mb-2">Mentions légales</h1>
        <p className="text-gray-500 text-sm mb-10">Dernière mise à jour : Juin 2026</p>

        <div className="bg-white rounded-2xl p-8 shadow-sm space-y-8">
          {[
            {
              title: "1. Éditeur du site",
              content: [
                "Dénomination : BurkiNet.org",
                "Directeur de publication : Antoine Sanon",
                "Siège social : Ouagadougou, Burkina Faso",
                "Email : contact@burkinet.org",
                "Téléphone : +226 25 25 25 25",
              ],
            },
            {
              title: "2. Hébergement",
              content: [
                "Hébergeur : Vercel Inc.",
                "Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, USA",
                "Site : vercel.com",
              ],
            },
            {
              title: "3. Propriété intellectuelle",
              content: [
                "L'ensemble des contenus publiés sur BurkiNet.org (textes, images, vidéos, données) sont la propriété de BurkiNet.org ou de leurs auteurs respectifs.",
                "Toute reproduction, même partielle, est soumise à autorisation préalable.",
              ],
            },
            {
              title: "4. Données personnelles",
              content: [
                "BurkiNet.org collecte des données personnelles uniquement dans le cadre des formulaires de contact et d'inscription à la newsletter.",
                "Conformément à la loi, vous disposez d'un droit d'accès, de rectification et de suppression de vos données.",
                "Contactez-nous à : contact@burkinet.org",
              ],
            },
            {
              title: "5. Cookies",
              content: [
                "Ce site utilise des cookies de mesure d'audience (anonymisés) et des cookies techniques nécessaires au fonctionnement.",
                "Vous pouvez paramétrer vos préférences via les paramètres de votre navigateur.",
              ],
            },
          ].map(({ title, content }) => (
            <section key={title}>
              <h2 className="font-black text-gray-900 text-lg mb-3">{title}</h2>
              <ul className="space-y-1.5">
                {content.map((line, i) => (
                  <li key={i} className="text-gray-600 text-sm leading-relaxed">{line}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
