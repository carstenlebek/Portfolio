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
        bg: "#eae7dc",
        color: "#000",
        fontWeight: 500,
      },
    },
  },
  colors: {
    primary: "e85a4f",
    bg: "#eae7dc",
    sbg: "#d8c3a5",
  },
}

export default extendTheme(theme)
