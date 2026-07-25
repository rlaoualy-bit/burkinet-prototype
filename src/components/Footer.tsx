import Link from "next/link";
import { Share2, Rss, Link2, Video, Mail } from "lucide-react";

const footerLinks = {
  Diaspora: [
    { href: "/diaspora", label: "Communauté diaspora" },
    { href: "/annuaire", label: "Annuaire des experts" },
    { href: "/diaspora#guides", label: "Guides pratiques" },
    { href: "/diaspora#transferts", label: "Transferts d'argent" },
  ],
  Actualités: [
    { href: "/actualites", label: "Toutes les actualités" },
    { href: "/actualites?cat=culture", label: "Culture" },
    { href: "/actualites?cat=economie", label: "Économie" },
    { href: "/actualites?cat=societe", label: "Société" },
  ],
  Investir: [
    { href: "/investir", label: "Opportunités d'investissement" },
    { href: "/investir#secteurs", label: "Secteurs porteurs" },
    { href: "/investir#cadre", label: "Cadre légal" },
    { href: "/investir#diaspora-bonds", label: "Diaspora Bonds" },
  ],
  BurkiNet: [
    { href: "/a-propos", label: "À propos" },
    { href: "/contact", label: "Contact" },
    { href: "/a-propos#equipe", label: "L'équipe" },
    { href: "/a-propos#partenaires", label: "Partenaires" },
    { href: "/mentions-legales", label: "Mentions légales" },
    { href: "/politique-confidentialite", label: "Politique de confidentialité" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter banner */}
      <div className="bg-[#C8102E]">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-white font-bold text-lg">Restez informé</h3>
            <p className="text-red-100 text-sm">Recevez les meilleures actualités burkinabè chaque semaine</p>
          </div>
          <form className="flex gap-2 w-full sm:w-auto" action="#">
            <input
              type="email"
              placeholder="votre@email.com"
              className="flex-1 sm:w-64 px-4 py-2 rounded-lg text-gray-900 text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-[#C8102E] px-5 py-2 rounded-lg font-semibold text-sm hover:bg-red-50 transition-colors whitespace-nowrap"
            >
              S'abonner
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center font-black text-white text-xs"
                style={{ background: "linear-gradient(135deg, #C8102E 50%, #009A44 50%)" }}>
                BN
              </div>
              <span className="font-black text-white text-lg">BURKINET</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Inspirer. Réussir. Rayonner. La plateforme de référence de la communauté burkinabè mondiale.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors"><Share2 size={18} /></a>
              <a href="#" aria-label="X / Twitter" className="text-gray-400 hover:text-white transition-colors"><Rss size={18} /></a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors"><Link2 size={18} /></a>
              <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-white transition-colors"><Video size={18} /></a>
              <a href="mailto:contact@burkinet.org" aria-label="Email" className="text-gray-400 hover:text-white transition-colors"><Mail size={18} /></a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">{section}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© 2026 BurkiNet.org — Tous droits réservés | Pays des Hommes Intègres 🇧🇫</p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-gray-300">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-gray-300">Confidentialité</Link>
            <Link href="/contact" className="hover:text-gray-300">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
