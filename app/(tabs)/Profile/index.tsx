import { Text, View } from '@/components/Themed';
import { useUserStore } from '@/store/userStrore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function index() {
  const router = useRouter();
  const logout = useUserStore((state) => state.logout);
  const handleLogOut = async () => {
    logout();
    router.replace('/(auth)/Login');
    AsyncStorage.clear();
  };

  const userProfile = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    address: '123 Elm Street, Springfield, USA',
    age: 30,
    gender: 'Male',
    image: 'https://via.placeholder.com/150',
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: userProfile.image }} style={styles.profileImage} />
      <Text style={styles.title}>{userProfile.name}</Text>
      <Text style={styles.detail}>Email: {userProfile.email}</Text>
      <Text style={styles.detail}>Phone: {userProfile.phone}</Text>
      <Text style={styles.detail}>Address: {userProfile.address}</Text>
      <Text style={styles.detail}>Age: {userProfile.age}</Text>
      <Text style={styles.detail}>Gender: {userProfile.gender}</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogOut}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#007BFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  detail: {
    fontSize: 16,
    marginVertical: 4,
    color: '#555',
  },
  logoutButton: {
    marginTop: 24,
    backgroundColor: '#FF5733',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
