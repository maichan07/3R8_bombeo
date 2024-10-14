import React, { useState, useEffect } from 'react'; 
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router'; 

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Error message state
  const router = useRouter(); 

  // Effect to handle login errors
  useEffect(() => {
    if (errorMessage) {
      // Show an alert for wrong credentials
      Alert.alert('Login Error', errorMessage);
      
      // Clean-up function to reset the error message when user tries again
      return () => setErrorMessage('');
    }
  }, [errorMessage]);

  const handleLogin = () => {
    if (username === '123' && password === '123') {
      Alert.alert('Login successful', `Welcome!`);

      // Navigate to dashboard
      router.push('/screen/dash');
      
      // Clean up the error message (if there was one) after successful login
      setErrorMessage('');
    } else {
      // Set the error message as a side effect for invalid credentials
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#A0C4FF"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#A0C4FF"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles.buttonContainer}>
        <Button title="Login" color="#4EA8DE" onPress={handleLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#E0F7FA', 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4EA8DE', 
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#A0C4FF', 
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#FFFFFF', 
    color: '#4EA8DE', 
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden', 
  },
});
