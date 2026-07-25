"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Menu, X, Globe, ChevronDown, ChevronRight } from "lucide-react";

const navLinks = [
  { href: "/investir", label: "Investir" },
  { href: "/diaspora", label: "Espace Diaspora" },
  { href: "/actualites", label: "Actualités" },
  { href: "/revenir-au-pays", label: "Revenir au pays" },
  { href: "/contribuer", label: "Contribuer" },
  { href: "/data", label: "Burkinet Data" },
  { href: "/cadre-legal", label: "Cadre légal & Services" },
  { href: "/a-propos", label: "À propos & Contact" },
];

const languages = ["FR", "EN", "ES", "中文"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [lang, setLang] = useState("FR");
  const [langOpen, setLangOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar */}
      <div className="bg-[#C8102E] text-white text-xs py-1 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="hidden sm:block">🇧🇫 Inspirer. Réussir. Rayonner au Burkina Faso.</span>
          <span className="sm:hidden">🇧🇫 BurkiNet.org</span>
          <div className="flex items-center gap-4">
            <Link href="/a-propos" className="hover:underline">Contact</Link>
            <Link href="/actualites" className="hover:underline">Newsletter</Link>
          </div>
        </div>
      </div>

      {/* Logo + actions */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center font-black text-white text-sm flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #C8102E 50%, #009A44 50%)" }}
          >
            BN
          </div>
          <div className="hidden sm:block">
            <div className="font-black text-xl leading-none text-[#C8102E]">BURKINET</div>
            <div className="text-[10px] text-gray-500 tracking-widest leading-none">.ORG</div>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          {/* Recherche */}
          {searchOpen ? (
            <div className="flex items-center gap-2">
              <input
                autoFocus
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Que recherchez-vous ?"
                className="border border-gray-300 rounded-full px-4 py-1.5 text-sm w-44 sm:w-56 focus:outline-none focus:border-[#C8102E]"
              />
              <button onClick={() => setSearchOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X size={18} />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-gray-600 hover:text-[#C8102E] hover:bg-red-50 rounded-full transition-colors"
              aria-label="Rechercher"
            >
              <Search size={20} />
            </button>
          )}

          {/* Langue */}
          <div className="relative hidden sm:block">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 px-3 py-1.5 border border-gray-200 rounded-full text-sm text-gray-600 hover:border-[#C8102E] hover:text-[#C8102E] transition-colors"
            >
              <Globe size={14} />
              {lang}
              <ChevronDown size={12} />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-50">
                {languages.map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setLangOpen(false); }}
                    className={`block w-full px-4 py-2 text-sm text-left hover:bg-gray-50 ${l === lang ? "text-[#C8102E] font-semibold" : "text-gray-700"}`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Burger — toujours visible */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-gray-600 hover:text-[#C8102E] rounded-lg hover:bg-red-50 transition-colors"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Nav principale — barre horizontale sous le logo */}
      <nav className="border-t border-gray-100 bg-white overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-0">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap px-3 py-2.5 text-xs font-medium text-gray-600 hover:text-[#C8102E] hover:bg-red-50 border-b-2 border-transparent hover:border-[#C8102E] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Menu mobile — overlay complet */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/40" onClick={() => setMenuOpen(false)}>
          <div
            className="absolute top-0 right-0 h-full w-72 bg-white shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <span className="font-black text-[#C8102E] text-lg">BURKINET</span>
              <button onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-gray-700">
                <X size={22} />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto py-3 px-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-[#C8102E] hover:bg-red-50 rounded-xl font-medium text-sm transition-colors"
                >
                  {link.label}
                  <ChevronRight size={14} className="opacity-40" />
                </Link>
              ))}
            </nav>
            <div className="px-4 py-4 border-t border-gray-100">
              <Link
                href="/a-propos"
                onClick={() => setMenuOpen(false)}
                className="block text-center bg-[#C8102E] text-white px-4 py-3 rounded-xl font-bold text-sm hover:bg-[#9B0B22] transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
