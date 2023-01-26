import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { ReactElement } from "react";

export default function BreakMatesHead() {
  return (
    <Container maxW={"9xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        {/* <Stack spacing={4} paddingLeft={150}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Our Story
          </Text>
          <Heading>
          <Image src="/breakmates.png" alt="me" width="64" height="64" />
          </Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
          La IA tiene la respuesta.
Expresa lo que es el amor para ti en una frase y deja que la IA lo interprete, por ejemplo: ”El amor es una explosión de chocolates de colores.”
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={
                <Icon as={IoAnalyticsSharp} color={"yellow.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Business Planning"}
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Financial Planning"}
            />
            <Feature
              icon={
                <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Market Analysis"}
            />
          </Stack>
        </Stack> */}
        {/* Poner diferentes paddings para los tamaños de pantalla */}
        <Flex paddingLeft={10} paddingRight={10}>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "/breakmates.png"
            }
            // objectFit={"cover"}
          />
        </Flex>
        <Flex paddingRight={10} paddingLeft={10}>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "/que_amor.png"
            }
            // objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
