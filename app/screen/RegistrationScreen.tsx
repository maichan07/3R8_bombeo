import React, { useState, createContext, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';

// Define the UserContext with the correct typing
const UserContext = createContext<{
  contextUsername: string;
  setContextUsername: React.Dispatch<React.SetStateAction<string>>;
}>({
  contextUsername: '',
  setContextUsername: () => {}, // Default function
});

export default function RegistrationScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [contextUsername, setContextUsername] = useState(''); // Local state for context

  const router = useRouter();

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      Alert.alert('Registration failed', 'Passwords do not match');
      return;
    }

    if (email && password && fullName && username && phoneNumber) {
      // Update local context state
      setContextUsername(username);

      // Show success message with the username from local context
      Alert.alert('Registration successful', `Welcome, ${contextUsername || username}!`);

      // Navigate to the dashboard
      router.push('/screen/dash');
    } else {
      Alert.alert('Registration failed', 'Please fill in all required fields');
    }
  };

  return (
    <UserContext.Provider value={{ contextUsername, setContextUsername }}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>

        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
        />

        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <Button title="Sign Up" onPress={handleSignUp} color="#1E88E5" />
      </View>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3F2FD', // Soft blue background
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E88E5', // Soft blue title text
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#BBDEFB', // Light blue border
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF', // White input background
    width: '100%',
  },
});
