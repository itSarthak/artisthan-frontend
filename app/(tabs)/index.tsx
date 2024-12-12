import RecommendedProducts from "@/components/RecommendedProducts";
import TrendingProducts from "@/components/TrendingProducts";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const HomePage = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Sticky Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <AntDesign name="menu-fold" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.brandName}>ARTISTHAN</Text>
        <Image
          source={{ uri: "https://via.placeholder.com/40" }} // Replace with a profile image
          style={styles.profileImage}
        />
      </View>

      {/* Scrollable Content */}
      <ScrollView style={styles.scrollableContent}>
        {/* Search Bar */}
        <View style={styles.searchBar}>
          <TouchableOpacity>
            <FontAwesome name="search" size={20} color="gray" />
          </TouchableOpacity>
          <TextInput
            placeholder="Search any Product.."
            style={styles.searchInput}
          />
          <TouchableOpacity onPress={() => router.replace("/Search/ScanNFind")}>
            <FontAwesome name="camera" size={20} color="gray" />
          </TouchableOpacity>
        </View>

        {/* Featured Products */}
        <Text style={styles.sectionTitle}>Featured Products</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.featuredProducts}
        >
          {[
            {
              name: "Handicrafts",
              image:
                "https://tse3.mm.bing.net/th?id=OIP.Q1ZqCSsxzRiboTVZu10p5wHaE8&pid=Api&P=0&h=180", // Example URL
            },
            {
              name: "Jewellery",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/d/da/Gold-jewellery-jewel-henry-designs-terabass.jpg", // Example URL
            },
            {
              name: "clothings",
              image:
                "https://tse4.mm.bing.net/th?id=OIP.HRwXNobzmx8BvEDehfsVNwHaE8&pid=Api&P=0&h=180", // Example URL
            },
            {
              name: "Paintings",
              image:
                "http://1.bp.blogspot.com/-tQzkfgKTuc8/Ua0czIExNtI/AAAAAAAAAoc/bfNmSUN9NC4/s1600/000_3666.JPG", // Example URL
            },
            {
              name: "spritual offering",
              image:
                "https://tse1.mm.bing.net/th?id=OIP.VXSKb-iK-EC4W98Fxg6L2AHaEJ&pid=Api&P=0&h=180", // Example URL
            },
            {
              name: "wedding essentials",
              image:
                "https://c8.alamy.com/comp/JRRG1M/wedding-day-essentials-JRRG1M.jpg", // Example URL
            },
          ].map((item, index) => (
            <View key={index} style={styles.categoryItem}>
              <Image
                source={{ uri: item.image }} // Replace with category image
                style={styles.categoryImage}
              />
              <Text style={styles.categoryText}>{item.name}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Banner */}
        <View style={styles.banner}>
          <Image
            source={{
              uri: "https://s7d1.scene7.com/is/image/canon/5-home-decor-items-you-didnt-know-you-could-make-with-paper?wid=1000&hei=667&fmt=webp-alpha",
            }} // Replace with banner image
            style={styles.bannerImage}
          />
          <Text style={styles.bannerText}>50% OFF</Text>
          <Text style={styles.bannerSubText}>On all Home Decor Products</Text>
          <TouchableOpacity style={styles.shopNowButton}>
            <Text style={styles.shopNowText}>Shop Now</Text>
          </TouchableOpacity>
        </View>

        {/* Recommended Products */}
        <RecommendedProducts />

        {/* Trending Products */}
        <TrendingProducts />

        {/* Festival Big Sale */}
        <View style={styles.saleBanner}>
          <Text style={styles.saleText}>Festival Big Sale</Text>
          <Text style={styles.saleSubText}>Upto 50% OFF</Text>
          <TouchableOpacity style={styles.shopNowButton}>
            <Text style={styles.shopNowText}>Shop Now</Text>
          </TouchableOpacity>
        </View>

        {/* New Arrivals */}
        <View style={styles.newArrivals}>
          <Text style={styles.newArrivalsTitle}>New Arrivals</Text>
          <Text style={styles.newArrivalsDesc}>
            Let's dive into the mood of Festivities.
          </Text>
        </View>

        {/* Hot Deals */}
        <View style={styles.hotDeals}>
          <Image
            source={{ uri: "https://via.placeholder.com/300x150" }} // Replace with Hot Deals Image
            style={styles.hotDealsImage}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 2,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FEEFB3",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    zIndex: 1, // Ensures the header stays on top of other content
    elevation: 5, // Adds shadow on Android
  },
  brandName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#D23A42",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  scrollableContent: {
    marginTop: 70, // Adjusts for the height of the header
    paddingBottom: 10,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4F4F4",
    margin: 10,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    marginRight: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10,
    marginTop: 10,
  },
  featuredProducts: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginTop: 5,
    flexWrap: "wrap",
  },
  categoryItem: {
    alignItems: "center",
    marginRight: 10,
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  categoryText: {
    flexWrap: "wrap",
    flexDirection: "row",
    maxWidth: 66,
    marginTop: 5,
    fontSize: 12,
  },
  banner: {
    marginHorizontal: 10,
    marginTop: 10,
    alignItems: "center",
    backgroundColor: "#FFF5E3",
    padding: 10,
    borderRadius: 10,
  },
  bannerImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  bannerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#E63946",
    marginTop: 10,
  },
  bannerSubText: {
    color: "#666",
  },
  shopNowButton: {
    backgroundColor: "#E63946",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  shopNowText: {
    color: "#fff",
    fontWeight: "bold",
  },
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
  productImage: {
    width: 200,
    height: 100,
    borderRadius: 10,
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
  oldPrice: {
    color: "#999",
    textDecorationLine: "line-through",
    fontSize: 12,
  },
  trendingSection: {
    marginHorizontal: 10,
    marginTop: 20,
  },
  trendingHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  trendingTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  trendingDate: {
    fontSize: 12,
    color: "#888",
  },
  trendingProducts: {
    flexDirection: "row",
    marginTop: 10,
  },
  saleBanner: {
    marginHorizontal: 10,
    backgroundColor: "#FFF5E3",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  saleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#E63946",
  },
  saleSubText: {
    fontSize: 18,
    color: "#333",
    marginVertical: 10,
  },
  newArrivals: {
    marginHorizontal: 10,
    marginTop: 20,
  },
  newArrivalsTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  newArrivalsDesc: {
    fontSize: 14,
    color: "#666",
  },
  hotDeals: {
    marginHorizontal: 10,
    marginTop: 20,
  },
  hotDealsImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
});

export default HomePage;
