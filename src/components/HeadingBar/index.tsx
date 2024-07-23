import { Box, Flex, Spacer, Center, Text } from "@chakra-ui/react";

import { FaPhoneVolume, FaAngleDown } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

export default function HeadingBar() {
  return (
    <Box bgColor="#7F00FF" color="white">
      <Flex width="1217px" margin="auto" justifyContent={"space-between"}>
        <Flex p="4" gap={8}>
          <Center gap={2}>
            <MdMailOutline />
            <Text> mhhasanul@gmail.com</Text>
          </Center>
          <Center gap={2}>
            <FaPhoneVolume />
            (12345)67890
          </Center>
        </Flex>
        <Spacer />
        <Flex p="4" gap={3} gridRowGap={3}>
          <Center>
            English
            <FaAngleDown />
          </Center>
          <Center>
            USD
            <FaAngleDown />
          </Center>
          <Center>
            Login
            <IoPerson />
          </Center>
          <Center>
            Login
            <CiHeart size={24} />
          </Center>
          <Center ml={5}>
            <CiShoppingCart size={24} />
          </Center>
        </Flex>
      </Flex>
    </Box>
  );
}
