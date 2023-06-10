import React from "react";
import { VStack, HStack, Icon, Pressable } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useState } from "react";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import Title from "../../components/molecules/Title";
import Text from "../../components/atoms/Text";

const Profile = (props) => {
  const { navigation } = props;
  const [data, setData] = useState({});

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("profile");
      const val = jsonValue != null ? JSON.parse(jsonValue) : null;
      setData(val);
    } catch (e) {
      // error reading value
    }
  };

  removeValue = async () => {
    try {
      await AsyncStorage.removeItem("loginCred");
      navigation.navigate("Login");
    } catch (e) {
      // remove error
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <VStack flex={1} p={4} space={6}>
      <Title>Profile</Title>
      <Text fontSize={"xl"} fontWeight={"bold"}>{`Welcome ${
        (data && data["username"]) || ""
      }`}</Text>
      <Pressable
        onPress={() => {
          removeValue();
        }}
      >
        <HStack alignItems={"center"} space={2}>
          <Icon as={Ionicons} name="trash" color={"red.400"} size={6} />
          <Text fontSize={"xl"} fontWeight={"bold"} color={"red.400"}>
            Delete Account
          </Text>
        </HStack>
      </Pressable>
    </VStack>
  );
};

export default Profile;
