import { IPictureGenerateOption } from "./i-picture-generate-option";

export interface IPictureGenerateRequest{
  templateId: string;
  option: IPictureGenerateOption,
  data: Record<string, any>
}