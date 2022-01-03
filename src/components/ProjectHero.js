import {
  Box,
  Flex,
  VStack,
  Heading,
  Badge,
  Text,
  Container,
  Button,
} from "@chakra-ui/react"
import React, { useRef, useState, useEffect } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import { FaExternalLinkAlt } from "react-icons/fa"

const MotionBox = motion(Box)
const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

const MotionStack = motion(Flex)
const MotionBadge = motion(Badge)
const MotionHeading = motion(Heading)
const MotionContainer = motion(Flex)
const MotionText = motion(Text)
const MotionButton = motion(Button)

export function ProjectHero({
  project,
  initialImageTransitionPosition,
  image,
}) {
  console.log("PROJECT =>>", project.description)

  const isBrowser = typeof window !== undefined

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (isBrowser) {
      setTimeout(() => {
        setIsMounted(true)
      }, 500)
    }
    return () => {
      setIsMounted(false)
    }
  }, [])

  return (
    <MotionContainer
      justify={"center"}
      py={{ base: "16", md: "28" }}
      bg="bg"
      color="textSecondary"
      zIndex={-2}
      animate={{ backgroundColor: "var(--chakra-colors-sbg)" }}
      transition={transition}
      minH={{ md: "100vh" }}
    >
      <Flex
        minH="4xl"
        justify={{ base: "flex-start", md: "center" }}
        align={{ base: "flex-start", md: "center" }}
        w={{ base: "90vw" }}
        direction={{ base: "column-reverse", md: "row" }}
        gap="8"
      >
        <Box flex={1}>
          <VStack align={"flex-start"} maxW="container.sm" spacing={"4"}>
            <MotionHeading
              size={"3xl"}
              overflow="hidden"
              opacity={0}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, ...transition }}
            >
              {project.title.split("").map((char, index) => (
                <motion.span key={index}>{char}</motion.span>
              ))}
            </MotionHeading>
            <MotionStack
              direction={"row"}
              wrap={"wrap"}
              gap={2}
              variants={{
                show: {
                  transition: {
                    delay: 1,
                    delayChildren: 0.5,
                    staggerChildren: 0.04,
                    staggerDirection: 1,
                    ...transition,
                  },
                },
              }}
              overflow="hidden"
              initial="hidden"
              animate="show"
            >
              {project.stack.map((item, index) => (
                <MotionBadge
                  variants={{
                    hidden: { y: 50, opacity: 0 },
                    show: { y: 0, opacity: 1, transition: transition },
                  }}
                  key={index}
                >
                  {item}
                </MotionBadge>
              ))}
            </MotionStack>
            <MotionText
              opacity={0}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, ...transition }}
            >
              {project.description}
            </MotionText>
            <MotionButton
              opacity={0}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, ...transition }}
              rightIcon={<FaExternalLinkAlt />}
              colorScheme={"red"}
              isFullWidth
              as="a"
              target={"_blank"}
              rel="noreferrer"
              href={project.url}
            >
              Zum Projekt
            </MotionButton>
          </VStack>
        </Box>
        <Box
          flex={{ md: 1 }}
          w={{ base: "90%", md: "full" }}
          style={{ aspectRatio: "48 / 25" }}
          mb="8"
        >
          <MotionBox
            layoutId={project.slug}
            transition={transition}
            flex={1}
            position="relative"
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
              transform: isMounted
                ? "translate(20px,20px)"
                : "translate(0px, 0px)",
              zIndex: 0,
              transition: "all 0.5s ease-out",
            }}
          >
            <GatsbyImage
              image={image}
              alt={"RSCards"}
              imgStyle={{ borderRadius: "0.5rem", zIndex: 1 }}
              loading="eager"
            ></GatsbyImage>
          </MotionBox>
        </Box>
      </Flex>
    </MotionContainer>
  )
}
