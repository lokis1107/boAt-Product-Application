import { View, Text, Pressable, Image, ScrollView } from "react-native";
import React, { useMemo, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectProduct } from "../redux/ProductSlice";
import { urlFor } from "../sanity";
import { Entypo } from "@expo/vector-icons";
import { removeCart } from "../redux/CartSlice";

const Cart = () => {
  const navigation = useNavigation();
  const items = useSelector((state) => state.cart.cart);
  const total = useSelector((state) =>
    state.cart.cart.reduce((total, item) => (total += item.price), 0)
  );
  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch;

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setCartItems(groupedItems);
  }, [items]);

  return (
    <View className="bg-white flex-1">
      <View className="flex-row items-center space-x-20 mt-10 mx-5">
        <Pressable
          onPress={() => navigation.goBack()}
          className=" p-2 border rounded-full"
        >
          <Ionicons name="arrow-back" size={30} color="black" />
        </Pressable>
        <Text className="text-3xl font-bold mt-2 text-gray-900">Your cart</Text>
      </View>
      {items.length > 0 ? (
        <View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 150 }}
          >
            {Object.entries(cartItems).map(([key, items]) => (
              <View
                className="flex-row items-center justify-between space-x-8 mt-3 p-2"
                key={key}
              >
                <View className="flex-row items-center space-x-3">
                  <Text className="text-lg font-bold">{items.length} x</Text>
                  <Image
                    source={{ uri: urlFor(items[0]?.image).url() }}
                    className="h-20 w-20 rounded-full"
                  />
                  <Text style={{ fontSize: 17 }} className="font-bold">
                    {items[0]?.name.substr(0, 20) + "..."}
                  </Text>
                </View>
                <View className="flex-row space-x-3 items-center">
                  <Text className="text-lg font-bold">₹{items[0]?.price}</Text>
                </View>
              </View>
            ))}
            <View className="p-2 flex border rounded-t-3xl -bottom-10">
              <Text className="text-2xl font-bold text-center">Your Order</Text>
              <View>
                <View className="flex-row items-center justify-between mx-4 mt-3">
                  <Text className="text-xl font-bold text-gray-900">
                    Sub Total
                  </Text>
                  <Text className="text-xl font-bold text-gray-900">
                    ₹{total}
                  </Text>
                </View>
                <View className="flex-row items-center justify-between mx-4 mt-3">
                  <Text className="text-xl font-bold text-gray-900">
                    Delivery Fee
                  </Text>
                  <Text className="text-xl font-bold text-gray-900">₹59</Text>
                </View>
                <View className="flex-row items-center justify-between mx-4 mt-3">
                  <Text className="text-xl font-bold text-gray-900">
                    Grand Total
                  </Text>
                  <Text className="text-xl font-bold text-gray-900">
                    ₹{total + 59}
                  </Text>
                </View>
                <Pressable
                  onPress={() => navigation.navigate("Loading")}
                  style={{ backgroundColor: "#7d7eec" }}
                  className="items-center p-2 rounded-xl mt-6 mx-10 mb-2"
                >
                  <Text className="text-xl font-bold text-white">
                    Place Order
                  </Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </View>
      ) : (
        <View className="flex-1 items-center -mt-48 justify-center">
          <Image
            source={require("../images/7612.jpg")}
            className=" h-80 w-80"
          />
          <Text className="text-center text-2xl font-bold text-gray-900">
            The cart is empty
          </Text>
        </View>
      )}
    </View>
  );
};

export default Cart;
