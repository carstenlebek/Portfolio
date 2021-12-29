import {
  Box,
  Button,
  chakra,
  Container,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"
import React from "react"
import { Helmet } from "react-helmet"
import { FaXing, FaGithub } from "react-icons/fa"
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
} from "react-icons/si"

import HeroImage from "./../assets/images/undraw_programming_re_kg9v.svg"
import JsAad from "./../assets/images/fcc_js_aads_badge.png"
import Fedl from "./../assets/images/fcc_fedl.png"
import Bedaa from "./../assets/images/fcc_bedaa.png"
import ShAd from "./../assets/images/sh_ad.png"
import ShBf from "./../assets/images/sh_bf.png"
import ShPf from "./../assets/images/sh_pf.png"

import WebsiteImage from "./../assets/images/undraw_personal_website_re_c8dv.svg"
import SeoImage from "./../assets/images/undraw_building_websites_i78t.svg"
import FeaturesImage from "./../assets/images/undraw_scrum_board_re_wk7v.svg"
import OnlineShopImage from "./../assets/images/undraw_web_shopping_re_owap.svg"

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

  return (
    <>
      <Helmet>
        <script
          type="text/javascript"
          src="https://ofg-studium.de/images/certificate/utils/cert.php?x=06bf589a-070c-11eb-84eb-005056a71e55"
          defer
        ></script>
      </Helmet>
      <Flex
        paddingX={{ base: "4", md: "20" }}
        paddingY="20"
        gap={{ base: "12", md: "20" }}
        align={"center"}
        justify={"center"}
        minH={{ base: 0, md: "90vh" }}
        wrap={"wrap"}
        backgroundImage={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23d8c3a5' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}
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
              <chakra.a w="full" href="#services">
                <Button isFullWidth colorScheme={"red"} variant={"outline"}>
                  Meine Leistungen
                </Button>
              </chakra.a>
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
              >
                <FaXing size={"1.8rem"} />
              </Button>
              <Button
                colorScheme={"red"}
                variant={"ghost"}
                aria-label="Link zum Github Profil"
              >
                <FaGithub size={"1.8rem"} />
              </Button>
            </Stack>
          </Flex>
        </VStack>
        <Box maxW="xl">
          <img src={HeroImage} alt="Hero"></img>
        </Box>
      </Flex>
      <Flex
        justify={"center"}
        align={"center"}
        minH={{ base: "none", md: "3xl" }}
        py={{ base: "12" }}
        bg="sbg"
      >
        <VStack maxW="md" spacing={"16"} px="4">
          <Heading size={"2xl"} whiteSpace={{ base: "normal", md: "nowrap" }}>
            Ich bringe dir Ergebnisse.
          </Heading>
          <VStack align={"flex-start"}>
            <Text>
              I build sites with amazing looks and fast load-times that do one
              thing:{" "}
              <chakra.span color={"red"} display={"inline"} fontWeight={"bold"}>
                Get you results.
              </chakra.span>
            </Text>
            <Text>
              Whatever you have in mind, you should know - I build with a
              goal-oriented eye for precision.
            </Text>
            <Text>
              When we're done, you will have a site that gets the job done in
              style.
            </Text>
          </VStack>
          <Button colorScheme={"red"}>See past work</Button>
        </VStack>
      </Flex>
      <VStack
        py={{ base: "12", md: "40" }}
        spacing={"16"}
        backgroundImage={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23d8c3a5' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}
      >
        <Heading size="2xl">My Toolbox</Heading>
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
                >
                  <Icon as={tool.icon} color={"black"} w="12" h="12"></Icon>
                  <Text>{tool.name}</Text>
                </Flex>
              ))}
            </Flex>
          </Box>
        ))}
      </VStack>
      <VStack
        py={{ base: "4", md: "80" }}
        spacing={"16"}
        // backgroundImage={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%232c2f33' fill-opacity='0.87'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}
        bg={"sbg"}
      >
        <Heading size="2xl">Zertifikationen</Heading>
        <Flex gap={"8"} wrap={"wrap"} justify={"center"} maxW="1200px">
          <chakra.a
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
            />
          </chakra.a>
          <chakra.a
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
            />
          </chakra.a>
          <chakra.a
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
          />
          <chakra.img
            src={ShPf}
            height={69}
            width={273}
            mt="6px"
            mb="12px"
            mr="16px"
            alt="Shopfy - Product fundamentals"
          />
          <chakra.img
            src={ShBf}
            height={69}
            width={273}
            mt="6px"
            mb="12px"
            mr="16px"
            alt="Shopfy - Business fundamentals"
          />
          <div id="ofgcert"></div>
        </Flex>
      </VStack>
      <VStack
        spacing={"16"}
        py={{ base: "12", md: "40" }}
        px={"4"}
        id="services"
        // backgroundImage={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%232c2f33' fill-opacity='0.87'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}
      >
        <Heading size="2xl">Ways I can help you</Heading>
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
      </VStack>
    </>
  )
}
