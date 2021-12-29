import { Button, Flex, Heading } from "@chakra-ui/react"
import React, { useState, useEffect } from "react"
import { isMobile } from "react-device-detect"

export default function Header() {
  let listener = null
  const [scrollState, setScrollState] = useState(false)

  useEffect(() => {
    listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop
      if (scrolled >= 60) {
        if (!scrollState) {
          setScrollState(true)
        }
      } else {
        if (scrollState) {
          setScrollState(false)
        }
      }
    })
    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [scrollState])

  return (
    <Flex
      align={"center"}
      justify={"space-between"}
      paddingX={{ base: "4", lg: "8" }}
      paddingY={{ base: "4", lg: "4" }}
      position={"fixed"}
      top="0"
      w="full"
      bg={scrollState ? "bg" : "transparent"}
      zIndex={1000}
      transition={"all 0.3s ease-in"}
    >
      <Heading>Carsten Lebek</Heading>
      {!isMobile && (
        <Button colorScheme={"red"}>Lass und zusammenarbeiten!</Button>
      )}
    </Flex>
  )
}
