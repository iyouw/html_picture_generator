import { Liquid } from "liquidjs";
import { readFile, writeFile } from "fs/promises";
import { existsSync } from 'fs';

const engine = new Liquid();

export class TemplateEngine {
  public static async render(template: string, data: Record<string, any>, destination: string): Promise<void>
  {
    if (!existsSync(template)) throw new Error('File not exist!');
    const content = await readFile(template, 'utf8');
    const result = await engine.parseAndRender(content, data);
    await writeFile(destination, result, 'utf8');
  }
}