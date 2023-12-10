import Item from "@/components/Item";
import { getProjects } from "@/data/fetches";
import Link from "next/link";

export default async function Page() {
  const projects = await getProjects();
  return (
    <div className="flex flex-wrap justify-center sm:justify-left">
      {projects.map((p) => (
        <Link key={p.unique} href={`/projects/${p.md}`}>
          <Item title={p.title} img={p.cover} description={p.description} />
        </Link>
      ))}
    </div>
  );
}
