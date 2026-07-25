import { TrendingUp, TrendingDown, BarChart3, Globe, Users, DollarSign } from "lucide-react";
import { economicData } from "@/lib/data";

const regions = [
  { name: "Centre (Ouagadougou)", pop: "3,2M", gdpShare: "42%", growth: "+7%" },
  { name: "Hauts-Bassins (Bobo)", pop: "2,1M", gdpShare: "18%", growth: "+6%" },
  { name: "Cascades", pop: "0,9M", gdpShare: "8%", growth: "+5%" },
  { name: "Est", pop: "1,8M", gdpShare: "7%", growth: "+4%" },
  { name: "Nord", pop: "1,5M", gdpShare: "6%", growth: "+5%" },
  { name: "Boucle du Mouhoun", pop: "1,7M", gdpShare: "6%", growth: "+4%" },
  { name: "Centre-Ouest", pop: "1,2M", gdpShare: "4%", growth: "+5%" },
  { name: "Autres régions (6)", pop: "11,1M", gdpShare: "9%", growth: "+3-5%" },
];

const sectorGDP = [
  { sector: "Agriculture", share: 32, color: "bg-green-500" },
  { sector: "Mines & Or", share: 20, color: "bg-yellow-500" },
  { sector: "Services", share: 25, color: "bg-blue-500" },
  { sector: "Commerce", share: 13, color: "bg-purple-500" },
  { sector: "BTP & Industrie", share: 10, color: "bg-orange-500" },
];

const timeSeries = [
  { year: "2020", gdp: 15.8 },
  { year: "2021", gdp: 17.1 },
  { year: "2022", gdp: 18.3 },
  { year: "2023", gdp: 19.0 },
  { year: "2024", gdp: 18.9 },
  { year: "2025", gdp: 20.2 },
];

const maxGDP = Math.max(...timeSeries.map((t) => t.gdp));

export default function DataPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[#009A44] font-semibold text-sm mb-4">
            <BarChart3 size={18} /> BurkiNet Data
          </div>
          <h1 className="text-3xl font-black mb-2">Tableau de bord économique</h1>
          <p className="text-gray-300">Indicateurs clés du Burkina Faso — Données 2025</p>
          <div className="flex items-center gap-2 mt-3 text-xs text-gray-400">
            <span className="w-2 h-2 rounded-full bg-[#009A44] animate-pulse inline-block" />
            Mis à jour : Juin 2026 | Sources : INSD, Banque Mondiale, FMI, BCEAO
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">
        {/* KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { label: "PIB 2025", value: `${economicData.gdp.value} Mrd$`, change: economicData.gdp.change, up: true, Icon: TrendingUp, color: "border-green-300 bg-green-50 text-green-700" },
            { label: "Population", value: `${economicData.population.value}M`, change: economicData.population.change, up: true, Icon: Users, color: "border-blue-300 bg-blue-50 text-blue-700" },
            { label: "Inflation", value: `${economicData.inflation.value}%`, change: economicData.inflation.change, up: false, Icon: TrendingDown, color: "border-orange-300 bg-orange-50 text-orange-700" },
            { label: "IDE entrants", value: `${economicData.fdi.value}M$`, change: economicData.fdi.change, up: true, Icon: DollarSign, color: "border-purple-300 bg-purple-50 text-purple-700" },
            { label: "Exportations", value: `${economicData.exports.value} Mrd$`, change: economicData.exports.change, up: true, Icon: Globe, color: "border-yellow-300 bg-yellow-50 text-yellow-700" },
            { label: "Régions", value: `${economicData.regions}`, change: "administratives", up: null, Icon: BarChart3, color: "border-gray-300 bg-gray-50 text-gray-700" },
          ].map((kpi) => (
            <div key={kpi.label} className={`border rounded-2xl p-4 ${kpi.color}`}>
              <kpi.Icon size={18} className="mb-2 opacity-70" />
              <div className="font-black text-xl">{kpi.value}</div>
              <div className="text-xs font-medium opacity-70 mt-0.5">{kpi.label}</div>
              <div className={`text-xs font-bold mt-1 ${kpi.up === true ? "text-green-600" : kpi.up === false ? "text-red-600" : "opacity-60"}`}>
                {kpi.change}
              </div>
            </div>
          ))}
        </div>

        {/* GDP Evolution Chart */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="font-bold text-gray-900 mb-1">Évolution du PIB (2020–2025)</h2>
          <p className="text-gray-500 text-xs mb-6">En milliards USD courants</p>
          <div className="flex items-end gap-3 h-48">
            {timeSeries.map((t) => {
              const height = (t.gdp / maxGDP) * 100;
              return (
                <div key={t.year} className="flex-1 flex flex-col items-center gap-1">
                  <span className="text-xs text-gray-600 font-bold">{t.gdp}</span>
                  <div
                    className="w-full rounded-t-lg bg-gradient-to-t from-[#C8102E] to-[#F7A800] transition-all"
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-xs text-gray-500">{t.year}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sector split + Regions */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Sector breakdown */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="font-bold text-gray-900 mb-1">Répartition du PIB par secteur</h2>
            <p className="text-gray-500 text-xs mb-6">Part du PIB en %, 2025</p>
            <div className="space-y-4">
              {sectorGDP.map((s) => (
                <div key={s.sector}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-gray-700">{s.sector}</span>
                    <span className="font-bold text-gray-900">{s.share}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${s.color} transition-all`} style={{ width: `${s.share * 3}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Regions table */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="font-bold text-gray-900 mb-1">Données par région</h2>
            <p className="text-gray-500 text-xs mb-4">Burkina Faso — 13 régions administratives</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-2 text-xs text-gray-400 font-medium">Région</th>
                    <th className="text-right py-2 text-xs text-gray-400 font-medium">Pop.</th>
                    <th className="text-right py-2 text-xs text-gray-400 font-medium">PIB %</th>
                    <th className="text-right py-2 text-xs text-gray-400 font-medium">Crois.</th>
                  </tr>
                </thead>
                <tbody>
                  {regions.map((r) => (
                    <tr key={r.name} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="py-2.5 text-gray-700 font-medium text-xs">{r.name}</td>
                      <td className="py-2.5 text-right text-gray-500 text-xs">{r.pop}</td>
                      <td className="py-2.5 text-right font-bold text-gray-900 text-xs">{r.gdpShare}</td>
                      <td className="py-2.5 text-right text-[#009A44] font-semibold text-xs">{r.growth}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Investment indicators */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="font-bold text-gray-900 mb-6">Indicateurs d&apos;attractivité des investissements</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Classement Doing Business (région)", value: "#4", sub: "Afrique de l'Ouest 2025" },
              { label: "Délai création entreprise", value: "72h", sub: "Via CEFORE en ligne" },
              { label: "Taux imposition sociétés", value: "27,5%", sub: "Régime général" },
              { label: "Taux exonération ZES", value: "0–10%", sub: "Zones économiques spéciales" },
            ].map((item) => (
              <div key={item.label} className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="font-black text-3xl text-[#C8102E] mb-1">{item.value}</div>
                <div className="font-semibold text-gray-800 text-sm mb-0.5">{item.label}</div>
                <div className="text-gray-500 text-xs">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Download section */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-black text-xl mb-2">Télécharger les données</h3>
              <p className="text-gray-400 text-sm">Exportez les données pour vos analyses et rapports</p>
            </div>
            <div className="flex gap-3">
              <button className="bg-white text-gray-900 px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors">
                Export CSV
              </button>
              <button className="bg-[#009A44] text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-[#006E30] transition-colors">
                Rapport PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
