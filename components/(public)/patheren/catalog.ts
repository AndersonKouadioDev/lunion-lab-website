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
  status?: "prod" | "dev";
  url?: string;
  image?: string;
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
    slug: "lunion-meet",
    kind: "product",
    name: "Lunion-Meet",
    status: "prod",
    url: "https://meet.lunion-lab.com",
    image: "/assets/images/produits/lunion_meet.png",
    category: "Visioconférence souveraine",
    tagline: "La visioconférence temps réel, souveraine et hébergée en Afrique",
    heroTitle: "Appels audio et vidéo de groupe, prêts à l'emploi et intégrables partout",
    heroDesc:
      "Une infrastructure de communication temps réel qui réunit plus de 50 participants par salle en qualité professionnelle grâce à un serveur média SFU. Auto-hébergée, hébergée en Afrique, réglée en FCFA via Wave, avec des SDK et une API pour ajouter la visioconférence à n'importe quelle application.",
    growth: { value: "50+", label: "participants par salle en qualité professionnelle" },
    band: { we: "Nous", verb: "connectons", outcome: "vos équipes et vos applications en temps réel" },
    process: process(
      ["Préparez", "Rejoignez", "Collaborez", "Intégrez"],
      "Écran de préparation : prévisualisez la caméra, testez le micro et choisissez vos périphériques avant d'entrer.",
      "La salle d'attente laisse l'hôte admettre les arrivants, avec reconnexion automatique en cas de coupure réseau.",
      "Partage d'écran haute qualité, messagerie, réactions et dispositions en mosaïque ou pleins feux.",
      "Le serveur émet un jeton, l'application rejoint la salle et les webhooks signalent chaque événement.",
    ),
    featuresIntro: "Une plateforme de réunion complète et une brique d'intégration pour vos applications.",
    features: [
      { icon: "video", title: "Serveur média SFU", desc: "Appels audio et vidéo de groupe multi-nœuds, avec diffusion adaptative et bascule automatique en cas de panne." },
      { icon: "users", title: "Salle d'attente et rôles", desc: "L'hôte admet ou refuse les arrivants, les rôles d'hôte et de co-animateur restent persistants après rafraîchissement." },
      { icon: "layout", title: "Partage d'écran dédié", desc: "Présentez en haute qualité, en parallèle de la caméra, avec épinglage et détection du participant actif." },
      { icon: "lock", title: "Chiffrement de bout en bout", desc: "Option image par image : le serveur ne voit que du flux chiffré, la clé ne lui est jamais transmise." },
      { icon: "code", title: "SDK et API d'intégration", desc: "Six bibliothèques pour le web, le mobile (Flutter, React Native) et le serveur, plus une page d'appel embarquable." },
      { icon: "wallet", title: "Facturation à l'usage par Wave", desc: "Portefeuille prépayé en FCFA rechargé par Wave, tarification à la minute et au volume, avec simulateur public." },
    ],
    modules: [
      { title: "Salle temps réel", desc: "Préparation, salle d'attente, modération, partage d'écran et reconnexion automatique.", tone: "cream" },
      { title: "Multi-locataire", desc: "Hiérarchie compte, projets et applications, avec rôles, invitations et clés d'API.", tone: "sky" },
      { title: "Webhooks et intégration", desc: "Notifications signées HMAC-SHA256, réessais et livraisons rejouables pour le cycle de vie des sessions.", tone: "peach" },
      { title: "Console et facturation", desc: "Gestion des projets, enregistrements, usage et paiement en FCFA depuis un tableau de bord unique.", tone: "mono" },
    ],
  },
  {
    slug: "lunion-booking",
    kind: "product",
    name: "Lunion-Booking",
    status: "dev",
    image: "/assets/images/produits/moockup.png",
    category: "Gestion immobilière",
    tagline: "La plateforme de gestion immobilière tout en un",
    heroTitle: "Biens, transactions, finances et clients réunis dans un seul outil",
    heroDesc:
      "Une plateforme unique qui rassemble toute la gestion d'une activité immobilière : biens, commercialisation, transactions, finances, relation client, marketing et communication. Sur le web et sur mobile, pour les agences, les groupes multi-agences et les promoteurs.",
    growth: { value: "10", label: "modules métiers réunis dans une seule plateforme" },
    band: { we: "Nous", verb: "centralisons", outcome: "toute votre activité immobilière, du bien au service après-vente" },
    process: process(
      ["Fondations et accès", "Cœur métier", "Finances et clients", "Marketing et mise en service"],
      "Nous structurons vos organisations, équipes et rôles, avec un contrôle précis des accès par module et par action.",
      "Nous mettons en place le portefeuille de biens et les transactions : réservation, location longue durée et vente.",
      "Nous déployons le suivi financier, les tableaux de bord et le CRM pour piloter prospects, clients et encaissements.",
      "Nous activons marketing, catalogues, messagerie et fonctions intelligentes, puis stabilisons avant la mise en service.",
    ),
    featuresIntro: "Une source d'information unique, des tâches automatisées et un pilotage en temps réel.",
    features: [
      { icon: "calendar", title: "Portefeuille de biens", desc: "Fiches complètes, médias avec filigrane, tarifs modulables et calendrier synchronisé avec Google Agenda et iCal." },
      { icon: "calendar-sync", title: "Transactions unifiées", desc: "Réservation saisonnière, location longue durée et vente par pipeline glisser-déposer, jusqu'à la signature." },
      { icon: "wallet", title: "Gestion financière", desc: "Encaissements par Mobile Money, virement ou espèces, reçus automatiques, commissions et exports comptables." },
      { icon: "users", title: "Relation client (CRM)", desc: "Fiches contact, historique horodaté des échanges, relances automatisées et affectation à un agent." },
      { icon: "chart", title: "Promotion et marketing", desc: "Programmes immobiliers, gestion des lots et publication programmée sur Facebook, Instagram, TikTok et LinkedIn." },
      { icon: "sparkle", title: "Fonctions intelligentes", desc: "Assistant conversationnel, estimation de la valeur d'un bien et recommandations, avec une prise en charge humaine garantie." },
    ],
    modules: [
      { title: "Utilisateurs et accès", desc: "Groupes, organisations, équipes et rôles sur mesure, avec accès partenaire cloisonné.", tone: "cream" },
      { title: "Biens et transactions", desc: "Catalogue vivant, réservations, suivi des loyers, contrats pré-remplis et encaissements.", tone: "sky" },
      { title: "Finances et CRM", desc: "Tableaux de bord filtrables, relances des impayés et suivi des prospects et clients.", tone: "peach" },
      { title: "Marketing et communication", desc: "Programmes, catalogues PDF, campagnes tracées et messagerie par équipe et par organisation.", tone: "mono" },
    ],
  },
  {
    slug: "lunion-secu",
    kind: "product",
    name: "Lunion-Secu",
    status: "dev",
    image: "/assets/images/produits/mockup_secu.png",
    category: "Ressources humaines",
    tagline: "La plateforme RH pour les entreprises de Côte d'Ivoire et d'Afrique de l'Ouest",
    heroTitle: "Personnel, présences, paie et congés dans un dossier unique par employé",
    heroDesc:
      "Une plateforme RH en mode SaaS qui réunit la gestion du personnel, les présences géolocalisées, la paie, les congés, la communication interne et le pilotage de l'organisation. Pensée pour les entreprises multi-sites et la conformité réglementaire locale.",
    growth: { value: "5", label: "niveaux de structure, de l'organisation à la section" },
    band: { we: "Nous", verb: "sécurisons", outcome: "vos dossiers RH, vos présences et votre paie" },
    process: process(
      ["Mise en route", "Reprise des données", "Prise en main", "Accompagnement"],
      "L'équipe Lunion LAB paramètre votre structure, vos référentiels, votre devise, votre langue et votre logo.",
      "Nous reprenons vos données par import en masse CSV ou XLSX, avec aperçu de validation et traçabilité complète.",
      "Nous formons directions, RH, managers et employés à leurs écrans respectifs, du backoffice au mobile.",
      "Centre d'aide et support accessibles depuis le mobile, avec démonstration adaptée sur demande.",
    ),
    featuresIntro: "Des dossiers RH centralisés, des présences fiables et une conformité tenue à jour.",
    features: [
      { icon: "users", title: "Dossier employé complet", desc: "Identité, carrière, documents et biométrie faciale réunis dans un dossier unique, avec hiérarchie sur cinq niveaux." },
      { icon: "clock", title: "Présence géolocalisée", desc: "Pointage horodaté et localisé par GPS, contrôle de cohérence par calcul de distance et clôture automatique des journées." },
      { icon: "wallet", title: "Cycle de paie complet", desc: "De l'ouverture de la période aux virements, avec bulletins PDF, rubriques configurables, avances et prêts aux employés." },
      { icon: "clipboard", title: "Congés et validations", desc: "Demandes depuis le mobile, soldes calculés par type et exercice, moteur de circuits d'approbation et délégations." },
      { icon: "shield", title: "Conformité ivoirienne", desc: "États légaux CNPS, ITS, FDFP, DISA et SYSCOHADA, appuyés sur un référentiel légal versionné par date d'effet." },
      { icon: "logs", title: "Journal d'audit inviolable", desc: "Chaque action sensible tracée avec état avant et après, isolation stricte par organisation et non-répudiation." },
    ],
    modules: [
      { title: "Personnel et structure", desc: "Dossier employé, hiérarchie sur cinq niveaux, cycle de vie du compte et import en masse tracé.", tone: "mono" },
      { title: "Présence et paie", desc: "Pointage géolocalisé, plannings, rapports sur six mois et cycle de paie de bout en bout.", tone: "sky" },
      { title: "Congés et validations", desc: "Demandes mobiles, soldes par exercice, moteur de circuits et file de mes validations.", tone: "peach" },
      { title: "Communication et conformité", desc: "Fil d'actualité, messagerie, visioconférence Lunion-meet intégrée et états légaux versionnés.", tone: "cream" },
    ],
  },
  {
    slug: "lunion-educ",
    kind: "product",
    name: "Lunion-Educ",
    status: "dev",
    image: "/assets/images/produits/mockup_educ.png",
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
    image: "/assets/images/services/sub/web-development.jpg",
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
    image: "/assets/images/services/sub/mobile-development.jpg",
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
    image: "/assets/images/services/sub/ui-ux-design.jpg",
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

export const statusLabel: Record<"prod" | "dev", string> = {
  prod: "En production",
  dev: "En développement",
};

export const products = offerings.filter((o) => o.kind === "product");
export const services = offerings.filter((o) => o.kind === "service");
export const productSlugs = products.map((o) => o.slug);
export const serviceSlugs = services.map((o) => o.slug);
