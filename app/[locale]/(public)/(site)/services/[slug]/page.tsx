import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getOffering,
  serviceSlugs,
} from "@/components/(public)/patheren/catalog";
import {
  getGrandService,
  grandServiceSlugs,
} from "@/components/(public)/patheren/grandServices";
import {
  getSubService,
  subServiceSlugs,
} from "@/components/(public)/patheren/subServices";
import { ServicePage } from "@/components/(public)/patheren/ServicePage";
import { GrandServicePage } from "@/components/(public)/patheren/GrandServicePage";

export function generateStaticParams() {
  const slugs = Array.from(
    new Set([...grandServiceSlugs, ...subServiceSlugs, ...serviceSlugs]),
  );
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const grand = getGrandService(slug);
  if (grand)
    return { title: `${grand.name} | Lunion Lab`, description: grand.heroDesc };
  const o = getSubService(slug) ?? getOffering(slug);
  if (!o) return { title: "Service" };
  return { title: `${o.name} | ${o.category}`, description: o.tagline };
}

export default async function ServiceRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const grand = getGrandService(slug);
  if (grand) return <GrandServicePage service={grand} />;

  const offering = getSubService(slug) ?? getOffering(slug);
  if (!offering || offering.kind !== "service") notFound();
  return <ServicePage offering={offering} />;
}
