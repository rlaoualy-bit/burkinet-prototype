"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Menu, X, Globe, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/actualites", label: "Actualités" },
  { href: "/diaspora", label: "Diaspora" },
  { href: "/investir", label: "Investir" },
  { href: "/data", label: "BurkiNet Data" },
  { href: "/annuaire", label: "Annuaire" },
  { href: "/a-propos", label: "À propos" },
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
          <span className="hidden sm:block">🇧🇫 Inspirer. Réussir. Rayonner. — La plateforme de référence de la communauté burkinabè</span>
          <span className="sm:hidden">🇧🇫 BurkiNet.org</span>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/actualites" className="hover:underline">Newsletter</Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-9 h-9 rounded-full flex items-center justify-center font-black text-white text-sm"
            style={{ background: "linear-gradient(135deg, #C8102E 50%, #009A44 50%)" }}>
            BN
          </div>
          <div className="hidden sm:block">
            <div className="font-black text-xl leading-none text-[#C8102E]">BURKINET</div>
            <div className="text-[10px] text-gray-500 tracking-widest leading-none">.ORG</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#C8102E] hover:bg-red-50 rounded-md transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {/* Search */}
          {searchOpen ? (
            <div className="flex items-center gap-2">
              <input
                autoFocus
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Que recherchez-vous ?"
                className="border border-gray-300 rounded-full px-4 py-1.5 text-sm w-48 sm:w-64 focus:outline-none focus:border-[#C8102E]"
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

          {/* Language selector */}
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

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-[#C8102E]"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:text-[#C8102E] hover:bg-red-50 rounded-lg font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block text-center bg-[#C8102E] text-white px-4 py-3 rounded-lg font-medium hover:bg-[#9B0B22] transition-colors"
            >
              Nous contacter
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
