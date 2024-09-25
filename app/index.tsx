import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

const HomePage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>
                Join Now
            </Text>
            <Link href="/screen/RegistrationScreen" style={styles.link}>
                <Text style={styles.linkText}>Sign Up</Text>
            </Link>

            <View style={styles.separator} />

            <Text style={styles.subtitleText}>
                Already have an account?
            </Text>
            <Link href="/screen/LoginScreen" style={styles.link}>
                <Text style={styles.linkText}>Log In</Text>
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E3F2FD', // soft blue background
        padding: 20,
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1E88E5', // darker blue for the title
        marginBottom: 20,
    },
    subtitleText: {
        fontSize: 18,
        color: '#1E88E5', // same blue as the title
        marginTop: 20,
    },
    link: {
        padding: 10,
        backgroundColor: '#BBDEFB', // light blue background for links
        borderRadius: 5,
        marginTop: 10,
    },
    linkText: {
        color: '#0D47A1', // dark blue for link text
        fontSize: 16,
        fontWeight: 'bold',
    },
    separator: {
        height: 20,
    },
});

export default HomePage;
