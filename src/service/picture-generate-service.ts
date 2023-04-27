
import { writeFile, rm } from "fs/promises";
import { join } from "path";
import { v4 as uuidv4} from 'uuid';
import { HTML_DIR, PICTURE_DIR, TEMPLATE_DIR } from "../env";
import { PictureGenerator } from "../infra/picture-generator";
import { TemplateEngine } from "../infra/template-engine";
import { IPictureGenerateRequest } from "../typings/i-picture-generate-request";

export class PictureGenerateService {
  public static async generate(request: IPictureGenerateRequest): Promise<string> {
    const { templateId, data, option } = request;
    const templateFile = join(TEMPLATE_DIR, `${templateId}.liquid`);
    const htmlFile = join(HTML_DIR, `${uuidv4()}.html`);
    await TemplateEngine.render(templateFile, data, htmlFile);
    const buffer = await PictureGenerator.generate(htmlFile, option);
    await rm(htmlFile);
    const pictureFileName = `${uuidv4()}.${option.format}`
    const pictureFile = join(PICTURE_DIR, pictureFileName);
    await writeFile(pictureFile, buffer);
    return pictureFileName;
  }
}