import { Box, Heading, VStack, Text } from "@chakra-ui/react"
import React from "react"

export default function Impressum() {
  return (
    <Box py="40" mx="auto" maxW="container.md" minH="100vh">
      <VStack spacing={12}>
        <Heading fontSize="5xl">Impressum</Heading>
        <Text>
          <Heading fontSize={"xl"} my="2">
            Angaben gem&auml;&szlig; &sect; 5 TMG
          </Heading>
          <p>
            Carsten Lebek
            <br />
            L&ouml;hrerlen 19G
            <br />
            42279 Wuppertal
          </p>

          <Heading fontSize={"xl"} my="2">
            Kontakt
          </Heading>
          <p>E-Mail: carsten.lebek@gmail.com</p>

          <Heading fontSize={"xl"} my="2">
            Umsatzsteuer-ID
          </Heading>
          <p>
            Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
            Umsatzsteuergesetz:
            <br />
            DE311134429
          </p>

          <Heading fontSize={"xl"} my="2">
            Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
          </Heading>
          <p>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>

          <p>
            Quelle: <a href="https://www.e-recht24.de">eRecht24</a>
          </p>
        </Text>
      </VStack>
    </Box>
  )
}
