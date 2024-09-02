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
  },
  {
    label: "Behance",
    icon: "behance",
    href: "#",
  },
  {
    label: "Linkedin",
    icon: "linkedin",
    href: "#",
  },
  {
    label: "Github",
    icon: "github",
    href: "#",
  },
];

export const ctaLinks: CtaItemType[] = [
  {
    icon: "folder",
    title: "Last projects",
    text: "Name of the last projects",
    href: "#projects",
  },
  {
    icon: "layer-group",
    title: "Services",
    text: "All services I give",
    href: "#services",
  },
  {
    icon: "envelope",
    title: "Contact me",
    text: "Send me a email",
    href: "/contact",
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
    title: "Full pages Website design",
    description:
      "Crafting immersive and engaging full-page website designs that captivate audiences and deliver a seamless user experience.",
    image: TestImage,
  },
  {
    href: "#",
    icon: "code",
    title: "Web Development",
    description: "I develop websites using React, Next.js, Gatsby, and Vue.",
    image: TestImage,
  },
  {
    href: "#",
    icon: "object-group",
    title: "UI/UX Design",
    description: "I design websites using Figma.",
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
    ariaLabel: "Ir a proyectos",
  },
  {
    label: "Templates",
    href: "/templates",
    icon: "file",
    ariaLabel: "Ir a proyectos",
  },
  {
    label: "Proyectos",
    href: "/projects",
    icon: "folder",
    ariaLabel: "Ir a proyectos",
  },
  {
    label: "Contáctame",
    href: "/contact",
    icon: "envelope",
    ariaLabel: "Ir a contacto",
  },
];
