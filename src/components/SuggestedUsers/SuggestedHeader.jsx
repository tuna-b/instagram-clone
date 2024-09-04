import { Avatar, Box, Flex } from "@chakra-ui/react"

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
        <Flex alignItems={'center'}>
            <Avatar name="john doe" size={'lg'} src="/src/public/img3.png"/>
            <Box fontSize={12} fontWeight={'bold'}>
                John doe
            </Box>
        </Flex>

    </Flex>
  )
}

export default SuggestedHeader