import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import ProductList from "./ProductList";
import client from "../sanity";

const FeaturedProduct = ({ title, desc, id }) => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `    *[_type == "featured" && _id == $id]{
        ...,
        category[]->{
          ...,
          product[]->,
            type->{
              name
            }
        },
      }[0]`,
        { id }
      )
      .then((data) => setCategory(data?.category));
  }, []);

  return (
    <View className="mt-5 mx-2">
      <View>
        <View className="flex-row items-center justify-between mx-2">
          <Text className="text-2xl font-bold text-gray-900">{title}</Text>
          <AntDesign name="arrowright" size={24} color="black" />
        </View>
        <Text className=" mx-2" style={{ fontSize: 16 }}>
          {desc.substr(0, 100) + "..."}
        </Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {category?.map((item, index) => {
          return (
            <ProductList
              key={index}
              id={item._id}
              name={item.name}
              desc={item.description}
              image={item.image}
              product={item.product}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedProduct;
