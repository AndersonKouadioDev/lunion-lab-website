import { ArrowRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/(public)/landing/Reveal";

interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  readTime: string;
  cover: string;
  featured?: boolean;
}

const ARTICLES: Article[] = [
  {
    id: "nextjs-16-app-router",
    title: "Next.js 16 : ce que l'App Router change pour vos produits",
    category: "Next.js",
    date: "24 juin 2026",
    excerpt:
      "Server Components, streaming et caching repensé : comment nous livrons des applications plus rapides et plus simples à maintenir pour nos clients.",
    readTime: "8 min de lecture",
    cover: "/assets/images/all-img/fond2.jpg",
    featured: true,
  },
  {
    id: "design-system-africain",
    title: "Construire un design system qui parle aux marchés africains",
    category: "Design",
    date: "11 juin 2026",
    excerpt:
      "Couleurs, typographies et composants : créer une identité cohérente et inclusive, du desktop au feature phone.",
    readTime: "6 min de lecture",
    cover: "/assets/images/all-img/img1.png",
  },
  {
    id: "transformation-digitale-afrique",
    title: "Transformation digitale en Afrique : par où commencer ?",
    category: "Transformation digitale",
    date: "29 mai 2026",
    excerpt:
      "Un cadre concret pour digitaliser une organisation africaine sans tout casser, en partant des usages réels du terrain.",
    readTime: "9 min de lecture",
    cover: "/assets/images/all-img/img2.png",
  },
  {
    id: "mobile-first-terrain",
    title: "Mobile-first : penser l'application avant le site",
    category: "Mobile",
    date: "17 mai 2026",
    excerpt:
      "Connexions instables, petits écrans, data limitée : nos principes pour des apps performantes là où ça compte.",
    readTime: "5 min de lecture",
    cover: "/assets/images/all-img/img3.png",
  },
  {
    id: "securite-applications-saas",
    title: "Sécurité : protéger vos données dès la conception",
    category: "Sécurité",
    date: "3 mai 2026",
    excerpt:
      "Authentification, chiffrement et contrôle d'accès : les fondations que nous intégrons avant la première ligne de code métier.",
    readTime: "7 min de lecture",
    cover: "/assets/images/all-img/img4.png",
  },
  {
    id: "ux-conversion-produit",
    title: "UX : transformer l'attention en adoption",
    category: "UX",
    date: "21 avril 2026",
    excerpt:
      "Parcours fluides, micro-interactions et hiérarchie claire : comment l'expérience utilisateur fait décoller vos métriques.",
    readTime: "6 min de lecture",
    cover: "/assets/images/all-img/img5.png",
  },
];

function ArticleCard({ article }: { article: Article }) {
  const isFeatured = Boolean(article.featured);

  return (
    <Link
      href="/v2/blog"
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] transition-all duration-300 hover:border-violet/50 hover:shadow-[0_0_40px_-5px_rgba(139,92,246,0.85)] ${
        isFeatured ? "lg:col-span-2 lg:flex-row" : ""
      }`}
    >
      <div
        className={`relative aspect-video w-full overflow-hidden ${
          isFeatured ? "lg:aspect-auto lg:w-1/2" : ""
        }`}
      >
        <Image
          src={article.cover}
          alt={article.title}
          fill
          sizes={isFeatured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 33vw"}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <span className="absolute left-4 top-4 inline-flex items-center rounded-full border border-violet/40 bg-violet/15 px-3 py-1 text-xs font-semibold text-violet-bright backdrop-blur-sm">
          {article.category}
        </span>
      </div>

      <div className={`flex flex-1 flex-col p-6 sm:p-7 ${isFeatured ? "lg:justify-center" : ""}`}>
        <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" strokeWidth={1.6} />
            {article.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" strokeWidth={1.6} />
            {article.readTime}
          </span>
        </div>

        <h2
          className={`mt-3 font-extrabold tracking-tight text-white transition-colors duration-300 group-hover:text-violet-bright ${
            isFeatured ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
          }`}
        >
          {article.title}
        </h2>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
          {article.excerpt}
        </p>

        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-bright">
          Lire l&apos;article
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  return (
    <>
      {/* Page-hero */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-violet/20 blur-[120px]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-bright">
              Le Blog
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Idées, retours d&apos;expérience &amp; tendances tech
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-zinc-400">
              Nos analyses sur le développement, le design et la transformation
              digitale en Afrique — par l&apos;équipe Lunion Lab.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Grille d'articles */}
      <section className="relative border-t border-white/5 bg-[#050505] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {ARTICLES.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
