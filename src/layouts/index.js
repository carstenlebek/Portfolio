import { Box } from "@chakra-ui/react"
import React from "react"
import Header from "../components/header"
import { AppProvider } from "./Context"

const Layout = ({ children }) => {
  return (
    <AppProvider>
      <Box position={"relative"}>
        <Header />
        {children}
      </Box>
    </AppProvider>
  )
}

export default Layout
