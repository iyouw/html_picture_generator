import type { IPictureGenerateOption } from "../typings/i-picture-generate-option";

import puppeteer from "puppeteer";
import { pathToFileURL } from "url";

export class PictureGenerator {
  public static async generate(html: string, option: IPictureGenerateOption): Promise<Buffer> {
    const pageUrl = pathToFileURL(html).toString();
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(pageUrl);
    await page.setViewport({
      width: option.width,
      height: option.height
    });
    const buffer = await page.screenshot({
      type: option.format
    });
    await browser.close();
    return buffer;
  }
}