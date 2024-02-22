import Link from "next/link";

import {getDictionary} from "@/lib/dictionaries";

import "../globals.css";
import LanguageSwitcher from "@/components/layout/language-switcher";

interface RootLayoutParams {
  children: React.ReactNode;
  params: {
    lang: "es" | "en";
  };
}

export async function generateMetadata({params: {lang}}: Exclude<RootLayoutParams, "children">) {
  const dictionary = await getDictionary(lang);

  return {
    title: dictionary.title,
    description: dictionary.description,
  };
}

export default async function RootLayout({children, params: {lang}}: RootLayoutParams) {
  const dictionary = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body className="dark container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] bg-background px-4 font-sans antialiased">
        <header className="text-xl font-bold leading-[4rem]">
          <Link href="/">{dictionary.title}</Link>
          <LanguageSwitcher />
        </header>
        <main className="py-8">{children}</main>
        <footer className="text-center leading-[4rem] opacity-70" />
      </body>
    </html>
  );
}
