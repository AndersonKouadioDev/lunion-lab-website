import ProjectPreview from "@/components/(public)/portfolio/ProjectPreview";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const resolvedParams = await params;
  return <ProjectPreview params={resolvedParams} />;
};

export default Page;
