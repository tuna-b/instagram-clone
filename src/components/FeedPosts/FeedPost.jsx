import PostHeader from "./PostHeader"
import PostFooter from "./PostFooter"
import { Box, Image } from "@chakra-ui/react"

const FeedPost = ({img, username, avatar}) => {
  return (
    <div>
        <PostHeader username={username} avatar={avatar} />
        <Box my={2} borderRadius={4} overflow={'hidden'}>
            <Image src={img} alt="User profile pic"/>
        </Box>
        <PostFooter username={username} />
    </div>
  )
}

export default FeedPost