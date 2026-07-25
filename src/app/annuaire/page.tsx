"use client";

import Image from "next/image";
import { useState } from "react";
import { Search, MapPin, Tag, Plus, Filter } from "lucide-react";
import { experts } from "@/lib/data";

const domains = ["Tous", "Sciences & Diplomatie", "Économie & Finance", "Technologie & Innovation", "Entrepreneuriat & VC", "Droit & Affaires", "Santé & Recherche"];
const countries = ["Tous pays", "France", "USA", "Canada", "Autriche", "Nigeria", "Suisse", "Allemagne", "Belgique"];

export default function AnnuairePage() {
  const [search, setSearch] = useState("");
  const [domain, setDomain] = useState("Tous");
  const [showForm, setShowForm] = useState(false);

  const filtered = experts.filter((e) => {
    const matchSearch = search === "" || e.name.toLowerCase().includes(search.toLowerCase()) || e.role.toLowerCase().includes(search.toLowerCase()) || e.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchDomain = domain === "Tous" || e.domain === domain;
    return matchSearch && matchDomain;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <h1 className="text-3xl font-black text-gray-900 mb-1">Annuaire des experts</h1>
              <p className="text-gray-500">2 400+ professionnels burkinabè dans le monde</p>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#009A44] text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-[#006E30] transition-colors flex items-center gap-2"
            >
              <Plus size={16} /> Inscrire mon profil
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search & filters */}
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Nom, compétence, entreprise..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-[#009A44]"
              />
            </div>
            <div className="relative">
              <Filter size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <select
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="pl-8 pr-4 py-2.5 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-[#009A44] bg-white appearance-none cursor-pointer"
              >
                {domains.map((d) => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>
            <select className="px-4 py-2.5 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-[#009A44] bg-white appearance-none cursor-pointer">
              {countries.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-gray-500 mb-6">
          {filtered.length} expert{filtered.length > 1 ? "s" : ""} trouvé{filtered.length > 1 ? "s" : ""}
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((expert) => (
            <div key={expert.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
              <div className="flex items-start gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                  <Image src={expert.imageUrl} alt={expert.name} fill className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 group-hover:text-[#009A44] transition-colors leading-tight">{expert.name}</h3>
                  <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{expert.role}</p>
                  <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                    <MapPin size={10} className="flex-shrink-0" />
                    <span>{expert.location}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed mb-4 line-clamp-3">{expert.bio}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {expert.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1 text-xs bg-green-50 text-[#009A44] px-2 py-0.5 rounded-full font-medium">
                    <Tag size={8} /> {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-[#009A44] text-white text-xs py-2 rounded-full font-semibold hover:bg-[#006E30] transition-colors">
                  Contacter
                </button>
                <button className="flex-1 border border-gray-200 text-gray-600 text-xs py-2 rounded-full font-semibold hover:border-[#009A44] hover:text-[#009A44] transition-colors">
                  Voir profil
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Inscription form modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowForm(false)}>
            <div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <h2 className="font-black text-xl text-gray-900 mb-1">Inscrire mon profil expert</h2>
              <p className="text-gray-500 text-sm mb-6">Rejoignez le réseau des professionnels burkinabè</p>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowForm(false); }}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">Prénom *</label>
                    <input type="text" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#009A44]" required />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">Nom *</label>
                    <input type="text" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#009A44]" required />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Poste & Organisation *</label>
                  <input type="text" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#009A44]" required />
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Ville & Pays de résidence *</label>
                  <input type="text" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#009A44]" required />
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Domaine d&apos;expertise *</label>
                  <select className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#009A44] bg-white" required>
                    {domains.slice(1).map((d) => <option key={d}>{d}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Email *</label>
                  <input type="email" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#009A44]" required />
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Biographie (max 300 caractères)</label>
                  <textarea rows={3} maxLength={300} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#009A44] resize-none" />
                </div>
                <div className="flex gap-3 pt-2">
                  <button type="button" onClick={() => setShowForm(false)} className="flex-1 border border-gray-200 text-gray-600 py-3 rounded-full font-semibold text-sm hover:bg-gray-50">
                    Annuler
                  </button>
                  <button type="submit" className="flex-1 bg-[#009A44] text-white py-3 rounded-full font-bold text-sm hover:bg-[#006E30] transition-colors">
                    Envoyer ma demande
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
