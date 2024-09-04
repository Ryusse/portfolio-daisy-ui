import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "@sanity/types";
import { sanityClient } from "sanity:client";

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: Image) {
  return builder.image(source);
}

export function urlForSource(source: Image) {
  if (!source || !source.asset) return;
  const dimensions = source?.asset?._ref.split("-")[2];

  const alt = builder.options;

  const [width, height] = dimensions.split("x").map((num: string) => parseInt(num, 10));

  const url = builder.image(source).auto("format").width(Math.min(width, 2000)).url();

  return {
    src: url,
    width: width,
    height: height,
    alt: alt,
  };
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("es-ES", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
