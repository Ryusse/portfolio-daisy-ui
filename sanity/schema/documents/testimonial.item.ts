import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial.item",
  title: "Testimonio",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre",
      type: "string",
    }),
    defineField({
      name: "occupation",
      title: "Ocupación",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Descripción",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Imágen",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
