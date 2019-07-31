import Koa from 'koa';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();

router.get('/message', async (ctx: Koa.Context) => {
  ctx.type = 'json';
  ctx.body = { name: 'world', message: 'Hello!' };
});

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
