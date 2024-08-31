const TestImage = new Proxy({"src":"/_astro/service-image-test.DRTTrK4s.avif","width":1024,"height":768,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/github/personal/portfolio-landing/src/assets/images/service-image-test.avif";
							}
							
							return target[name];
						}
					});

const SITE_TITLE = "Astro Blog";
const SITE_DESCRIPTION = "Welcome to my website!";
const socialLinks = [
  {
    label: "Dribble",
    icon: "dribble",
    href: "#"
  },
  {
    label: "Behance",
    icon: "behance",
    href: "#"
  },
  {
    label: "Linkedin",
    icon: "linkedin",
    href: "#"
  },
  {
    label: "Github",
    icon: "github",
    href: "#"
  }
];
const ctaLinks = [
  {
    icon: "folder",
    title: "Last projects",
    text: "Name of the last projects",
    href: "#projects"
  },
  {
    icon: "layer-group",
    title: "Services",
    text: "All services I give",
    href: "#services"
  },
  {
    icon: "envelope",
    title: "Contact me",
    text: "Send me a email",
    href: "/contact"
  }
];
const services = [
  {
    href: "#",
    icon: "file",
    title: "Full pages Website design",
    description: "Crafting immersive and engaging full-page website designs that captivate audiences and deliver a seamless user experience.",
    image: TestImage
  },
  {
    href: "#",
    icon: "code",
    title: "Web Development",
    description: "I develop websites using React, Next.js, Gatsby, and Vue.",
    image: TestImage
  },
  {
    href: "#",
    icon: "object-group",
    title: "UI/UX Design",
    description: "I design websites using Figma.",
    image: TestImage
  }
];
const featuredWork = [
  {
    href: "#",
    image: TestImage,
    title: "Project 1",
    subtitle: "Construction Company",
    tags: ["Landing page", "UI/UX Design"],
    date: "April 2023",
    description: " Soft color schemes ensure a visually pleasing experience, aiming to keep users engaged and at ease while navigating this site, in hopes that all the information we wish to convey is easily absorbed by the user"
  },
  {
    href: "#",
    image: TestImage,
    title: "Project 2",
    subtitle: "Construction Company",
    tags: ["Landing page", "UI/UX Design"],
    date: "April 2023",
    description: " Soft color schemes ensure a visually pleasing experience, aiming to keep users engaged and at ease while navigating this site, in hopes that all the information we wish to convey is easily absorbed by the user"
  },
  {
    href: "#",
    image: TestImage,
    title: "Project 3",
    subtitle: "Construction Company",
    tags: ["Landing page", "UI/UX Design"],
    date: "April 2023",
    description: " Soft color schemes ensure a visually pleasing experience, aiming to keep users engaged and at ease while navigating this site, in hopes that all the information we wish to convey is easily absorbed by the user"
  },
  {
    href: "#",
    image: TestImage,
    title: "Project 4",
    subtitle: "Construction Company",
    tags: ["Landing page", "UI/UX Design"],
    date: "April 2023",
    description: " Soft color schemes ensure a visually pleasing experience, aiming to keep users engaged and at ease while navigating this site, in hopes that all the information we wish to convey is easily absorbed by the user"
  },
  {
    href: "#",
    image: TestImage,
    title: "Project 5",
    subtitle: "Construction Company",
    tags: ["Landing page", "UI/UX Design"],
    date: "April 2023",
    description: " Soft color schemes ensure a visually pleasing experience, aiming to keep users engaged and at ease while navigating this site, in hopes that all the information we wish to convey is easily absorbed by the user"
  }
];

export { SITE_TITLE as S, SITE_DESCRIPTION as a, services as b, ctaLinks as c, featuredWork as f, socialLinks as s };
