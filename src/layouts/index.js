import { Box } from "@chakra-ui/react"
import React from "react"
import Header from "../components/header"
import Seo from "../components/seo"
import { AppProvider } from "./Context"
import smoothscroll from "smoothscroll-polyfill"

const Layout = ({ children }) => {
  smoothscroll.polyfill()
  return (
    <AppProvider>
      <Seo />
      <Box position={"relative"}>
        <Header />
        {children}
      </Box>
    </AppProvider>
  )
}

export default Layout
