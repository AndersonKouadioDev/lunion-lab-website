"use client";

import { useConfig } from "@/hooks/use-config";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Button, Dropdown } from "@heroui/react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

export default function LocaleSwitcher() {
  const [_, setConfig] = useConfig();

  const t = useTranslations("config.locales");

  const router = useRouter();
  const pathname = usePathname();
  const localActive = useLocale();

  const onSelectChange = (nextLocale: string) => {
    router.replace(pathname, { locale: nextLocale });
    setConfig((prevConfig) => ({
      ...prevConfig,
      locale: nextLocale,
    }));
  };

  const locales = [
    {
      code: "ar",
      label: t("ar"),
      flag: "/images-examples/all-img/flag-2.png",
    },
    {
      code: "en",
      label: t("en"),
      flag: "/images-examples/all-img/flag-1.png",
    },
    {
      code: "fr",
      label: t("fr"),
      flag: "/images-examples/all-img/flag-3.png",
    },
  ];

  const activeLocale = locales.find((l) => l.code === localActive) ?? locales[2];
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <Button variant="ghost" className="rounded-full px-2 text-sm">
          <div className="flex items-center gap-2">
            <Image
              src={activeLocale.flag}
              width={24}
              height={24}
              alt={activeLocale.label}
            />
            {activeLocale.code.toUpperCase()}
          </div>
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Popover>
        <Dropdown.Menu
          aria-label="Select language"
          onAction={(key) => onSelectChange(key as string)}
          selectedKeys={[localActive]}
          selectionMode="single"
        >
          {locales.map((locale) => (
            <Dropdown.Item
              key={locale.code}
              id={locale.code}
              textValue={locale.label}
            >
              <div className="flex items-center gap-2">
                <Image
                  src={locale.flag}
                  width={24}
                  height={24}
                  alt={locale.label}
                />
                <span className="font-medium">{locale.label}</span>
              </div>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}
