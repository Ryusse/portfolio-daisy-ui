import type { CtaItemType, SocialLinkType } from "./types";

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
