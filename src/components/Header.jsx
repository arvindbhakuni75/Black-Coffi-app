import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import bannerImg from "../assets/images/banner-img.jpg";
import bannerTopImage from "../assets/images/banner-top-img.jpg";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <Box
      h="95vh"
      w="100%"
      backgroundImage={bannerImg}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Box className="bannar-opecity" w="100%" h="95vh">
        <Container maxW="container.lg" p={6}>
          <Navbar />
          <Flex
            h={{ base: "auto", xs: "100vh" }}
            justifyContent="space-between"
            py={[0, 10, 20]}
            direction={{
              base: "column",
              md: "row",
            }}
          >
            <VStack spacing={7} w="full" align="flex-start">
              <Text
                color="white"
                fontSize="4xl"
                lineHeight={1.1}
                fontWeight="800"
              >
                NATURAL <br /> <span className="yellow-text">COFFEE</span> BEANS
              </Text>
              <Text color="white" fontWeight="500" fontSize="sm">
                Sedltricie ornare lacus, vitae auctorting egestasat orci
                volutpat
              </Text>

              <Button
                fontSize="14px"
                h="50px"
                w="140px"
                mt
                bgColor="white"
                color="black"
                borderRadius="50px"
              >
                Read More
              </Button>
            </VStack>

            {/* Right Side  */}

            <Box w="full">
              <Image h="392px" src={bannerTopImage} />
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
