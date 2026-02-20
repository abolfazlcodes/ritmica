import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  value?: string;
  onChange: (uri: string) => void;
};

const AvatarUploader = ({ value, onChange }: Props) => {
  const [loading, setLoading] = useState(false);

  const requestPermissions = async () => {
    const camera = await Camera.requestCameraPermissionsAsync();
    const library = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (camera.status !== "granted" || library.status !== "granted") {
      Alert.alert(
        "Permission required",
        "Camera and gallery access are required.",
      );
      return false;
    }

    return true;
  };

  const openCamera = async () => {
    const granted = await requestPermissions();
    if (!granted) return;

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      console.log(result, "camera take result");
      onChange(result.assets[0].uri);
    }
  };

  const openGallery = async () => {
    const granted = await requestPermissions();
    if (!granted) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      console.log(result, "gallery take result");
      onChange(result.assets[0].uri);
    }
  };

  const handlePress = () => {
    Alert.alert(
      "Upload Photo",
      "Choose an option",
      [
        { text: "Camera", onPress: openCamera },
        { text: "Gallery", onPress: openGallery },
        { text: "Cancel", style: "cancel" },
      ],
      { cancelable: true },
    );
  };

  return (
    <View style={{ alignItems: "center", marginBottom: 24 }}>
      <TouchableOpacity
        onPress={handlePress}
        style={{
          width: 120,
          height: 120,
          borderRadius: 60,
          backgroundColor: "#F2F2F2",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {value ? (
          <Image
            source={{ uri: value }}
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <>
            <Ionicons name="camera-outline" size={28} color="#777" />
            <Text style={{ marginTop: 6, color: "#777" }}>Upload photo</Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default AvatarUploader;
