import { Box, Flex, Text, Container, Grid, GridItem } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex bgColor="red">
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <GridItem w="100%" h="10" bg="blue.500">
          <Text fontSize="4xl">Hekto</Text>
        </GridItem>
        <GridItem w="100%" h="10" bg="blue.500">
          <Text fontSize="4xl">Cataories</Text>
        </GridItem>
      </Grid>
    </Flex>
  );
}
