import {
  Badge,
  Box,
  Button,
  chakra,
  Container,
  Divider,
  Flex,
  GridItem,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"
import React from "react"
import { Helmet } from "react-helmet"
import { FaXing, FaGithub, FaExternalLinkAlt } from "react-icons/fa"
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
  SiXing,
  SiLinkedin,
} from "react-icons/si"

import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll"

import HeroImage from "./../assets/images/undraw_programming_re_kg9v.svg"
import JsAad from "./../assets/images/fcc_js_aads_badge.png"
import Fedl from "./../assets/images/fcc_fedl.png"
import Bedaa from "./../assets/images/fcc_bedaa.png"
import ShAd from "./../assets/images/sh_ad.png"
import ShBf from "./../assets/images/sh_bf.png"
import ShPf from "./../assets/images/sh_pf.png"

import Hero from "./../assets/images/hero.svg"

import WebsiteImage from "./../assets/images/website.svg"
import SeoImage from "./../assets/images/seo.svg"
import FeaturesImage from "./../assets/images/features.svg"
import OnlineShopImage from "./../assets/images/onlineshop.svg"

import ProfilePicture from "./../assets/images/Hintergrund.png"

import RsCards from "./../assets/images/rscards.jpg"
import KrasserStecher from "./../assets/images/krasserstecher.png"
import Aposto from "./../assets/images/aposto.png"
import CreatorHub from "./../assets/images/creatorhub.png"
import Deepi18n from "./../assets/images/deepi18n.png"
import Allkokos from "./../assets/images/allkokos.png"

export default function Home() {
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
        { name: "Liquid", icon: SiShopify },
      ],
    },
    {
      heading: "Back-End",
      tools: [
        { name: "Node", icon: SiNodedotjs },
        { name: "Express", icon: SiExpress },
        { name: "mySQL", icon: SiMysql },
        { name: "Firebase", icon: SiFirebase },
        { name: "AWS", icon: SiAmazonaws },
      ],
    },
    {
      heading: "General",
      tools: [
        { name: "Github", icon: SiGithub },
        { name: "Vercel", icon: SiVercel },
        { name: "Heroku", icon: SiHeroku },
        { name: "Photoshop", icon: SiAdobephotoshop },
        { name: "Illustrator", icon: SiAdobeillustrator },
        { name: "VS Code", icon: SiVisualstudiocode },
      ],
    },
  ]

  const wasICanHelpYou = [
    {
      heading: "1. Own a Website that Works",
      description:
        "You want a website. It must look great and you want it to work... All the time. Well, that's why I'm here! I help you by designing, building, and hosting a beautiful site that'll grow your business. Promise.",
      image: WebsiteImage,
    },
    {
      heading: "2. Become Famous with SEO",
      description:
        "An impressive Google ranking means more people see your fantastic blog post or revolutionary product. I ensure you have a leading ranking with best SEO practices. Give your content the audience it deserves!",
      image: SeoImage,
    },
    {
      heading: "3. Control the Features",
      description:
        "Do you feel restricted by all the drag-and-drop web builders out there? I provide a powerful custom code solution that fits your exact needs. At the end, you'll own a fast, great looking site.",
      image: FeaturesImage,
    },
    {
      heading: "4. Sell Your Stuff Online",
      description:
        "You have an idea. You want to turn it into an online business without all the hassle. Perfect! I'm here to help you set up an e-commerce store that looks amazing and makes you money.",
      image: OnlineShopImage,
    },
  ]

  const projects = [
    {
      image: RsCards,
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
      image: CreatorHub,
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
      image: Deepi18n,
      type: "Web App",
      title: "deepi18n",
      description:
        "Deepi18n ermöglicht es Webseiten oder Apps in einem Schritt in bis zu 25 Sprachen zu übersetzen. Zur Übersetzung wird die DeepL API genutzt.",
      slug: "deepi18n",
      url: "https://deep-i18n.vercel.app/",
      stack: ["React.js", "Next.js", "Chakra Ui", "AWS S3"],
    },
    {
      image: KrasserStecher,
      type: "Onlineshop",
      title: "Krasserstecher.de",
      description:
        "Bei Krasser Stecher gibt es personalisierte 3D gedruckte Keksausstechformen. Der Shop wurde mit Shopify erstellt. Die Storefront basiert auf dem Dawn Theme mit eigenen Secions.",
      slug: "krasserstecher",
      url: "https://www.krasserstecher.de",
      stack: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
    },
    {
      image: Aposto,
      type: "Onlineshop",
      title: "Aposto Wuppertal",
      description:
        "Leckere Pizza und Pasta kann man im auf Shopify basierenden Shop vom Aposto Wuppertal bestellen. \r\nDer Shop wurde als Alternative zu Lieferando erstellt.",
      slug: "aposto-wuppertal",
      url: "https://apostowuppertal.de",
      stack: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
    },
    {
      image: Allkokos,
      type: "Onlineshop",
      title: "Allkokos.de",
      description:
        "Das wohl beliebteste Kleintiereinstreu Deutschlands gibt es bei Allkokos.de. Der Fokus bei diesem Projekt lag auf der Conversion Optimierung der Produktseite des Kleintiereinstreus.",
      slug: "allkokos",
      url: "https://allkokos.de/products/kleintiereinstreu",
      stack: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
    },
  ]

  return (
    <>
      <Helmet></Helmet>
      <Flex
        id="top"
        position={"relative"}
        paddingX={{ base: "4", md: "20" }}
        paddingY="20"
        gap={{ base: "0", md: "20" }}
        align={"center"}
        justify={"center"}
        minH={{ base: 0, md: "90vh" }}
        wrap={"wrap"}
        backgroundImage={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2f5f5f5' fill-opacity='0.1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}
      >
        <VStack spacing={"4"} align={"flex-start"}>
          <Heading
            as="h1"
            size={"4xl"}
            textAlign={{ base: "center", md: "left" }}
            w="full"
          >
            Freelance
            <br />
            Developer
          </Heading>
          <Container
            maxW="lg"
            pl="0"
            textAlign={{ base: "center", md: "left" }}
          >
            <Text>
              Ich helfe Menschen Ihre Ideen in Seiten umzusetzen, die
              funktionieren.
              <br />
              Professionell und kosteneffektiv.
              <br />
              Immer.
            </Text>
          </Container>
          <Flex w="full" gap="4" wrap={{ base: "wrap", md: "nowrap" }}>
            <VStack w="full">
              <Button isFullWidth colorScheme={"red"}>
                Lass und zusammenarbeiten!
              </Button>
              <Link to="services" w="full" style={{ width: "100%" }}>
                <Button isFullWidth colorScheme={"red"} variant={"outline"}>
                  Meine Leistungen
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
        <Box maxW="xl">
          <chakra.img
            minH={{ base: "sm", md: "xl" }}
            minW="sm"
            maxW={{ base: "sm", md: "none" }}
            src={Hero}
            alt="Hero"
            id="freepik_stories-static-assets"
            className="animated"
          ></chakra.img>
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
          <Button colorScheme={"red"} size={"lg"} isFullWidth>
            Meine Projekte
          </Button>
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
          <chakra.img
            src={ProfilePicture}
            alt="Ein Bild von mir"
            rounded={"lg"}
          ></chakra.img>
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
        spacing={"16"}
        // backgroundImage={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23d8c3a5' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}
        id="toolbox"
      >
        <Heading size="2xl">Meine Toolbox</Heading>
        {tools.map((area, index) => (
          <Box key={index}>
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
                  _hover={{
                    transform: "scale(1.1) translate(0px, -4px)",
                    shadow: "dark-lg",
                    color: "red.500",
                  }}
                >
                  <Icon as={tool.icon} w="12" h="12"></Icon>
                  <Text>{tool.name}</Text>
                </Flex>
              ))}
            </Flex>
          </Box>
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
        spacing={"16"}
        backgroundImage={`url("data:image/svg+xml,%3Csvg width='104' height='52' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}
        color={"textSecondary"}
        id="certifications"
      >
        <Heading size="2xl">Zertifikationen</Heading>
        <Flex gap={"8"} wrap={"wrap"} justify={"center"} maxW="1200px">
          <chakra.a
            rel="noreferrer"
            mt="6px"
            pr="16px"
            pb="12px"
            href="https://www.freecodecamp.org/certification/carstenlebek/javascript-algorithms-and-data-structures"
            aria-label="FreeCodeCamp - Javascript algorithms and data structures"
          >
            <chakra.img
              src={JsAad}
              height={69}
              width={273}
              alt="FreeCodeCamp - Javascript algorithms and data structures"
              shadow={"md"}
              rounded={"lg"}
              transition={"all 0.3s ease-out"}
              _hover={{
                shadow: "dark-lg",
                transform: "scale(1.05)",
              }}
            />
          </chakra.a>
          <chakra.a
            rel="noreferrer"
            mt="6px"
            pb="12px"
            pr="16px"
            href="https://www.freecodecamp.org/certification/carstenlebek/front-end-development-libraries"
            aria-label="FreeCodeCamp - Front end development libraries"
          >
            <chakra.img
              src={Fedl}
              height={69}
              width={273}
              alt="FreeCodeCamp - Front end development libraries"
              shadow={"md"}
              rounded={"lg"}
              transition={"all 0.3s ease-out"}
              _hover={{
                shadow: "dark-lg",
                transform: "scale(1.05)",
              }}
            />
          </chakra.a>
          <chakra.a
            rel="noreferrer"
            mt="6px"
            pb="12px"
            pr="16px"
            href="https://www.freecodecamp.org/certification/carstenlebek/back-end-development-and-apis"
            aria-label="FreeCodeCamp - Back end development and apis"
          >
            <chakra.img
              src={Bedaa}
              height={69}
              width={273}
              alt="FreeCodeCamp - Back end development and apis"
              shadow={"md"}
              rounded={"lg"}
              transition={"all 0.3s ease-out"}
              _hover={{
                shadow: "dark-lg",
                transform: "scale(1.05)",
              }}
            />
          </chakra.a>
          <chakra.img
            src={ShAd}
            height={69}
            width={273}
            mt="6px"
            mb="12px"
            mr="16px"
            alt="Shopify - App development"
            shadow={"md"}
            rounded={"lg"}
            transition={"all 0.3s ease-out"}
            _hover={{
              shadow: "dark-lg",
              transform: "scale(1.05)",
            }}
          />
          <chakra.img
            src={ShPf}
            height={69}
            width={273}
            mt="6px"
            mb="12px"
            mr="16px"
            alt="Shopfy - Product fundamentals"
            shadow={"md"}
            rounded={"lg"}
            transition={"all 0.3s ease-out"}
            _hover={{
              shadow: "dark-lg",
              transform: "scale(1.05)",
            }}
          />
          <chakra.img
            src={ShBf}
            height={69}
            width={273}
            mt="6px"
            mb="12px"
            mr="16px"
            alt="Shopfy - Business fundamentals"
            shadow={"md"}
            rounded={"lg"}
            transition={"all 0.3s ease-out"}
            _hover={{
              shadow: "dark-lg",
              transform: "scale(1.05)",
            }}
          />
          {/* TODO: CROP OFG IMAGE WITH CSS */}
          <chakra.div
            backgroundImage='url("https://ofg-studium.de/images/certificate/certificate_webdesign_21142.png")'
            backgroundRepeat={"no-repeat"}
            shadow={"md"}
            rounded={"lg"}
            transition={"all 0.3s ease-out"}
            _hover={{
              shadow: "dark-lg",
              transform: "scale(1.05)",
            }}
          >
            <chakra.a
              href="https://ofg-studium.de"
              rel="noreferrer"
              target="_blank"
              title="Online Schule für Gestaltung - Webdesign"
              outline={"medium none"}
            >
              <chakra.img
                id="certi"
                h="88px"
                w="291px"
                border="0"
                title="Online Schule für Gestaltung - Webdesign"
                alt="Online Schule für Gestaltung - Webdesign / Professionelle Webseiten erstellen"
                src="https://ofg-studium.de/images/certificate/utils/Zertifikat.gif"
              />
            </chakra.a>
          </chakra.div>
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
      {/* <VStack
        spacing={"16"}
        py={{ base: "12", md: "40" }}
        px={"4"}
        id="services"
        // backgroundImage={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%232c2f33' fill-opacity='0.87'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}
      >
        <Heading size="2xl" textAlign={"center"} w="full">
          Ways I can help you
        </Heading>
        {wasICanHelpYou.map((way, index) => (
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            maxW="1200px"
            gap="20"
            alignItems={"center"}
          >
            <VStack flex="1" textAlign={"left"} order={"2"}>
              <Heading w="full">{way.heading}</Heading>
              <Text>{way.description}</Text>
            </VStack>
            <chakra.img
              src={way.image}
              flex="1"
              alt={way.description}
              order={{ base: 2, md: index % 2 ? 1 : 2 }}
              // gridColumn={index % 2 ? 1 : 2}
            />
          </SimpleGrid>
        ))}
      </VStack> */}
      <Flex
        direction={"column"}
        py={{ base: "12", md: "40" }}
        px="4"
        gap={12}
        align={"center"}
        justify={"center"}
        id="projects"
      >
        <Heading size="2xl" textAlign={"center"} w="full">
          Projekte
        </Heading>
        <Flex
          gap="8"
          maxW="4xl"
          justify={"center"}
          align={"stretch"}
          wrap={"wrap"}
        >
          {projects.map((project, index) => (
            <Flex
              key={index}
              maxW="sm"
              bg="sbg"
              color="textSecondary"
              flex={"1 1 300px"}
              rounded={"lg"}
              shadow={"md"}
              justify={"flex-start"}
              align={"stretch"}
              direction={"column"}
            >
              <Box>
                <chakra.img
                  src={project.image}
                  alt={`Projekt ${project.title}`}
                  roundedTop={"lg"}
                ></chakra.img>
              </Box>
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
                  <Button colorScheme={"red"} isFullWidth>
                    Mehr dazu
                  </Button>
                  <Button
                    colorScheme={"red"}
                    variant={"ghost"}
                    as="a"
                    target={"_blank"}
                    href={project.url}
                    rightIcon={<FaExternalLinkAlt />}
                    isFullWidth
                  >
                    Zum Projekt
                  </Button>
                </VStack>
              </VStack>
            </Flex>
          ))}
        </Flex>
      </Flex>
      <a href="https://storyset.com/web">Web illustrations by Storyset</a>
    </>
  )
}
