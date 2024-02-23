import "../globals.css";
import {getDictionary} from "@/lib/dictionaries";
import LanguageSwitcher from "@/components/language-switcher";

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
  return (
    <html lang={lang}>
      <body>
        <header>
          <LanguageSwitcher />
        </header>
        {children}
      </body>
    </html>
  );
}
