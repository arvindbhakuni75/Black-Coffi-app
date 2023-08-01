import { Box, Button, Container, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Prepare = () => {

  return (
    <Box bgColor="#f9f4eb" w="full" minH="400px">
      <Container maxW="lg" >
        <Flex justify="space-around" wrap='wrap' >
            <Box>
              <Text fontSize="4xl" >HOW WE PREPARE OUR COFFEE BEANS</Text>
              <Text fontSize="14px" >Curabitur eget turpis iaculis eleifend. Curab consectetur fermentum anteut eusmdolor convallis vel. Morbi psum purus.</Text>
              <Button
              fontSize="14px"
              h="50px"
              w="140px"
              mt
              bgColor="white"
              color="black"
              borderRadius="50px"
              >Read More</Button>
            </Box>
            <Box>2</Box>
            <Box>3</Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Prepare;
