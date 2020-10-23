import React, { useState, useEffect, createContext } from "react"
import {
  COLORS,
  INITIAL_COLOR_MODE_CSS_PROP,
  COLOR_MODE_KEY,
} from "./constants/theme"

type ThemeProps = {
  colorMode: string
  setColorMode: (newValue: string) => void
}

export const ThemeContext = createContext<ThemeProps>({} as ThemeProps)
export const ThemeProvider = ({ children }: any) => {
  const [colorMode, rawSetColorMode] = useState("")
  useEffect(() => {
    const root = window.document.documentElement
    const initialColorValue = root.style.getPropertyValue(
      INITIAL_COLOR_MODE_CSS_PROP
    )
    rawSetColorMode(initialColorValue)
  }, [])

  const contextValue = React.useMemo(() => {
    function setColorMode(newValue: string) {
      const root = window.document.documentElement
      // 1. Update React color-mode state
      rawSetColorMode(newValue)

      // 2. Update localStorage
      localStorage.setItem(COLOR_MODE_KEY, newValue)
      // 3. Update each color

      Object.entries(COLORS).forEach(([name, colorByTheme]) => {
        const cssVarName = `--clr-${name}`

        root.style.setProperty(cssVarName, colorByTheme[newValue])
      })
    }
    return {
      colorMode,
      setColorMode,
    }
  }, [colorMode, rawSetColorMode])

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}
