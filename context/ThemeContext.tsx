import React, { createContext, useState, ReactNode } from 'react'

interface Theme {
  bodyBackgroundColor: { light: string; dark: string } //background color
  strokeWidth: string
  svgFill: string
  opacity: number
  borderColor: { light: string; dark: string[] } // each box's border color
  borderRadius: { light: string; dark: string }
  boxBackgroundColor: string[] //each box's background color
  pillBackgroundColor: { light: string[]; dark: string }
}

interface ThemeContextProps {
  theme: Theme
  updateTheme: (newTheme: Partial<Theme>) => void
}

const initialTheme: Theme = {
  bodyBackgroundColor: { light: '#eaeaea', dark: '#1e1e1e' },
  strokeWidth: '10px',
  svgFill: '',
  opacity: 0,
  borderColor: {
    light: '#1e1e1e',
    dark: [
      '#4a95a4',
      '#57a580',
      '#f9e19d',
      '#5a6191',
      '#54a58a',
      '#e6abbe',
      '#e17a68',
      '#4eac5b',
      '#6b569e',
      '#4fb18d',
      '#e6abbe',
      '#d73832',
      '#faec51',
      '#c4a484',
      '#c1bfc0',
    ],
  },
  borderRadius: { light: '100px', dark: '20px' },
  boxBackgroundColor: [],
  pillBackgroundColor: {
    light: [
      '#4a95a4',
      '#224044',
      '#ffffff',
      '#e6abbe',
      '#54a58a',
      '#5a6191',
      '#de7258',
      '#add4bd',
      '#5a6191',
      '#54a58a',
      '#4a95a4',
      '#d14d34',
      '#faec51',
      '#fcdd5f',
      '#add4bd',
      '#ffffff',
    ],
    dark: '#eae0d7',
  },
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
