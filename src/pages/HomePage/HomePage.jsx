import { Container, Flex, Box } from "@chakra-ui/react"
import FeedPosts from "../../components/FeedPosts/FeedPosts"

const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        <Box flex={2}>
          <FeedPosts />
        </Box>
        <Box flex={3} mr={20}
          display={{base: 'none', lg: 'block'}}
          maxWidth={'300px'}
          border={'1px solid red'}>
          FeedPosts
        </Box>
      </Flex>
    </Container>
  )
}

export default HomePage