import React, { createContext, useState, ReactNode } from 'react'

interface Theme {
  bodyBackgroundColor: string
  strokeWidth: number
  svgFill: string
  opacity: number
  lineColor: string
  borderRadius: number
  boxBackgroundColor: string[]
  pillBackgroundColor: string[]
}

interface ThemeContextProps {
  theme: Theme
  updateTheme: (newTheme: Partial<Theme>) => void
}

const initialTheme: Theme = {
  bodyBackgroundColor: '',
  strokeWidth: 0,
  svgFill: '',
  opacity: 0,
  lineColor: '',
  borderRadius: 0,
  boxBackgroundColor: [],
  pillBackgroundColor: [],
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: initialTheme,
  updateTheme: () => {},
})

interface ThemeProviderProps {
  children: ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme)

  const updateTheme = (newTheme: Partial<Theme>) => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      ...newTheme,
    }))
  }

  return <ThemeContext.Provider value={{ theme, updateTheme }}>{children}</ThemeContext.Provider>
}

export { ThemeContext, ThemeProvider }
