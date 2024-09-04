import { singleton } from "./utils";

//@ts-ignore
import type { StructureResolver } from "sanity/structure";

const structure: StructureResolver = (S) =>
  S.list()
    .title("Contenido")
    .items([
      singleton(S, "Configuración", "settings"),
      S.divider(),
      singleton(S, "Landing page", "landing"),
      S.divider(),
      S.documentTypeListItem("course.item").title("Cursos"),
      S.documentTypeListItem("testimonial.item").title("Testimonios"),
      S.documentTypeListItem("new.item").title("Noticias"),
      S.divider(),
    ]);

export default structure;
