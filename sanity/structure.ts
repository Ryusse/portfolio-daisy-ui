import { singleton } from "./utils";

//@ts-ignore
import type { StructureResolver } from "sanity/structure";

const structure: StructureResolver = (S) =>
  S.list()
    .title("Contenido")
    .items([
      singleton(S, "Configuración", "settings"),
      S.divider(),
      singleton(S, "Landing page", "landing.page"),
      singleton(S, "Página proyectos", "projects.page"),
      S.divider(),
      S.documentTypeListItem("project.item").title("Proyectos"),
      S.documentTypeListItem("testimonial.item").title("Testimonios"),
      S.documentTypeListItem("new.item").title("Noticias"),
      S.divider(),
      S.documentTypeListItem("category.item").title("Categorías"),
      S.divider(),
    ]);

export default structure;
