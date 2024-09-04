import { Flex, Box, Text, InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react"
import { useState } from "react"
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../assets/constants";

const PostFooter = ({username}) => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(10);

    const handleLike = () => {
        if (liked) {
            setLiked(false);
            setLikes(likes + 1);
        } else {
            setLiked(true);
            setLiked(likes - 1);
        }
    }
  return (
    <Box mb={10}>
        <Flex alignItems={'center'} gap={'4'} w={'full'} pt={0} mb={'2'} mt={'4'}>
            <Box onClick={handleLike}
            cursor={'pointer'} fontSize={18}>
                {!liked ? (<NotificationsLogo />) : (<UnlikeLogo />)}
            </Box>

            <Box cursor={'pointer'} fontSize={18}>
                <CommentLogo />
            </Box>
            </Flex>
            <Text fontWeight={600} fontSize={'sm'}>
                {likes} Likes
            </Text>
            <Text fontWeight={700} fontSize={'sm'}>
                {username}:{" "}
                <Text as={'span'} fontWeight={'400'}>
                    this is a comment by a user
                </Text>
            </Text>
            <Text color={'gray'} fontSize={'sm'}>
                View all 500 commentss
            </Text>
            <Flex
            alignItems={'center'}
            gap={2}
            justifyContent={'space-between'}
            w={'full'}>
                <InputGroup>
                <Input variant={'flushed'} fontSize={14} placeholder={"Add a comment"} />
                <InputRightElement>
                    <Button fontWeight={500} color={'blue.500'} cursor={'pointer'} bg={'transparent'}
                    _hover={{color: 'white'}}>
                        Posts</Button>
                </InputRightElement>
                </InputGroup>
            </Flex>
            
    </Box>
)
}

export default PostFooter