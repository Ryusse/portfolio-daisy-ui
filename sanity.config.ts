// Different environments use different variables
const projectId = import.meta.env.PUBLIC_SANITY_STUDIO_PROJECT_ID! || import.meta.env.PUBLIC_SANITY_PROJECT_ID!;
const dataset = import.meta.env.PUBLIC_SANITY_STUDIO_DATASET! || import.meta.env.PUBLIC_SANITY_DATASET!;

// Feel free to remove this check if you don't need it
if (!projectId || !dataset) {
  throw new Error(
    `Missing environment variable(s). Check if named correctly in .env file.\n\nShould be:\nPUBLIC_SANITY_STUDIO_PROJECT_ID=${projectId}\nPUBLIC_SANITY_STUDIO_DATASET=${dataset}\n\nAvailable environment variables:\n${JSON.stringify(
      import.meta.env,
      null,
      2,
    )}`,
  );
}

import { defineConfig } from "sanity";
//@ts-ignore
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schema";
import structure from "./sanity/structure";

export default defineConfig({
  name: "ryuse-portfolio",
  title: "Ryuse portfolio",
  projectId,
  dataset,
  plugins: [
    structureTool({ title: "Content", structure }),
    //visionTool()
  ],
  schema: {
    types: schemaTypes,
  },
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      const { type, schemaType } = creationContext;
      if (type === "structure" && schemaType == "landing") {
        return [];
      }
      return prev;
    },
  },
});
