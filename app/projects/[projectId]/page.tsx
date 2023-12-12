import { Project, getProject, getProjects } from "@/data/fetches";
import { readFileSync } from "fs";
import { remark } from 'remark';
import html from 'remark-html';
import Link from "next/link";
import matter from 'gray-matter';
import 'github-markdown-css/github-markdown-light.css';

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((x) => ({ projectId: x.unique }));
}

export default async function ProjectDetail({
  params,
}: {
  params: { projectId: string };
}) {
  const project = await getProject(params.projectId) as Project;
  const fileContents = readFileSync(project.md, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(fileContents);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return (
    <div className="bg-slate-100 m-5 p-3">
      <div className="flex">
        {project?.githubLink && (
          <Link href={project.githubLink} className="grow text-center bg-slate-300 hover:bg-slate-200 rounded p-2 font-bold">
            Go to Github
          </Link>
        )}
        {project?.demoLink && (
          <Link href={project.demoLink} className="grow text-center bg-slate-300 hover:bg-slate-200 rounded p-2 font-bold">
            Go to Demo
          </Link>
        )}
      </div>
      <div className="w-fit m-auto my-3">
        <article className="markdown-body" dangerouslySetInnerHTML={{ __html: contentHtml }}></article>
      </div>
    </div>
  );
}
