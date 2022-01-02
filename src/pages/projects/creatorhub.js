import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { ProjectHero } from "../../components/ProjectHero"

export default function CreatorHub({ location, data }) {
  console.log(location, data)

  const project = {
    image: "creatorhub",
    type: "Shopify App",
    title: "CreatorHub",
    description:
      "CreatorHub gibt Shopbetreibern eine einfache Möglichkeit Influencer zu verwalten. Außerdem bringt die App Influencer Marketing in das Frontend und verbessert so die Customer Experience.",
    slug: "creatorhub",
    url: "https://apps.shopify.com/creator-code",
    stack: [
      "React.js",
      "Next.js",
      "Node.js",
      "Koa",
      "Shopify AppBridge",
      "Polaris",
      "Recharts",
      "Firebase",
      "GraphQL",
      "Liquid",
    ],
  }

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

  return ProjectHero(
    <ProjectHero
      project={project}
      image={image}
      initialImageTransitionPosition={initialImageTransitionPosition}
    />
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
