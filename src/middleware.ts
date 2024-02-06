import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(({  url, cookies }, next) => {
  const visitor = url.searchParams.get('v');
  if (visitor) {
    url.searchParams.delete('v');
    cookies.set('v', visitor);
    return Response.redirect(url);
  }
  return next();
});
