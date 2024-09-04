import { defineField, defineType } from "sanity";

export default defineType({
  name: "partners.module",
  title: "Partners",
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
      name: "imagesGallery",
      title: "Galería de imágenes",
      type: "array",
      of: [{ type: "image" }],
    }),
  ],
  preview: {
    prepare: () => ({
      title: "Sección de partners",
    }),
  },
});
