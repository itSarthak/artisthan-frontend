import { useUserStore } from '@/store/userStrore';
import React from 'react';
import { Text, View } from 'react-native';

const ProductDetailPage = () => {
  const productId = useUserStore((state) => state.productId);
  return (
    <View>
      <Text>Product Detail Page</Text>
      <Text>Product ID: {productId}</Text>
    </View>
  );
};

export default ProductDetailPage;
