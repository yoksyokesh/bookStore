import React from "react";
import { NativeBaseProvider, Text, Box, Icon } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginSignup from "./screens/Login/LoginSignup";
import BookStore from "./screens/BookStore/BookStore";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import BookDescription from "./screens/BookStore/components/BookDescription";
import Profile from "./screens/Profile/Profile";

export default function App() {
  const Tab = createBottomTabNavigator();
  const MyTheme = {
    colors: {
      background: "black",
    },
  };

  return (
    <NativeBaseProvider>
      <Box safeArea flex={1} bgColor={"#000000"}>
        <NavigationContainer theme={MyTheme}>
          <Tab.Navigator
            initialRouteName="Login"
            backBehavior="history"
            screenOptions={() => ({
              headerShown: false,
              tabBarStyle: { backgroundColor: "#171717" },
              tabBarActiveTintColor: "#6527f8",
              tabBarInactiveTintColor: "#a1a1aa",
            })}
          >
            <Tab.Screen
              name="BookStore"
              component={BookStore}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <Icon
                      as={MaterialIcons}
                      name="book"
                      size={5}
                      color={focused ? "#6527f8" : "#a1a1aa"}
                    />
                  );
                },
                tabBarLabel: "Book Store",
              }}
            />
            <Tab.Screen
              name="Profile"
              component={Profile}
              options={{
                tabBarIcon: ({ focused }) => (
                  <Icon
                    as={Ionicons}
                    name="person"
                    size={5}
                    color={focused ? "#6527f8" : "#a1a1aa"}
                  />
                ),
                tabBarLabel: "Profile",
              }}
            />
            <Tab.Screen
              name="Login"
              component={LoginSignup}
              options={{
                tabBarButton: () => null,
                tabBarStyle: { display: "none" },
                unmountOnBlur: true,
              }}
            />
            <Tab.Screen
              name="BookDescription"
              component={BookDescription}
              options={{
                tabBarButton: () => null,
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </Box>
    </NativeBaseProvider>
  );
}
