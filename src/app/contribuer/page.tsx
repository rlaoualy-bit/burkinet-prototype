import ComingSoon from "@/components/ComingSoon";

export default function ContribuerPage() {
  return (
    <ComingSoon
      icon="🤝"
      title="Contribuer au développement"
      description="Découvrez comment chaque Burkinabè, où qu'il soit dans le monde, peut contribuer concrètement au développement de son pays — projets communautaires, mécénat, transferts de compétences."
      features={[
        "Annuaire des projets communautaires à soutenir (éducation, santé, eau)",
        "Programme de transfert de compétences : partager votre expertise à distance",
        "Mécénat : accompagner une école, une association, un projet d'infrastructure",
        "Devenir ambassadeur BurkiNet dans votre pays de résidence",
        "Partenariats avec les ONG et institutions actives au Burkina",
        "Module de dons sécurisés vers des projets vérifiés",
      ]}
    />
  );
}
