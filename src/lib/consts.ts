import type { CtaItemType, ServiceType, SocialLinkType } from "./types";

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
    href: "#contact",
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
