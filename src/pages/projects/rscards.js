import { Box, Flex, Heading, Badge, VStack } from "@chakra-ui/react"
import React, { useRef, useState, useEffect } from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"

const MotionBox = motion(Box)
const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

const MotionStack = motion(Flex)
const MotionBadge = motion(Badge)
const MotionHeading = motion(Heading)

export default function RsCards({ location, data }) {
  console.log(location, data)

  const project = {
    image: "rscards",
    type: "Onlineshop",
    title: "RSCards.de",
    description:
      "RSCards ist ein Onlineshop für personalisierte Autoquartettkarten im XXL Format. Als headless CMS wird hier Shopify genutzt und die Storefront wurde mit Gatsby.js erstellt.",
    slug: "rscards",
    url: "https://rscards.de",
    stack: [
      "Shopify",
      "React.js",
      "Gatsby.js",
      "Chakra UI",
      "Konva.js",
      "AWS Lambda",
      "AWS S3",
    ],
  }

  const placeHolderRef = useRef()

  const [placeHolderPosition, setPlaceHolderPosition] = useState({})

  useEffect(() => {
    setPlaceHolderPosition(placeHolderRef.current.getBoundingClientRect())
  }, [])

  const initialImageTransitionPosition =
    location.state.initialImageTransitionPosition

  const image = getImage(
    data.allFile.nodes.find(
      node =>
        node.name ===
        location.pathname.split("/")[location.pathname.split("/").length - 1]
    )
  )

  console.log(location.state)

  return (
    <Flex justify={"center"} py="28" bg="sbg" color="textSecondary" zIndex={-2}>
      <Flex
        minH="5xl"
        justify={"center"}
        align={"center"}
        w={{ base: "90vw" }}
        direction={{ base: "column", md: "row" }}
      >
        <VStack flex={1} align={"flex-start"}>
          <MotionHeading size={"3xl"} overflow="hidden">
            {"RSCards.de".split("").map((char, index) => (
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
                  hidden: { y: 50 },
                  show: { y: 0, transition: transition },
                }}
                key={index}
              >
                {item}
              </MotionBadge>
            ))}
          </MotionStack>
        </VStack>
        <Box
          flex={1}
          ref={placeHolderRef}
          bg={"gray.200"}
          h={400}
          w={768}
          opacity={0}
        ></Box>
        <MotionBox
          animate={{
            top: placeHolderPosition.top,
            left: placeHolderPosition.left,
            width: placeHolderPosition.right - placeHolderPosition.left,
            height: placeHolderPosition.bottom - placeHolderPosition.top,
            borderRadius: "0.5rem",
          }}
          transition={transition}
          flex={1}
          position={"absolute"}
          top={initialImageTransitionPosition.top}
          left={initialImageTransitionPosition.left}
          width={
            initialImageTransitionPosition.right -
            initialImageTransitionPosition.left
          }
          height={
            initialImageTransitionPosition.bottom -
            initialImageTransitionPosition.top
          }
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
            image={image}
            alt={"RSCards"}
            imgStyle={{ borderRadius: "0.5rem", zIndex: 1 }}
          ></GatsbyImage>
        </MotionBox>
      </Flex>
    </Flex>
  )
}

export const pageQuery = graphql`
  query {
    allFile {
      nodes {
        childImageSharp {
          gatsbyImageData(
            height: 400
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 768
            formats: [AUTO, WEBP, AVIF]
            quality: 90
          )
        }
        name
      }
    }
  }
`
