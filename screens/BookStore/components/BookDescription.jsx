import React from "react";
import { VStack, Divider, Icon, HStack, Button } from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Title from "../../../components/molecules/Title";
import Text from "../../../components/atoms/Text";

const BookDescription = (props) => {
  const { route } = props;
  const { book } = route.params;

  return (
    <VStack space={4} flex={1} p={4}>
      <Title>Book Summary</Title>
      <HStack space={1} alignItems={"center"}>
        <Icon as={MaterialIcons} name="book" size={5} />
        <Text fontSize={"md"} fontWeight="semibold">{book.name}</Text>
      </HStack>
      <HStack space={1} alignItems={"center"}>
        <Icon as={Ionicons} name="person" size={5} />
        <Text fontSize={"md"}>{book.author}</Text>
      </HStack>
      <Divider bgColor={"gray.500"}></Divider>
      <Text fontSize={"md"}>{book.desc}</Text>
    </VStack>
  );
};

export default BookDescription;
