import ComingSoon from "@/components/ComingSoon";

export default function RevenirAuPaysPage() {
  return (
    <ComingSoon
      icon="🏡"
      title="Revenir au pays"
      description="Guide complet pour les Burkinabè de la diaspora qui souhaitent s'installer ou rentrer au Burkina Faso — logement, emploi, santé, scolarité, formalités administratives."
      features={[
        "Guide du logement à Ouagadougou et Bobo-Dioulasso : quartiers, prix, agences",
        "Reconnaissance des diplômes étrangers et accès au marché de l'emploi",
        "Couverture santé et accès aux soins pour les résidents de retour",
        "Scolarité des enfants : écoles internationales et nationales",
        "Formalités administratives de réinstallation (carte d'identité, permis de conduire, etc.)",
        "Témoignages de Burkinabè rentrés au pays",
      ]}
    />
  );
}
