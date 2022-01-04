import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { ProjectHero } from "../../components/ProjectHero"
import ProjectFeatures from "../../components/ProjectFeatures"
import { Flex } from "@chakra-ui/react"

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

  const image = getImage(data.file)

  console.log(location.state)

  const features = [
    {
      heading: "Frontend mit Gatsby.js",
      description: `Das Frontend des Onlineshops wurde auf Basis von Gatsby.js erstellt. Im Vordergrund stand hier die Performance, da Instagram die größte Trafficquelle war.`,
      image: getImage(data.allFile.nodes.find(node => node.name === "1")),
    },
    {
      heading: "Konstantes UI Design",
      description: "Als UI Framework wurde Chakra UI genutzt.",
      image: getImage(data.allFile.nodes.find(node => node.name === "2")),
    },
    {
      heading: "Produktkonfigurator mit Konva.js",
      description:
        "Da es keine Produktkonfiguratoren gab, die eine zufriedenstellende Lösung boten, wurde ein eigener entwickelt.",
      image: getImage(data.allFile.nodes.find(node => node.name === "3")),
    },
    {
      heading: "Private Shopify App",
      description:
        "Teil des Projekts war es die Erstellung der Druckdateien vom Frontend abzukoppeln und serverseitig zu erledigen. Die Druckdateien werden durch AWS Lambda Funktionen erstellt und in einem S3 Bucket gespeichert. Zum einfachen Abrufen der Dateien wurde eine private Shopify App erstellt.",
      image: getImage(data.allFile.nodes.find(node => node.name === "4")),
    },
  ]

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
      </Flex>
    </>
  )
}

export const pageQuery = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "images/rscards" } }) {
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
    file(relativePath: { eq: "images/rscards.jpg" }) {
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
