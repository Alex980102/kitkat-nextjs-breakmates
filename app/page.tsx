"use client";

import BreakMatesHead from "@/components/BreakMatesHead";
import Inspirate from "@/components/InspirateElAmor";
import MyForm from "@/components/Form";
import MInputs from "@/components/Minputs";
import { Box, SimpleGrid, GridItem, Icon, IconButton, Input, InputGroup, InputLeftAddon, InputRightElement, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun, FaPhone } from "react-icons/fa";

export default function Home() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <>
      <BreakMatesHead />
      <Inspirate />
      <MyForm />
    </>
  );
}
