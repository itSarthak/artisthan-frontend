import { useUserStore } from "@/store/userStrore";
import { useRouter } from "expo-router";
import { navigate } from "expo-router/build/global-state/routing";
import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ScrollView,
} from "react-native";

const Registration = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const login = useUserStore((state) => state.login);
  const userRegion = useUserStore((state) => state.userRegion);
  const userReligion = useUserStore((state) => state.userReligion);
  const setUserRegion = useUserStore((state) => state.setUserRegion);
  const setUserReligion = useUserStore((state) => state.setUserReligion);

  const handleRegister = () => {
    // const userRegion = useUserStore((state) => state.userRegion);
    // const userReligion = useUserStore((state) => state.userReligion);
    if (!name || !username || !email || !phone || !password) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }

    const userData = { name, username, email, phone, password };
    console.log('User Registered:', userData);

    Alert.alert('Success', 'Registration completed!');

    login();
    // Navigate to login or home screen
    router.replace("/SelectInterests");
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Create an Account</Text>
        <Text style={styles.subtitle}>Fill in your details to register</Text>

        <TextInput
          style={styles.input}
          placeholder='Full Name'
          placeholderTextColor='#aaa'
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder='Username'
          placeholderTextColor='#aaa'
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder='Email Address'
          placeholderTextColor='#aaa'
          keyboardType='email-address'
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder='Phone Number'
          placeholderTextColor='#aaa'
          keyboardType='phone-pad'
          value={phone}
          onChangeText={setPhone}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          placeholderTextColor='#aaa'
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Text style={styles.dropdownLabel}>Part of India</Text>
        <View style={styles.dropdownContainer}>
          <Picker
            selectedValue={userRegion}
            onValueChange={(value) => setUserRegion(value)}
            style={styles.picker}
          >
            <Picker.Item label="North" value="north" />
            <Picker.Item label="South" value="south" />
            <Picker.Item label="East" value="east" />
            <Picker.Item label="West" value="west" />
          </Picker>
        </View>

        <Text style={styles.dropdownLabel}>Religion</Text>
        <View style={styles.dropdownContainer}>
          <Picker
            selectedValue={userReligion}
            onValueChange={(value) => setUserReligion(value)}
            style={styles.picker}
          >
            <Picker.Item label="Hindu" value="hindu" />
            <Picker.Item label="Muslim" value="muslim" />
            <Picker.Item label="Christian" value="christian" />
            <Picker.Item label="Sikh" value="sikh" />
            <Picker.Item label="Other" value="other" />
          </Picker>
        </View>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegister}
        >
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Alert.alert('Navigating to login screen...')}
        >
          <Text style={styles.loginLink}>Already have an account? Log In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff1c2",
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dropdownLabel: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
  },
  dropdownContainer: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  picker: {
    height: 50,
    width: "100%",
  },
  registerButton: {
    backgroundColor: '#E60B15',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginLink: {
    fontSize: 16,
    color: '#0066cc',
    textAlign: 'center',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});

export default Registration;
