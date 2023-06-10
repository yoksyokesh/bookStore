import React, { useState, useEffect } from "react";
import { VStack, Button, HStack, Icon } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import Text from "../../components/atoms/Text";
import Input from "../../components/atoms/Input";
import Title from "../../components/molecules/Title";

const LoginSignup = (props) => {
  const { navigation } = props;
  const [signupMode, setSignupMode] = useState(false);
  const [loginCred, setLoginCred] = useState({});
  const [msg, setMsg] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("loginCred", jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("loginCred");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData().then((res) => {
      setLoginCred(res);
    });
  }, [signupMode]);

  const onSubmitLogin = (username, password) => {
    setMsg("");
    if (loginCred && !loginCred[username])
      setMsg("Either username/ password is incorrect");
    else if (loginCred && loginCred[username] === password) {
      navigation.navigate("BookStore");
      const jsonValue = JSON.stringify({ username: username });
      AsyncStorage.setItem("profile", jsonValue);
    } else if (loginCred && loginCred[username] !== password)
      setMsg("Incorrect Password!");
    else setMsg("User database is empty. Create new user.");
  };

  const onSubmitSignup = (username, password) => {
    setMsg("");
    if (!username || !password) {
      setMsg("Username/ Password cannot be empty!");
      return;
    }
    let obj = loginCred ?? {};
    obj[username] = password;
    storeData(obj).then(() => setMsg("Credentials stored successfully!"));
    navigation.navigate("BookStore");
  };

  return (
    <VStack
      flex={1}
      justifyContent="center"
      alignItems={"center"}
      space={6}
      p={5}
    >
      <Title>Welcome!</Title>
      <Text fontSize={"lg"} fontWeight="semibold">
        {signupMode ? "Create Account" : "Login"}
      </Text>
      <Input
        variant="outline"
        placeholder="Enter username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <Input
        type={passwordVisible ? "text" : "password"}
        variant="outline"
        placeholder="Enter password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        InputRightElement={
          <Icon
            as={Ionicons}
            name={passwordVisible ? "eye-off" : "eye"}
            size={5}
            mr={2}
            onPress={() => setPasswordVisible((prevState) => !prevState)}
          />
        }
      />
      <Button
        borderRadius={32}
        bgColor={"#6527f8"}
        onPress={() => {
          signupMode
            ? onSubmitSignup(username, password)
            : onSubmitLogin(username, password);
        }}
      >
        Proceed
      </Button>
      {!signupMode ? (
        <HStack space={2}>
          <Text>No account ?</Text>
          <Text
            color={"#6527f8"}
            fontWeight={"bold"}
            onPress={() => setSignupMode(true)}
          >
            Create Account
          </Text>
        </HStack>
      ) : (
        <Text
          color={"#6527f8"}
          fontWeight={"bold"}
          onPress={() => setSignupMode(false)}
        >
          Login
        </Text>
      )}
      {msg !== "" ? <Text color={"red.500"}>{msg}</Text> : <></>}
    </VStack>
  );
};

export default LoginSignup;
