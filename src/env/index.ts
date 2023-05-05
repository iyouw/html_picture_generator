import { join } from "path";
import { tmpdir } from 'os';
import { cwd } from "process";

export const ROOT = cwd();
export const TEMPLATE_DIR = join(ROOT, 'template');

const TMP_DIR = tmpdir();
export const HTML_DIR = join(TMP_DIR, 'html');
export const PICTURE_DIR = join(TMP_DIR, 'picture');