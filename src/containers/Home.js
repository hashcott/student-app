import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import AgendaSchedule from "../components/AgendaSchedule";
import ButtonGroup from "../components/ButtonGroup";

const dummy = require("../apis/dummy.json");

export default function Schedule() {
  const [current, setCurrent] = useState(0);
  const updateCurrent = (index) => {
    setCurrent(index);
  };

  if (current === 0) {
    return (
      <View style={styles.container}>
        <ButtonGroup _onPress={updateCurrent} current={current} />
        <Text>Ngayf hom nay</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <ButtonGroup _onPress={updateCurrent} current={current} />
      <AgendaSchedule />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 30 },
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
    height: 150,
    justifyContent: "space-evenly",
  },
  emptyDate: {
    height: 15,
    flex: 1,
    padding: 30,
    justifyContent: "center",
  },
  title: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  content: {
    paddingTop: 5,
  },
});
