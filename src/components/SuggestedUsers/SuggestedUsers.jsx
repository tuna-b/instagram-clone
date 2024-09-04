import { Box, Flex, Text, VStack } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
        <SuggestedHeader />

        <Flex alignItems={'center'} 
        justifyContent={'space-between'}
        w={'full'}>
            <Text fontSize={12} fontWeight={'bold'} 
            color={'gray.400'}
            >
                Suggested for you
            </Text>
            <Text fontSize={12} fontWeight={'bold'} 
            _hover={{color: 'gray.400'}}
            cursor={'pointer'}>
                See all
            </Text>
        </Flex>

        <SuggestedUser name='John doe' followers={'1238'} avatar={'src/public/img2.png'}/>
        <SuggestedUser name='Jane' followers={'132'} avatar={'src/public/'}/>
        <SuggestedUser name={'bob joe'} followers={'18'}/>
        <SuggestedUser name={'uottawa student'} followers={'999'}/>
        <Box fontSize={12} color={'gray.500'} mt={5}>
            Built by {'Tuna Bolukbasi'}
        </Box>
    </VStack>

)
}

export default SuggestedUsers