import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getOffering,
  serviceSlugs,
} from "@/components/(public)/patheren/catalog";
import { ServicePage } from "@/components/(public)/patheren/ServicePage";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const o = getOffering(slug);
  if (!o) return { title: "Service" };
  return { title: `${o.name} | ${o.category}`, description: o.tagline };
}

export default async function ServiceRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const offering = getOffering(slug);
  if (!offering || offering.kind !== "service") notFound();
  return <ServicePage offering={offering} />;
}
