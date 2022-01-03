import { Box, chakra, Flex, VStack, Text } from "@chakra-ui/react"
import { Link } from "gatsby"
import React from "react"

export default function Footer() {
  return (
    <>
      <Box position={"relative"}>
        <chakra.div
          position={"absolute"}
          bottom={0}
          left={0}
          w="full"
          overflow={"hidden"}
          lineHeight={0}
          transform={"rotate(180deg)"}
        >
          <chakra.svg
            position={"relative"}
            display={"block"}
            width={"calc(100% + 1.3px)"}
            height={"70px"}
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              fill={"#1A1423"}
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            ></path>
          </chakra.svg>
        </chakra.div>
      </Box>
      <Flex
        bg="sbg"
        color="textSecondary"
        minH="md"
        align={"center"}
        justify={"center "}
      >
        <VStack>
          <Text>Designed & Built by Carsten Lebek</Text>
          <chakra.a opacity={0.6} href="https://storyset.com/web">
            Web illustrations by Storyset
          </chakra.a>
          <Link to="/legal/impressum">Impressum</Link>
        </VStack>
      </Flex>
    </>
  )
}
