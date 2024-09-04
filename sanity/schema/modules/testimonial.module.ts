import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial.module",
  title: "Testimonios",
  type: "object",
  fields: [
    defineField({
      title: "Título",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Subtítulo",
      name: "subtitle",
      type: "string",
    }),
    defineField({
      name: "testimonials_list",
      title: "Lista de testimonios",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "testimonial.item" }],
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({
      title: "Sección de testimonios",
    }),
  },
});
