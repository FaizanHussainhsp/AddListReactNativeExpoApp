import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

function GoalItems({ item, deleteGoalHandler, id }) {
  console.log(id);
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() => deleteGoalHandler(id)}
        style={({ pressed }) => pressed && styles.rippleEffect}>
        <Text style={styles.goalText}>{item}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItems;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: "#129392",
    borderRadius: 10,
  },
  rippleEffect: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: "#fff",
  },
});
