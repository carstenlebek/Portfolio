import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { ProjectHero } from "../../components/ProjectHero"
import { Flex, Heading } from "@chakra-ui/react"
import ProjectFeatures from "../../components/ProjectFeatures"

export default function DeepI18N({ location, data }) {
  console.log(location, data)

  const project = {
    image: "deepi18n",
    type: "Web App",
    title: "deepi18n",
    description:
      "Deepi18n ermöglicht es Webseiten oder Apps in einem Schritt in bis zu 25 Sprachen zu übersetzen. Zur Übersetzung wird die DeepL API genutzt.",
    slug: "deepi18n",
    url: "https://deep-i18n.vercel.app/",
    stack: ["React.js", "Next.js", "Chakra Ui", "AWS S3"],
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
            textAlign={"center"}
            py="12"
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
    allFile(filter: { relativeDirectory: { eq: "images/deepi18n" } }) {
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
    file(relativePath: { eq: "images/deepi18n.png" }) {
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
