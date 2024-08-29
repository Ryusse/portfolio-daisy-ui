export type SocialLinkType = {
  label: string;
  icon: string;
  href: string;
};

export type CtaItemType = {
  title: string;
  icon: string;
  text: string;
  href: string;
};

export type ServiceType = {
  title: string;
  icon: string;
  description: string;
  href: string;
  image: ImageMetadata;
};

export type ProjectType = {
  href: string;
  image: ImageMetadata;
  title: string;
  subtitle: string;
  tags: string[];
  date: string;
  description: string;
};
