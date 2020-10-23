export const COLORS: {
  [key: string]: {
    [key: string]: string
  }
} = {
  text: {
    light: "#000",
    dark: "#eee",
  },
  background: {
    light: "#f3f0f0",
    dark:
      "linear-gradient(0deg, rgba(2,0,36,1) 5%, rgba(4,2,37,1) 11%, rgba(6,4,38,1) 14%, rgba(7,5,39,1) 20%, rgba(83,91,92,1) 87%, rgba(77,100,105,1) 100%, rgba(0,212,255,1) 100%)",
  },
  "project-info": {
    light: "#fff",
    dark: "#535b5c",
  },
  "header": {
    light: "#f3f0f0",
    dark: "#214"
  }
}
export const COLOR_MODE_KEY = "color-mode"
export const INITIAL_COLOR_MODE_CSS_PROP = "--initial-color-mode"
