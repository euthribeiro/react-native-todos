import React, { createContext, ReactNode, useContext, useState } from 'react';

interface ThemeContextProps {
  isDarkTheme: boolean;
  setIsDarkTheme: (bool: boolean) => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export function ThemeProvider({ children }: ThemeProviderProps) {

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{
      isDarkTheme,
      setIsDarkTheme
    }}>{children}</ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext);
}