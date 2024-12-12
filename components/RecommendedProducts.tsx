import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

import React from "react";
import { regionData } from "../data/RecommenderSystemData";
import { useUserStore } from "@/store/userStrore";
const RecommendedProducts = () => {
  const userRegion = useUserStore((state) => state.userRegion);

  return (
    <View style={styles.dealSection}>
      <View style={styles.dealHeader}>
        <Text style={styles.dealTitle}>Recommended Products</Text>

        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.dealProducts}
      >
        {regionData
          .filter((item) => item.region === userRegion)[0]
          .products.map((item, index) => (
            <View key={index} style={styles.productCard}>
              <Image
                source={{ uri: item.imageUrl }}
                style={styles.productImage}
              />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  dealSection: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  dealHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dealTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  timer: {
    color: "#E63946",
  },
  viewAll: {
    color: "#007BFF",
    fontWeight: "bold",
  },
  dealProducts: {
    flexDirection: "row",
    marginTop: 10,
  },
  productCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginRight: 10,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "center",
  },
  productPrice: {
    color: "#E63946",
    marginTop: 5,
  },
  productImage: {
    width: 200,
    height: 100,
    borderRadius: 10,
  },
});

export default RecommendedProducts;
