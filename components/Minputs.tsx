import { Box, SimpleGrid, GridItem, Icon, IconButton, Input, InputGroup, InputLeftAddon, InputRightElement, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun, FaPhone } from "react-icons/fa";

export default function MInputs() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Box position="relative" h="100vh">
      <SimpleGrid gap={12} p={12} columns={2}>
        <GridItem colSpan={2}>
          <InputGroup variant="custom" colorScheme="purple">
            <InputLeftAddon>Phone:</InputLeftAddon>
            <Input placeholder="Themed Custom Input" />
            <InputRightElement pointerEvents="none">
              <Icon as={FaPhone} color="green.400" />
            </InputRightElement>
          </InputGroup>
        </GridItem>
      </SimpleGrid>

      <IconButton
        aria-label="toggle theme"
        rounded="full"
        size="xs"
        position="absolute"
        bottom={4}
        left={4}
        onClick={toggleColorMode} icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
      />
    </Box>
  );
}