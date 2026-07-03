// Données des « grands services » (pôles d'expertise) de Lunion Lab.
// Chaque grand service regroupe plusieurs sous-services et alimente
// la page /services/[slug] via le template GrandServicePage.

export type SubService = {
  title: string;
  desc: string;
  icon: string; // clé mappée vers une icône lucide dans GrandServicePage
  href?: string; // page de détail si elle existe, sinon /contact
};

export type GrandService = {
  slug: string;
  name: string;
  category: string;
  heroTitle: string;
  heroDesc: string;
  heroImage: string;
  stat: { value: string; label: string };
  subIntro: string;
  subServices: SubService[];
  featuresIntro: string;
  features: { title: string; desc: string }[];
  process: { n: string; title: string; desc: string }[];
};

export const grandServices: GrandService[] = [
  {
    slug: "transformation-digitale",
    name: "Transformation digitale",
    category: "Transformation digitale",
    heroTitle: "On transforme vos défis en produits qui tournent",
    heroDesc:
      "Du site vitrine au logiciel métier, jusqu'à l'application mobile : nous concevons, développons et faisons évoluer des solutions sur-mesure, pensées pour votre activité et vos utilisateurs.",
    heroImage: "/assets/images/services/transformation.jpg",
    stat: { value: "10+", label: "produits livrés" },
    subIntro:
      "Cinq expertises complémentaires pour digitaliser chaque brique de votre activité.",
    subServices: [
      {
        title: "Développement web",
        desc: "Sites vitrines, plateformes SaaS et applications web rapides, sécurisées et bien référencées.",
        icon: "globe",
        href: "/services/web-development",
      },
      {
        title: "Développement mobile",
        desc: "Applications iOS et Android, natives ou cross-plateforme (Flutter, React Native), fluides et fiables.",
        icon: "smartphone",
        href: "/services/mobile-development",
      },
      {
        title: "Logiciels sur-mesure",
        desc: "Des outils métier taillés pour vos process : gestion, back-office, tableaux de bord et automatisations.",
        icon: "code",
        href: "/services/logiciels-sur-mesure",
      },
      {
        title: "Intégration & API",
        desc: "On connecte vos outils (paiement, CRM, ERP) et on expose des API propres, documentées et versionnées.",
        icon: "plug",
        href: "/services/integration-api",
      },
      {
        title: "Cloud & DevOps",
        desc: "Hébergement, CI/CD, monitoring et sécurité pour un produit stable, scalable et toujours disponible.",
        icon: "cloud",
        href: "/services/cloud-devops",
      },
    ],
    featuresIntro:
      "Chaque projet est livré avec les fondations d'un produit durable, pas seulement du code.",
    features: [
      {
        title: "Code propre et maintenable",
        desc: "Une base claire, testée et documentée, facile à reprendre et à faire évoluer.",
      },
      {
        title: "Sécurité by design",
        desc: "Authentification, chiffrement et bonnes pratiques intégrés dès la conception.",
      },
      {
        title: "Performance et SEO",
        desc: "Temps de chargement optimisés et référencement soigné pour être rapide et bien trouvé.",
      },
      {
        title: "Design responsive",
        desc: "Une expérience impeccable sur mobile, tablette et ordinateur.",
      },
      {
        title: "Documentation et transfert",
        desc: "Vous gardez la main : accès, documentation et passation complète.",
      },
      {
        title: "Support et évolutions",
        desc: "Un accompagnement continu après le lancement, pour faire grandir le produit.",
      },
    ],
    process: [
      {
        n: "01",
        title: "Cadrage",
        desc: "On clarifie vos objectifs, vos utilisateurs et le périmètre, avec un plan et un budget transparents.",
      },
      {
        n: "02",
        title: "Design & architecture",
        desc: "Parcours, maquettes et choix techniques validés avant la moindre ligne de code.",
      },
      {
        n: "03",
        title: "Développement",
        desc: "Des livraisons régulières et testables, avec un suivi clair de l'avancement.",
      },
      {
        n: "04",
        title: "Lancement & suivi",
        desc: "Mise en production, formation, monitoring et évolutions dans la durée.",
      },
    ],
  },

  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    category: "UI/UX Design",
    heroTitle: "Des interfaces qu'on adore utiliser",
    heroDesc:
      "On conçoit des expériences claires et désirables : de la recherche utilisateur au design system, chaque écran est pensé pour séduire et convertir.",
    heroImage: "/assets/images/services/uiux.jpg",
    stat: { value: "+98%", label: "de conversions en moyenne" },
    subIntro:
      "De la recherche au design system, tout ce qu'il faut pour une expérience qui convertit.",
    subServices: [
      {
        title: "Design d'interface",
        desc: "Des écrans soignés, cohérents et accessibles, du mobile à l'ordinateur.",
        icon: "penTool",
        href: "/services/design-d-interface",
      },
      {
        title: "Recherche & audit UX",
        desc: "On analyse vos utilisateurs et vos parcours pour lever les points de friction.",
        icon: "search",
        href: "/services/recherche-audit-ux",
      },
      {
        title: "Prototypage",
        desc: "Des maquettes cliquables pour tester et valider avant de développer.",
        icon: "layers",
        href: "/services/prototypage",
      },
      {
        title: "Design system",
        desc: "Une bibliothèque de composants réutilisables, garante de cohérence et de rapidité.",
        icon: "grid",
        href: "/services/design-system",
      },
      {
        title: "Tests utilisateurs",
        desc: "On confronte le design au réel pour décider avec des preuves, pas des avis.",
        icon: "users",
        href: "/services/tests-utilisateurs",
      },
    ],
    featuresIntro:
      "Un design qui sert vos objectifs autant que vos utilisateurs.",
    features: [
      {
        title: "Parcours pensés pour convertir",
        desc: "Chaque écran guide l'utilisateur vers l'action, sans friction.",
      },
      {
        title: "Accessibilité et lisibilité",
        desc: "Contrastes, tailles et hiérarchie respectés pour tous les publics.",
      },
      {
        title: "Cohérence sur tous les écrans",
        desc: "Une même logique visuelle du mobile au grand écran.",
      },
      {
        title: "Design system livré",
        desc: "Composants et règles réutilisables pour aller plus vite ensuite.",
      },
      {
        title: "Maquettes prêtes pour le dev",
        desc: "Des fichiers propres, annotés et exportables, prêts à intégrer.",
      },
      {
        title: "Itérations basées sur les retours",
        desc: "On ajuste à partir de tests réels, pas d'impressions.",
      },
    ],
    process: [
      {
        n: "01",
        title: "Découverte",
        desc: "On comprend vos objectifs, vos utilisateurs et le contexte d'usage.",
      },
      {
        n: "02",
        title: "Idéation & maquettes",
        desc: "Wireframes et parcours pour poser la structure avant le visuel.",
      },
      {
        n: "03",
        title: "Design & système",
        desc: "Interfaces finales et design system, cohérents et documentés.",
      },
      {
        n: "04",
        title: "Validation & handoff",
        desc: "Tests, ajustements et remise propre aux équipes de développement.",
      },
    ],
  },

  {
    slug: "branding",
    name: "Branding",
    category: "Branding",
    heroTitle: "Une marque qu'on n'oublie pas",
    heroDesc:
      "Logo, identité visuelle, univers cohérent : on donne à votre marque une personnalité forte et une image qui marque durablement les esprits.",
    heroImage: "/assets/images/services/branding.jpg",
    stat: { value: "11", label: "marques accompagnées" },
    subIntro:
      "Du logo à la direction artistique, une identité complète et cohérente.",
    subServices: [
      {
        title: "Logo & identité",
        desc: "Un symbole fort et une identité visuelle qui vous ressemble.",
        icon: "sparkles",
        href: "/services/logo-identite",
      },
      {
        title: "Charte graphique",
        desc: "Couleurs, typographies et règles d'usage réunies dans un guide clair.",
        icon: "palette",
        href: "/services/charte-graphique",
      },
      {
        title: "Naming & slogan",
        desc: "Un nom et une signature qui portent votre positionnement.",
        icon: "type",
        href: "/services/naming-slogan",
      },
      {
        title: "Supports & print",
        desc: "Cartes, plaquettes, packaging et supports prêts à imprimer.",
        icon: "printer",
        href: "/services/supports-print",
      },
      {
        title: "Direction artistique",
        desc: "Un univers visuel cohérent sur tous vos points de contact.",
        icon: "wand",
        href: "/services/direction-artistique",
      },
    ],
    featuresIntro: "Une identité pensée pour durer et se décliner partout.",
    features: [
      {
        title: "Recherche et positionnement",
        desc: "On ancre votre marque sur ce qui la rend unique.",
      },
      {
        title: "Logo en versions multiples",
        desc: "Principal, secondaire, monochrome et favicon, prêts à l'emploi.",
      },
      {
        title: "Charte graphique complète",
        desc: "Un document clair pour garder la marque cohérente partout.",
      },
      {
        title: "Fichiers sources livrés",
        desc: "Vous gardez la main sur tous les fichiers vectoriels.",
      },
      {
        title: "Déclinaisons print et digital",
        desc: "Une identité qui fonctionne aussi bien à l'écran que sur papier.",
      },
      {
        title: "Guide d'utilisation de la marque",
        desc: "Les bons réflexes pour appliquer la marque au quotidien.",
      },
    ],
    process: [
      {
        n: "01",
        title: "Immersion",
        desc: "On explore votre histoire, votre marché et vos valeurs.",
      },
      {
        n: "02",
        title: "Exploration créative",
        desc: "Pistes visuelles et directions artistiques à départager.",
      },
      {
        n: "03",
        title: "Design de l'identité",
        desc: "Logo, couleurs, typographies et déclinaisons finalisés.",
      },
      {
        n: "04",
        title: "Charte & livraison",
        desc: "Guide de marque, fichiers sources et accompagnement à la prise en main.",
      },
    ],
  },

  {
    slug: "social-media",
    name: "Social Media",
    category: "Social Media",
    heroTitle: "Vos réseaux, un vrai levier de croissance",
    heroDesc:
      "On transforme vos réseaux sociaux en moteur de visibilité et de ventes : stratégie, contenu, publicité et pilotage par la donnée.",
    heroImage: "/assets/images/services/social.jpg",
    stat: { value: "+18%", label: "de portée en moyenne" },
    subIntro:
      "De la stratégie au reporting, tout pour faire grandir votre communauté.",
    subServices: [
      {
        title: "Community management",
        desc: "On anime vos comptes, on répond et on fait vivre votre communauté.",
        icon: "message",
        href: "/services/community-management",
      },
      {
        title: "Création de contenu",
        desc: "Visuels, vidéos et carrousels pensés pour capter l'attention.",
        icon: "camera",
        href: "/services/creation-de-contenu",
      },
      {
        title: "Publicité (Ads)",
        desc: "Des campagnes ciblées sur Meta, TikTok et Google, optimisées au résultat.",
        icon: "megaphone",
        href: "/services/publicite-ads",
      },
      {
        title: "Stratégie éditoriale",
        desc: "Une ligne claire et un calendrier qui gardent le cap.",
        icon: "calendar",
        href: "/services/strategie-editoriale",
      },
      {
        title: "Reporting & analytics",
        desc: "Des rapports lisibles pour piloter et améliorer chaque mois.",
        icon: "trending",
        href: "/services/reporting-analytics",
      },
    ],
    featuresIntro:
      "Une présence qui sert vos objectifs business, pas juste des likes.",
    features: [
      {
        title: "Stratégie sur-mesure",
        desc: "Des objectifs clairs et un plan aligné sur votre activité.",
      },
      {
        title: "Calendrier éditorial",
        desc: "Une planification régulière pour ne jamais publier au hasard.",
      },
      {
        title: "Création de contenu régulière",
        desc: "Des formats variés et cohérents avec votre marque.",
      },
      {
        title: "Community management réactif",
        desc: "Des réponses rapides et une communauté qui se sent écoutée.",
      },
      {
        title: "Campagnes publicitaires pilotées",
        desc: "Un budget optimisé et suivi, dépensé là où ça performe.",
      },
      {
        title: "Rapports mensuels clairs",
        desc: "Des indicateurs simples pour décider de la suite.",
      },
    ],
    process: [
      {
        n: "01",
        title: "Audit & stratégie",
        desc: "On analyse l'existant et on fixe des objectifs mesurables.",
      },
      {
        n: "02",
        title: "Ligne éditoriale",
        desc: "Ton, formats et calendrier définis pour tenir le cap.",
      },
      {
        n: "03",
        title: "Production & publication",
        desc: "Création des contenus, publication et animation au quotidien.",
      },
      {
        n: "04",
        title: "Analyse & optimisation",
        desc: "On mesure, on apprend et on ajuste pour progresser chaque mois.",
      },
    ],
  },
];

export function getGrandService(slug: string): GrandService | undefined {
  return grandServices.find((s) => s.slug === slug);
}

/** Grand service parent d'un sous-service (via le href /services/<subSlug>). */
export function getParentGrandService(
  subSlug: string,
): GrandService | undefined {
  return grandServices.find((g) =>
    g.subServices.some((sub) => sub.href === `/services/${subSlug}`),
  );
}

export const grandServiceSlugs = grandServices.map((s) => s.slug);
