import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart, selectItemById } from "../redux/CartSlice";

const MenuCard = ({ name, id, desc, image, price }) => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addCart({ name, id, desc, image, price }));
  };

  const items = useSelector((state) => selectItemById(state, id));

  const removeToCart = () => {
    if (items.length > 0) {
      dispatch(removeCart({ id }));
    } else {
      setActive(!active);
    }
  };

  return (
    <View className="mt-3 mx-2 p-2 rounded-2xl shadow-2xl bg-white">
      <Pressable onPress={() => setActive(!active)}>
        <View>
          <View className="items-center">
            <Image
              source={{ uri: urlFor(image).url() }}
              className=" h-48 w-48"
            />
          </View>
          <View className="pb-2">
            <Text className="text-xl mx-1 font-bold text-gray-900">
              {name.substr(0, 20) + "..."}
            </Text>
            <Text style={{ fontSize: 16 }} className="mx-1">
              {desc.substr(0, 28) + "..."}
            </Text>
            <Text className="mt-1 mx-2 text-xl font-bold text-gray-900">
              ₹{price}
            </Text>
          </View>
        </View>
      </Pressable>
      {active && (
        <View>
          <View className="flex-row items-center space-x-6">
            <Pressable
              onPress={addToCart}
              className="p-2 border rounded-full mt-2"
            >
              <AntDesign name="plus" size={24} color="black" />
            </Pressable>
            <Text className="text-2xl mt-2 font-bold text-gray-900">
              {items.length}
            </Text>
            <Pressable
              onPress={removeToCart}
              className="p-2 border rounded-full mt-2"
            >
              <AntDesign name="minus" size={24} color="black" />
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
};

export default MenuCard;
