import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const ProductList = ({ name, desc, image, product, id }) => {
  const navigation = useNavigation();
  return (
    <View className="mt-3 m-3">
      <Pressable
        onPress={() =>
          navigation.navigate("Product", { name, desc, product, image, id })
        }
      >
        <View
          className="p-4 bg-white rounded-t-3xl"
          style={{ flexWrap: "nowrap" }}
        >
          <Image
            source={{ uri: urlFor(image).url() }}
            className=" h-52  w-52 rounded-xl"
          />
          <View className="bg-white shadow-2xl">
            <Text className="text-lg font-bold text-gray-900 mt-4">
              {name.substr(0, 20) + "..."}
            </Text>
            <Text>{desc.substr(0, 30) + "..."}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default ProductList;
