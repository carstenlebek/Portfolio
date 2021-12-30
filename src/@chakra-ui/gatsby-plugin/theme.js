import { extendTheme } from "@chakra-ui/react"
const theme = {
  fonts: {
    heading:
      "'neue-haas-grotesk-display' ,'Helvetica Neue', 'Arial Nova', Helvetica, Arial, sans-serif",
    body: "'Open Sans', 'Helvetica Neue', 'Arial Nova', Helvetica, Arial, sans-serif",
  },
  styles: {
    global: {
      html: {
        // scrollBehavior: "smooth",
      },
      body: {
        bg: "#fefefe",
        color: "#1A1423",
        fontWeight: 400,
        overflowX: "hidden",
      },
      h1: {
        fontWeight: 900,
      },
    },
  },
  colors: {
    primary: "e85a4f",
    bg: "#fefefe",
    sbg: "#1A1423",
    textSecondary: "#fefefe",
  },
}

export default extendTheme(theme)
