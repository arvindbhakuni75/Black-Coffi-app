import {
  AspectRatio,
  Button,
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  VStack,
  useColorMode,
  useColorModeValue,
  IconButton,
  Badge,
} from "@chakra-ui/react";
import { BsCart2 } from "react-icons/bs";

import React, { useState } from "react";
import callIcon from "../assets/images/phone-icon.png";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const NotificationBadge = ({ count }) => {
  return (
    <Box position="relative">
      {/* Your content goes here */}
      <BsCart2 color="white" />

      {/* Notification badge */}
      {count > 0 && (
        <Badge
          position="absolute"
          top="-8px"
          right="-8px"
          border="1px solid white"
          borderRadius="full"
          color="white"
          fontSize="12px"
          width="15px"
          height="15px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          background="#1c1313"
        >
          {count}
        </Badge>
      )}
    </Box>
  );
};

const Navbar = () => {
  const { toggleColorMode } = useColorMode("dark");
//   const  textColor  = useColorModeValue("whiteAlpha.600", "gray.600");
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50")

  const notificationCount = 5;

  return (
    <>
      <Grid templateColumns="repeat(auto-fit,minmax(220px, 1fr))" gap={4}>
        <Flex w="full" justifyContent="start" direction={{
            base: "column-reverse",
            md: "row"
          }}>
          <HStack px={4}>
            <AspectRatio ratio={1} w={10}>
              <Image src={callIcon} />
            </AspectRatio>
            <VStack align="start" lineHeight={0.8}>
              <Text color="white">Call Now</Text>
              <Text color="white" as="b">
                123 456 7890
              </Text>
            </VStack>
          </HStack>
        </Flex>

        <Flex w="full" h="10" justifyContent="center">
          <Image src={logo}></Image>
        </Flex>

        <Flex w="full" h="10">
          <HStack w="full" justifyContent="end">
            <Button
              onClick={toggleColorMode}
              variant="outline"
              colorScheme="black"
              size="sm"
              color="white"
            >
              Mode
            </Button>
            <Text color="white">$00.00</Text>
            <NotificationBadge color="white" count={notificationCount} />
          </HStack>
        </Flex>
      </Grid>

      {/* NavBar */}

        <Flex w="full" gap={4} justifyContent="center" mt={10} className="nav-link-bar" h={12} align="center" fontWeight='700' fontSize="14px" color="white" >
            <NavLink to ="/"  >HOME</NavLink>
            <NavLink to ="/about">ABOUT</NavLink>
            <NavLink to ="/menu">MENU</NavLink>
            <NavLink to ="/rtlTestd">RTL TESTED</NavLink>
            <NavLink to ="/shop">SHOP</NavLink>
            <NavLink to ="/blog">BLOG</NavLink>
            <NavLink to ="/contact">CONTACT</NavLink>
        </Flex>

    </>
  );
};

export default Navbar;
