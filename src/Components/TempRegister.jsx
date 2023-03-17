import React from "react";
import {
  ChakraProvider,
  Container,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
  Button,
  Center,
} from "@chakra-ui/react";

const TempRegister = () => (
  <ChakraProvider resetCSS>
    <Container >
      <FormControl color="whiteAlpha.500">
        <FormLabel>Username</FormLabel>
        <Input backgroundColor="whiteAlpha.500" />
        <FormErrorMessage>Error message</FormErrorMessage>
        <FormHelperText>Helper message</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel color="whiteAlpha.500">Email</FormLabel>
        <Input />
        <FormHelperText>Helper message</FormHelperText>
        <FormErrorMessage>Error message</FormErrorMessage>
      </FormControl>
      <FormControl>
        <FormLabel color="whiteAlpha.500">Password</FormLabel>
        <Input />
        <FormHelperText>Helper message</FormHelperText>
        <FormErrorMessage>Error message</FormErrorMessage>
      </FormControl>
      <Center>
        <Button
          variant="solid"
          size="md"
          backgroundColor="#494ee5"
          color="whiteAlpha.500"
        >
          Submit
        </Button>
      </Center>
    </Container>
  </ChakraProvider>
);

export default TempRegister;
