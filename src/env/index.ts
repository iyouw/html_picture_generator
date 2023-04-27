import { join } from "path";
import { cwd } from "process"

export const ROOT = join(cwd(), '..');
export const TEMPLATE_DIR = join(ROOT, 'template');
export const HTML_DIR = join(ROOT, 'html');
export const PICTURE_DIR = join(ROOT, 'picture');