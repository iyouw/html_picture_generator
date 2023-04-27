import Router from '@koa/router';
import { PictureGenerateController } from '../controller/picture_generate_controller';

const router = new Router();

router.post("/pictureGenerate", PictureGenerateController.generate);

export {router};