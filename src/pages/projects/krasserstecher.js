import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { ProjectHero } from "../../components/ProjectHero"
import { Flex, Heading } from "@chakra-ui/react"
import ProjectFeatures from "../../components/ProjectFeatures"

export default function KrasserStecher({ location, data }) {
  console.log(location, data)

  const project = {
    image: "krasserstecher",
    type: "Onlineshop",
    title: "Krasserstecher.de",
    description:
      "Bei Krasser Stecher gibt es personalisierte 3D gedruckte Keksausstechformen. Der Shop wurde mit Shopify erstellt. Die Storefront basiert auf dem Dawn Theme mit eigenen Secions.",
    slug: "krasserstecher",
    url: "https://www.krasserstecher.de",
    stack: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
  }

  const image = getImage(data.file)

  console.log(location.state)

  const features = []

  return (
    <>
      <ProjectHero project={project} image={image} />
      <Flex
        align={"flex-start"}
        justify={"center"}
        position={"relative"}
        py={{ base: "8", md: "28" }}
        direction={"column"}
        gap={{ base: "20", md: "72" }}
        bg="sbg"
        color="textSecondary"
      >
        {features.map((feature, index) => (
          <ProjectFeatures key={index} feature={feature} index={index} />
        ))}
        {features.length === 0 && (
          <Flex
            minh="6xl"
            align="center"
            justify={"center"}
            alignSelf={"center"}
          >
            <Heading>Hier gibt's bald mehr zu sehen.</Heading>
          </Flex>
        )}
      </Flex>
    </>
  )
}

export const pageQuery = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "images/krasserstecher" } }) {
      nodes {
        id
        name
        relativeDirectory
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            quality: 90
          )
        }
      }
    }
    file(relativePath: { eq: "images/krasserstecher.png" }) {
      id
      childImageSharp {
        gatsbyImageData(
          formats: [AUTO, WEBP, AVIF]
          layout: FULL_WIDTH
          placeholder: BLURRED
          quality: 90
        )
      }
    }
  }
`
