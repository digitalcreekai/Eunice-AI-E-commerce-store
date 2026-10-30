import { readFile } from "node:fs/promises";
import path from "node:path";

export default async function HomePage() {
  const html = await readFile(path.join(process.cwd(), "index.html"), "utf8");
  const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1];

  if (!body) {
    throw new Error("Could not find the storefront body in index.html");
  }

  return <div dangerouslySetInnerHTML={{ __html: body }} />;
}
