import { defineField, defineType } from "sanity";

export default defineType({
  name: "new.module",
  title: "Noticias",
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
      name: "new_list",
      title: "Lista de noticias",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "new.item" }],
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({
      title: "Sección de noticias",
    }),
  },
});
