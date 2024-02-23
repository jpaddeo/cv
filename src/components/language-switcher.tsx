"use client";

import {useState} from "react";
import {useRouter, usePathname} from "next/navigation";

import {locales} from "@/middleware";

function LanguageSwitcher() {
  const [currentLocale, setCurrentLocale] = useState(
    () => window.localStorage.getItem("locale") || "es",
  );
  const router = useRouter();
  const pathname = usePathname();

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentLocale(event.target.value);
    window.localStorage.setItem("locale", event.target.value);
    router.replace(`${pathname}?locale=${event.target.value}`);
  };

  return (
    <select defaultValue={currentLocale} onChange={handleSelectChange}>
      {locales.map((locale) => (
        <option key={locale} value={locale}>
          {locale}
        </option>
      ))}
    </select>
  );
}

export default LanguageSwitcher;
