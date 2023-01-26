import { useState } from "react";
import { Formik, Field } from "formik";
import {
  HStack,
  Image,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
} from "@chakra-ui/react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";

export default function App() {
  const [cargando, setCargando] = useState(true);
  const [imgUrl, setImgUrl] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex align="center" justify="center" h="20vh">
        <Formik
          initialValues={{
            prompt: "",
          }}
          onSubmit={async (values) => {
            onOpen();
            setCargando(true);
            console.log(values.prompt);
            await axios
              .post(
                "http://192.168.100.155:8000/api/dalle/create",
                {
                  prompt: values.prompt,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    "x-token": "dssdsdssdsd",
                  },
                }
              )
              .then((res) => {
                console.log(res);
                setImgUrl(res.data.msg.url);
                setCargando(false);
              });
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form style={{ width: "80%" }} onSubmit={handleSubmit}>
              <HStack spacing="24px">
                <FormControl>
                  {/* <FormLabel htmlFor="string">Frase</FormLabel>
                  <Field
                    as={Input}
                    id="prompt"
                    name="prompt"
                    type="prompt"
                    variant="filled"
                  /> */}
                  {/* <InputGroup variant="custom" colorScheme="purple">
                    <InputLeftAddon>Phone:</InputLeftAddon>
                    <Input placeholder="Themed Custom Input" />
                    <InputRightElement pointerEvents="none">
                      
                    </InputRightElement>
                  </InputGroup> */}
                  {/* <InputGroup variant="custom" colorScheme="purple">
                    <InputLeftAddon>Para mi el amor es:</InputLeftAddon>
                    <Field as={Input} name="prompt" placeholder="..." />
                    <InputRightElement pointerEvents="none"></InputRightElement> 
                  </InputGroup> */}
                  <Box style={{ touchAction: "manipulation" }}>
                    <InputGroup variant="custom" colorScheme="red">
                      <Field
                      style={{ touchAction: 'manipulation', }}
                        type={"text"}
                        rounded={"full"}
                        as={Input}
                        name="prompt"
                        placeholder="Para mi el amor es..."
                        
                      />
                      <InputRightElement w={100} bg={"#F80759"} borderColor={"#F80759"}>
                        <Button
                          color={"white"}
                          bgColor={"#F80759"}
                          type="submit"
                          w={"100%"}
                          rounded={"full"}
                        >
                          Crear
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </Box>
                </FormControl>
              </HStack>
            </form>
          )}
        </Formik>
      </Flex>
      {cargando ? (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Cargando</ModalHeader>
            <ModalCloseButton />
            <ModalBody>kdlksdlkdlssdlk</ModalBody>
          </ModalContent>
        </Modal>
      ) : (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size={"md"}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Imagen</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex>
                <Image rounded={"md"} src={imgUrl} />
              </Flex>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Salir
              </Button>
              {/* <Button variant="ghost">Descargar</Button> */}
              {/* <Button
                variant="ghost"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = imgUrl;
                  link.download = "imagen.jpg";
                  link.click();
                }}
              >
                Descargar
              </Button> */}
              <Button
                variant="ghost"
                onClick={async () => {
                  const response = await fetch(imgUrl);
                  const blob = await response.blob();
                  const url = window.URL.createObjectURL(blob);
                  const link = document.createElement("a");
                  link.href = url;
                  link.download = "imagen";
                  link.click();
                }}
              >
                Descargar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
