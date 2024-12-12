import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { SeasonalData } from "@/data/SeasonalNeeds";

const TrendingProducts = () => {
  let month = new Date().getMonth() + 1;
  month = month % 12;
  const checkMonthName = (month: number) => {
    var monthName;

    if (month == 0) monthName = "January";
    else if (month == 1) monthName = "February";
    else if (month == 2) monthName = "March";
    else if (month == 3) monthName = "April";
    else if (month == 4) monthName = "May";
    else if (month == 5) monthName = "June";
    else if (month == 6) monthName = "July";
    else if (month == 7) monthName = "August";
    else if (month == 8) monthName = "September";
    else if (month == 9) monthName = "October";
    else if (month == 10) monthName = "November";
    else if (month == 11) monthName = "December";

    return monthName;
  };

  return (
    <View style={styles.trendingSection}>
      <View style={styles.trendingHeader}>
        <Text style={styles.trendingTitle}>Trending Products</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.trendingProducts}
      >
        {SeasonalData.filter(
          (item) => item.month === checkMonthName(month)
        )[0].products.map((item, index) => (
          <View key={index} style={styles.productCard}>
            <Image
              source={{ uri: item.imageUrl }}
              style={styles.productImage}
            />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>
              {item.price}{" "}
              <Text style={styles.oldPrice}>{`(${item.oldPrice} off)`}</Text>
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  trendingSection: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  trendingHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  trendingTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  viewAll: {
    color: "blue",
  },
  trendingProducts: {
    marginTop: 10,
  },
  productCard: {
    marginHorizontal: 5,
    width: 120,
  },
  productImage: {
    width: 120,
    height: 120,
    borderRadius: 5,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 14,
  },
  oldPrice: {
    textDecorationLine: "line-through",
    color: "red",
  },
});

export default TrendingProducts;
