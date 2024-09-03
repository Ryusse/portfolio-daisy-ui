import type { CtaItemType, LinkType, ProjectType, ServiceType, SocialLinkType, WorkItemType } from "./types";

import WiLogo from "@/assets/images/wiestate.webp";
import TestImage from "@/assets/images/service-image-test.avif";

export const SITE_TITLE = "Astro Blog";
export const SITE_DESCRIPTION = "Welcome to my website!";

export const socialLinks: SocialLinkType[] = [
  {
    label: "Dribble",
    icon: "dribble",
    href: "#",
    ariaLabel: "Dribble",
  },
  {
    label: "Behance",
    icon: "behance",
    href: "#",
    ariaLabel: "Behance",
  },
  {
    label: "Linkedin",
    icon: "linkedin",
    href: "#",
    ariaLabel: "Linkedin",
  },
  {
    label: "Github",
    icon: "github",
    href: "#",
    ariaLabel: "Github",
  },
];

export const ctaLinks: CtaItemType[] = [
  {
    icon: "folder",
    title: "Last projects",
    text: "Name of the last projects",
    href: "#projects",
    ariaLabel: "Proyectos",
  },
  {
    icon: "layer-group",
    title: "Services",
    text: "All services I give",
    href: "#services",
    ariaLabel: "Servicios",
  },
  {
    icon: "envelope",
    title: "Contact me",
    text: "Send me a email",
    href: "/contact",
    ariaLabel: "Contácto",
  },
];

export const workItems: WorkItemType[] = [
  {
    title: "Product design at Uber",
    description: "February 2018 - February 2020",
    logo: WiLogo,
  },
  {
    title: "Product design at Uber",
    description: "February 2018 - February 2020",
    logo: WiLogo,
  },
  {
    title: "Product design at Uber",
    description: "February 2018 - February 2020",
    logo: WiLogo,
  },
];

export const services: ServiceType[] = [
  {
    href: "#",
    icon: "file",
    title: "Diseño de sitios web de página completa",
    description:
      "Creando diseños de sitios web inmersivos y atractivos que cautivan a las audiencias y ofrecen una experiencia de usuario fluida.",
    image: TestImage,
  },
  {
    href: "#",
    icon: "code",
    title: "Desarrollo Web",
    description:
      "Desarrollo sitios web utilizando React, Next.js, Gatsby y Vue, asegurando un rendimiento óptimo, escalabilidad y una experiencia de usuario excepcional en cada proyecto.",
    image: TestImage,
  },
  {
    href: "#",
    icon: "object-group",
    title: "Diseño UI/UX",
    description:
      "Diseño sitios web utilizando Figma, enfocándome en la creación de interfaces intuitivas y atractivas que mejoren la interacción del usuario y generen una experiencia memorable.",
    image: TestImage,
  },
];

export const featuredWork: ProjectType[] = [
  {
    href: "#",
    image: TestImage,
    title: "Project 1",
    subtitle: "Construction Company",
    tags: ["Landing page", "UI/UX Design"],
    date: "April 2023",
    description:
      " Soft color schemes ensure a visually pleasing experience, aiming to keep users engaged and at ease while navigating this site, in hopes that all the information we wish to convey is easily absorbed by the user",
  },
  {
    href: "#",
    image: TestImage,
    title: "Project 2",
    subtitle: "Construction Company",
    tags: ["Landing page", "UI/UX Design"],
    date: "April 2023",
    description:
      " Soft color schemes ensure a visually pleasing experience, aiming to keep users engaged and at ease while navigating this site, in hopes that all the information we wish to convey is easily absorbed by the user",
  },
  {
    href: "#",
    image: TestImage,
    title: "Project 3",
    subtitle: "Construction Company",
    tags: ["Landing page", "UI/UX Design"],
    date: "April 2023",
    description:
      " Soft color schemes ensure a visually pleasing experience, aiming to keep users engaged and at ease while navigating this site, in hopes that all the information we wish to convey is easily absorbed by the user",
  },
  {
    href: "#",
    image: TestImage,
    title: "Project 4",
    subtitle: "Construction Company",
    tags: ["Landing page", "UI/UX Design"],
    date: "April 2023",
    description:
      " Soft color schemes ensure a visually pleasing experience, aiming to keep users engaged and at ease while navigating this site, in hopes that all the information we wish to convey is easily absorbed by the user",
  },
  {
    href: "#",
    image: TestImage,
    title: "Project 5",
    subtitle: "Construction Company",
    tags: ["Landing page", "UI/UX Design"],
    date: "April 2023",
    description:
      " Soft color schemes ensure a visually pleasing experience, aiming to keep users engaged and at ease while navigating this site, in hopes that all the information we wish to convey is easily absorbed by the user",
  },
];

export const navigationLinks: LinkType[] = [
  {
    label: "Inicio",
    href: "/",
    icon: "home",
    ariaLabel: "Inicio",
  },
  {
    label: "Templates",
    href: "/templates",
    icon: "file",
    ariaLabel: "Templates",
  },
  {
    label: "Proyectos",
    href: "/projects",
    icon: "folder",
    ariaLabel: "Proyectos",
  },
  {
    label: "Contáctame",
    href: "/contact",
    icon: "envelope",
    ariaLabel: "Contácto",
  },
];
