import React, { useState } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

type Props = {
  label: string;
  value?: Date;
  onChange: (date: Date) => void;
  error?: string;
};

const DatePickerInput = ({ label, value, onChange, error }: Props) => {
  const [show, setShow] = useState(false);

  const handleChange = (_event: any, selectedDate?: Date) => {
    setShow(false);

    if (selectedDate) {
      onChange(selectedDate);
    }
  };

  const formattedDate = value
    ? value.toISOString().split("T")[0]
    : "Select date";

  return (
    <View style={{ marginBottom: 16 }}>
      <Text style={{ marginBottom: 6 }}>{label}</Text>

      <TouchableOpacity
        onPress={() => setShow(true)}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 14,
          borderRadius: 8,
        }}
      >
        <Text>{formattedDate}</Text>
      </TouchableOpacity>

      {error && <Text style={{ color: "red", marginTop: 4 }}>{error}</Text>}

      {show && (
        <DateTimePicker
          value={value || new Date()}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "compact"}
          onChange={handleChange}
          maximumDate={new Date()}
        />
      )}
    </View>
  );
};

export default DatePickerInput;
