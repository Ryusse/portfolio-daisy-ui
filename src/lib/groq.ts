import { sanityClient } from "sanity:client";

import groq from "groq";

export async function getCourses() {
  return await sanityClient.fetch(groq`*[_type == "course.item" && defined(slug.current)] | order(_createdAt desc)`);
}
