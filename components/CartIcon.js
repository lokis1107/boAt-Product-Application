import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectTotal } from "../redux/CartSlice";

const CartIcon = () => {
  const navigation = useNavigation();
  const items = useSelector((state) => state.cart.cart);
  const total = useSelector((state) =>
    state.cart.cart.reduce((total, item) => (total += item.price), 0)
  );
  return (
    <>
      {items.length > 0 ? (
        <View className="absolute ml-10 bottom-6 z-50">
          <Pressable
            onPress={() => navigation.navigate("Cart")}
            style={{ backgroundColor: "#7d7eec" }}
            className="p-2 rounded-xl flex-row w-80 items-center justify-between mx-4"
          >
            <View
              style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
              className="p-2 rounded-lg"
            >
              <Text className="text-xl font-bold text-white">
                {items.length}
              </Text>
            </View>
            <Text className="text-xl font-bold text-white">Cart Items</Text>
            <Text className="text-xl font-bold text-white">₹{total}</Text>
          </Pressable>
        </View>
      ) : null}
    </>
  );
};

export default CartIcon;
