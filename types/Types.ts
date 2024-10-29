import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export interface Experience {
  id: string;
  company: string;
  period: {
    start: string;
    end: string | null;
  };
  position: string;
  summary: string;
}

export interface Skill {
  name: string;
  icon: AstroComponentFactory;
}

export interface Skills {
  Frontend: Skill[];
  Backend: Skill[];
  "Bases de datos": Skill[];
  Otros: Skill[];
  Complementos: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  url?: string;
  github?: string;
  tags?: Array<string>;
  skills?: Array<Skill>;
}
