"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const subjects = [
  "Partenariat institutionnel",
  "Investissement",
  "Publicité & annonces",
  "Annuaire des experts",
  "Contenu & rédaction",
  "Support technique",
  "Autre",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-[#C8102E] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-black mb-2">Contactez-nous</h1>
          <p className="text-red-100">Notre équipe vous répond dans les 48 heures ouvrées</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h2 className="font-black text-gray-900 text-xl mb-4">Nous joindre</h2>
              <div className="space-y-4">
                {[
                  { Icon: Mail, label: "Email", value: "contact@burkinet.org", href: "mailto:contact@burkinet.org" },
                  { Icon: Phone, label: "Téléphone", value: "+226 25 25 25 25", href: "tel:+22625252525" },
                  { Icon: MapPin, label: "Adresse", value: "Ouagadougou, Burkina Faso", href: null },
                ].map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-[#C8102E]" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium">{label}</div>
                      {href ? (
                        <a href={href} className="text-gray-900 font-semibold text-sm hover:text-[#C8102E] transition-colors">{value}</a>
                      ) : (
                        <div className="text-gray-900 font-semibold text-sm">{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">Vous êtes...</h3>
              <div className="space-y-2">
                {[
                  { emoji: "💼", label: "Un investisseur" },
                  { emoji: "🌍", label: "Un membre de la diaspora" },
                  { emoji: "📰", label: "Un journaliste / média" },
                  { emoji: "🤝", label: "Un partenaire institutionnel" },
                  { emoji: "📣", label: "Un annonceur publicitaire" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-sm text-gray-600 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <span>{item.emoji}</span>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#F7A800]/10 border border-[#F7A800]/30 rounded-2xl p-5">
              <div className="font-bold text-gray-900 mb-2">⏱️ Délai de réponse</div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nous répondons à toutes les demandes sous 48h ouvrées. Pour les partenariats urgents, mentionnez-le dans le sujet.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white rounded-2xl p-12 shadow-sm text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-[#009A44]" />
                </div>
                <h2 className="font-black text-2xl text-gray-900 mb-2">Message envoyé !</h2>
                <p className="text-gray-600 mb-6">Merci pour votre message. Notre équipe vous contactera dans les 48 heures ouvrées.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#C8102E] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#9B0B22] transition-colors"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="font-black text-xl text-gray-900 mb-6">Formulaire de contact</h2>
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs text-gray-500 font-medium mb-1.5 block">Prénom *</label>
                      <input
                        type="text"
                        required
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C8102E] transition-colors"
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 font-medium mb-1.5 block">Nom *</label>
                      <input
                        type="text"
                        required
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C8102E] transition-colors"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs text-gray-500 font-medium mb-1.5 block">Email *</label>
                      <input
                        type="email"
                        required
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C8102E] transition-colors"
                        placeholder="votre@email.com"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 font-medium mb-1.5 block">Organisation</label>
                      <input
                        type="text"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C8102E] transition-colors"
                        placeholder="Entreprise / Institution"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 font-medium mb-1.5 block">Sujet *</label>
                    <select
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C8102E] bg-white transition-colors"
                    >
                      <option value="">Sélectionner un sujet...</option>
                      {subjects.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 font-medium mb-1.5 block">Message *</label>
                    <textarea
                      required
                      rows={6}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C8102E] transition-colors resize-none"
                      placeholder="Décrivez votre demande en détail..."
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="rgpd" required className="mt-1 accent-[#C8102E]" />
                    <label htmlFor="rgpd" className="text-xs text-gray-500 leading-relaxed cursor-pointer">
                      J&apos;accepte que mes données soient traitées par BurkiNet.org pour répondre à ma demande, conformément à la{" "}
                      <a href="/politique-confidentialite" className="text-[#C8102E] underline">politique de confidentialité</a>.
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#C8102E] text-white py-3.5 rounded-xl font-bold text-sm hover:bg-[#9B0B22] transition-colors flex items-center justify-center gap-2"
                  >
                    <Send size={16} /> Envoyer le message
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
