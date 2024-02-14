import { useState } from 'react';
import { Input, Button } from "@chakra-ui/react"

  const LoginComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

  return (
    <>
          <Input
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
          <Button
            type="submit"
            w={"full"}
            colorScheme="blue"
            size={"sm"}
            fontSize={14}
          >
            Log in
          </Button>
    </>
  );
};

export default LoginComponent;
