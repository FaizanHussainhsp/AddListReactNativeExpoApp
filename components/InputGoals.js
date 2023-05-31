import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image,
} from "react-native";

function InputGoals({ addGoalHandler, closeModalHandler, modelIsVisible }) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const addInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addHandler = () => {
    addGoalHandler(enteredGoalText);
    setEnteredGoalText("");
    closeModalHandler();
  };

  return (
    <Modal visible={modelIsVisible} animationType="slide" transparent={true}>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/goal.png")} />
        <TextInput
          style={styles.textInput}
          onChangeText={addInputHandler}
          placeholder="Enter your Goals"
          value={enteredGoalText}
        />
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button title="Cancel" onPress={closeModalHandler} />
          </View>
          <View style={styles.btn}>
            <Button title="Add Goal" onPress={addHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default InputGoals;
const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#342423",
    paddingHorizontal: 16,
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#cccccc",
    backgroundColor: "#348435",
    borderRadius: 10,
    width: "100%",
    marginRight: 8,
    padding: 8,
    color: "white",
  },

  btnContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  btn: {
    marginHorizontal: 16,
  },

  image: {
    height: 100,
    width: 100,
    marginBottom: 10,
  },
});
