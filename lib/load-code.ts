import { readFileSync } from "fs";
import path from "path";

export function getCodeFromFile(relativePath: string) {
  const filePath = path.join(process.cwd(), relativePath);
  return readFileSync(filePath, "utf-8");
}
