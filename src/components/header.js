import {
  Button,
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  VStack,
  Text,
  Icon,
} from "@chakra-ui/react"
import React, { useState, useEffect } from "react"
import {
  Link as SmoothLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll"
import {
  FaCertificate,
  FaEnvelope,
  FaProjectDiagram,
  FaTools,
  FaUser,
} from "react-icons/fa"

export default function Header({ location }) {
  console.log(location)

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
    { name: "Über mich", url: "#about-me", icon: FaUser },
    { name: "Tools", url: "#toolbox", icon: FaTools },
    { name: "Zertifikate", url: "#certifications", icon: FaCertificate },
    { name: "Projekte", url: "#projects", icon: FaProjectDiagram },
  ]

  return (
    <Flex
      align={"center"}
      justify={"space-between"}
      paddingX={{ base: "4", lg: "8" }}
      paddingY={{ base: "4", lg: "4" }}
      position={{ base: "absolute", md: "fixed" }}
      top="0"
      w="full"
      bg={scrollState ? "bg" : "transparent"}
      shadow={scrollState ? "sm" : "none"}
      zIndex={1000}
      transition={"all 0.3s ease-in"}
    >
      {location.pathname === "/" ? (
        <SmoothLink
          to="top"
          smooth={true}
          style={{ flex: 1, cursor: "pointer" }}
        >
          <Heading textAlign={{ base: "center", md: "left" }} w="full">
            Carsten Lebek
          </Heading>
        </SmoothLink>
      ) : (
        <Heading
          as={"a"}
          flex={1}
          href="/#top"
          textAlign={{ base: "center", md: "left" }}
        >
          Carsten Lebek
        </Heading>
      )}
      <HStack spacing={"4"} px="8" display={{ base: "none", md: "flex" }}>
        {navItems.map((item, index) => (
          <Box key={index}>
            {location.pathname === "/" ? (
              <SmoothLink
                to={item.url.slice(1)}
                w="full"
                smooth={true}
                style={{ width: "100%", cursor: "pointer" }}
              >
                <Box
                  p="2"
                  _hover={{
                    textDecoration: "none",
                    color: "red.500",
                  }}
                >
                  {item.name}
                </Box>
              </SmoothLink>
            ) : (
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
            )}
          </Box>
        ))}
      </HStack>
      <Button colorScheme={"red"} display={{ base: "none", md: "inline-flex" }}>
        Lass uns zusammenarbeiten!
      </Button>
      <Box
        position={"fixed"}
        bottom={0}
        left={0}
        zIndex={1000}
        w="full"
        h="auto"
        bg="bg"
        shadow={"dark-lg"}
      >
        <SimpleGrid columns={navItems.length + 1} p="1" gap="2">
          {navItems.map((item, index) => (
            <div key={index}>
              {location.pathname === "/" ? (
                <SmoothLink
                  to={item.url.slice(1)}
                  w="full"
                  smooth={true}
                  style={{ width: "100%", cursor: "pointer" }}
                >
                  <VStack key={index} py="2" rounded={"md"} spacing={1}>
                    <Icon w={6} h={6} as={item.icon} />
                    <Text fontWeight={"bold"} fontSize={"xs"}>
                      {item.name}
                    </Text>
                  </VStack>
                </SmoothLink>
              ) : (
                <Link
                  p="2"
                  href={item.url}
                  _hover={{
                    textDecoration: "none",
                    color: "red.500",
                  }}
                >
                  <VStack key={index} py="2" rounded={"md"} spacing={1}>
                    <Icon w={6} h={6} as={item.icon} />
                    <Text fontWeight={"bold"} fontSize={"xs"}>
                      {item.name}
                    </Text>
                  </VStack>
                </Link>
              )}
            </div>
          ))}
          <VStack py="2" rounded={"md"} spacing={1}>
            <Icon w={6} h={6} as={FaEnvelope} />
            <Text fontWeight={"bold"} fontSize={"xs"}>
              Kontakt
            </Text>
          </VStack>
        </SimpleGrid>
      </Box>
    </Flex>
  )
}
