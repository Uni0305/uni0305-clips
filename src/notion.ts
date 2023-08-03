import { Client, isFullPageOrDatabase } from "@notionhq/client";
import { ArticleProps } from "../components/Article";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function queryDatabase() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
  });
  return response.results
    .filter(isFullPageOrDatabase)
    .map((page) => {
      const titleProperty = page.properties["제목"];
      if (titleProperty.type !== "title") return;

      const linkProperty = page.properties["링크"];
      if (linkProperty.type !== "url") return;

      let cover: string = "";
      if (page.cover?.type === "external") cover = page.cover.external.url;
      else if (page.cover?.type === "file") cover = page.cover.file.url;
      else return;

      let icon: string = "";
      if (page.icon?.type === "external") icon = page.icon.external.url;
      else if (page.icon?.type === "file") icon = page.icon.file.url;
      else return;

      return {
        id: page.id,
        title: titleProperty.title.map((title) => title.plain_text).join(""),
        link: linkProperty.url?.toString() || "",
        cover,
        icon,
      };
    })
    .filter((page): page is ArticleProps => page !== undefined);
}
