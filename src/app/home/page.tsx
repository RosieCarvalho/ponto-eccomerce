"use client";
import { CarrouselCards, Footer, HeadingBar } from "@/src/components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex flexDirection="column" flex={1}>
      <HeadingBar />
      <Carousel swipeable verticalSwipe="standard">
        <Grid templateColumns="1fr 2fr 3fr" gap={2} h="764" bgColor="#F2F0FF">
          <GridItem w="100%" right="initial">
            <Image
              src="/assets/img/lampada.png"
              alt="lampada"
              width="387"
              height="387"
            />
          </GridItem>
          <GridItem w="100%" margin="auto" textAlign="start">
            <Text color="pink.250" fontWeight="300">
              Best Furniture For Your Castle....
            </Text>
            <Text fontSize="5xl" fontWeight="900">
              New Furniture Collection Trends in 2020
            </Text>
            <Text color="#8A8FB9" fontWeight="300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </Text>
            <Button mt="5" bgColor="pink.250" color="white">
              Shop Now
            </Button>
          </GridItem>
          <GridItem w="100%" alignItems="start">
            <Image
              src="/assets/img/img-slide1.png"
              alt="slide1"
              width="699"
              height="597"
            />
          </GridItem>
        </Grid>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <GridItem w="100%" h="10" bg="blue.500" />
          <GridItem w="100%" h="10" bg="blue.500" />
        </Grid>
      </Carousel>

      <Flex width="1217px" margin="auto" flexDirection="column">
        <Center flexDirection="column">
          <Text fontSize="2xl" fontWeight="700" color="blue.700">
            Featured Products
          </Text>
          <CarrouselCards />
        </Center>
        {/* <LatestProducts>

        </LatestProducts> */}
      </Flex>
      {/* <Footer /> */}
    </Flex>
  );
}
