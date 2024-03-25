import {type NextRequest} from "next/server";

export const locales = ["es", "en"];

export function middleware(request: NextRequest) {
  const {pathname, searchParams} = request.nextUrl;
  let locale = searchParams.get("locale");

  if (!locale || !locales.includes(locale)) {
    locale = locales[0];
    const pathnameHasLocale = locales.some(
      (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
    );

    if (pathnameHasLocale) return;
  } else {
    request.nextUrl.searchParams.delete("locale");
  }

  request.nextUrl.pathname = `/${locale}${pathname.replace(/^\/(es|en)/, "")}`;

  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.json).*)",
  ],
};
