import PostHeader from "./PostHeader"
import PostFooter from "./PostFooter"
import { Box, Image } from "@chakra-ui/react"

const FeedPost = () => {
  return (
    <div>
        <PostHeader />
        <Box>
            <Image src="src/public/img1.png" alt="User profile pic"/>
        </Box>
        <PostFooter />
    </div>
  )
}

export default FeedPost