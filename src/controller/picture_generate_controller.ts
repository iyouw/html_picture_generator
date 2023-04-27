import { Context, Middleware } from "koa";
import { PictureGenerateService } from "../service/picture-generate-service";
import { IPictureGenerateRequest } from "../typings/i-picture-generate-request";

export class PictureGenerateController
{
  public static async generate(ctx: Context, next: Middleware): Promise<void>
  {
    const request = ctx.request.body as IPictureGenerateRequest;
    const url = await PictureGenerateService.generate(request);
    ctx.body = url;
  }
}