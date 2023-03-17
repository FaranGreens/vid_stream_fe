import * as React from "react";
import { useState } from "react";
import { LOGIN } from "../Redux/Actions/actionType";
import { login } from "../Redux/Actions/myAction";
import { useDispatch } from "react-redux";
import loginUser from "../Utils/loginUser";
import registerUser from "../Utils/registerUser"
import {
  Container,
  ChakraProvider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Input,
  ModalFooter,
  Button,
  useDisclosure,
  Stack,
  HStack,
  VStack,
  Center,
  Text,
  Divider,
  Radio,
  RadioGroup,
  Grid,
  GridItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Register() {

  const [logincomp, SetloginComp] = React.useState(true);
  const [signupDetails, setSignupDetails] = React.useState({});
  const [loginDetails, setLoginDetails] = React.useState({});
  const [final, setfinal] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();
const navigate = useNavigate();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const signin = (e) => {
    e.preventDefault();
    // console.log(loginDetails);
    // dispatch(login());
    loginUser(loginDetails).then((res) => {
      if (res.status === 200) {
        // console.log(res.data);
        toast({
            title: "Login successful",
            status: "success",
            isClosable: true,
          })
        dispatch(login());
      } else {
        // console.log(res.response);
        toast({
            title: `${res.response.data.error}`,
            status: "error",
            isClosable: true,
          })
      }
    });
  };

  const signup = (e) => {
    e.preventDefault();
    // console.log(signupDetails);
    registerUser(signupDetails).then((res) => {
      if (res.status === 200) {
        // console.log(res.data);
        toast({
            title: "Signup successful",
            description: "Please login",
            status: "success",
            isClosable: true,
          })
        onClose;
      } else {
        // console.log(res.response);
        toast({
            title: `${res.response.data.error}`,
            status: "error",
            isClosable: true,
          })
      }
    });
  };

  const signuphandleChange = (e) => {
    setSignupDetails({
      ...signupDetails,
      [e.target.name]: e.target.value,
    });
  };
  const loginhandleChange = (e) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ backgroundColor: "rgb(20,26,40)" }}>
      <Button onClick={onOpen}>Login</Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay marginTop="10" />
        <ModalContent bg="#111827.0" color="white" borderRadius="0">
          <ModalHeader>
            <ModalCloseButton marginTop="10" />
          </ModalHeader>

          <ModalBody>
            {logincomp === true ? (
              <>
                <Tabs isFitted variant="soft-rounded" defaultIndex={1} isLazy>
                  <TabList mb="1em" mt="20">
                    <Tab color="#fff" bg="#111840" border="none">
                      Register
                    </Tab>
                    <Tab color="#fff" bg="#111840" border="none">
                      Login
                    </Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <Container bg="#111827.0" height="auto" px="15" py="5">
                        <form id="new-note" onSubmit={signup}>
                          <VStack>
                            <FormControl color="#fff">
                              <FormLabel color="#fff">Username</FormLabel>
                              <Input
                                backgroundColor="#111827.0"
                                onChange={signuphandleChange}
                                name="name"
                                outline="none"
                                value={signupDetails.name}
                              />
                              <FormErrorMessage>Error message</FormErrorMessage>
                              {/* <FormHelperText>Helper message</FormHelperText> */}
                            </FormControl>
                            <FormControl color="#fff">
                              <FormLabel color="#fff">Email</FormLabel>
                              <Input
                                onChange={signuphandleChange}
                                name="email"
                                value={signupDetails.email}
                              />
                              {/* <FormHelperText>Helper message</FormHelperText> */}
                              <FormErrorMessage>Error message</FormErrorMessage>
                            </FormControl>
                            <FormControl color="#fff">
                              <FormLabel color="#fff">Password</FormLabel>
                              <Input
                                onChange={signuphandleChange}
                                name="password"
                                value={signupDetails.password}
                              />
                              {/* <FormHelperText>Helper message</FormHelperText> */}
                              <FormErrorMessage>Error message</FormErrorMessage>
                            </FormControl>
                            <Center>
                              <Button
                                variant="solid"
                                size="md"
                                backgroundColor="#494ee5"
                                color="#fff"
                                fontWeight="700"
                                mt={3}
                                type="submit"
                              >
                                Submit
                              </Button>
                            </Center>
                          </VStack>
                        </form>
                      </Container>
                    </TabPanel>
                    <TabPanel>
                      <Container bg="#111827.0" height="auto" px="15" py="5">
                        <form id="login" onSubmit={signin}>
                          <VStack>
                            <FormControl color="#fff">
                              <FormLabel color="#fff">Email</FormLabel>
                              <Input
                                color="#fff"
                                name="email"
                                onChange={loginhandleChange}
                                value={loginDetails.email}
                              />
                              {/* <FormHelperText>Helper message</FormHelperText> */}
                              <FormErrorMessage>Error message</FormErrorMessage>
                            </FormControl>
                            <FormControl color="#fff">
                              <FormLabel color="#fff">Password</FormLabel>
                              <Input
                                onChange={loginhandleChange}
                                name="password"
                                value={loginDetails.password}
                              />
                              {/* <FormHelperText>Helper message</FormHelperText> */}
                              <FormErrorMessage>Error message</FormErrorMessage>
                            </FormControl>
                            <Center>
                              <Button
                                variant="solid"
                                size="md"
                                backgroundColor="#494ee5"
                                color="#fff"
                                fontWeight="700"
                                mt={3}
                                type="submit"
                              >
                                Signin
                              </Button>
                            </Center>
                          </VStack>
                        </form>
                      </Container>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </>
            ) : null}
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Register;
