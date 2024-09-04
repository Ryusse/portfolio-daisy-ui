import { defineField, defineType } from "sanity";

export default defineType({
  name: "course.module",
  title: "Servicios",
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
      name: "course_list",
      title: "Lista de servicios",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "course.item" }],
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({
      title: "Sección de courses",
    }),
  },
});
