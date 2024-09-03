import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Flex,
  Grid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

export default function LatestProducts() {
  const listTabBar = [
    {
      onClick: () => console.log("clicou"),
      title: "New Arrival",
    },
    {
      onClick: () => console.log("clicou"),
      title: "Best Seller",
    },
    {
      onClick: () => console.log("clicou"),
      title: "Featured",
    },
  ];

  return (
    <Box flex={1}>
      <Center gap="10" mb="5">
        {listTabBar.map((item) => {
          return (
            <Button
              key={item.title}
              fontSize="lg"
              color="blue.800"
              fontWeight="medium"
              variant="link"
              _hover={{ color: "pink.250" }}
              // onClick={}
            >
              {item.title}
            </Button>
          );
        })}
      </Center>
      <Grid
        w="100%"
        templateColumns="repeat(3, 1fr)"
        gap={12}
        justifyContent="space-between"
      >
        <Card bgColor="blackAlpha.100" flex={1} w={360}>
          <CardBody ml="10" mr="10" mt="5">
            <Image
              src="/assets/img/imagecard.png"
              alt="slide1"
              width="223"
              height="229"
            />
          </CardBody>
          <CardFooter bgColor="white">
            <Text>Comfort Handy Craft</Text>
          </CardFooter>
        </Card>
        <Card bgColor="blackAlpha.100" flex={1} w={360}>
          <CardBody ml="10" mr="10" mt="5">
            <Image
              src="/assets/img/imagecard.png"
              alt="slide1"
              width="223"
              height="229"
            />
          </CardBody>
          <CardFooter bgColor="white">
            <Text>Comfort Handy Craft</Text>
          </CardFooter>
        </Card>
        <Card bgColor="blackAlpha.100">
          <CardBody ml="10" mr="10" mt="5">
            <Image
              src="/assets/img/imagecard.png"
              alt="slide1"
              width="223"
              height="229"
            />
          </CardBody>
          <CardFooter bgColor="white">
            <Text>Comfort Handy Craft</Text>
          </CardFooter>
        </Card>
        <Card bgColor="blackAlpha.100">
          <CardBody ml="10" mr="10" mt="5">
            <Image
              src="/assets/img/imagecard.png"
              alt="slide1"
              width="223"
              height="229"
            />
          </CardBody>
          <CardFooter bgColor="white">
            <Text>Comfort Handy Craft</Text>
          </CardFooter>
        </Card>
      </Grid>
    </Box>
  );
}
