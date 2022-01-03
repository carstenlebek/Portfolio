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

  const image = getImage(
    data.allFile.nodes.find(
      node =>
        node.name ===
        location.pathname.split("/")[location.pathname.split("/").length - 1]
    )
  )

  console.log(location.state)

  const features = [
    {
      heading: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      image: image,
    },
    {
      heading: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      image: image,
    },
    {
      heading: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      image: image,
    },
    {
      heading: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      image: image,
    },
  ]

  return (
    <>
      <ProjectHero project={project} image={image} />
      <Flex
        align={"flex-start"}
        justify={"center"}
        position={"relative"}
        py="28"
        direction={"column"}
        gap="24"
        bg="sbg"
        color="textSecondary"
      >
        {features.map((feature, index) => (
          <ProjectFeatures feature={feature} index={index} />
        ))}
      </Flex>
    </>
  )
}

export const pageQuery = graphql`
  query {
    allFile {
      nodes {
        childImageSharp {
          gatsbyImageData(
            height: 400
            layout: FULL_WIDTH
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
