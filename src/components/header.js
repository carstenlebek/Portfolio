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
  FaHome,
  FaProjectDiagram,
  FaTools,
  FaUser,
} from "react-icons/fa"
import { navigate, Link as GatsbyLink } from "gatsby"

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
      bg={
        !scrollState
          ? "transparent"
          : location.pathname.includes("projects")
          ? "sbg"
          : "bg"
      }
      color={location.pathname.includes("projects") ? "bg" : "sbg"}
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
          <Heading
            textAlign={{ base: "center", md: "left" }}
            w="full"
            display={{ base: "none", md: "flex" }}
          >
            Carsten Lebek
          </Heading>
        </SmoothLink>
      ) : (
        <Heading
          as={"a"}
          flex={1}
          onClick={e => {
            e.preventDefault()
            navigate("/")
          }}
          textAlign={{ base: "center", md: "left" }}
          display={{ base: "none", md: "flex" }}
          cursor={"pointer"}
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
                key={index}
                p="2"
                _hover={{
                  textDecoration: "none",
                  color: "red.500",
                }}
                onClick={e => {
                  e.preventDefault()

                  navigate("/" + item.url)
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
        px="2"
        pb="2"
      >
        <SimpleGrid
          columns={navItems.length + 1}
          // py="2"
          // px="2"
          // gap="2"
          display={{ base: "grid", md: "none" }}
          color={"red.500"}
          bg="bg"
          shadow={"dark-lg"}
          rounded={"md"}
          maxH="60px"
        >
          {location.pathname === "/" ? (
            <SmoothLink
              to={"top"}
              w="full"
              smooth={true}
              style={{ width: "100%", cursor: "pointer" }}
            >
              <VStack
                py="2"
                spacing={1}
                borderRight={"1px solid"}
                borderColor={"gray.300"}
              >
                <Icon w={6} h={6} as={FaHome} />
                <Text fontWeight={"bold"} fontSize={"xx-small"}>
                  Home
                </Text>
              </VStack>
            </SmoothLink>
          ) : (
            <Link
              _hover={{
                textDecoration: "none",
                color: "red.500",
              }}
              onClick={e => {
                e.preventDefault()
                navigate("/")
              }}
            >
              <VStack
                py="2"
                rounded={"md"}
                spacing={1}
                borderRight={"1px solid"}
                borderColor={"gray.300"}
              >
                <Icon w={6} h={6} as={FaHome} />
                <Text fontWeight={"bold"} fontSize={"xx-small"}>
                  Home
                </Text>
              </VStack>
            </Link>
          )}
          {navItems.map((item, index) => {
            if (location.pathname === "/") {
              return (
                <SmoothLink
                  key={index}
                  to={item.url.slice(1)}
                  w="full"
                  smooth={true}
                  style={{ width: "100%", cursor: "pointer" }}
                >
                  <VStack
                    key={index}
                    py="2"
                    spacing={1}
                    borderRight={
                      index !== navItems.length - 1 ? "1px solid" : "none"
                    }
                    borderColor={"gray.300"}
                  >
                    <Icon w={6} h={6} as={item.icon} />
                    <Text fontWeight={"bold"} fontSize={"xx-small"}>
                      {item.name}
                    </Text>
                  </VStack>
                </SmoothLink>
              )
            }

            return (
              <Link
                key={index}
                onClick={e => {
                  e.preventDefault()
                  navigate("/" + item.url)
                }}
              >
                <VStack
                  py="2"
                  rounded={"md"}
                  spacing={1}
                  borderRight={
                    index !== navItems.length - 1 ? "1px solid" : "none"
                  }
                  borderColor={"gray.300"}
                >
                  <Icon w={6} h={6} as={item.icon} />
                  <Text fontWeight={"bold"} fontSize={"xx-small"}>
                    {item.name}
                  </Text>
                </VStack>
              </Link>
            )
          })}
        </SimpleGrid>
      </Box>
    </Flex>
  )
}
