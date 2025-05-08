import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch: "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  schema: {
    collections: [
      {
        name: "news",
        label: "News",
        path: "src/content/news",
        fields: [
          { name: "title", label: "Title", type: "string", isTitle: true, required: true },
          { name: "pubDate", label: "Publication Date", type: "datetime" },
          { name: "updatedDate", label: "Update Date", type: "datetime" },
          { name: "thumbnail", label: "Image", type: "image", required: false },
          { name: "body", label: "Body", type: "rich-text", isBody: true },
        ],
      },
      {
        name: "pages",
        label: "Pages",
        path: "src/content/pages",
        fields: [
          { name: "title", label: "Title", type: "string", isTitle: true, required: true, },
          { name: "body", label: "Page Content", type: "rich-text", isBody: true, },
        ],
      }
    ],
  },
});
