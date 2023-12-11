import { Project, getProjects } from "@/data/fetches";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((x) => ({ projectId: x.md }));
}

export default function ProjectDetail({
  params,
}: {
  params: { projectId: string };
}) {
  return <div>{params.projectId}</div>;
}
