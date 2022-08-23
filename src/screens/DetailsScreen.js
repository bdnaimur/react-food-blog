import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";

export default function DetailsScreen() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <SafeAreaView
      style={{
        marginHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 60,
        }}
      >
        <View
          style={{
            height: 40,
            width: 40,
            backgroundColor: "#FFF",
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "#CDCDCD",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="left" size={15} color="black" />
        </View>
        <View
          style={{
            height: 40,
            width: 40,
            backgroundColor: "#F5CA48",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Foundation name="star" size={15} color="#fff" />
        </View>
      </View>
      <Button onPress={showDatepicker} title="Show date picker!" />
      <Text>selected: {date.toLocaleString()}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
