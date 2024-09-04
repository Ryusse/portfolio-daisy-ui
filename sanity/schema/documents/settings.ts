import { defineField, defineType } from "sanity";

export default defineType({
  name: "settings",
  title: "Settings",
  type: "document",
  groups: [
    {
      name: "general",
      title: "General",
    },
    {
      name: "seo",
      title: "SEO & metadata",
    },
  ],
  fieldsets: [
    {
      title: "SEO & metadata",
      name: "metadata",
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      title: "Social Media",
      name: "social",
    },
    {
      title: "Website Logo",
      name: "logos",
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Título del sitio",
      group: "seo",
    }),
    defineField({
      title: "URL",
      name: "url",
      type: "url",
      description:
        "La URL del sitio principal. Se utiliza para crear una URL canónica.",
      group: "seo",
    }),
    defineField({
      title: "Autor",
      name: "author",
      type: "string",
      group: "seo",
    }),
    defineField({
      name: "copyright",
      type: "string",
      title: "Copyright",
      group: "general",
      description:
        "Ingrese el nombre de la empresa para que aparezca en el pie de página después de ©",
    }),
    defineField({
      title: "Logo principal",
      description: "Sube tu logo principal aquí. Se prefiere SVG.",
      name: "logo",
      type: "image",
      group: "general",
      fieldset: "logos",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Importante para SEO y accesibilidad.",
        },
      ],
    }),

    // defineField({
    //   name: "email",
    //   type: "string",
    //   title: "Correo",
    //   validation: (Rule: any) =>
    //     Rule.regex(
    //       /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    //       {
    //         name: "email", // Error message is "Does not match email-pattern"
    //         invert: false, // Boolean to allow any value that does NOT match pattern
    //       }
    //     ),
    // }),

    defineField({
      name: "whatsapp",
      type: "string",
      title: "Teléfono",
      group: "general",
    }),

    // defineField({
    //   name: "social",
    //   type: "array",
    //   title: "Redes sociales",
    //   description: "Ingrese las URL de sus redes sociales",
    //   validation: (Rule) => Rule.unique(),
    //   of: [
    //     {
    //       type: "object",
    //       fields: [
    //         {
    //           type: "string",
    //           name: "media",
    //           title: "Elija las redes sociales",
    //           options: {
    //             list: [
    //               { title: "Twitter", value: "twitter" },
    //               { title: "Facebook", value: "facebook" },
    //               { title: "Instagram", value: "instagram" },
    //               { title: "Linkedin", value: "linkedin" },
    //               { title: "Youtube", value: "youtube" },
    //             ],
    //           },
    //         },
    //         {
    //           type: "url",
    //           name: "url",
    //           title: "URL del perfil completo",
    //         },
    //       ],
    //       preview: {
    //         select: {
    //           title: "media",
    //           subtitle: "url",
    //         },
    //       },
    //     },
    //   ],
    // }),

    defineField({
      title: "Meta Description",
      name: "description",
      fieldset: "metadata",
      type: "text",
      rows: 5,
      group: "seo",
      validation: (Rule) => Rule.min(20).max(200),
      description: "Ingrese la meta descripción SEO",
    }),

    defineField({
      name: "openGraphImage",
      type: "image",
      title: "Open Graph Image",
      group: "seo",
      description:
        "Imagen para compartir vistas previas en Facebook, Twitter, etc.",
      fieldset: "metadata",
    }),
  ],
});
