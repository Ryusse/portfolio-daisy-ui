import { defineField, defineType } from "sanity";

export default defineType({
  name: "course.item",
  title: "Cursos",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "mainImage",
      title: "Imágen portada",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      title: "Tags",
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "body",
      title: "Contenido",
      type: "blockContent",
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
