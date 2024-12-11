import { TrendingProducts } from '@/data/productData';
import { useUserStore } from '@/store/userStrore';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const TrendingProductDetails = () => {
  const productId = useUserStore((state) => state.productId);
  console.log('Product :', TrendingProducts[productId]);

  const handleAddToCart = () => {
    console.log(`${TrendingProducts[productId].name} added to cart`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: TrendingProducts[productId].image }}
        style={styles.productImage}
      />
      <Text style={styles.productName}>{TrendingProducts[productId].name}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.productPrice}>
          {TrendingProducts[productId].price}
        </Text>
        <Text style={styles.oldPrice}>
          {TrendingProducts[productId].oldPrice}
        </Text>
      </View>
      <Text style={styles.productDesc}>{TrendingProducts[productId].desc}</Text>
      <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#333',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    marginRight: 8,
  },
  oldPrice: {
    fontSize: 16,
    color: 'red',
    textDecorationLine: 'line-through',
  },
  productDesc: {
    fontSize: 16,
    color: '#555',
    marginTop: 16,
    lineHeight: 22,
  },
  addToCartButton: {
    marginTop: 20,
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TrendingProductDetails;
