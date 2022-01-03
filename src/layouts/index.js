import { Box } from "@chakra-ui/react"
import { AnimatePresence } from "framer-motion"
import React, { useEffect } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import Seo from "../components/seo"
import { AppProvider } from "./Context"

const Layout = ({ children, location }) => {
  return (
    <AppProvider>
      <Seo />
      <Box position={"relative"}>
        <Header location={location} />
        <AnimatePresence initial={false} exitBeforeEnter>
          <main>{children}</main>
        </AnimatePresence>
        <Footer />
      </Box>
    </AppProvider>
  )
}

export default Layout
