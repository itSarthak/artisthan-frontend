import { useUserStore } from '@/store/userStrore';
import { artisans } from '@/data/productData';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ArtisianDetailsPage = () => {
  const productId = useUserStore((state) => state.productId);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: artisans[productId].image }} style={styles.artisanImage} />
      <Text style={styles.artisanName}>{artisans[productId].name}</Text>
      <Text style={styles.artisanDesc}>{artisans[productId].desc}</Text>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailLabel}>Artisan ID:</Text>
        <Text style={styles.detailValue}>{artisans[productId].artisan_id}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailLabel}>Craft:</Text>
        <Text style={styles.detailValue}>{artisans[productId].craft}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailLabel}>Mobile:</Text>
        <Text style={styles.detailValue}>{artisans[productId].mobile}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailLabel}>Gender:</Text>
        <Text style={styles.detailValue}>{artisans[productId].gender}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailLabel}>Address:</Text>
        <Text style={styles.detailValue}>{artisans[productId].address}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailLabel}>State:</Text>
        <Text style={styles.detailValue}>{artisans[productId].state}</Text>
      </View>

      <TouchableOpacity style={styles.contactButton}>
        <Text style={styles.contactButtonText}>Contact Artisan</Text>
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
  artisanImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  artisanName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#333',
  },
  artisanDesc: {
    fontSize: 16,
    color: '#555',
    marginTop: 8,
    lineHeight: 22,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  detailValue: {
    fontSize: 16,
    color: '#666',
  },
  contactButton: {
    marginTop: 20,
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ArtisianDetailsPage;
