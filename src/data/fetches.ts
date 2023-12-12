
import {projects} from './dataSource/projects';

export type Project = typeof projects[0]

export const getProjects = async () => projects;

export const getProject = (id: string) => projects.find((x) => x.unique === id)