import { createContext, useContext, useEffect, useMemo, useState } from "react";

const PreferencesContext = createContext(null);

export function PreferencesProvider({ children }) {
  const [language, setLanguage] = useState(
    () => localStorage.getItem("portfolio-language") || "en"
  );

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved) return saved;
    return window.matchMedia?.("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  });

  useEffect(() => {
    const rtl = language === "ar";
    document.documentElement.lang = language;
    document.documentElement.dir = rtl ? "rtl" : "ltr";
    localStorage.setItem("portfolio-language", language);
  }, [language]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      theme,
      toggleTheme: () => setTheme((value) => (value === "dark" ? "light" : "dark")),
      isRtl: language === "ar",
    }),
    [language, theme]
  );

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) throw new Error("usePreferences must be used inside PreferencesProvider");
  return context;
}
