
import { Box, Flex } from "@chakra-ui/react"
import { Link as RouterLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <Box 
    height={"100vh"}
    borderRight={"1px solid"}
    borderColor={"whiteAlpha.300"}
    py={8}
    position={"sticky"}
    top={0}
    left={0}
    px={{base: 2, md:4}}
    >
        <Flex direction={"column"} gap={10} w={"full"} height={"full"}>
            <RouterLink to={"/"} pl={2} display={{base: "none", md:"block"}}>
            </RouterLink>
        </Flex>
    </Box>
  )
}

export default Navbar