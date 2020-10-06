import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { ButtonGroup } from "react-native-elements";

const Buttons = ({ _onPress, current }) => {
  const buttons = ["Hôm Nay", "Tất Cả Các Ngày"];
  return (
    <View style={styles.groupBtn}>
      <ButtonGroup
        buttons={buttons}
        onPress={_onPress}
        selectedIndex={current}
        style={styles.btnGroup}
        containerStyle={{ height: 50 }}
      />
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  btnGroup: {
    borderRadius: 5,
  },
});
