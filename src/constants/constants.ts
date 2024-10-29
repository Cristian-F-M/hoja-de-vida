import type { Skills } from "types/Types";
import React from "@icons/React.astro";
import NextJs from "@icons/NextJs.astro";
import Tailwindcss from "@icons/Tailwindcss.astro";
import Html from "@icons/Html.astro";
import Css from "@icons/Css.astro";
import JavaScript from "@icons/JavaScript.astro";
import TypeScript from "@icons/TypeScript.astro";
import NodeJs from "@icons/NodeJs.astro";
import Express from "@icons/Express.astro";
import Python from "@icons/Python.astro";
import PHP from "@icons/PHP.astro";
import Laravel from "@icons/Laravel.astro";
import Flask from "@icons/Flask.astro";
import MySql from "@icons/MySQL.astro";
import SQLite from "@icons/SQLite.astro";
import Github from "@icons/Github.astro";
import Git from "@icons/Git.astro";
import ReactNative from "@icons/ReactNative.astro";
import type { Project } from "types/Types";
import AstroI from "@icons/AstroI.astro";
import JWT from "@icons/JWT.astro";
import Sequelize from "@icons/Sequelize.astro";
import PowerShell from "@icons/PowerShell.astro";
import Expo from "@icons/Expo.astro";

export const SKILLS: Skills = {
  Frontend: [
    {
      name: "React",
      icon: React,
    },
    {
      name: "Next.js",
      icon: NextJs,
    },
    {
      name: "Tailwindcss",
      icon: Tailwindcss,
    },
    {
      name: "HTML",
      icon: Html,
    },
    {
      name: "CSS",
      icon: Css,
    },
    {
      name: "JavaScript",
      icon: JavaScript,
    },
    {
      name: "TypeScript",
      icon: TypeScript,
    },
  ],
  Backend: [
    {
      name: "Node.js",
      icon: NodeJs,
    },
    {
      name: "Express",
      icon: Express,
    },
    {
      name: "Python",
      icon: Python,
    },
    {
      name: "PHP",
      icon: PHP,
    },
    {
      name: "Laravel",
      icon: Laravel,
    },
    {
      name: "Flask",
      icon: Flask,
    },
  ],
  "Bases de datos": [
    {
      name: "MySQL",
      icon: MySql,
    },
    {
      name: "SQLite",
      icon: SQLite,
    },
  ],
  Otros: [],
  Complementos: [
    {
      name: "GitHub",
      icon: Github,
    },
    {
      name: "Git",
      icon: Git,
    },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "taks-app-for-android",
    title: "Task app",
    description:
      "Aplicación para Android que permite gestionar las tareas de un usuario",
    github: "https://github.com/Cristian-F-M/Task-app-for-android.git",
    skills: [
      {
        name: "React Native",
        icon: ReactNative,
      },
      {
        name: "Tailwindcss",
        icon: Tailwindcss,
      },
      {
        name: "React",
        icon: React,
      },
      {
        name: "SQLite",
        icon: SQLite,
      },
      {
        name: "expo",
        icon: Expo,
      },
    ],
    tags: [],
  },
  {
    id: "touch-for-powerShell",
    description:
      "Comando para crear archivos y carpetas de manera rapida y masiva.",
    github: "https://github.com/Cristian-F-M/touch-for-powerShell",
    title: "Comando Touch",
    skills: [
      {
        name: "PowerShell",
        icon: PowerShell,
      },
    ],
  },
  {
    id: "api-votaciones-v2",
    title: "Api Votaciones",
    description:
      "Api para la gestión de las votaciones en CGAO, inluyendo sesiones, manejo de votaciones y votos de los aprendices",
    github: "https://github.com/Cristian-F-M/api-votaciones-v2",
    working: true,
    skills: [
      {
        name: "JavaScript",
        icon: JavaScript,
      },
      {
        name: "Express",
        icon: Express,
      },
      {
        name: "Node.js",
        icon: NodeJs,
      },
      {
        name: "JSON WEB TOKEN",
        icon: JWT,
      },
      {
        name: "SQLite",
        icon: SQLite,
      },
      {
        name: "Sequelize",
        icon: Sequelize,
      },
    ],
  },
  {
    id: "app-votaciones-v2",
    title: "App votaciones",
    description:
      "Aplicación móvil para consumir la api, para la gestión de la votaciones.",
    github: "https://github.com/Cristian-F-M/app-votaciones-v2",
    working: true,
    skills: [
      {
        name: "React",
        icon: React,
      },
      {
        name: "React Native",
        icon: ReactNative,
      },
      {
        name: "Tailwindcss",
        icon: Tailwindcss,
      },
    ],
  },
  {
    id: "solicitud-contrato-aprendizaje",
    title: "Obtener contrato de aprendizaje",
    description:
      "Aplicación web para la automatización de obtención de correos para realizar envío de solicitud de contrato de aprendizaje SENA.",
    github: "https://github.com/Cristian-F-M/solicitud-contrato-aprendizaje",
    skills: [
      {
        name: "Python",
        icon: Python,
      },
      {
        name: "html",
        icon: Html,
      },
      {
        name: "CSS",
        icon: Css,
      },
    ],
  },
  {
    id: "Astronomy-picture-day",
    title: "Astronomy Picture Day",
    description:
      "Uso de la api APOD de la NASA para obtener la imagen astronomica del día, permitiendo ver las imagenes de fechas anteriores.",
    url: "",
    github: "https://github.com/Cristian-F-M/Astronomy-picture-day",
    skills: [
      {
        name: "React",
        icon: React,
      },
      {
        name: "Astro",
        icon: AstroI,
      },
      {
        name: "Tailwindcss",
        icon: Tailwindcss,
      },
    ],
  },
  {
    id: "portafolio",
    title: "Portafolio",
    description: "Portafolio de presentación como desarrolador.",
    github: "https://github.com/Cristian-F-M/portafolio",
    url: "https://cristianm.netlify.app/",
    skills: [
      {
        name: "Astro",
        icon: AstroI,
      },
      {
        name: "Tailwindcss",
        icon: Tailwindcss,
      },
    ],
  },
];
