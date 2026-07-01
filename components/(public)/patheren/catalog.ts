/**
 * Catalogue extensible des offres Lunion (produits + services).
 * Pour ajouter une offre : copier un bloc et changer les champs.
 * Le template unique OfferingPage lit ces données via le slug.
 */

export type IconKey =
  | "calendar" | "calendar-sync" | "wallet" | "bell" | "clock" | "chart"
  | "key" | "video" | "bell-ring" | "logs" | "lock" | "shield"
  | "book" | "clipboard" | "line-chart" | "award" | "users" | "sparkle"
  // services
  | "layout" | "gauge" | "search" | "code" | "plug" | "smartphone"
  | "globe" | "rocket" | "palette" | "pen" | "accessibility";

export type Offering = {
  slug: string;
  kind: "product" | "service";
  name: string;
  category: string;
  tagline: string;
  heroTitle: string;
  heroDesc: string;
  growth: { value: string; label: string };
  band: { we: string; verb: string; outcome: string };
  process: { n: string; title: string; desc: string }[];
  featuresIntro: string;
  features: { icon: IconKey; title: string; desc: string }[];
  modules: { title: string; desc: string; tone: string }[];
};

/* Étapes de process communes (4 étapes) */
const process = (
  titles: [string, string, string, string],
  a: string,
  b: string,
  c: string,
  d: string,
) => [
  { n: "01", title: titles[0], desc: a },
  { n: "02", title: titles[1], desc: b },
  { n: "03", title: titles[2], desc: c },
  { n: "04", title: titles[3], desc: d },
];

export const offerings: Offering[] = [
  {
    slug: "lunion-booking",
    kind: "product",
    name: "Lunion-Booking",
    category: "Gestion immobilière",
    tagline: "Révolutionnez votre gestion immobilière",
    heroTitle: "Vos biens, vos réservations, vos clients : tout au même endroit",
    heroDesc:
      "Une plateforme complète de gestion locative et immobilière : réservations, baux, paiements et suivi des biens en temps réel.",
    growth: { value: "+40%", label: "de temps gagné sur la gestion locative" },
    band: { we: "Nous", verb: "centralisons", outcome: "toute votre activité immobilière" },
    process: process(
      ["Cadrage", "Paramétrage", "Mise en ligne", "Accompagnement"],
      "Nous analysons votre parc et vos processus de location actuels.",
      "Nous configurons biens, baux et règles de tarification à votre image.",
      "Nous déployons la plateforme et migrons vos données existantes.",
      "Nous formons vos équipes et assurons le support au quotidien.",
    ),
    featuresIntro: "Tout ce qu'il faut pour piloter votre activité immobilière sans effort.",
    features: [
      { icon: "calendar", title: "Gestion des biens", desc: "Centralisez l'ensemble de votre parc immobilier dans une interface claire." },
      { icon: "users", title: "Gestion des locataires", desc: "Suivez vos locataires, leurs contrats et leur historique en un coup d'œil." },
      { icon: "calendar-sync", title: "Réservations en temps réel", desc: "Gérez disponibilités et réservations sans double-booking." },
      { icon: "wallet", title: "Paiements automatisés", desc: "Encaissez et suivez les loyers automatiquement, sans relances manuelles." },
      { icon: "chart", title: "Tableau de bord propriétaire", desc: "Visualisez revenus, taux d'occupation et performances en direct." },
      { icon: "bell", title: "Notifications intelligentes", desc: "Rappels d'échéances et alertes envoyés au bon moment." },
    ],
    modules: [
      { title: "Biens et logements", desc: "Fiches détaillées, photos et statuts de disponibilité.", tone: "cream" },
      { title: "Baux et contrats", desc: "Génération et suivi des documents locatifs.", tone: "sky" },
      { title: "Facturation", desc: "Loyers, quittances et historique de paiements.", tone: "peach" },
      { title: "Reporting", desc: "Indicateurs clés et exports pour votre comptabilité.", tone: "mono" },
    ],
  },
  {
    slug: "lunion-secu",
    kind: "product",
    name: "Lunion-Secure",
    category: "Ressources humaines",
    tagline: "Révolutionnez la gestion de vos ressources humaines",
    heroTitle: "Des équipes sereines, des données sécurisées",
    heroDesc:
      "Une solution RH sécurisée : gestion des employés, congés, paie et contrôle d'accès, réunis dans une plateforme fiable.",
    growth: { value: "+100%", label: "de conformité sur vos processus RH" },
    band: { we: "Nous", verb: "sécurisons", outcome: "vos données et votre gestion d'équipe" },
    process: process(
      ["Audit", "Configuration", "Déploiement", "Support"],
      "Nous cartographions vos processus RH et vos exigences de sécurité.",
      "Nous paramétrons employés, droits d'accès et règles de paie.",
      "Nous intégrons la solution à votre organisation et vos outils.",
      "Nous formons vos gestionnaires et garantissons la continuité.",
    ),
    featuresIntro: "La sécurité et la simplicité au service de vos ressources humaines.",
    features: [
      { icon: "users", title: "Gestion des employés", desc: "Centralisez dossiers, contrats et informations du personnel." },
      { icon: "clock", title: "Congés et présences", desc: "Suivez absences, congés et temps de travail en temps réel." },
      { icon: "wallet", title: "Paie sécurisée", desc: "Générez des bulletins fiables et protégés." },
      { icon: "key", title: "Contrôle d'accès", desc: "Gérez finement les permissions selon les rôles." },
      { icon: "lock", title: "Protection des données", desc: "Vos informations sensibles restent chiffrées et confidentielles." },
      { icon: "logs", title: "Historique et traçabilité", desc: "Chaque action est enregistrée pour une transparence totale." },
    ],
    modules: [
      { title: "Employés", desc: "Dossiers, contrats et organigramme.", tone: "mono" },
      { title: "Congés et temps", desc: "Demandes, validations et soldes.", tone: "sky" },
      { title: "Paie", desc: "Bulletins, cotisations et exports.", tone: "peach" },
      { title: "Accès et permissions", desc: "Rôles, droits et journaux de connexion.", tone: "cream" },
    ],
  },
  {
    slug: "lunion-educ",
    kind: "product",
    name: "Lunion-Educ",
    category: "Gestion éducative",
    tagline: "Révolutionnez la gestion de votre établissement",
    heroTitle: "Élèves, cours et ressources : votre établissement enfin unifié",
    heroDesc:
      "Un système de gestion scolaire et universitaire : inscriptions, notes, emplois du temps et communication entre écoles et parents.",
    growth: { value: "+50%", label: "de temps administratif économisé" },
    band: { we: "Nous", verb: "simplifions", outcome: "la gestion de votre établissement" },
    process: process(
      ["Analyse", "Paramétrage", "Lancement", "Formation"],
      "Nous étudions l'organisation de votre établissement et ses besoins.",
      "Nous configurons classes, cours et calendriers scolaires.",
      "Nous déployons la plateforme pour équipes, élèves et parents.",
      "Nous accompagnons enseignants et administration à la prise en main.",
    ),
    featuresIntro: "Toute la vie de votre établissement, réunie dans un seul outil.",
    features: [
      { icon: "clipboard", title: "Inscriptions et dossiers", desc: "Gérez les admissions et dossiers élèves sans paperasse." },
      { icon: "award", title: "Notes et bulletins", desc: "Saisissez et publiez les résultats en ligne en quelques clics." },
      { icon: "calendar", title: "Emplois du temps", desc: "Créez et ajustez les plannings de façon dynamique." },
      { icon: "users", title: "Espace parents", desc: "Offrez aux familles un suivi clair de la scolarité." },
      { icon: "book", title: "Ressources pédagogiques", desc: "Partagez cours et supports avec les élèves." },
      { icon: "bell-ring", title: "Communication", desc: "Reliez enseignants, parents et administration en temps réel." },
    ],
    modules: [
      { title: "Élèves", desc: "Dossiers, inscriptions et suivi individuel.", tone: "cream" },
      { title: "Pédagogie", desc: "Cours, notes et bulletins.", tone: "sky" },
      { title: "Planning", desc: "Emplois du temps et calendrier scolaire.", tone: "peach" },
      { title: "Communication", desc: "Messagerie et espace parents.", tone: "mono" },
    ],
  },

  /* ============================ SERVICES ============================ */
  {
    slug: "web-development",
    kind: "service",
    name: "Développement web",
    category: "Développement web",
    tagline: "Des sites et applications web performants",
    heroTitle: "Le web, à la hauteur de vos ambitions",
    heroDesc:
      "Nous concevons des sites et applications web rapides, sécurisés et évolutifs, taillés pour votre activité.",
    growth: { value: "2x", label: "de rapidité au chargement" },
    band: { we: "Nous", verb: "concevons", outcome: "des sites et applications web performants" },
    process: process(
      ["Conception", "Stratégie", "Développement", "Accompagnement"],
      "Ateliers, cadrage et maquettes pour transformer votre idée en vision claire.",
      "Architecture technique, priorisation et choix des outils.",
      "Code propre, tests réguliers et livraisons fréquentes.",
      "Formation, maintenance et évolutions continues.",
    ),
    featuresIntro: "Un développement web moderne, pensé pour la performance et la durée.",
    features: [
      { icon: "layout", title: "Sites vitrines", desc: "Une présence en ligne élégante et rapide." },
      { icon: "code", title: "Applications web sur-mesure", desc: "Des outils métiers taillés pour vos besoins." },
      { icon: "wallet", title: "E-commerce", desc: "Des boutiques en ligne fluides et sécurisées." },
      { icon: "gauge", title: "Tableaux de bord", desc: "Pilotez votre activité avec des interfaces d'administration claires." },
      { icon: "plug", title: "Intégrations API", desc: "Connectez vos outils et automatisez vos flux." },
      { icon: "search", title: "SEO et performance", desc: "Un site rapide, bien référencé et prêt à convertir." },
    ],
    modules: [
      { title: "Front-end", desc: "Interfaces réactives avec Next.js et React.", tone: "cream" },
      { title: "Back-end", desc: "API robustes avec NestJS et Node.", tone: "sky" },
      { title: "Base de données", desc: "Données structurées, fiables et sécurisées.", tone: "peach" },
      { title: "Déploiement", desc: "Mise en ligne, hébergement et CI/CD.", tone: "mono" },
    ],
  },
  {
    slug: "mobile-development",
    kind: "service",
    name: "Développement mobile",
    category: "Développement mobile",
    tagline: "Des applications mobiles natives et cross-plateforme",
    heroTitle: "Votre service, dans la poche de vos clients",
    heroDesc:
      "Nous développons des applications iOS et Android performantes, en natif ou en cross-plateforme, pour toucher vos utilisateurs partout.",
    growth: { value: "4.8", label: "de note moyenne sur les stores" },
    band: { we: "Nous", verb: "développons", outcome: "vos applications iOS et Android" },
    process: process(
      ["Conception", "Stratégie", "Développement", "Accompagnement"],
      "Nous cadrons parcours et fonctionnalités avec vous.",
      "Nous choisissons la bonne approche : native ou cross-plateforme.",
      "Nous construisons l'application par itérations testées.",
      "Publication sur les stores, suivi et mises à jour.",
    ),
    featuresIntro: "Des applications mobiles fluides, fiables et prêtes pour les stores.",
    features: [
      { icon: "smartphone", title: "iOS et Android", desc: "Une présence sur les deux plateformes majeures." },
      { icon: "users", title: "Cross-plateforme", desc: "Un seul code, deux applications, avec Flutter ou React Native." },
      { icon: "bell", title: "Notifications push", desc: "Gardez le lien avec vos utilisateurs au bon moment." },
      { icon: "globe", title: "Mode hors-ligne", desc: "Une expérience fluide même sans connexion." },
      { icon: "wallet", title: "Paiements intégrés", desc: "Encaissez directement depuis l'application." },
      { icon: "rocket", title: "Publication sur les stores", desc: "Nous gérons la mise en ligne sur l'App Store et le Play Store." },
    ],
    modules: [
      { title: "UI mobile", desc: "Interfaces natives et animations soignées.", tone: "mono" },
      { title: "Synchronisation", desc: "Données à jour entre mobile et serveur.", tone: "sky" },
      { title: "Sécurité", desc: "Authentification et données protégées.", tone: "peach" },
      { title: "Publication", desc: "Comptes développeurs, builds et déploiement.", tone: "cream" },
    ],
  },
  {
    slug: "ui-ux-design",
    kind: "service",
    name: "UI/UX Design",
    category: "UI/UX Design",
    tagline: "Des interfaces qui séduisent et qui convertissent",
    heroTitle: "Le design au service de vos utilisateurs et de vos résultats",
    heroDesc:
      "Nous créons des produits digitaux qui ne se contentent pas d'être beaux : ils sont clairs, intuitifs et pensés pour convertir.",
    growth: { value: "+35%", label: "de conversion après refonte" },
    band: { we: "Nous", verb: "concevons", outcome: "des interfaces qui séduisent et convertissent" },
    process: process(
      ["Recherche", "Conception", "Design", "Tests"],
      "Nous comprenons vos utilisateurs et leurs usages.",
      "Nous structurons parcours et wireframes.",
      "Nous créons des interfaces premium et une identité forte.",
      "Nous validons et affinons avec de vrais utilisateurs.",
    ),
    featuresIntro: "Un design pensé pour l'usage, la beauté et la performance.",
    features: [
      { icon: "users", title: "Recherche utilisateur", desc: "Des décisions guidées par les besoins réels." },
      { icon: "pen", title: "Wireframes et parcours", desc: "Une structure claire avant la moindre pixel." },
      { icon: "sparkle", title: "Interfaces premium", desc: "Un design soigné, cohérent et mémorable." },
      { icon: "palette", title: "Design system", desc: "Des composants réutilisables pour rester cohérent." },
      { icon: "layout", title: "Prototypage", desc: "Des maquettes interactives pour tester avant de construire." },
      { icon: "accessibility", title: "Branding", desc: "Une identité visuelle forte, du logo à l'univers complet." },
    ],
    modules: [
      { title: "Recherche", desc: "Personas, entretiens et analyse d'usage.", tone: "peach" },
      { title: "Maquettage", desc: "Wireframes et prototypes interactifs.", tone: "cream" },
      { title: "UI Design", desc: "Écrans finalisés et design system.", tone: "sky" },
      { title: "Handoff", desc: "Livrables prêts pour le développement.", tone: "mono" },
    ],
  },
];

export const offeringSlugs = offerings.map((o) => o.slug);

export function getOffering(slug: string): Offering | undefined {
  return offerings.find((o) => o.slug === slug);
}

export const products = offerings.filter((o) => o.kind === "product");
export const services = offerings.filter((o) => o.kind === "service");
export const productSlugs = products.map((o) => o.slug);
export const serviceSlugs = services.map((o) => o.slug);
