
import {projects} from './dataSource/projects';

export type Project = typeof projects[0]

export const getProjects = async () => projects;