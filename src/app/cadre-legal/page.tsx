import ComingSoon from "@/components/ComingSoon";

export default function CadreLegalPage() {
  return (
    <ComingSoon
      icon="⚖️"
      title="Cadre légal & Services"
      description="Référentiel juridique et administratif complet pour investir et s'installer au Burkina Faso — textes de loi, procédures officielles, contacts institutionnels."
      features={[
        "Code des investissements 2021 annoté et expliqué",
        "Guide des procédures CEFORE (création d'entreprise en 72h)",
        "Annuaire des notaires, avocats d'affaires et cabinets certifiés",
        "Textes sur le foncier et la propriété immobilière (titres fonciers, baux)",
        "Fiscalité des entreprises : taux, exonérations, zones économiques spéciales",
        "Accès aux appels d'offres publics et marchés de l'État",
      ]}
    />
  );
}
