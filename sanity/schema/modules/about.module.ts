import { defineField, defineType } from "sanity";

export default defineType({
  name: "about.module",
  title: "Sobre la empresa",
  type: "object",
  groups: [
    {
      name: "general",
      title: "General",
    },
    {
      name: "mision",
      title: "Misión",
    },
    {
      name: "vision",
      title: "Visión",
    },
    {
      name: "values",
      title: "Valores",
    },
  ],
  fields: [
    defineField({
      title: "Título",
      name: "title",
      type: "string",
      group: "general",
    }),
    defineField({
      title: "Subtítulo",
      name: "subtitle",
      type: "string",
      group: "general",
    }),
    defineField({
      title: "Descripción",
      name: "description",
      type: "string",
      group: "general",
    }),
    defineField({
      title: "Texto de botón",
      name: "buttonText",
      type: "string",
      group: "general",
    }),
    defineField({
      title: " Título misión",
      name: "misionTitle",
      type: "string",
      group: "mision",
    }),
    defineField({
      title: "Descripción misión",
      name: "misionDescription",
      type: "string",
      group: "mision",
    }),
    defineField({
      title: "Título visión",
      name: "visionTitle",
      type: "string",
      group: "vision",
    }),
    defineField({
      title: "Descripción visión",
      name: "visionDescription",
      type: "string",
      group: "vision",
    }),
    defineField({
      title: "Título valores",
      name: "valuesTitle",
      type: "string",
      group: "values",
    }),
    defineField({
      title: "Descripción valores",
      name: "valuesDescription",
      type: "string",
      group: "values",
    }),
  ],
  preview: {
    prepare: () => ({
      title: "Sección sobre la empresa",
    }),
  },
});
