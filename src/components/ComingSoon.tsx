import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

interface ComingSoonProps {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export default function ComingSoon({ title, description, icon, features }: ComingSoonProps) {
  return (
    <div className="min-h-[70vh] bg-gray-50 flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-xl w-full text-center">
        <div className="text-6xl mb-6">{icon}</div>
        <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium px-4 py-2 rounded-full mb-6">
          <Clock size={14} />
          Bientôt disponible
        </div>
        <h1 className="text-3xl font-black text-gray-900 mb-4">{title}</h1>
        <p className="text-gray-500 leading-relaxed mb-8">{description}</p>

        <div className="bg-white rounded-2xl p-6 shadow-sm text-left mb-8">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Au programme</p>
          <ul className="space-y-3">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                <span className="w-5 h-5 rounded-full bg-red-50 text-[#C8102E] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#C8102E] font-semibold text-sm hover:underline justify-center"
          >
            <ArrowLeft size={14} /> Retour à l&apos;accueil
          </Link>
          <Link
            href="/a-propos"
            className="inline-flex items-center gap-2 bg-[#C8102E] text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-[#9B0B22] transition-colors justify-center"
          >
            Nous contacter pour en savoir plus
          </Link>
        </div>
      </div>
    </div>
  );
}
