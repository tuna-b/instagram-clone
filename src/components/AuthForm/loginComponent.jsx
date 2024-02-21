import { useState } from 'react';
import { Input, Button } from "@chakra-ui/react"
import useSignIn from "../../hooks/useSignIn";

  const LoginComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {loading, error, login} = useSignIn();
    

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
            onClick={() => login({ email, password })}
            isLoading={loading}
          >
            Log in
          </Button>
    </>
  );
};

export default LoginComponent;
