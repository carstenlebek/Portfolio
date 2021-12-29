import { extendTheme } from "@chakra-ui/react"
const theme = {
  fonts: {
    heading: "Quicksand, sans-serif",
    body: "Quicksand, sans-serif",
  },
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        bg: "#fefefe",
        color: "#1A1423",
        fontWeight: 500,
        overflowX: "hidden",
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
