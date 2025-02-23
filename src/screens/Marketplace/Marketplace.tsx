import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Marketplace = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Marketplace Screen</Text>
    </View>
  );
};

export default Marketplace;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});