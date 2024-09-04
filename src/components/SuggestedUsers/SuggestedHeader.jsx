import { Avatar, Box, Flex, Link } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
        <Flex alignItems={'center'} gap={4}>
            <Avatar name="Tuna Bolukbasi" size={'md'} src="/src/public/profilepic.png"/>
            <Box fontSize={12} fontWeight={'bold'}>
                John doe
            </Box>
        </Flex>
        <Link
        as={RouterLink}
        to={'/auth'}
        fontSize={14}
        fontWeight={'medium'}
        color={'blue.400'}
        style={{textDecoration: 'none'}}
        cursor={'pointer'}>
        Log out</Link>
    </Flex>
  )
}

export default SuggestedHeader