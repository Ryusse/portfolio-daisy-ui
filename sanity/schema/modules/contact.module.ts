import { defineField, defineType } from "sanity";

export default defineType({
  name: "contact.module",
  title: "Contacto",
  type: "object",
  groups: [
    {
      name: "general",
      title: "General",
    },
    {
      name: "social",
      title: "Redes sociales",
    },
    {
      name: "contactInformation",
      title: "Información de contacto",
    },
    {
      name: "map",
      title: "Mapa",
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
      title: "Correo",
      name: "email",
      type: "string",
      group: "contactInformation",
    }),
    defineField({
      title: "Teléfono",
      name: "phone",
      type: "string",
      group: "contactInformation",
    }),
    defineField({
      title: "Dirección",
      name: "location",
      type: "string",
      group: "contactInformation",
    }),
    defineField({
      title: "Facebook",
      name: "facebook",
      type: "string",
      group: "social",
    }),
    defineField({
      title: "Youtube",
      name: "youtube",
      type: "string",
      group: "social",
    }),
    defineField({
      title: "Linkedin",
      name: "linkedin",
      type: "string",
      group: "social",
    }),
    defineField({
      title: "Instagram",
      name: "instagram",
      type: "string",
      group: "social",
    }),
    defineField({
      title: "Código de mapa",
      name: "map",
      type: "string",
      group: "map",
    }),
  ],
  preview: {
    prepare: () => ({
      title: "Sección de contacto",
    }),
  },
});
