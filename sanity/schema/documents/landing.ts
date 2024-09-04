import { defineField, defineType } from "sanity";

export default defineType({
  name: "landing",
  title: "Landing",
  type: "document",
  fields: [
    defineField({
      name: "modules",
      type: "array",
      of: [
        { type: "banner" },
        { type: "experience" },
        { type: "course.module" },
        { type: "partners.module" },
        { type: "about.module" },
        { type: "testimonial.module" },
        { type: "new.module" },
        { type: "contact.module" },
      ],
    }),
  ],
  preview: {
    prepare: () => ({
      title: "Landing page",
    }),
  },
});
