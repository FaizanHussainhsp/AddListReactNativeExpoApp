import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalItems from "./components/GoalItems";
import InputGoals from "./components/InputGoals";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modelIsVisible, setModalIsVisible] = useState(false);
  const addGoalHandler = (enteredGoalText) => {
    console.log("==================", enteredGoalText);
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, key: Math.random() },
    ]);
  };

  deleteGoalHandler = (data) => {
    const filterData = courseGoals.filter((goal) => goal.key !== data);
    setCourseGoals(filterData);
  };

  const openModalHandler = () => {
    setModalIsVisible(true);
  };
  const closeModalHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <>
      <View style={styles.appContainer}>
        <Button title="Add Goal" onPress={openModalHandler} color="#3248" />
        {modelIsVisible && (
          <InputGoals
            addGoalHandler={addGoalHandler}
            closeModalHandler={closeModalHandler}
            modelIsVisible={modelIsVisible}
          />
        )}

        <View style={styles.goalContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItems
                  item={itemData.item.text}
                  deleteGoalHandler={deleteGoalHandler}
                  id={itemData.item.key}
                />
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,

    borderBottomWidth: 2,
    borderBottomColor: "#cccccc",
    flex: 1,
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },

  goalContainer: {
    flex: 3,
  },
  goalItem: {
    padding: 8,
    margin: 8,
    backgroundColor: "#129392",
    borderRadius: 10,
  },
  goalText: {
    color: "#fff",
  },
});
