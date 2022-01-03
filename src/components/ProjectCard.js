import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react"
import React, { useRef, useEffect, useState } from "react"
import { FaExternalLinkAlt } from "react-icons/fa"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link as GatsbyLink, navigate } from "gatsby"
import { motion } from "framer-motion"

const MotionBox = motion(Box)
const transition = { duration: 0 }

export function ProjectCard(index, image, project) {
  return (
    <Flex
      key={index}
      maxW="sm"
      bg="sbg"
      color="textSecondary"
      flex={"1 1 300px"}
      rounded={"lg"}
      shadow={"2xl"}
      justify={"flex-start"}
      align={"stretch"}
      direction={"column"}
    >
      <MotionBox
        roundedTop={"lg"}
        layoutId={project.slug}
        transition={transition}
        initial={false}
        animate={{
          transform: "none",
          transformOrigin: "50% 50% 0px",
        }}
      >
        <GatsbyImage
          image={image}
          style={{
            borderRadius: "0.5rem 0.5rem 0 0",
            WebkitBorderRadius: "0.5rem 0.5rem 0 0",
            MozBorderRadius: "0.5rem 0.5rem 0 0",
          }}
          imgStyle={{
            borderRadius: "0.5rem 0.5rem 0 0",
            WebkitBorderRadius: "0.5rem 0.5rem 0 0",
            MozBorderRadius: "0.5rem 0.5rem 0 0",
          }}
          alt={project.title}
        />
      </MotionBox>
      <VStack
        w="full"
        h="full"
        px="6"
        pt="8"
        pb="4"
        spacing={4}
        alignItems={"flex-start"}
      >
        <Box>
          <Text fontSize="xs">{project.type}</Text>
          <Heading w="full">{project.title}</Heading>
        </Box>
        <Flex direction={"row"} wrap={"wrap"} gap={2}>
          {project.stack.map((item, index) => (
            <Badge key={index}>{item}</Badge>
          ))}
        </Flex>
        <Text wordBreak={"break-word"} whiteSpace={"pre-wrap"} flex={1}>
          {project.description}
        </Text>
        <VStack spacing={1} w="full">
          <Button
            colorScheme={"red"}
            isFullWidth
            onClick={e => {
              e.preventDefault()

              navigate(`/projects/${project.slug}`)
            }}
          >
            Mehr dazu
          </Button>
          <Button
            colorScheme={"red"}
            variant={"ghost"}
            as="a"
            target={"_blank"}
            rel="noreferrer"
            href={project.url}
            rightIcon={<FaExternalLinkAlt />}
            isFullWidth
          >
            Zum Projekt
          </Button>
        </VStack>
      </VStack>
    </Flex>
  )
}
