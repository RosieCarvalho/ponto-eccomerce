import { Box, Card, CardBody, Center, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Offers() {
  const offers = [
    {
      url: "/assets/img/offers/free-delivery.svg",
    },
    {
      url: "/assets/img/offers/cashback.svg",
    },
    {
      url: "/assets/img/offers/premium-quality.svg",
    },
    {
      url: "/assets/img/offers/24-hours-support.svg",
    },
  ];
  return (
    <Flex gap={5}>
      {offers.map((item, index) => {
        return (
          <Card key={item.url}>
            <CardBody ml="10" mr="10" mt="5">
              <Center flexDir="column" gap={2}>
                <Image src={item.url} alt="slide1" width="65" height="65" />
                <Text fontSize="2xl" fontWeight="700" color="blue.700">
                  24/7 Support
                </Text>
                <Text
                  fontSize="lg"
                  fontWeight="700"
                  color="blackAlpha.400"
                  maxW="200"
                  textAlign="center"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  purus gravida.
                </Text>
              </Center>
            </CardBody>
          </Card>
        );
      })}
    </Flex>
  );
}
