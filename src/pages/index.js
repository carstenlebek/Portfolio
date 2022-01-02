import {
  Box,
  Button,
  chakra,
  Container,
  Divider,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"
import React from "react"
import { Helmet } from "react-helmet"
import { FaGithub } from "react-icons/fa"
import { TiWaves } from "react-icons/ti"
import {
  SiCss3,
  SiGatsby,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiChakraui,
  SiShopify,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiFirebase,
  SiAmazonaws,
  SiGithub,
  SiVercel,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiVisualstudiocode,
  SiHeroku,
  SiNextdotjs,
  SiLinkedin,
  SiMongodb,
} from "react-icons/si"

import { Link, animateScroll as scroll } from "react-scroll"
import { getImage, StaticImage } from "gatsby-plugin-image"

// import Hero from "./../assets/images/hero.svg"
import Hero from "./../assets/images/hero.js"

import WebsiteImage from "./../assets/images/website.svg"
import SeoImage from "./../assets/images/seo.svg"
import FeaturesImage from "./../assets/images/features.svg"
import OnlineShopImage from "./../assets/images/onlineshop.svg"

import { graphql } from "gatsby"

import "../styles/global.css"
import { motion } from "framer-motion"
import { ProjectCard } from "../components/ProjectCard"

const MotionImage = motion(Box)
const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

export default function Home({ data }) {
  console.log(data)

  const tools = [
    {
      heading: "Front-End",
      tools: [
        {
          name: "HTML",
          icon: SiHtml5,
        },
        { name: "CSS", icon: SiCss3 },
        { name: "JavaScript", icon: SiJavascript },
        { name: "React", icon: SiReact },
        { name: "Gatsby.js", icon: SiGatsby },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "ChakraUI", icon: SiChakraui },
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "GraphQL", icon: SiGraphql },
        { name: "Liquid", icon: TiWaves },
      ],
    },
    {
      heading: "Back-End",
      tools: [
        { name: "Node", icon: SiNodedotjs },
        { name: "Express", icon: SiExpress },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Firebase", icon: SiFirebase },
        { name: "AWS", icon: SiAmazonaws },
      ],
    },
    {
      heading: "General",
      tools: [
        { name: "Shopify", icon: SiShopify },
        { name: "Github", icon: SiGithub },
        { name: "Vercel", icon: SiVercel },
        { name: "Heroku", icon: SiHeroku },
        { name: "Photoshop", icon: SiAdobephotoshop },
        { name: "Illustrator", icon: SiAdobeillustrator },
        { name: "VS Code", icon: SiVisualstudiocode },
      ],
    },
  ]

  const projects = [
    {
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
    },
    {
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
    },
    {
      image: "deepi18n",
      type: "Web App",
      title: "deepi18n",
      description:
        "Deepi18n ermöglicht es Webseiten oder Apps in einem Schritt in bis zu 25 Sprachen zu übersetzen. Zur Übersetzung wird die DeepL API genutzt.",
      slug: "deepi18n",
      url: "https://deep-i18n.vercel.app/",
      stack: ["React.js", "Next.js", "Chakra Ui", "AWS S3"],
    },
    {
      image: "krasserstecher",
      type: "Onlineshop",
      title: "Krasserstecher.de",
      description:
        "Bei Krasser Stecher gibt es personalisierte 3D gedruckte Keksausstechformen. Der Shop wurde mit Shopify erstellt. Die Storefront basiert auf dem Dawn Theme mit eigenen Secions.",
      slug: "krasserstecher",
      url: "https://www.krasserstecher.de",
      stack: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
    },
    {
      image: "aposto",
      type: "Onlineshop",
      title: "Aposto Wuppertal",
      description:
        "Leckere Pizza und Pasta kann man im auf Shopify basierenden Shop vom Aposto Wuppertal bestellen. \r\nDer Shop wurde als Alternative zu Lieferando erstellt.",
      slug: "aposto-wuppertal",
      url: "https://apostowuppertal.de",
      stack: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
    },
    {
      image: "allkokos",
      type: "Onlineshop",
      title: "Allkokos.de",
      description:
        "Das wohl beliebteste Kleintiereinstreu Deutschlands gibt es bei Allkokos. Der Fokus bei diesem Projekt lag auf der Conversion Optimierung der Produktseite des Kleintiereinstreus.",
      slug: "allkokos",
      url: "https://allkokos.de/products/kleintiereinstreu",
      stack: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
    },
  ]

  const images = data.allFile.nodes

  return (
    <>
      <Helmet></Helmet>
      <Flex
        id="top"
        position={"relative"}
        paddingX={{ base: "4", md: "20" }}
        paddingY="20"
        gap={{ base: "8", md: "20" }}
        align={"center"}
        justify={"center"}
        minH={{ base: 0, md: "90vh" }}
        wrap={"wrap"}
        backgroundImage={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2f5f5f5' fill-opacity='0.1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}
      >
        <VStack spacing={"8"} align={"flex-start"}>
          <Container pl="0">
            <Text>Hi, mein Name ist</Text>
            <Heading
              as="h1"
              size={"4xl"}
              textAlign={{ base: "left", md: "left" }}
              w="full"
              fontWeight={900}
              bg="linear-gradient(120deg, #E53E3E 0%, #E53E3E 100%)"
              bgRepeat={"no-repeat"}
              bgSize={"100% 40%"}
              bgPosition={"0 90%"}
              display={"inline"}
            >
              Carsten Lebek.
            </Heading>
          </Container>
          <Container maxW="lg" pl="0" textAlign={{ base: "left", md: "left" }}>
            <Text>
              Ich bin ein Webdeveloper aus Wuppertal.
              <br />
              Meine Spezialität ist es Menschen zu helfen ihre Ideen in die
              Realität umzusetzen.
            </Text>
          </Container>
          <Flex
            w="full"
            gap="1"
            wrap={{ base: "wrap", md: "nowrap" }}
            justify={"flex-start"}
          >
            <VStack w="full">
              <Button isFullWidth colorScheme={"red"}>
                Lass uns zusammenarbeiten!
              </Button>
              <Link
                to="projects"
                w="full"
                smooth={true}
                style={{ width: "100%" }}
              >
                <Button isFullWidth colorScheme={"red"} variant={"outline"}>
                  Projekte
                </Button>
              </Link>
            </VStack>
            <Stack
              direction={{ base: "row", md: "column" }}
              align={"center"}
              justify={"center"}
              w={{ base: "full", md: "auto" }}
            >
              <Button
                colorScheme={"red"}
                variant={"ghost"}
                aria-label="Link zum Xing Profil"
                as={"a"}
                href="https://www.linkedin.com/in/carsten-lebek-634899229/"
              >
                <SiLinkedin size={"1.8rem"} />
              </Button>
              <Button
                colorScheme={"red"}
                variant={"ghost"}
                aria-label="Link zum Github Profil"
                as={"a"}
                href="https://github.com/carstenlebek"
              >
                <FaGithub size={"1.8rem"} />
              </Button>
            </Stack>
          </Flex>
        </VStack>
        <Box maxW="xl" flex={1}>
          {/* <chakra.img
            minH={{ base: "sm", md: "xl" }}
            minW="sm"
            maxW={{ base: "sm", md: "none" }}
            src={Hero}
            alt="Hero"
            id="freepik_stories-static-assets"
            className="animated"
          ></chakra.img> */}
          <Hero />
        </Box>
      </Flex>
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
        justify={"center"}
        align={"center"}
        minH={{ base: "none", md: "3xl" }}
        py={{ base: "16", md: "32" }}
        bg="sbg"
        gap="8"
        id="about-me"
        position={"relative"}
        wrap={"wrap"}
      >
        <VStack maxW="md" spacing={"6"} px="4" color={"textSecondary"}>
          <Heading
            size={"2xl"}
            whiteSpace={{ base: "normal", md: "nowrap" }}
            textAlign={{ base: "center", md: "left" }}
            w="full"
          >
            Über mich
          </Heading>
          <Divider></Divider>
          <VStack align={"flex-start"}>
            <Text>
              Hey! Mein Name ist Carsten und ich baue gerne Dinge, die im
              Internet leben. Mein Interesse für Web Development hat im Jahr
              2016 angefangen, als ich meinen ersten eigenen Onlineshop eröffnet
              habe. Aus ein paar kleinen HTML und CSS Anpassungen hat sich über
              die Zeit ein echtes Interesse immer mehr zu lernen entwickelt.
            </Text>
            <Text>
              In meiner Selbsständigkeit habe ich viele Projekte gestartet. Von
              Print on Demand T-Shirts, über Energydrinks für Gamer bis hin zu
              3D gedruckten Keksausstechformen war alles dabei.
            </Text>
            <Text>
              Bei jedem dieser Projekte habe ich immer viel dazugelernt. Egal ob
              Warenbeschaffung, Online Marketing oder Unternehmensgründungen -
              Auf meinem Weg war alles dabei.
            </Text>
            <Text>
              Am Ende hat alles zu dem geführt, was ich eigentlich schon die
              ganze Zeit machen wollte:{" "}
              <chakra.span fontWeight={"bold"} color="red.500">
                Digitale Erfahrungen und Produkte erschaffen.
              </chakra.span>
            </Text>
          </VStack>
          <Link to="projects" w="full" smooth={true} style={{ width: "100%" }}>
            <Button colorScheme={"red"} size={"lg"} isFullWidth>
              Meine Projekte
            </Button>
          </Link>
        </VStack>
        <Box
          maxW={{ base: "80vw", md: "md" }}
          // minH="md"
          // minW="md"
          position="relative"
          zIndex="2"
          transition="all 0.5s ease-out"
          _hover={{
            transform: "translate(5px, 5px)",
            _after: { transform: "translate(10px,10px)" },
          }}
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
            zIndex: -1,
            transition: "all 0.5s ease-out",
          }}
        >
          <StaticImage
            src="../assets/images/Hintergrund.png"
            alt="Carsten Lebek"
            placeholder="blurred"
            layout="constrained"
            formats={["auto", "webp", "avif"]}
            quality={90}
            width={450}
            height={450}
            imgStyle={{ borderRadius: "0.5rem" }}
          />
        </Box>
      </Flex>
      <Box position={"relative"}>
        <chakra.div
          position={"absolute"}
          top={0}
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
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              fill={"#1A1423"}
            ></path>
          </chakra.svg>
        </chakra.div>
      </Box>
      <VStack
        py={{ base: "28", md: "32" }}
        spacing={"24"}
        // backgroundImage={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23d8c3a5' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}
        id="toolbox"
      >
        <Heading size="2xl">Meine Toolbox</Heading>
        {tools.map((area, index) => (
          <VStack spacing={8} key={index}>
            <Heading mb="4" textAlign={"center"}>
              {area.heading}
            </Heading>
            <Flex gap={"6"} wrap={"wrap"} justify={"center"}>
              {area.tools.map((tool, index) => (
                <Flex
                  key={index}
                  direction={"column"}
                  gap="3"
                  justify={"center"}
                  align={"center"}
                  bg="sbg"
                  p="6"
                  rounded={"md"}
                  w="32"
                  h="32"
                  color={"textSecondary"}
                  transition={"all 0.3s ease-out"}
                  shadow={"lg"}
                  position={"relative"}
                  // zIndex={1}
                  _hover={{
                    transform: "translate(-10px, -10px)",
                    shadow: "dark-lg",
                    _after: {
                      zIndex: -1,
                      transform: "translate(10px,10px)",
                    },
                  }}
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
                    transform: "translate(0px,0px)",
                    zIndex: -1,
                    transition: "all 0.3s ease-out",
                  }}
                >
                  <Flex
                    direction={"column"}
                    gap="3"
                    justify={"center"}
                    align={"center"}
                    bg="sbg"
                    p="6"
                    rounded={"md"}
                    w="32"
                    h="32"
                    color={"textSecondary"}
                    transition={"all 0.3s ease-out"}
                    shadow={"lg"}
                    position={"relative"}
                  >
                    <Icon as={tool.icon} w="12" h="12" zIndex={2}></Icon>
                    <Text zIndex={3}>{tool.name}</Text>
                  </Flex>
                </Flex>
              ))}
            </Flex>
          </VStack>
        ))}
      </VStack>
      <Box position={"relative"}>
        <chakra.div
          position={"absolute"}
          top={0}
          left={0}
          w="full"
          overflow={"hidden"}
          lineHeight={0}
          // transform={"rotate(180deg)"}
        >
          <chakra.svg
            position={"relative"}
            display={"block"}
            width={"calc(100% + 1.3px)"}
            height={"56px"}
            transform={"rotateY(180deg)"}
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              fill="#fefefe"
            ></path>
          </chakra.svg>
        </chakra.div>
      </Box>
      <VStack
        py={{ base: "28", md: "80" }}
        bg={"sbg"}
        spacing={"24"}
        backgroundImage={`url("data:image/svg+xml,%3Csvg width='104' height='52' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}
        color={"textSecondary"}
        id="certifications"
      >
        <Heading size="2xl">Zertifikationen</Heading>
        <Flex gap={"12"} wrap={"wrap"} justify={"center"} maxW="1200px">
          <chakra.a
            rel="noreferrer"
            mt="6px"
            href="https://www.freecodecamp.org/certification/carstenlebek/javascript-algorithms-and-data-structures"
            aria-label="FreeCodeCamp - Javascript algorithms and data structures"
            shadow={"md"}
            rounded={"lg"}
            transition={"all 0.3s ease-out"}
            _hover={{
              shadow: "dark-lg",
              transform: "scale(1.05)",
            }}
          >
            <Box>
              <StaticImage
                src="../assets/images/fcc_js_aads_badge.png"
                width={273}
                height={69}
                alt="FreeCodeCamp - Javascript algorithms and data structures"
                placeholder="blurred"
                layout="fixed"
                formats={["auto", "webp", "avif"]}
                quality={90}
              />
            </Box>
          </chakra.a>
          <chakra.a
            rel="noreferrer"
            mt="6px"
            href="https://www.freecodecamp.org/certification/carstenlebek/front-end-development-libraries"
            aria-label="FreeCodeCamp - Front end development libraries"
            shadow={"md"}
            rounded={"lg"}
            transition={"all 0.3s ease-out"}
            _hover={{
              shadow: "dark-lg",
              transform: "scale(1.05)",
            }}
          >
            <Box>
              <StaticImage
                src="../assets/images/fcc_fedl.png"
                width={273}
                height={69}
                alt="FreeCodeCamp - Front end development libraries"
                placeholder="blurred"
                layout="fixed"
                formats={["auto", "webp", "avif"]}
                quality={90}
              />
            </Box>
          </chakra.a>
          <chakra.a
            rel="noreferrer"
            mt="6px"
            href="https://www.freecodecamp.org/certification/carstenlebek/back-end-development-and-apis"
            aria-label="FreeCodeCamp - Back end development and apis"
            shadow={"md"}
            rounded={"lg"}
            transition={"all 0.3s ease-out"}
            _hover={{
              shadow: "dark-lg",
              transform: "scale(1.05)",
            }}
          >
            <Box>
              <StaticImage
                src="../assets/images/fcc_bedaa.png"
                width={273}
                height={69}
                alt="FreeCodeCamp - Back end development and apis"
                placeholder="blurred"
                layout="fixed"
                formats={["auto", "webp", "avif"]}
                quality={90}
              />
            </Box>
          </chakra.a>
          <Box
            height={69}
            width={273}
            mt="6px"
            shadow={"md"}
            rounded={"lg"}
            transition={"all 0.3s ease-out"}
            _hover={{
              shadow: "dark-lg",
              transform: "scale(1.05)",
            }}
          >
            <StaticImage
              src="../assets/images/sh_bf.png"
              width={273}
              height={69}
              alt="Shopify - Business fundamentals"
              placeholder="blurred"
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              quality={90}
            />
          </Box>
          <Box
            height={69}
            width={273}
            mt="6px"
            shadow={"md"}
            rounded={"lg"}
            transition={"all 0.3s ease-out"}
            _hover={{
              shadow: "dark-lg",
              transform: "scale(1.05)",
            }}
          >
            <StaticImage
              src="../assets/images/sh_ad.png"
              width={273}
              height={69}
              alt="Shopify - App Development"
              placeholder="blurred"
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              quality={90}
            />
          </Box>
          <Box
            height={69}
            width={273}
            mt="6px"
            shadow={"md"}
            rounded={"lg"}
            transition={"all 0.3s ease-out"}
            _hover={{
              shadow: "dark-lg",
              transform: "scale(1.05)",
            }}
          >
            <StaticImage
              src="../assets/images/sh_pf.png"
              width={273}
              height={69}
              alt="Shopify - Product fundamentals"
              placeholder="blurred"
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              quality={90}
            />
          </Box>
          <Box
            as={"a"}
            href="https://ofg-studium.de"
            rel="noreferrer"
            target={"_blank"}
            title="Online Schule für Gestaltung - Webdesign"
            height={"64px"}
            width={"259px"}
            mt="6px"
            shadow={"md"}
            rounded={"lg"}
            transition={"all 0.3s ease-out"}
            _hover={{
              shadow: "dark-lg",
              transform: "scale(1.05)",
            }}
          >
            <StaticImage
              src="https://ofg-studium.de/images/certificate/certificate_webdesign_21142.png"
              width={273}
              height={69}
              alt="Online Schule für Gestaltung - Webdesign / Professionelle Webseiten erstellen"
              placeholder="blurred"
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              quality={100}
              style={{ height: 64, width: 259 }}
              imgStyle={{ height: 69, width: 273 }}
            />
          </Box>
        </Flex>
      </VStack>
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
            height={"56px"}
            transform={"rotateY(180deg)"}
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              fill="#fefefe"
            ></path>
          </chakra.svg>
        </chakra.div>
      </Box>
      <Flex
        direction={"column"}
        pt={{ base: "24", md: "40" }}
        pb="40"
        px="4"
        gap={24}
        align={"center"}
        justify={"center"}
        id="projects"
      >
        <Heading size="2xl" textAlign={"center"} w="full">
          Projekte
        </Heading>
        <Flex
          gap="8"
          maxW="6xl"
          justify={"center"}
          align={"stretch"}
          wrap={"wrap"}
        >
          {projects.map((project, index) => {
            const image = getImage(
              images.find(image => image.name === project.image)
            )

            return ProjectCard(index, image, project)
          })}
        </Flex>
      </Flex>
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
        </VStack>
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
