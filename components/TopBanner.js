import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const TopBanner = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View className="p-2 rounded-2xl shadow-2xl mt-3 mx-3 flex-row items-center justify-between bg-white">
        <View>
          <Text className="text-lg mx-2">Best boAt</Text>
          <Text className="text-3xl font-bold mx-2">Wireless</Text>
          <Text
            className="text-4xl font-bold mx-2 mt-1"
            style={{ color: "#dde0e0" }}
          >
            HEAD PHONE
          </Text>
          <Pressable
            onPress={() => navigation.navigate("Cart")}
            style={{ backgroundColor: "#d2403d" }}
            className="mt-2 mx-2 p-2 items-center rounded-xl mb-2"
          >
            <Text className="text-lg font-bold text-white">Shop now</Text>
          </Pressable>
        </View>
        <View className="z-50">
          <Image
            source={require("../images/Banner.webp")}
            style={{ height: 150, width: 150 }}
          />
        </View>
      </View>
    </View>
  );
};

export default TopBanner;
