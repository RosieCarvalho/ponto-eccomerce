import {
  Box,
  Flex,
  Text,
  Container,
  Grid,
  GridItem,
  Center,
  Input,
  Button,
  Link,
} from "@chakra-ui/react";

export default function Footer() {
  const menuFooter = [
    {
      title: "Categories",
      itens: [
        {
          description: "Laptops & Computers",
          link: "",
        },
        {
          description: "Cameras & Photography",
          link: "",
        },
      ],
    },
    {
      title: "Customer Care",
      itens: [
        {
          description: "My Account",
          link: "",
        },
        {
          description: "Discount",
          link: "",
        },
      ],
    },
    {
      title: "Pages",
      itens: [
        {
          description: "Blog",
          link: "",
        },
        {
          description: "Browse the Shop",
          link: "",
        },
      ],
    },
  ];
  return (
    <Flex bgColor="purple.50" minH={532} mt={100}>
      <Center maxW="1050" margin="auto">
        <Grid templateColumns="3fr 2fr 2fr 2fr" gap={6}>
          <GridItem w="100%" h="10" gap={6}>
            <Text fontSize="3xl" fontWeight="900" color="black" mb={10}>
              Hekto
            </Text>
            <Flex p={0.5} bg="white" borderRadius={10}>
              <Input size="md" placeholder="Enter Email Address" bg="white" />
              <Button size="md" pr={10} pl={10} bg="pink.200">
                Sign Up
              </Button>
            </Flex>
          </GridItem>
          {menuFooter.map((item, index) => {
            return (
              <GridItem w="100%" h="10" key={item.title}>
                <Text fontSize="2xl" fontWeight="700" color="black" mb={8}>
                  {item.title}
                </Text>
                <Flex flexDirection="column" gap={2}>
                  {item.itens.map((item) => (
                    <Link
                      key={item.description}
                      fontSize="xl"
                      fontWeight="500"
                      color="purple.300"
                    >
                      {item.description}
                    </Link>
                  ))}
                </Flex>
              </GridItem>
            );
          })}
        </Grid>
      </Center>
    </Flex>
  );
}
