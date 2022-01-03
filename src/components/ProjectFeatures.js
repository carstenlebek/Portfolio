import React, { useEffect, useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Flex, Heading, VStack, Text, Box, Container } from "@chakra-ui/react"
import { motion, useMotionValue } from "framer-motion"

const MotionFlex = motion(Flex)
const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

export default function ProjectFeatures({ feature, index }) {
  const contentOffsetY = useMotionValue(0)

  useEffect(() => console.log(contentOffsetY), [contentOffsetY])

  return (
    <MotionFlex
      direction={{ base: "column", md: index % 2 ? "row-reverse" : "row" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, ...transition }}
      key={index}
      w="90%"
      maxW="1600px"
      align={"center"}
      gap={{ base: "8", md: "20" }}
      mx="auto"
    >
      {/* <Container size="container.md">
        <VStack spacing={4} flex={1}</VStack>>
          <Heading>{feature.heading}</Heading>
          <Text>{feature.description}</Text>
        </VStack>
      </Container> */}
      <Container>
        <VStack spacing={8} align={"flex-start"}>
          <Heading>{feature.heading}</Heading>
          <Text textAlign={"left"}>{feature.description}</Text>
        </VStack>
      </Container>
      <Box
        flex={1}
        position={"relative"}
        w={{ base: "90%", md: "full" }}
        _after={{
          content: '""',
          bg: "red.500",
          rounded: "lg",
          backgroundPosition: "0 0 ",
          backgroundSize: "10px 10px",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          transform: "translate(20px,20px)",
          zIndex: 0,
          transition: "all 0.5s ease-out",
        }}
      >
        <GatsbyImage
          image={feature.image}
          alt={"RSCards"}
          imgStyle={{ borderRadius: "0.5rem", zIndex: 1 }}
          loading="eager"
        ></GatsbyImage>
      </Box>
    </MotionFlex>
  )
}
