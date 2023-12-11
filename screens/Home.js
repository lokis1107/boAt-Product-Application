import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBanner from "../components/TopBanner";
import FeaturedProduct from "../components/FeaturedProduct";
import client from "../sanity";

const Home = () => {
  const [featuredCategory, setFeaturedCategory] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `    *[_type == "featured"]{
          ...,
          category[]->{
            ...product[]->
          }
        }`
      )
      .then((data) => setFeaturedCategory(data));
  }, []);

  return (
    <SafeAreaView>
      <TopBanner />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 200 }}
      >
        {featuredCategory?.map((item, index) => {
          return (
            <FeaturedProduct
              key={index}
              title={item.name}
              desc={item.description}
              id={item._id}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
