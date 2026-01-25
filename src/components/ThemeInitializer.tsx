import { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export default function ThemeInitializer() {
  const isDark = useSelector((state: RootState) => state.theme.isDark);

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", JSON.stringify(isDark));
  }, [isDark]);

  return null;
}
