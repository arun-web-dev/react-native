import React from "react";

import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: "Age 20" },
    { name: "Friend #2", age: "Age 20" },
    { name: "Friend #3", age: "Age 20" },
    { name: "Friend #4", age: "Age 20" },
    { name: "Friend #5", age: "Age 20" },
    { name: "Friend #6", age: "Age 20" },
    { name: "Friend #7", age: "Age 20" },
    { name: "Friend #8", age: "Age 20" },
    { name: "Friend #9", age: "Age 20" },
  ];
  return (
    <FlatList
      data={friends}
      keyExtractor={(friend) => friend.name}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
