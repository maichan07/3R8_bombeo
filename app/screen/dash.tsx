import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://png.pngtree.com/png-clipart/20230610/ourlarge/pngtree-aesthetic-blue-notepad-for-journal-or-notes-png-image_7125652.png' }} 
        style={styles.logo} 
      />
      <Text style={styles.title}>Welcome to Your Notepad App</Text>
      <Text style={styles.subtitle}>Keep track of your thoughts, feelings, and ideas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA', // soft blue background
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00796B',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#004D40', 
    textAlign: 'center',
  },
});

export default WelcomeScreen;
