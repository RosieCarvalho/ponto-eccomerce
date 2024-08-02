import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LuHeart } from "react-icons/lu";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";

export default function CarrouselCards() {
  const itens = [
    {
      name: "Cantilever chair",
      price: 450,
      image: {
        url: "/assets/img/carrouselProducts/image1.png",
      },
      code: "Y523201",
    },
    {
      name: "Cantilever chair",
      price: 450,
      image: {
        url: "/assets/img/carrouselProducts/image2.png",
      },
      code: "Y523201",
    },
    {
      name: "Cantilever chair",
      price: 450,
      image: {
        url: "/assets/img/carrouselProducts/image2.png",
      },
      code: "Y523201",
    },
    {
      name: "Cantilever chair",
      price: 450,
      image: {
        url: "/assets/img/carrouselProducts/image1.png",
      },
      code: "Y523201",
    },
  ];

  return (
    <Carousel swipeable centerMode centerSlidePercentage={32}>
      {itens.map((item) => {
        return (
          <Card
            key={item.code}
            ml="5"
            role="group"
            _hover={{
              transform: "scale3d(1.05, 1.05, 1)",
              ml: "4",
              transition: "transform  0.5s",
            }}
          >
            <Box
              bg="blackAlpha.50"
              p="9"
              pt="20"
              alignItems="center"
              _groupHover={{ pt: "18", pb: "4" }}
            >
              <Flex
                gap="4"
                ml="-4"
                display="none"
                mt="3"
                _groupHover={{ display: "flex" }}
              >
                <Icon
                  as={AiOutlineShoppingCart}
                  boxSize={6}
                  color="purple.800"
                />
                <Icon as={LuHeart} boxSize={6} color="blue.400" />
                <Icon as={FaMagnifyingGlassPlus} boxSize={6} color="blue.500" />
              </Flex>
              <Image
                src={item.image.url}
                alt="Green double couch with wooden legs"
                width="178"
                height="178"
              />
              <Button
                bgColor="green.400"
                color="white"
                display="none"
                _groupHover={{ display: "inline-flex" }}
              >
                View Details
              </Button>
            </Box>
            <CardBody _groupHover={{ bg: "blue.500", color: "white" }}>
              <Stack>
                <Heading
                  size="md"
                  color="pink.250"
                  _groupHover={{ color: "white" }}
                >
                  {item.name}
                </Heading>
                <Center gap="2">
                  <Box
                    w="4"
                    h="1.5"
                    bgColor="green.200"
                    borderRadius="md"
                  ></Box>
                  <Box w="4" h="1.5" bgColor="pink.400" borderRadius="md"></Box>
                  <Box
                    w="4"
                    h="1.5"
                    bgColor="blue.700"
                    borderRadius="md"
                    _groupHover={{ bg: "yellow.100" }}
                  ></Box>
                </Center>
                <Text>Code - {item.code}</Text>
                <Text
                  color="blue.600"
                  fontSize="2xl"
                  _groupHover={{ color: "white" }}
                >
                  $ {item.price}
                </Text>
              </Stack>
            </CardBody>
          </Card>
        );
      })}
    </Carousel>
  );
}
