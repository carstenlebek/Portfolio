import { Button, Box, Flex, Heading, HStack, Link } from "@chakra-ui/react"
import React, { useState, useEffect } from "react"

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

  const navItems = [
    { name: "Über mich", url: "#about-me" },
    { name: "Tools", url: "#toolbox" },
    { name: "Zertifikationen", url: "#certifications" },
  ]

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
      shadow={scrollState ? "sm" : "none"}
      zIndex={1000}
      transition={"all 0.3s ease-in"}
    >
      <Heading flex={1} as={"a"} href="/#top">
        Carsten Lebek
      </Heading>
      <HStack spacing={"4"} px="8" display={{ base: "none", md: "flex" }}>
        {navItems.map((item, index) => (
          <Box key={index}>
            <Link
              p="2"
              href={item.url}
              _hover={{
                textDecoration: "none",
                color: "red.500",
              }}
            >
              {item.name}
            </Link>
          </Box>
        ))}
      </HStack>
      <Button colorScheme={"red"} display={{ base: "none", md: "inline-flex" }}>
        Lass und zusammenarbeiten!
      </Button>
    </Flex>
  )
}
