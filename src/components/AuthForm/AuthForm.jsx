import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react"
import { useState } from "react"
import LoginComponent from "./loginComponent.jsx"
import SigninComponent from "./signinComponent.jsx"

const AuthForm = () => {
  const [isSignIn, setIsSignIn] = useState()

  return (
    <>
      <Box
        border={"1px solid gray"}
        borderRadius={4}
        padding={5}
      >
        <VStack spacing={4}>
          <Image
            src="/src/public/logo.png"
            h={24}
            cursor={"pointer"}
            alt="Instagram"
          />
          {!isSignIn ? <LoginComponent /> : <SigninComponent />}
          {/* <Input
            value={email}
            id="email"
            placeholder="Email"
            fontSize={14}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            id="password"
            value={password}
            placeholder="Password"
            fontSize={14}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isSignIn ? (
            <Input
              value={confirmPassword}
              id="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              fontSize={14}
              type="password"
            />
          ) : null}
          <Button
            type="submit"
            w={"full"}
            colorScheme="blue"
            size={"sm"}
            fontSize={14}
          >
            {isSignIn ? "Log in" : "Sign up"}
          </Button> */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            mt={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>
          <Flex gap={1}>
            <Text>{!isSignIn ? "Don't have" : "Have"} an account?</Text>
            <Text
              cursor={"pointer"}
              onClick={() => setIsSignIn(!isSignIn)}
              textColor={"lightBlue"}
            >
              {!isSignIn ? "Sign up" : "Sign in"}
            </Text>
          </Flex>
        </VStack>
      </Box>
    </>
  );
}

export default AuthForm