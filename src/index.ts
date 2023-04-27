import Koa from 'koa';
import cors from '@koa/cors';
import serve from 'koa-static';
import bodyParser from 'koa-bodyparser';
import { router } from './router';
import { PICTURE_DIR } from './env';

const app = new Koa();

app.use(cors());
app.use(serve(PICTURE_DIR));

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);