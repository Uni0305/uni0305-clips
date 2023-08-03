import { use } from "react";
import Article from "../components/Article";
import { queryDatabase } from "../src/notion";

export default function Home() {
  const articles = use(queryDatabase());

  return (
    <>
      <main className="flex justify-center w-screen">
        <ul className="flex flex-col gap-4 mt-24 mb-64 lg:flex-wrap lg:container lg:items-start lg:content-start lg:flex-row lg:justify-center lg:gap-6">
          {articles.map((article) => (
            <li key={article.id}>
              <Article {...article} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
