import { existsSync, mkdirSync } from "fs";
import { HTML_DIR, PICTURE_DIR } from "src/env";

export const ensurePrerequisite = ()=> {
  if (!existsSync(HTML_DIR)) mkdirSync(HTML_DIR);
  if (!existsSync(PICTURE_DIR)) mkdirSync(PICTURE_DIR);
}