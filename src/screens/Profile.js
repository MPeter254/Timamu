import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { AuthContext } from "../context/AuthContext";

const Profile = ({ navigation }) => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    Alert.alert("Success", "You are logged out!");
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {user?.email}</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#FF6F61",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
});

export default Profile;
