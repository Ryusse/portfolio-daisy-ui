import { defineField, defineType } from "sanity";

export default defineType({
  name: "banner",
  title: "Banner",
  type: "object",
  fields: [
    defineField({
      title: "Título",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Texto botón",
      name: "buttonText",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
        }),
        defineField({
          name: "loading",
          type: "string",
          options: {
            layout: "radio",
            list: ["lazy", "eager"],
          },
          initialValue: "lazy",
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({
      title: "Sección de banner",
    }),
  },
});
