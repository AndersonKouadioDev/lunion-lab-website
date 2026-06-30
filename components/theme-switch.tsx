"use client";

import { useIsSSR } from "@react-aria/ssr";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { FC } from "react";

import { MoonFilledIcon, SunFilledIcon } from "@/components/icons";
import { useConfig } from "@/hooks/use-config";

export interface ThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({ className }) => {
  const { theme, setTheme } = useTheme();
  const [_, setConfig] = useConfig();

  const isSSR = useIsSSR();
  const isSelected = theme === "light" || isSSR;

  const onChange = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    setConfig((prevConfig) => ({
      ...prevConfig,
      theme: next,
    }));
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isSelected}
      aria-label={`Switch to ${isSelected ? "dark" : "light"} mode`}
      onClick={onChange}
      className={clsx(
        "px-px flex items-center justify-center text-default-500 cursor-pointer transition-opacity hover:opacity-80",
        className
      )}
    >
      {!isSelected || isSSR ? (
        <SunFilledIcon size={22} />
      ) : (
        <MoonFilledIcon size={22} />
      )}
    </button>
  );
};
