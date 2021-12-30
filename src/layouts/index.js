import { Box } from "@chakra-ui/react"
import React, { useEffect } from "react"
import Header from "../components/header"
import Seo from "../components/seo"
import { AppProvider } from "./Context"

const Layout = ({ children, location }) => {
  return (
    <AppProvider>
      <Seo />
      <Box position={"relative"}>
        <Header location={location} />
        {children}
      </Box>
    </AppProvider>
  )
}

export default Layout
