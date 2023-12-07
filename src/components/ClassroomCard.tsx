import {useHistory} from "react-router-dom";
import {Box, Card, CardBody, Heading, Image, Stack, Text} from '@chakra-ui/react';
import {images} from "../data/images.jsx";

const ClassroomCard = ({classroom}) => {
    const history = useHistory()
    return (
        <Box onClick={() => {
            history.push(`/classroom/${classroom.id}/`)
        }}>
            <Card maxW='sm' style={{margin: 10}}>
                <CardBody>
                    <Image
                        src={images[classroom.image_id]}
                        alt='Green double couch with wooden legs'
                      borderRadius='lg'
                      height={"270px"}
                      width={"370px"}
                  />
                  <Stack mt='6' spacing='3'>
                      <Heading size='md'>{classroom.name}</Heading>
                      <Text>
                          {classroom.description}
                      </Text>
                  </Stack>
              </CardBody>

          </Card>
      </Box>




        // <Box
        //     onClick={() => {
        //         navigate(`/classroom/${id}`)
        //     }}
        //     width={200}
        //     height={200}
        //     maxW="sm"
        //     borderWidth="1px"
        //     borderRadius="lg"
        //     overflow="hidden"
        //     position="relative"
        // >
        //     <Box position="absolute" w="100%" h="100%" bg="white"/>
        //     <Box position="absolute" w="100%" h="100%" bg="blue.500">
        //         <Image src={imageUrl} alt={title} w="100%" h="100%" objectFit="cover"/>
        //     </Box>
        //     <Box position="absolute" w="100%" h="100%">
        //         <Box p="6">
        //             <Box display="flex" alignItems="baseline">
        //                 <Text fontSize="xl" fontWeight="bold" mr={2}>
        //                     {title}
        //                 </Text>
        //             </Box>
        //             <Text mt={2} color="gray.500">
        //                 {description}
        //             </Text>
        //         </Box>
        //     </Box>
        // </Box>
    );
};


export default ClassroomCard;