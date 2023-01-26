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
import { Center, Square, Circle } from '@chakra-ui/react'

export default function Inspirate() {
  return (
    <Center>
    <Image
      h={100}
      w={150}
      rounded={"md"}
      src={"/inspirate.png"}
      // objectFit={"cover"}
    />
  </Center>
  );
}
