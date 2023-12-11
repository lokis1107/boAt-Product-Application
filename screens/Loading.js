import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Loading = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 3000);
  }, []);

  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Image source={require("../images/delivery.gif")} className="h-80 w-80" />
      <Text className="text-lg font-bold mt-2">
        Your order is conform please wait!
      </Text>
    </View>
  );
};

export default Loading;
