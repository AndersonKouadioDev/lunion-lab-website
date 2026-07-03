// Pages sous-services (générées puis relues) — même template que ServicePage.
import type { Offering } from "@/components/(public)/patheren/catalog";

export const subServices: Offering[] = [
  {
    "slug": "logiciels-sur-mesure",
    "image": "/assets/images/services/sub/logiciels-sur-mesure.jpg",
    "kind": "service",
    "name": "Logiciels sur-mesure",
    "category": "Logiciels sur-mesure",
    "tagline": "On développe des outils métier taillés pour votre façon de travailler : gestion, back-office, tableaux de bord et automatisations",
    "heroTitle": "Le logiciel qui épouse vos process",
    "heroDesc": "On développe des outils métier taillés pour votre façon de travailler : gestion, back-office, tableaux de bord et automatisations. Fini les tableurs qui débordent et les tâches répétées à la main.",
    "growth": {
      "value": "70%",
      "label": "de tâches manuelles en moins sur les process automatisés"
    },
    "band": {
      "we": "Nous",
      "verb": "outillons",
      "outcome": "vos équipes avec un logiciel qui pense comme elles travaillent"
    },
    "process": [
      {
        "n": "01",
        "title": "Cartographie des process",
        "desc": "On observe vos flux réels, on liste les tâches, les rôles et les points de blocage à éliminer."
      },
      {
        "n": "02",
        "title": "Architecture & maquettes",
        "desc": "On modélise vos données et vos écrans clés, validés avec vos équipes avant de coder."
      },
      {
        "n": "03",
        "title": "Développement itératif",
        "desc": "On livre module par module, testable en conditions réelles, pour ajuster au plus près du terrain."
      },
      {
        "n": "04",
        "title": "Déploiement & prise en main",
        "desc": "Mise en production, migration de vos données existantes, formation des utilisateurs et suivi."
      }
    ],
    "featuresIntro": "Un logiciel qui vous appartient vraiment, pensé pour tenir dans la durée et suivre votre croissance.",
    "features": [
      {
        "icon": "clipboard",
        "title": "Outils de gestion métier",
        "desc": "Suivi de commandes, stocks, clients ou dossiers : votre activité pilotée depuis un seul endroit."
      },
      {
        "icon": "layout",
        "title": "Back-office sur-mesure",
        "desc": "Une interface d'administration claire, avec juste les fonctions dont vos équipes ont besoin."
      },
      {
        "icon": "chart",
        "title": "Tableaux de bord en temps réel",
        "desc": "Vos chiffres clés à jour d'un coup d'œil, pour décider sans attendre le prochain export."
      },
      {
        "icon": "gauge",
        "title": "Automatisation des tâches",
        "desc": "Relances, calculs, notifications et rapports générés tout seuls, sans intervention manuelle."
      },
      {
        "icon": "users",
        "title": "Rôles et droits d'accès",
        "desc": "Chaque utilisateur voit et modifie ce qui le concerne, avec une traçabilité complète des actions."
      },
      {
        "icon": "plug",
        "title": "Connexion à vos outils",
        "desc": "Le logiciel dialogue avec vos systèmes existants : comptabilité, CRM, paiement ou messagerie."
      }
    ],
    "modules": [
      {
        "title": "Gestion & opérations",
        "desc": "Les outils qui structurent votre quotidien : suivi d'activité, dossiers, planning et flux internes centralisés dans une seule application.",
        "tone": "cream"
      },
      {
        "title": "Back-office & administration",
        "desc": "L'espace de pilotage réservé à vos équipes, avec gestion des contenus, des utilisateurs et des paramètres métier.",
        "tone": "mono"
      },
      {
        "title": "Pilotage & data",
        "desc": "Des tableaux de bord et rapports qui transforment vos données éparses en indicateurs clairs et exploitables.",
        "tone": "sky"
      },
      {
        "title": "Automatisation des process",
        "desc": "Les tâches répétitives déléguées à la machine : workflows, relances et traitements déclenchés automatiquement.",
        "tone": "peach"
      }
    ]
  },
  {
    "slug": "integration-api",
    "image": "/assets/images/services/sub/integration-api.jpg",
    "kind": "service",
    "name": "Intégration & API",
    "category": "Intégration & API",
    "tagline": "On relie vos systèmes (paiement, CRM, ERP) et on conçoit des API propres, documentées et versionnées",
    "heroTitle": "Vos outils enfin connectés, vos API sous contrôle",
    "heroDesc": "On relie vos systèmes (paiement, CRM, ERP) et on conçoit des API propres, documentées et versionnées. Fini les ressaisies et les données qui ne parlent pas entre elles.",
    "growth": {
      "value": "-70%",
      "label": "de saisies manuelles après connexion des outils"
    },
    "band": {
      "we": "Nous",
      "verb": "faisons dialoguer",
      "outcome": "tous vos outils autour d'API claires et fiables"
    },
    "process": [
      {
        "n": "01",
        "title": "Cartographie des flux",
        "desc": "On liste vos outils, vos données et les points de friction : ressaisies, exports manuels, informations dupliquées. On priorise les connexions qui font gagner du temps tout de suite."
      },
      {
        "n": "02",
        "title": "Conception des contrats",
        "desc": "On dessine les endpoints, les formats d'échange et les règles d'authentification. Chaque API est pensée comme un contrat stable, versionné, que vos équipes et partenaires peuvent utiliser sans surprise."
      },
      {
        "n": "03",
        "title": "Intégration et webhooks",
        "desc": "On branche paiement, CRM et ERP, on met en place les webhooks pour réagir aux événements en temps réel, et on sécurise les échanges avec clés et permissions maîtrisées."
      },
      {
        "n": "04",
        "title": "Documentation et passation",
        "desc": "On livre une documentation à jour, des exemples d'appels et un environnement de test. Vos développeurs prennent la main sans dépendre de nous."
      }
    ],
    "featuresIntro": "Ce que vous obtenez concrètement quand on connecte vos systèmes et qu'on expose vos API.",
    "features": [
      {
        "icon": "plug",
        "title": "Connecteurs métier",
        "desc": "Paiement, CRM, ERP, outils comptables : on relie vos solutions existantes plutôt que de tout remplacer."
      },
      {
        "icon": "code",
        "title": "API sur-mesure",
        "desc": "Des endpoints propres et cohérents, taillés pour vos usages, exposés en interne ou à vos partenaires."
      },
      {
        "icon": "book",
        "title": "Documentation vivante",
        "desc": "Chaque route décrite, avec exemples et environnement de test, pour des intégrations sans allers-retours."
      },
      {
        "icon": "bell",
        "title": "Webhooks temps réel",
        "desc": "Vos systèmes réagissent aux événements dès qu'ils surviennent : commande payée, statut mis à jour, alerte déclenchée."
      },
      {
        "icon": "key",
        "title": "Authentification maîtrisée",
        "desc": "Clés, jetons et permissions granulaires pour contrôler qui accède à quoi, et jusqu'où."
      },
      {
        "icon": "logs",
        "title": "Versionnage et suivi",
        "desc": "Des API versionnées et des logs clairs : vous faites évoluer sans casser l'existant ni les intégrations en place."
      }
    ],
    "modules": [
      {
        "title": "Connexion des outils",
        "desc": "Intégration de vos solutions de paiement, CRM et ERP pour que vos données circulent sans ressaisie ni export manuel.",
        "tone": "cream"
      },
      {
        "title": "Conception d'API",
        "desc": "Des interfaces propres, documentées et pensées comme des contrats stables, exposées en interne ou vers vos partenaires.",
        "tone": "sky"
      },
      {
        "title": "Événements et webhooks",
        "desc": "Une architecture qui réagit en temps réel aux événements clés de votre activité, sans polling ni traitements différés.",
        "tone": "peach"
      },
      {
        "title": "Sécurité et versionnage",
        "desc": "Authentification, permissions et gestion des versions pour faire évoluer vos API en toute sécurité, sur la durée.",
        "tone": "mono"
      }
    ]
  },
  {
    "slug": "cloud-devops",
    "image": "/assets/images/services/sub/cloud-devops.jpg",
    "kind": "service",
    "name": "Cloud & DevOps",
    "category": "Cloud & DevOps",
    "tagline": "On héberge, automatise et sécurise votre infrastructure cloud",
    "heroTitle": "Un produit qui tient la charge, jour et nuit",
    "heroDesc": "On héberge, automatise et sécurise votre infrastructure cloud. Déploiements maîtrisés, monitoring continu et haute disponibilité pour que votre application reste rapide, stable et prête à grandir.",
    "growth": {
      "value": "-70%",
      "label": "de temps de mise en production"
    },
    "band": {
      "we": "Nous",
      "verb": "gardons votre produit",
      "outcome": "en ligne, rapide et prêt à absorber vos pics de trafic"
    },
    "process": [
      {
        "n": "01",
        "title": "Audit d'infrastructure",
        "desc": "On cartographie votre hébergement actuel, vos coûts et vos points de fragilité pour cibler ce qui doit être stabilisé en priorité."
      },
      {
        "n": "02",
        "title": "Architecture cloud",
        "desc": "On dimensionne l'hébergement, les conteneurs et la répartition de charge selon votre trafic réel et vos objectifs de disponibilité."
      },
      {
        "n": "03",
        "title": "Automatisation CI/CD",
        "desc": "On met en place des pipelines de déploiement testés et reproductibles, pour livrer en confiance sans intervention manuelle."
      },
      {
        "n": "04",
        "title": "Monitoring & astreinte",
        "desc": "On installe les alertes, les tableaux de bord et les sauvegardes, puis on assure le suivi pour anticiper les incidents avant vos utilisateurs."
      }
    ],
    "featuresIntro": "Une infrastructure livrée clé en main, documentée et sous contrôle, pas une boîte noire que vous subissez.",
    "features": [
      {
        "icon": "globe",
        "title": "Hébergement cloud maîtrisé",
        "desc": "Mise en place sur AWS, GCP ou OVH, dimensionnée pour vos besoins et vos coûts réels."
      },
      {
        "icon": "rocket",
        "title": "Pipelines CI/CD",
        "desc": "Déploiements automatisés, testés et reproductibles, du commit jusqu'à la production."
      },
      {
        "icon": "layout",
        "title": "Conteneurs & orchestration",
        "desc": "Docker et Kubernetes pour des environnements isolés, portables et faciles à répliquer."
      },
      {
        "icon": "gauge",
        "title": "Monitoring en continu",
        "desc": "Alertes, métriques et logs centralisés pour détecter les anomalies avant qu'elles ne dégénèrent."
      },
      {
        "icon": "shield",
        "title": "Sécurité & sauvegardes",
        "desc": "Chiffrement, gestion des accès et backups automatiques testés pour dormir tranquille."
      },
      {
        "icon": "chart",
        "title": "Scalabilité à la demande",
        "desc": "Une infrastructure qui absorbe vos pics de trafic sans tomber ni vous ruiner."
      }
    ],
    "modules": [
      {
        "title": "Hébergement & scalabilité",
        "desc": "Infrastructure cloud dimensionnée pour votre charge, avec montée en puissance automatique et haute disponibilité.",
        "tone": "sky"
      },
      {
        "title": "Livraison continue",
        "desc": "Pipelines CI/CD et conteneurs pour déployer vite, souvent et sans casse, dans des environnements maîtrisés.",
        "tone": "cream"
      },
      {
        "title": "Observabilité",
        "desc": "Monitoring, alertes et logs centralisés pour garder l'œil sur la santé de votre produit en temps réel.",
        "tone": "peach"
      },
      {
        "title": "Sécurité & résilience",
        "desc": "Sauvegardes, gestion des accès et plans de reprise pour protéger vos données et votre continuité de service.",
        "tone": "mono"
      }
    ]
  },
  {
    "slug": "design-d-interface",
    "image": "/assets/images/services/sub/design-d-interface.jpg",
    "kind": "service",
    "name": "Design d'interface",
    "category": "Design d'interface",
    "tagline": "Nous concevons des interfaces soignées et cohérentes, du mobile au desktop",
    "heroTitle": "Des interfaces qui donnent envie de cliquer",
    "heroDesc": "Nous concevons des interfaces soignées et cohérentes, du mobile au desktop. Chaque écran est pensé pour être clair, accessible et fidèle à votre marque.",
    "growth": {
      "value": "-40%",
      "label": "de va-et-vient entre design et développement grâce à une maquette prête à intégrer"
    },
    "band": {
      "we": "Nous",
      "verb": "dessinons",
      "outcome": "des interfaces claires que vos utilisateurs comprennent au premier regard"
    },
    "process": [
      {
        "n": "01",
        "title": "Cadrage visuel",
        "desc": "On aligne les parcours, les écrans clés et les contraintes de marque. Objectif : savoir exactement quoi dessiner et pourquoi."
      },
      {
        "n": "02",
        "title": "Maquettes basse fidélité",
        "desc": "On pose la structure de chaque écran, la hiérarchie et la navigation, avant d'ajouter la moindre couleur. On valide vite, on corrige tôt."
      },
      {
        "n": "03",
        "title": "Design haute fidélité",
        "desc": "On applique typographie, couleurs, espacements et composants. Chaque écran devient fini, cohérent et prêt à être testé sur vrais appareils."
      },
      {
        "n": "04",
        "title": "Livraison et handoff",
        "desc": "On remet des maquettes organisées, un système de composants réutilisable et les specs dont vos développeurs ont besoin pour intégrer sans deviner."
      }
    ],
    "featuresIntro": "Ce que vous recevez concrètement à la fin du projet, prêt à être intégré par votre équipe technique.",
    "features": [
      {
        "icon": "layout",
        "title": "Écrans finalisés",
        "desc": "Toutes les interfaces de votre produit, dessinées avec une hiérarchie claire et une grille cohérente d'un écran à l'autre."
      },
      {
        "icon": "smartphone",
        "title": "Adapté mobile et desktop",
        "desc": "Chaque écran est décliné sur les tailles qui comptent pour vous, du téléphone au grand écran, sans perte de lisibilité."
      },
      {
        "icon": "palette",
        "title": "Système de composants",
        "desc": "Boutons, champs, cartes et états regroupés dans une bibliothèque réutilisable qui garde votre produit homogène dans le temps."
      },
      {
        "icon": "accessibility",
        "title": "Accessibilité intégrée",
        "desc": "Contrastes, tailles de texte et zones de clic pensés pour que l'interface reste utilisable par le plus grand nombre."
      },
      {
        "icon": "pen",
        "title": "États et interactions",
        "desc": "Survol, focus, chargement, erreur, vide : on dessine les vrais moments d'usage, pas seulement l'écran parfait."
      },
      {
        "icon": "clipboard",
        "title": "Handoff développeur",
        "desc": "Specs, mesures et exports prêts pour l'intégration, pour que vos développeurs codent l'interface sans approximation."
      }
    ],
    "modules": [
      {
        "title": "Structure et hiérarchie",
        "desc": "Organisation de chaque écran, mise en avant de l'essentiel et navigation évidente pour guider l'utilisateur sans effort.",
        "tone": "cream"
      },
      {
        "title": "Identité visuelle appliquée",
        "desc": "Couleurs, typographie et espacements alignés sur votre marque, pour une interface qui vous ressemble vraiment.",
        "tone": "peach"
      },
      {
        "title": "Design responsive",
        "desc": "Une expérience cohérente du mobile au desktop, avec des écrans pensés pour chaque contexte d'usage.",
        "tone": "sky"
      },
      {
        "title": "Design system durable",
        "desc": "Composants et règles réutilisables qui gardent votre produit cohérent au fil des évolutions et des nouvelles pages.",
        "tone": "mono"
      }
    ]
  },
  {
    "slug": "recherche-audit-ux",
    "image": "/assets/images/services/sub/recherche-audit-ux.jpg",
    "kind": "service",
    "name": "Recherche & audit UX",
    "category": "Recherche & audit UX",
    "tagline": "On observe comment vos utilisateurs se comportent vraiment, on mesure où ils bloquent, et on vous livre des recommandations concrètes pour lever les frictions et convertir davantage",
    "heroTitle": "Comprendre vos utilisateurs avant de redesigner",
    "heroDesc": "On observe comment vos utilisateurs se comportent vraiment, on mesure où ils bloquent, et on vous livre des recommandations concrètes pour lever les frictions et convertir davantage.",
    "growth": {
      "value": "3 semaines",
      "label": "pour identifier les points de friction majeurs de votre parcours"
    },
    "band": {
      "we": "Nous",
      "verb": "traquons",
      "outcome": "les frictions qui font fuir vos utilisateurs"
    },
    "process": [
      {
        "n": "01",
        "title": "Cadrage",
        "desc": "On aligne les objectifs business, on définit les parcours critiques à examiner et on identifie qui sont vos utilisateurs clés."
      },
      {
        "n": "02",
        "title": "Collecte",
        "desc": "Entretiens, tests de parcours et analyse de vos données d'usage : on rassemble les preuves de ce qui bloque vraiment."
      },
      {
        "n": "03",
        "title": "Analyse",
        "desc": "On croise les observations et les chiffres pour hiérarchiser les frictions selon leur impact réel sur la conversion."
      },
      {
        "n": "04",
        "title": "Restitution",
        "desc": "On vous livre le rapport, la cartographie des parcours et un plan d'action priorisé, présentés à vos équipes."
      }
    ],
    "featuresIntro": "Ce que vous recevez au terme de la mission : des constats appuyés par des faits, pas des avis, et un plan d'action priorisé que vos équipes peuvent exécuter dès le lendemain.",
    "features": [
      {
        "icon": "users",
        "title": "Entretiens utilisateurs",
        "desc": "Des sessions individuelles avec vos vrais utilisateurs pour comprendre leurs besoins, leurs attentes et ce qui les freine."
      },
      {
        "icon": "search",
        "title": "Audit d'ergonomie",
        "desc": "Analyse experte de votre interface interface par écran, écran par écran, pour repérer chaque obstacle à l'usage."
      },
      {
        "icon": "video",
        "title": "Tests de parcours",
        "desc": "Observation de tâches réelles filmées : on voit précisément où vos utilisateurs hésitent, se trompent ou abandonnent."
      },
      {
        "icon": "gauge",
        "title": "Analyse des données d'usage",
        "desc": "Lecture de vos analytics et heatmaps pour situer les points de chute et les pages qui plombent la conversion."
      },
      {
        "icon": "clipboard",
        "title": "Rapport de recommandations",
        "desc": "Chaque friction documentée, hiérarchisée par impact, avec la correction concrète à apporter."
      },
      {
        "icon": "layout",
        "title": "Cartographie des parcours",
        "desc": "Le parcours utilisateur reconstitué de bout en bout, avec les moments de rupture clairement identifiés."
      }
    ],
    "modules": [
      {
        "title": "Recherche utilisateur",
        "desc": "Entretiens, questionnaires et observation terrain pour partir de ce que vivent réellement vos utilisateurs, pas de suppositions.",
        "tone": "cream"
      },
      {
        "title": "Audit d'ergonomie",
        "desc": "Revue heuristique de l'interface au regard des standards d'utilisabilité, pour isoler les frictions objectives.",
        "tone": "sky"
      },
      {
        "title": "Analyse des parcours",
        "desc": "Reconstitution des chemins réels vers la conversion et repérage des étapes où l'utilisateur décroche.",
        "tone": "peach"
      },
      {
        "title": "Plan d'action priorisé",
        "desc": "Recommandations classées par impact et effort, pour savoir quoi corriger en premier et pourquoi.",
        "tone": "mono"
      }
    ]
  },
  {
    "slug": "prototypage",
    "image": "/assets/images/services/sub/prototypage.jpg",
    "kind": "service",
    "name": "Prototypage",
    "category": "Prototypage",
    "tagline": "Wireframes, maquettes cliquables et prototypes interactifs pour éprouver chaque parcours avec de vrais utilisateurs",
    "heroTitle": "Testez vos idées avant de les construire",
    "heroDesc": "Wireframes, maquettes cliquables et prototypes interactifs pour éprouver chaque parcours avec de vrais utilisateurs. Vous décidez sur du concret, pas sur des suppositions.",
    "growth": {
      "value": "-40%",
      "label": "d'allers-retours en développement grâce aux parcours validés en amont"
    },
    "band": {
      "we": "Nous",
      "verb": "validons vos parcours",
      "outcome": "avant la première ligne de code"
    },
    "process": [
      {
        "n": "01",
        "title": "Cadrage des parcours",
        "desc": "On liste les écrans clés et les moments critiques de l'expérience. On aligne l'équipe sur ce qu'il faut absolument valider avant de coder."
      },
      {
        "n": "02",
        "title": "Wireframes basse fidélité",
        "desc": "On pose la structure et la logique de navigation en noir et blanc. Rapide à produire, rapide à faire évoluer, sans se noyer dans les détails visuels."
      },
      {
        "n": "03",
        "title": "Maquette cliquable",
        "desc": "On monte un prototype interactif où chaque bouton mène quelque part. L'expérience se ressent au doigt, pas seulement à l'écran."
      },
      {
        "n": "04",
        "title": "Tests et itérations",
        "desc": "On confronte le prototype à de vrais utilisateurs, on repère les points de friction et on ajuste avant de passer au développement."
      }
    ],
    "featuresIntro": "Ce que vous recevez à la fin du prototypage : de quoi tester, décider et lancer le développement en confiance.",
    "features": [
      {
        "icon": "layout",
        "title": "Wireframes structurés",
        "desc": "Le squelette de chaque écran clé, pensé pour la logique de navigation avant l'esthétique."
      },
      {
        "icon": "smartphone",
        "title": "Maquettes cliquables",
        "desc": "Des prototypes interactifs sur desktop et mobile, testables directement sur l'appareil."
      },
      {
        "icon": "users",
        "title": "Tests utilisateurs",
        "desc": "Sessions de test guidées pour observer les vrais comportements et repérer les blocages."
      },
      {
        "icon": "search",
        "title": "Repérage des frictions",
        "desc": "Un relevé clair des points où les utilisateurs hésitent, se perdent ou abandonnent."
      },
      {
        "icon": "clipboard",
        "title": "Recommandations d'itération",
        "desc": "Des ajustements concrets et priorisés à intégrer avant la phase de développement."
      },
      {
        "icon": "code",
        "title": "Parcours prêt au dev",
        "desc": "Des flux validés et documentés que vos développeurs peuvent construire sans zone d'ombre."
      }
    ],
    "modules": [
      {
        "title": "Wireframing",
        "desc": "Structure des écrans et arborescence de navigation posées en basse fidélité pour itérer vite.",
        "tone": "cream"
      },
      {
        "title": "Prototypage interactif",
        "desc": "Maquettes cliquables qui simulent le produit réel, transitions et interactions comprises.",
        "tone": "sky"
      },
      {
        "title": "Tests d'usage",
        "desc": "Confrontation des parcours à de vrais utilisateurs pour valider les hypothèses de conception.",
        "tone": "peach"
      },
      {
        "title": "Itération et handoff",
        "desc": "Ajustements successifs puis transmission de parcours clairs et validés à l'équipe de développement.",
        "tone": "mono"
      }
    ]
  },
  {
    "slug": "design-system",
    "image": "/assets/images/services/sub/design-system.jpg",
    "kind": "service",
    "name": "Design system",
    "category": "Design system",
    "tagline": "Nous construisons votre bibliothèque de composants, vos tokens et votre documentation",
    "heroTitle": "Un design system qui fait gagner du temps",
    "heroDesc": "Nous construisons votre bibliothèque de composants, vos tokens et votre documentation. Vos équipes produit et dev parlent enfin le même langage et livrent plus vite, sans casser la cohérence.",
    "growth": {
      "value": "2x",
      "label": "de vitesse sur les nouveaux écrans une fois le système en place"
    },
    "band": {
      "we": "Nous",
      "verb": "industrialisons",
      "outcome": "votre interface en une bibliothèque vivante qui accélère chaque projet"
    },
    "process": [
      {
        "n": "01",
        "title": "Audit de l'existant",
        "desc": "Nous inventorions vos écrans et repérons les incohérences, doublons et composants à unifier."
      },
      {
        "n": "02",
        "title": "Fondations et tokens",
        "desc": "Nous posons la grille, les couleurs et la typographie sous forme de tokens partagés et réutilisables."
      },
      {
        "n": "03",
        "title": "Composants et doc",
        "desc": "Nous construisons la bibliothèque de composants et rédigeons la documentation d'usage associée."
      },
      {
        "n": "04",
        "title": "Livraison et passation",
        "desc": "Nous formons vos équipes et mettons en place le versionnage pour que le système évolue sans vous bloquer."
      }
    ],
    "featuresIntro": "Ce que vous recevez, prêt à brancher sur vos produits et directement exploitable par vos designers comme vos développeurs.",
    "features": [
      {
        "icon": "layout",
        "title": "Bibliothèque de composants",
        "desc": "Boutons, formulaires, cartes, modales et navigation, versionnés dans Figma et prêts pour le code."
      },
      {
        "icon": "palette",
        "title": "Tokens de design",
        "desc": "Couleurs, typographies, espacements et rayons centralisés, synchronisés entre design et développement."
      },
      {
        "icon": "book",
        "title": "Documentation d'usage",
        "desc": "Chaque composant avec ses règles, ses états et ses cas d'emploi, pour que personne ne réinvente la roue."
      },
      {
        "icon": "accessibility",
        "title": "Accessibilité intégrée",
        "desc": "Contrastes, tailles de cible et navigation clavier pensés dès la conception des composants."
      },
      {
        "icon": "code",
        "title": "Passage au code",
        "desc": "Composants prêts à intégrer côté React, avec une correspondance claire entre maquette et implémentation."
      },
      {
        "icon": "logs",
        "title": "Versionnage et changelog",
        "desc": "Un historique clair des évolutions pour que vos équipes suivent chaque mise à jour sans surprise."
      }
    ],
    "modules": [
      {
        "title": "Fondations",
        "desc": "Tokens de couleur, typographie, espacement et grille qui donnent une base cohérente à tout le système.",
        "tone": "cream"
      },
      {
        "title": "Composants",
        "desc": "Une bibliothèque d'éléments réutilisables, avec leurs états et variantes, pensée pour couvrir vos écrans réels.",
        "tone": "sky"
      },
      {
        "title": "Documentation",
        "desc": "Guides d'usage, do & don't et exemples concrets pour que designers et développeurs restent alignés.",
        "tone": "peach"
      },
      {
        "title": "Gouvernance",
        "desc": "Règles de contribution, versionnage et rituels de mise à jour pour faire vivre le système dans la durée.",
        "tone": "mono"
      }
    ]
  },
  {
    "slug": "tests-utilisateurs",
    "image": "/assets/images/services/sub/tests-utilisateurs.jpg",
    "kind": "service",
    "name": "Tests utilisateurs",
    "category": "Tests utilisateurs",
    "tagline": "Observez comment vos utilisateurs se servent réellement de votre produit",
    "heroTitle": "Testez avec de vrais utilisateurs",
    "heroDesc": "Observez comment vos utilisateurs se servent réellement de votre produit. On identifie les points de friction qui bloquent l'adoption et on vous donne des décisions claires, appuyées par des preuves.",
    "growth": {
      "value": "1 test sur 5 utilisateurs",
      "label": "révèle jusqu'à 80% des problèmes d'utilisabilité majeurs"
    },
    "band": {
      "we": "Nous",
      "verb": "remplaçons les débats d'opinion par",
      "outcome": "des décisions fondées sur ce que vos utilisateurs font vraiment"
    },
    "process": [
      {
        "n": "01",
        "title": "Cadrage et recrutement",
        "desc": "On définit les questions à trancher et les parcours à observer, puis on recrute des participants qui correspondent à vos vrais utilisateurs, ici à Abidjan comme ailleurs."
      },
      {
        "n": "02",
        "title": "Scénarios de test",
        "desc": "On prépare des tâches concrètes et un protocole neutre, sans questions orientées, pour que vous voyiez le produit tel qu'il est vécu, pas tel qu'on l'imagine."
      },
      {
        "n": "03",
        "title": "Sessions et observation",
        "desc": "On mène les sessions, en personne ou à distance, on filme les parcours et on note chaque hésitation, erreur et abandon avec le contexte qui l'explique."
      },
      {
        "n": "04",
        "title": "Analyse et recommandations",
        "desc": "On classe les problèmes par gravité et par fréquence, puis on livre un plan d'actions priorisé : quoi corriger d'abord, pourquoi, et l'impact attendu."
      }
    ],
    "featuresIntro": "Chaque test livre des observations exploitables, pas un rapport qui dort dans un tiroir. Voici ce que vous recevez.",
    "features": [
      {
        "icon": "users",
        "title": "Recrutement de participants",
        "desc": "Des testeurs sélectionnés selon vos profils cibles, avec la logistique et la prise de rendez-vous gérées de bout en bout."
      },
      {
        "icon": "clipboard",
        "title": "Protocole de test sur mesure",
        "desc": "Scénarios et tâches construits autour de vos vrais parcours, avec des questions neutres qui ne biaisent pas les résultats."
      },
      {
        "icon": "video",
        "title": "Enregistrements des sessions",
        "desc": "Chaque session filmée avec écran et réactions, pour revoir les moments clés et convaincre les équipes en interne."
      },
      {
        "icon": "search",
        "title": "Analyse des frictions",
        "desc": "Chaque blocage identifié, classé par gravité et fréquence, avec le comportement observé qui le documente."
      },
      {
        "icon": "chart",
        "title": "Rapport de décision priorisé",
        "desc": "Une synthèse claire des problèmes et des recommandations concrètes, ordonnées par impact sur l'adoption."
      },
      {
        "icon": "accessibility",
        "title": "Contrôle d'accessibilité",
        "desc": "Vérification que le produit reste utilisable pour tous les profils, y compris en contexte de connexion et d'appareils variés."
      }
    ],
    "modules": [
      {
        "title": "Préparation du test",
        "desc": "Définition des objectifs, choix de la méthode, recrutement des participants et rédaction du protocole. Un test bien cadré vaut dix sessions improvisées.",
        "tone": "cream"
      },
      {
        "title": "Sessions d'observation",
        "desc": "Conduite des tests modérés ou non modérés, en présentiel ou à distance, avec captation des parcours et des réactions en situation réelle.",
        "tone": "sky"
      },
      {
        "title": "Analyse des résultats",
        "desc": "Dépouillement des sessions, repérage des schémas récurrents et hiérarchisation des problèmes selon leur gravité et leur fréquence.",
        "tone": "peach"
      },
      {
        "title": "Décisions et suivi",
        "desc": "Recommandations priorisées, restitution à vos équipes et accompagnement pour transformer les constats en corrections effectives.",
        "tone": "mono"
      }
    ]
  },
  {
    "slug": "logo-identite",
    "image": "/assets/images/services/sub/logo-identite.jpg",
    "kind": "service",
    "name": "Logo & identité",
    "category": "Logo & identité",
    "tagline": "Nous concevons une identité visuelle forte et cohérente, du logo à la charte, pour que votre marque soit reconnue, mémorisée et prise au sérieux partout où elle apparaît",
    "heroTitle": "Un logo qu'on reconnaît au premier regard",
    "heroDesc": "Nous concevons une identité visuelle forte et cohérente, du logo à la charte, pour que votre marque soit reconnue, mémorisée et prise au sérieux partout où elle apparaît.",
    "growth": {
      "value": "3 pistes",
      "label": "de logo explorées avant de trancher"
    },
    "band": {
      "we": "Nous",
      "verb": "donnons à votre marque",
      "outcome": "un visage clair, cohérent et impossible à confondre"
    },
    "process": [
      {
        "n": "01",
        "title": "Immersion et cadrage",
        "desc": "On plonge dans votre activité, votre positionnement et votre marché. On analyse la concurrence pour repérer les codes à casser et le territoire où vous démarquer."
      },
      {
        "n": "02",
        "title": "Exploration créative",
        "desc": "On dessine plusieurs directions de logo, chacune avec sa propre intention. Vous comparez des pistes réelles, pas des variantes cosmétiques d'une seule idée."
      },
      {
        "n": "03",
        "title": "Affinage et système",
        "desc": "On affine la piste retenue, puis on construit l'univers autour : couleurs, typographies, déclinaisons et règles d'usage qui tiennent la route sur tous les supports."
      },
      {
        "n": "04",
        "title": "Livraison et transmission",
        "desc": "On vous remet tous les formats prêts à l'emploi et une charte claire, pour que votre équipe applique l'identité sans se tromper, du print au digital."
      }
    ],
    "featuresIntro": "Une identité livrée complète et prête à l'usage, pas un simple fichier logo isolé.",
    "features": [
      {
        "icon": "pen",
        "title": "Logo principal et variantes",
        "desc": "Version horizontale, verticale, monochrome et icône seule, pour s'adapter à chaque contexte sans jamais perdre en lisibilité."
      },
      {
        "icon": "palette",
        "title": "Palette de couleurs",
        "desc": "Couleurs principales et secondaires avec codes précis, pensées pour l'écran comme pour l'impression."
      },
      {
        "icon": "layout",
        "title": "Système typographique",
        "desc": "Choix des polices et règles de hiérarchie pour un ton visuel cohérent sur tous vos textes."
      },
      {
        "icon": "book",
        "title": "Charte graphique",
        "desc": "Un guide clair des bonnes pratiques : zones de protection, tailles minimales, usages interdits."
      },
      {
        "icon": "sparkle",
        "title": "Déclinaisons de marque",
        "desc": "Applications concrètes du logo sur vos supports clés, du réseau social à la carte de visite."
      },
      {
        "icon": "clipboard",
        "title": "Fichiers sources livrés",
        "desc": "Tous les formats vectoriels et exports prêts à l'emploi, organisés et documentés pour votre équipe."
      }
    ],
    "modules": [
      {
        "title": "Stratégie de marque",
        "desc": "On clarifie ce que votre marque veut incarner avant de dessiner quoi que ce soit. Le logo découle du sens, pas l'inverse.",
        "tone": "cream"
      },
      {
        "title": "Conception du logo",
        "desc": "Un symbole simple, différenciant et durable, dessiné pour rester juste dans dix ans comme aujourd'hui.",
        "tone": "mono"
      },
      {
        "title": "Univers visuel",
        "desc": "Couleurs, typographies et éléments graphiques qui prolongent le logo et donnent une vraie signature à la marque.",
        "tone": "peach"
      },
      {
        "title": "Guide d'application",
        "desc": "Les règles claires qui permettent à n'importe qui d'utiliser l'identité correctement, partout et tout le temps.",
        "tone": "sky"
      }
    ]
  },
  {
    "slug": "charte-graphique",
    "image": "/assets/images/services/sub/charte-graphique.jpg",
    "kind": "service",
    "name": "Charte graphique",
    "category": "Charte graphique",
    "tagline": "Couleurs, typographies, iconographie et règles d'usage réunies dans un guide clair",
    "heroTitle": "Une charte graphique qui tient la route",
    "heroDesc": "Couleurs, typographies, iconographie et règles d'usage réunies dans un guide clair. Vos visuels restent cohérents, que ce soit vous, votre équipe ou un prestataire qui les produit.",
    "growth": {
      "value": "2x",
      "label": "plus rapide pour produire un visuel conforme"
    },
    "band": {
      "we": "Nous",
      "verb": "réunissons",
      "outcome": "vos couleurs, vos typos et vos règles dans un guide que toute votre équipe applique sans hésiter"
    },
    "process": [
      {
        "n": "01",
        "title": "Audit de l'existant",
        "desc": "On rassemble votre logo, vos couleurs et vos supports actuels pour repérer les incohérences et les manques à combler."
      },
      {
        "n": "02",
        "title": "Palette & typographies",
        "desc": "On fixe les couleurs (avec leurs codes HEX, RVB et CMJN), les polices et leurs tailles, puis on valide leur lisibilité à l'écran comme au print."
      },
      {
        "n": "03",
        "title": "Iconographie & règles d'usage",
        "desc": "On définit le style des icônes, les espaces de protection, les tailles minimales et les usages à éviter, illustrés par des exemples concrets."
      },
      {
        "n": "04",
        "title": "Guide & remise",
        "desc": "On assemble le tout dans un guide de marque clair, livré en PDF et avec les fichiers sources, accompagné d'une prise en main."
      }
    ],
    "featuresIntro": "Un guide de marque complet, pensé pour être appliqué au quotidien, pas rangé dans un tiroir.",
    "features": [
      {
        "icon": "palette",
        "title": "Palette de couleurs codée",
        "desc": "Couleurs principales et secondaires avec codes HEX, RVB et CMJN, prêtes pour l'écran et l'impression."
      },
      {
        "icon": "pen",
        "title": "Système typographique",
        "desc": "Polices, tailles et hiérarchie des titres au corps de texte, définis pour rester lisibles partout."
      },
      {
        "icon": "sparkle",
        "title": "Style d'iconographie",
        "desc": "Un jeu d'icônes cohérent et ses règles de tracé, pour un langage visuel unifié."
      },
      {
        "icon": "book",
        "title": "Règles d'usage claires",
        "desc": "Espaces de protection, tailles minimales et usages interdits, illustrés par des exemples concrets."
      },
      {
        "icon": "layout",
        "title": "Exemples d'application",
        "desc": "Des déclinaisons types (carte, post, en-tête) pour montrer la charte en situation réelle."
      },
      {
        "icon": "clipboard",
        "title": "Guide et fichiers sources",
        "desc": "Un document PDF prêt à partager et les fichiers sources, pour que vous gardiez la main."
      }
    ],
    "modules": [
      {
        "title": "Couleurs",
        "desc": "Palette principale et secondaire, codes exacts et règles de contraste pour une lecture sans faille.",
        "tone": "peach"
      },
      {
        "title": "Typographies",
        "desc": "Familles de polices, graisses et hiérarchie de titrage, calibrées pour l'écran et le papier.",
        "tone": "cream"
      },
      {
        "title": "Iconographie",
        "desc": "Style, grille et proportions des icônes pour un vocabulaire visuel homogène.",
        "tone": "sky"
      },
      {
        "title": "Règles d'usage",
        "desc": "Bons réflexes, cas à éviter et exemples d'application pour garder la marque cohérente partout.",
        "tone": "mono"
      }
    ]
  },
  {
    "slug": "naming-slogan",
    "image": "/assets/images/services/sub/naming-slogan.jpg",
    "kind": "service",
    "name": "Naming & slogan",
    "category": "Naming & slogan",
    "tagline": "Nous créons le nom de votre marque et sa signature, alignés sur votre positionnement et prêts à être portés partout, de l'enseigne au dépôt légal",
    "heroTitle": "Un nom qui reste, une signature qui parle",
    "heroDesc": "Nous créons le nom de votre marque et sa signature, alignés sur votre positionnement et prêts à être portés partout, de l'enseigne au dépôt légal.",
    "growth": {
      "value": "3 pistes",
      "label": "de noms travaillées et défendues avant le choix final"
    },
    "band": {
      "we": "Nous",
      "verb": "transformons votre positionnement en",
      "outcome": "un nom mémorable et une signature qui le résume en quelques mots"
    },
    "process": [
      {
        "n": "01",
        "title": "Cadrage du positionnement",
        "desc": "On clarifie ce que votre marque défend, à qui elle parle et ce qui la distingue. Ce socle guide chaque nom proposé, rien n'est choisi au hasard."
      },
      {
        "n": "02",
        "title": "Exploration des territoires",
        "desc": "On génère de nombreuses pistes selon plusieurs angles : descriptif, évocateur, inventé. On filtre sur la prononciation, la sonorité et la mémorisation en français comme localement."
      },
      {
        "n": "03",
        "title": "Vérification et présélection",
        "desc": "On contrôle la disponibilité du nom de domaine, des réseaux et l'antériorité de marque. On ne présente que des noms réellement exploitables et défendables."
      },
      {
        "n": "04",
        "title": "Signature et remise",
        "desc": "On associe au nom retenu une signature courte qui porte la promesse. Vous repartez avec le nom, le slogan, leur justification et les règles d'usage."
      }
    ],
    "featuresIntro": "Un livrable complet, du nom validé jusqu'à la signature prête à imprimer sur vos supports.",
    "features": [
      {
        "icon": "pen",
        "title": "Trois pistes de noms",
        "desc": "Trois directions distinctes et argumentées, chacune reliée à votre positionnement, prêtes à être discutées et départagées."
      },
      {
        "icon": "sparkle",
        "title": "Signature de marque",
        "desc": "Un slogan court qui résume votre promesse et se retient. Testé pour tenir sur une enseigne comme dans une bio."
      },
      {
        "icon": "search",
        "title": "Vérification de disponibilité",
        "desc": "Contrôle du domaine, des pseudos réseaux et de l'antériorité de marque pour éviter tout blocage juridique après coup."
      },
      {
        "icon": "book",
        "title": "Argumentaire de choix",
        "desc": "Pour chaque nom, la logique, l'univers évoqué et les raisons de le retenir. Vous décidez en connaissance de cause."
      },
      {
        "icon": "globe",
        "title": "Résonance locale",
        "desc": "Sonorité et sens vérifiés pour le marché ivoirien et francophone, sans mauvaise surprise à l'oral."
      },
      {
        "icon": "clipboard",
        "title": "Règles d'usage",
        "desc": "Comment écrire, prononcer et associer le nom et la signature, pour un usage cohérent sur tous vos supports."
      }
    ],
    "modules": [
      {
        "title": "Stratégie de nom",
        "desc": "On relie le nom au positionnement, aux valeurs et à la cible. Le nom devient un choix stratégique, pas un coup de coeur isolé.",
        "tone": "cream"
      },
      {
        "title": "Création et exploration",
        "desc": "Génération de pistes sur plusieurs registres, sélection sur la sonorité, la mémorisation et la simplicité à l'oral comme à l'écrit.",
        "tone": "peach"
      },
      {
        "title": "Disponibilité et sécurité",
        "desc": "Domaine, réseaux et antériorité de marque vérifiés pour ne présenter que des noms réellement utilisables et défendables.",
        "tone": "sky"
      },
      {
        "title": "Signature et cadrage d'usage",
        "desc": "Un slogan aligné sur le nom, plus les règles pour l'écrire et l'employer partout de façon cohérente.",
        "tone": "mono"
      }
    ]
  },
  {
    "slug": "supports-print",
    "image": "/assets/images/services/sub/supports-print.jpg",
    "kind": "service",
    "name": "Supports & print",
    "category": "Supports & print",
    "tagline": "Cartes de visite, plaquettes, packaging et roll-up conçus au millimètre",
    "heroTitle": "Vos supports print, prêts à imprimer",
    "heroDesc": "Cartes de visite, plaquettes, packaging et roll-up conçus au millimètre. On vous livre des fichiers propres, calibrés pour l'imprimeur, fidèles à votre marque.",
    "growth": {
      "value": "0 aller-retour",
      "label": "avec l'imprimeur grâce à des fichiers calibrés dès la première remise"
    },
    "band": {
      "we": "Nous",
      "verb": "transformons votre marque en",
      "outcome": "supports physiques qui donnent envie qu'on les garde"
    },
    "process": [
      {
        "n": "01",
        "title": "Cadrage des supports",
        "desc": "On liste ce dont vous avez besoin (carte, plaquette, packaging, roll-up), les formats, les quantités et les contraintes de votre imprimeur."
      },
      {
        "n": "02",
        "title": "Création graphique",
        "desc": "On décline votre identité sur chaque support : hiérarchie de l'info, choix des visuels, mise en page qui respire et reste lisible à l'impression."
      },
      {
        "n": "03",
        "title": "Validation et ajustements",
        "desc": "Vous recevez les maquettes, on ajuste jusqu'à ce que chaque support soit juste. Aller-retours cadrés, pas de rallonge sans fin."
      },
      {
        "n": "04",
        "title": "Fichiers prêts à imprimer",
        "desc": "Livraison en PDF haute résolution, fonds perdus et repères de coupe intégrés, profils colorimétriques CMJN vérifiés. Direct chez l'imprimeur."
      }
    ],
    "featuresIntro": "Ce qu'on vous livre pour équiper votre marque en supports physiques cohérents et impeccables à l'impression.",
    "features": [
      {
        "icon": "clipboard",
        "title": "Cartes de visite",
        "desc": "Recto-verso soignés, formats standards ou découpes spéciales, prêts à distribuer sans mauvaise surprise à l'impression."
      },
      {
        "icon": "book",
        "title": "Plaquettes commerciales",
        "desc": "Dépliants et brochures qui présentent votre offre avec clarté, du choix des visuels à la mise en page finale."
      },
      {
        "icon": "sparkle",
        "title": "Packaging",
        "desc": "Emballages et étiquettes pensés pour vos produits, avec les gabarits de découpe adaptés à votre conditionneur."
      },
      {
        "icon": "layout",
        "title": "Roll-up et stands",
        "desc": "Kakémonos et supports événementiels grand format, lisibles à distance, calibrés pour vos salons et points de vente."
      },
      {
        "icon": "palette",
        "title": "Cohérence de marque",
        "desc": "Chaque support reprend vos couleurs, typographies et logo à l'identique, pour une identité reconnaissable partout."
      },
      {
        "icon": "clock",
        "title": "Fichiers prêts à imprimer",
        "desc": "PDF haute définition, fonds perdus, repères de coupe et CMJN vérifiés. Vous transmettez, l'imprimeur exécute."
      }
    ],
    "modules": [
      {
        "title": "Supports du quotidien",
        "desc": "Cartes de visite, papeterie et supports de contact que votre équipe utilise tous les jours face aux clients.",
        "tone": "cream"
      },
      {
        "title": "Supports commerciaux",
        "desc": "Plaquettes, dépliants et brochures qui portent votre discours de vente et donnent du poids à vos rendez-vous.",
        "tone": "peach"
      },
      {
        "title": "Packaging produit",
        "desc": "Emballages, étiquettes et boîtes qui habillent vos produits et prolongent votre marque jusqu'en rayon.",
        "tone": "sky"
      },
      {
        "title": "Supports événementiels",
        "desc": "Roll-up, kakémonos et signalétique grand format pour vos salons, boutiques et prises de parole.",
        "tone": "mono"
      }
    ]
  },
  {
    "slug": "direction-artistique",
    "image": "/assets/images/services/sub/direction-artistique.jpg",
    "kind": "service",
    "name": "Direction artistique",
    "category": "Direction artistique",
    "tagline": "Nous construisons la direction artistique de votre marque et son univers visuel, pour qu'elle soit reconnaissable partout, du site web au réseau social jusqu'à l'affiche imprimée",
    "heroTitle": "Une identité visuelle qui tient sur tous les supports",
    "heroDesc": "Nous construisons la direction artistique de votre marque et son univers visuel, pour qu'elle soit reconnaissable partout, du site web au réseau social jusqu'à l'affiche imprimée.",
    "growth": {
      "value": "3x",
      "label": "de reconnaissance de marque quand chaque point de contact suit la même direction visuelle"
    },
    "band": {
      "we": "Nous",
      "verb": "donnons à votre marque",
      "outcome": "un univers visuel cohérent, du premier écran au dernier support"
    },
    "process": [
      {
        "n": "01",
        "title": "Cadrage de la marque",
        "desc": "On plonge dans votre positionnement, vos valeurs et votre audience à Abidjan et au-delà. On aligne l'équipe sur l'intention visuelle avant de dessiner quoi que ce soit."
      },
      {
        "n": "02",
        "title": "Exploration des pistes",
        "desc": "On propose plusieurs directions artistiques sous forme de planches : couleurs, typographies, textures, style photo et illustration. Vous choisissez le territoire qui vous ressemble."
      },
      {
        "n": "03",
        "title": "Construction de l'univers",
        "desc": "On développe la piste retenue en un système visuel complet : grilles, iconographie, traitements d'image, règles d'usage. Chaque élément est pensé pour se décliner sans se déliter."
      },
      {
        "n": "04",
        "title": "Déclinaison et transmission",
        "desc": "On applique la direction sur vos supports clés et on livre un guide clair. Vos équipes et prestataires produisent ensuite sans jamais trahir l'univers de la marque."
      }
    ],
    "featuresIntro": "Une direction artistique livrée prête à l'emploi, avec les repères pour la faire vivre au quotidien.",
    "features": [
      {
        "icon": "palette",
        "title": "Univers chromatique",
        "desc": "Palette principale et secondaire avec codes précis et règles de contraste, pensée pour l'écran comme pour l'impression."
      },
      {
        "icon": "pen",
        "title": "Système typographique",
        "desc": "Choix des polices, hiérarchie des titres et du corps de texte, tailles et espacements pour une lecture nette partout."
      },
      {
        "icon": "sparkle",
        "title": "Style visuel signature",
        "desc": "Traitement des images, illustrations, textures et motifs qui rendent votre marque reconnaissable au premier coup d'oeil."
      },
      {
        "icon": "layout",
        "title": "Grilles et compositions",
        "desc": "Principes de mise en page et gabarits pour garder de la cohérence entre un post social, une page web et un document."
      },
      {
        "icon": "book",
        "title": "Guide de direction artistique",
        "desc": "Un document de référence qui explique les usages, les bons réflexes et les erreurs à éviter pour tenir l'univers dans le temps."
      },
      {
        "icon": "clipboard",
        "title": "Kit de déclinaison",
        "desc": "Modèles et exemples appliqués à vos supports prioritaires, pour que vos équipes démarrent sans repartir de zéro."
      }
    ],
    "modules": [
      {
        "title": "Territoire visuel",
        "desc": "L'intention créative de la marque traduite en une direction claire : ambiance, références, ce que l'on montre et ce que l'on évite.",
        "tone": "cream"
      },
      {
        "title": "Système graphique",
        "desc": "Couleurs, typographies, iconographie et grilles réunis en un ensemble cohérent qui structure toutes vos productions.",
        "tone": "peach"
      },
      {
        "title": "Traitement des contenus",
        "desc": "Photo, illustration, textures et animation orientés dans un même style pour donner une signature immédiate à vos visuels.",
        "tone": "sky"
      },
      {
        "title": "Cadre d'usage",
        "desc": "Règles, gabarits et exemples qui permettent à vos équipes et partenaires d'appliquer la direction sans la diluer.",
        "tone": "mono"
      }
    ]
  },
  {
    "slug": "community-management",
    "image": "/assets/images/services/sub/community-management.jpg",
    "kind": "service",
    "name": "Community management",
    "category": "Community management",
    "tagline": "Vos réseaux méritent une présence constante, pas des publications isolées",
    "heroTitle": "Une communauté vivante, animée chaque jour",
    "heroDesc": "Vos réseaux méritent une présence constante, pas des publications isolées. Nous animons, modérons et répondons à votre communauté pour créer un lien réel avec votre audience à Abidjan et au-delà.",
    "growth": {
      "value": "-70%",
      "label": "de temps de réponse moyen aux messages de votre communauté"
    },
    "band": {
      "we": "Nous",
      "verb": "animons",
      "outcome": "vos réseaux au quotidien pour transformer vos abonnés en communauté active"
    },
    "process": [
      {
        "n": "01",
        "title": "Immersion marque",
        "desc": "Nous cadrons votre ton de voix, vos valeurs et vos règles de modération. On définit ensemble ce qu'on répond, comment, et ce qu'on ne laisse pas passer."
      },
      {
        "n": "02",
        "title": "Calendrier d'animation",
        "desc": "On planifie les rendez-vous récurrents, les temps forts et les moments d'échange avec votre communauté sur chaque plateforme."
      },
      {
        "n": "03",
        "title": "Animation quotidienne",
        "desc": "Publication, réponses aux commentaires et messages privés, modération et relance des conversations, chaque jour, en votre nom."
      },
      {
        "n": "04",
        "title": "Bilan et ajustement",
        "desc": "Chaque mois, on analyse l'engagement, les sujets qui portent et les retours de la communauté pour affiner l'animation."
      }
    ],
    "featuresIntro": "Ce qu'on gère au quotidien pour garder votre communauté engagée et bien traitée.",
    "features": [
      {
        "icon": "calendar",
        "title": "Calendrier éditorial",
        "desc": "Un planning d'animation clair par plateforme, avec les rendez-vous récurrents et les temps forts de votre marque."
      },
      {
        "icon": "users",
        "title": "Engagement communauté",
        "desc": "Réponses aux commentaires, relance des conversations et interactions qui donnent envie de revenir vous parler."
      },
      {
        "icon": "bell",
        "title": "Réponses rapides",
        "desc": "Messages privés et mentions traités dans la journée, pour ne laisser aucune question de votre audience sans suite."
      },
      {
        "icon": "shield",
        "title": "Modération active",
        "desc": "Filtrage des propos déplacés, gestion des trolls et protection de l'image de votre marque sur vos espaces."
      },
      {
        "icon": "clipboard",
        "title": "Charte de ton",
        "desc": "Un guide de voix et de réponses aligné sur votre marque, pour une communication cohérente sur tous vos réseaux."
      },
      {
        "icon": "chart",
        "title": "Rapport mensuel",
        "desc": "Un bilan lisible de l'engagement, des sujets qui marchent et des signaux à surveiller dans votre communauté."
      }
    ],
    "modules": [
      {
        "title": "Animation quotidienne",
        "desc": "Présence active sur vos réseaux : publications, relances et interactions régulières pour maintenir le lien avec votre audience.",
        "tone": "cream"
      },
      {
        "title": "Modération et sécurité",
        "desc": "Surveillance des échanges, filtrage des contenus problématiques et gestion des situations sensibles pour protéger votre image.",
        "tone": "sky"
      },
      {
        "title": "Relation et engagement",
        "desc": "Réponses personnalisées aux messages et commentaires pour transformer chaque interaction en relation de confiance.",
        "tone": "peach"
      },
      {
        "title": "Pilotage et reporting",
        "desc": "Suivi des indicateurs d'engagement et bilans réguliers pour ajuster l'animation selon les réactions de votre communauté.",
        "tone": "mono"
      }
    ]
  },
  {
    "slug": "creation-de-contenu",
    "image": "/assets/images/services/sub/creation-de-contenu.jpg",
    "kind": "service",
    "name": "Création de contenu",
    "category": "Création de contenu",
    "tagline": "Visuels, vidéos courtes et carrousels pensés pour vos réseaux",
    "heroTitle": "Des contenus faits pour capter l'attention",
    "heroDesc": "Visuels, vidéos courtes et carrousels pensés pour vos réseaux. On conçoit chaque format pour arrêter le pouce et donner envie de vous suivre.",
    "growth": {
      "value": "3x",
      "label": "plus de temps de visionnage sur les formats vidéo courts"
    },
    "band": {
      "we": "Nous",
      "verb": "transformons",
      "outcome": "vos idées en contenus qui arrêtent le scroll"
    },
    "process": [
      {
        "n": "01",
        "title": "Cadrage éditorial",
        "desc": "On clarifie vos objectifs, votre audience et les messages clés à porter sur vos réseaux."
      },
      {
        "n": "02",
        "title": "Direction créative",
        "desc": "On propose des pistes visuelles et des formats types, validés avant toute production."
      },
      {
        "n": "03",
        "title": "Production",
        "desc": "On crée les visuels, monte les vidéos et construit les carrousels aux bons formats."
      },
      {
        "n": "04",
        "title": "Livraison prête à publier",
        "desc": "Vous recevez les contenus organisés, exportés et prêts à programmer sur chaque plateforme."
      }
    ],
    "featuresIntro": "Ce qu'on livre pour alimenter vos réseaux sans jamais tomber en panne d'idées.",
    "features": [
      {
        "icon": "palette",
        "title": "Visuels sur mesure",
        "desc": "Des posts et affiches aux couleurs de votre marque, prêts à publier sur chaque réseau."
      },
      {
        "icon": "video",
        "title": "Vidéos courtes",
        "desc": "Reels, TikTok et Shorts montés pour capter dès la première seconde et retenir jusqu'au bout."
      },
      {
        "icon": "layout",
        "title": "Carrousels",
        "desc": "Des formats à faire défiler qui racontent une idée claire, slide après slide."
      },
      {
        "icon": "pen",
        "title": "Accroches et légendes",
        "desc": "Titres, hooks et textes courts écrits pour votre audience ivoirienne, pas des phrases génériques."
      },
      {
        "icon": "calendar",
        "title": "Contenus prêts à programmer",
        "desc": "Des lots de publications livrés d'avance, aux bons formats, pour tenir votre rythme."
      },
      {
        "icon": "sparkle",
        "title": "Direction visuelle cohérente",
        "desc": "Une identité reconnaissable d'un post à l'autre, pour que votre feed reste homogène."
      }
    ],
    "modules": [
      {
        "title": "Visuels statiques",
        "desc": "Posts, affiches, citations et annonces déclinés proprement sur tous vos formats.",
        "tone": "cream"
      },
      {
        "title": "Vidéos courtes",
        "desc": "Tournage léger, montage dynamique, sous-titres et habillage pensés pour le mobile.",
        "tone": "peach"
      },
      {
        "title": "Formats à défilement",
        "desc": "Carrousels et séquences qui gardent l'attention et poussent à l'interaction.",
        "tone": "sky"
      },
      {
        "title": "Cohérence de marque",
        "desc": "Charte visuelle appliquée à chaque contenu pour un feed reconnaissable au premier coup d'oeil.",
        "tone": "mono"
      }
    ]
  },
  {
    "slug": "publicite-ads",
    "image": "/assets/images/services/sub/publicite-ads.jpg",
    "kind": "service",
    "name": "Publicité (Ads)",
    "category": "Publicité (Ads)",
    "tagline": "Nous concevons et pilotons vos campagnes Meta, TikTok et Google, ciblées sur les bonnes personnes et optimisées chaque jour pour tirer le maximum de chaque franc investi",
    "heroTitle": "Des pubs qui ramènent des clients, pas des vues",
    "heroDesc": "Nous concevons et pilotons vos campagnes Meta, TikTok et Google, ciblées sur les bonnes personnes et optimisées chaque jour pour tirer le maximum de chaque franc investi.",
    "growth": {
      "value": "-30%",
      "label": "de coût par acquisition après optimisation"
    },
    "band": {
      "we": "Nous",
      "verb": "transformons votre budget pub en",
      "outcome": "clients qui achètent, pas en impressions perdues"
    },
    "process": [
      {
        "n": "01",
        "title": "Cadrage & objectifs",
        "desc": "On définit ensemble le but (ventes, leads, notoriété), la cible, le budget et le coût par résultat visé."
      },
      {
        "n": "02",
        "title": "Création des campagnes",
        "desc": "Audiences, structure des campagnes, créas et tracking mis en place proprement avant le lancement."
      },
      {
        "n": "03",
        "title": "Lancement & tests",
        "desc": "On démarre avec plusieurs variantes d'audiences et de créas pour identifier vite ce qui performe."
      },
      {
        "n": "04",
        "title": "Optimisation & bilan",
        "desc": "Ajustements réguliers, montée en budget sur ce qui marche et rapport clair sur les résultats obtenus."
      }
    ],
    "featuresIntro": "Chaque campagne est livrée avec ce qu'il faut pour dépenser juste et mesurer vrai.",
    "features": [
      {
        "icon": "users",
        "title": "Ciblage précis",
        "desc": "Audiences construites sur vos vrais clients : centres d'intérêt, comportements, similarité et reciblage des visiteurs chauds."
      },
      {
        "icon": "wallet",
        "title": "Budget optimisé",
        "desc": "On répartit la dépense entre les plateformes et les audiences qui convertissent, et on coupe ce qui ne rapporte pas."
      },
      {
        "icon": "video",
        "title": "Créas qui accrochent",
        "desc": "Visuels et vidéos courtes pensés pour chaque réseau, avec plusieurs variantes testées en parallèle."
      },
      {
        "icon": "gauge",
        "title": "Optimisation continue",
        "desc": "Enchères, audiences et créas ajustées régulièrement selon les résultats réels, pas au hasard."
      },
      {
        "icon": "chart",
        "title": "Suivi des conversions",
        "desc": "Pixel, événements et tracking bien posés pour savoir exactement d'où viennent vos ventes et vos leads."
      },
      {
        "icon": "clipboard",
        "title": "Rapports clairs",
        "desc": "Un point régulier lisible : dépense, coût par résultat et prochaines actions, sans jargon."
      }
    ],
    "modules": [
      {
        "title": "Meta Ads (Facebook & Instagram)",
        "desc": "Campagnes de notoriété, de trafic et de conversion sur les deux réseaux les plus utilisés en Côte d'Ivoire.",
        "tone": "sky"
      },
      {
        "title": "TikTok Ads",
        "desc": "Formats vidéo natifs pour toucher une audience jeune et engagée, au bon rythme et au bon ton.",
        "tone": "peach"
      },
      {
        "title": "Google Ads",
        "desc": "Search, Display et YouTube pour capter la demande au moment où vos clients cherchent activement.",
        "tone": "cream"
      },
      {
        "title": "Tracking & mesure",
        "desc": "Installation du pixel, des événements et des tableaux de bord pour piloter au résultat, pas à l'aveugle.",
        "tone": "mono"
      }
    ]
  },
  {
    "slug": "strategie-editoriale",
    "image": "/assets/images/services/sub/strategie-editoriale.jpg",
    "kind": "service",
    "name": "Stratégie éditoriale",
    "category": "Stratégie éditoriale",
    "tagline": "On définit votre ton, vos piliers de contenu et votre calendrier de publication",
    "heroTitle": "Une ligne éditoriale qui vous ressemble",
    "heroDesc": "On définit votre ton, vos piliers de contenu et votre calendrier de publication. Fini le contenu improvisé au jour le jour : votre marque parle d'une seule voix, sur tous vos réseaux.",
    "growth": {
      "value": "3x",
      "label": "moins de temps passé à décider quoi publier chaque semaine"
    },
    "band": {
      "we": "Nous",
      "verb": "transformons vos idées éparpillées en",
      "outcome": "une présence claire, régulière et reconnaissable"
    },
    "process": [
      {
        "n": "01",
        "title": "Immersion marque et audience",
        "desc": "On analyse votre positionnement, vos publications passées et votre communauté pour comprendre ce qui vous rend unique et ce qui parle vraiment à votre cible."
      },
      {
        "n": "02",
        "title": "Ton et territoire de voix",
        "desc": "On fixe votre façon de parler : vocabulaire, niveau de langage, ce qu'on dit et ce qu'on évite. Votre marque devient reconnaissable dès la première ligne."
      },
      {
        "n": "03",
        "title": "Piliers de contenu",
        "desc": "On structure vos publications autour de 3 à 5 thématiques fortes, pour que chaque post serve un objectif au lieu de remplir le vide."
      },
      {
        "n": "04",
        "title": "Calendrier prêt à publier",
        "desc": "On livre un planning mensuel avec rythme, formats et angles par plateforme. Votre équipe sait exactement quoi publier, quand et pourquoi."
      }
    ],
    "featuresIntro": "Une stratégie éditoriale complète, pensée pour être appliquée dès demain par votre équipe interne ou votre community manager.",
    "features": [
      {
        "icon": "pen",
        "title": "Charte de ton et de voix",
        "desc": "Un guide clair de votre manière de vous exprimer : vocabulaire, style, do et don't par plateforme."
      },
      {
        "icon": "layout",
        "title": "Piliers de contenu",
        "desc": "3 à 5 grandes thématiques qui structurent tout ce que vous publiez et gardent le cap."
      },
      {
        "icon": "calendar",
        "title": "Calendrier éditorial",
        "desc": "Un planning mensuel avec rythme, formats et angles, prêt à décliner en publications."
      },
      {
        "icon": "users",
        "title": "Portraits d'audience",
        "desc": "Une définition nette de à qui vous parlez et de ce qui déclenche leur engagement."
      },
      {
        "icon": "search",
        "title": "Analyse concurrentielle",
        "desc": "Un état des lieux de vos concurrents pour occuper un territoire de parole qui vous appartient."
      },
      {
        "icon": "sparkle",
        "title": "Banque d'angles et de formats",
        "desc": "Des idées de posts et de rubriques récurrentes pour ne plus jamais rester bloqué devant la page blanche."
      }
    ],
    "modules": [
      {
        "title": "Ligne éditoriale",
        "desc": "Le fil rouge qui relie toutes vos publications : votre message, votre promesse, votre positionnement de marque.",
        "tone": "cream"
      },
      {
        "title": "Ton et voix",
        "desc": "La personnalité de votre marque à l'écrit, cohérente d'une plateforme à l'autre et reconnaissable au premier coup d'oeil.",
        "tone": "peach"
      },
      {
        "title": "Piliers de contenu",
        "desc": "Les thématiques structurantes qui donnent du sens à votre présence et évitent le contenu au hasard.",
        "tone": "sky"
      },
      {
        "title": "Calendrier de publication",
        "desc": "Le rythme et l'organisation de vos posts, planifiés à l'avance pour une présence régulière et sans stress.",
        "tone": "mono"
      }
    ]
  },
  {
    "slug": "reporting-analytics",
    "image": "/assets/images/services/sub/reporting-analytics.jpg",
    "kind": "service",
    "name": "Reporting & analytics",
    "category": "Reporting & analytics",
    "tagline": "Fini les rapports illisibles et les décisions au feeling",
    "heroTitle": "Vos réseaux sociaux pilotés par la donnée",
    "heroDesc": "Fini les rapports illisibles et les décisions au feeling. On suit vos performances, on les traduit en tableaux de bord clairs et on transforme chaque chiffre en action concrète.",
    "growth": {
      "value": "1 rapport/mois",
      "label": "clair, actionnable, sans jargon"
    },
    "band": {
      "we": "Nous",
      "verb": "transformons",
      "outcome": "vos chiffres en décisions qui font grandir votre communauté"
    },
    "process": [
      {
        "n": "01",
        "title": "Objectifs & KPI",
        "desc": "On définit ensemble ce qui compte vraiment pour vous : portée, engagement, trafic ou ventes, avec des indicateurs mesurables."
      },
      {
        "n": "02",
        "title": "Connexion des sources",
        "desc": "On branche vos comptes Meta, TikTok, LinkedIn et Google Analytics pour centraliser toute la donnée au même endroit."
      },
      {
        "n": "03",
        "title": "Tableau de bord",
        "desc": "On construit un dashboard sur-mesure, mis à jour en continu, où vous suivez vos performances d'un coup d'oeil."
      },
      {
        "n": "04",
        "title": "Rapport & recommandations",
        "desc": "Chaque mois, un rapport lisible avec l'analyse, les tendances et les actions concrètes à mener pour progresser."
      }
    ],
    "featuresIntro": "Bien plus que des chiffres bruts : une lecture claire de ce qui marche, de ce qui coince et de la suite à donner.",
    "features": [
      {
        "icon": "gauge",
        "title": "Tableaux de bord en temps réel",
        "desc": "Vos indicateurs clés réunis sur un dashboard actualisé en continu, accessible quand vous voulez."
      },
      {
        "icon": "chart",
        "title": "Suivi des KPI qui comptent",
        "desc": "Portée, engagement, trafic, conversions : on suit les métriques alignées sur vos objectifs, pas les chiffres de vanité."
      },
      {
        "icon": "clipboard",
        "title": "Rapports mensuels clairs",
        "desc": "Un document lisible chaque mois, avec l'essentiel expliqué en langage simple, sans jargon technique."
      },
      {
        "icon": "search",
        "title": "Analyse des tendances",
        "desc": "On compare mois après mois pour repérer ce qui progresse, ce qui décroche et pourquoi."
      },
      {
        "icon": "plug",
        "title": "Toutes vos plateformes réunies",
        "desc": "Meta, TikTok, LinkedIn, Google Analytics : une vue consolidée plutôt qu'un chiffre par outil."
      },
      {
        "icon": "sparkle",
        "title": "Recommandations actionnables",
        "desc": "Chaque rapport se termine par des actions concrètes à mettre en oeuvre, pas juste un constat."
      }
    ],
    "modules": [
      {
        "title": "Suivi des performances",
        "desc": "On mesure chaque publication, campagne et format pour savoir précisément ce qui génère de l'attention et des résultats.",
        "tone": "cream"
      },
      {
        "title": "Tableaux de bord",
        "desc": "Un dashboard sur-mesure qui centralise vos données de toutes vos plateformes, mis à jour en continu et lisible d'un coup d'oeil.",
        "tone": "sky"
      },
      {
        "title": "Rapports mensuels",
        "desc": "Un point clair chaque mois : ce qui a été fait, ce que ça a donné et les enseignements à en tirer.",
        "tone": "peach"
      },
      {
        "title": "Pilotage par la donnée",
        "desc": "On s'appuie sur les chiffres pour décider des prochains contenus, ajuster les budgets et orienter la stratégie.",
        "tone": "mono"
      }
    ]
  }
];

export function getSubService(slug: string): Offering | undefined {
  return subServices.find((s) => s.slug === slug);
}

export const subServiceSlugs = subServices.map((s) => s.slug);
