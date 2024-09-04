import { Container, VStack, Flex, SkeletonCircle, Skeleton, Box } from "@chakra-ui/react"
import FeedPost from "./FeedPost"
import { useEffect, useState } from "react"

const FeedPosts = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(false);
    }, 2000)
  return (
    <Container maxW={'container.sm'} py={10} px={2}>
        {isLoading && [0,1,2,3].map((_,idx) => (
            <VStack key={idx} gap={4} alignItems={'flex-start'} mb={10}>
                <Flex gap='2'>
                    <SkeletonCircle size={'10'} />
                    <VStack gap={2} alignItems={'flex-start'}>
                        <Skeleton height={'10px'} w={'200px'}/>
                    </VStack>
                </Flex>
                <Skeleton w={'full'}>
                    <Box h={'500px'}>Contents wrapped</Box>
                </Skeleton>
            </VStack>
        ))}
        {!isLoading && (
            <>
            <FeedPost img='/src/public/img1.png' username='tunab12' avatar='/src/public/img1.png'/>
            <FeedPost img='/src/public/img2.png' username='John' avatar='/src/public/img2.png'/>
            <FeedPost img='/src/public/img3.png' username='John Doe' avatar='/src/public/img3.png'/>
            <FeedPost img='/src/public/img2.png' username='Jane Doe' avatar='/src/public/img2.png'/>
            </>
        )}
    </Container>
  )
}

export default FeedPosts