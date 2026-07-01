import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getOffering,
  productSlugs,
} from "@/components/(public)/patheren/catalog";
import { OfferingPage } from "@/components/(public)/patheren/OfferingPage";

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const o = getOffering(slug);
  if (!o) return { title: "Product" };
  return { title: `${o.name} | ${o.category}`, description: o.tagline };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const offering = getOffering(slug);
  if (!offering || offering.kind !== "product") notFound();
  return <OfferingPage offering={offering} />;
}
