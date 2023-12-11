import { View, Text, Image, Pressable, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import { Ionicons } from "@expo/vector-icons";
import MenuCard from "../components/MenuCard";
import CartIcon from "../components/CartIcon";
import { useDispatch } from "react-redux";
import { setProduct } from "../redux/ProductSlice";

const Product = () => {
  const {
    params: { name, id, image, desc, product },
  } = useRoute();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setProduct({
        name,
        id,
        image,
        desc,
        product,
      })
    );
  }, []);

  const navigation = useNavigation();
  return (
    <>
      <CartIcon />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View>
          <View>
            <View className="items-center">
              <Image
                source={{ uri: urlFor(image).url() }}
                className="h-80 w-80"
              />
            </View>
            <View className="absolute mt-10 mx-5">
              <Pressable
                onPress={() => navigation.goBack()}
                className=" p-2 border rounded-full"
              >
                <Ionicons name="arrow-back" size={30} color="black" />
              </Pressable>
            </View>
          </View>
          <View>
            <Text className="text-3xl font-bold text-center text-gray-900">
              {name}
            </Text>
            <Text style={{ fontSize: 16 }} className="mx-2 mt-2 ">
              {desc}
            </Text>
          </View>
          <Text className="text-2xl font-bold text-gray-900 mt-5 mx-2">
            Menu
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 10 }}
          >
            {product.map((item, index) => {
              return (
                <View key={index}>
                  <MenuCard
                    name={item.name}
                    desc={item.description}
                    image={item.image}
                    id={item._id}
                    price={item.price}
                  />
                </View>
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
};

export default Product;
