import React, { useState, useMemo, useRef, useCallback } from "react";
import { Pressable, View, Text, FlatList, TextInput } from "react-native";
import FloatingLabelInput from "@/components/inputs/FloatingInput";
import { IconImagePlus } from "@/constants/icons";
import data from "emoji-datasource";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

const colorsData = [
  "#F04343",
  "#F97216",
  "#F49E0D",
  "#E9B308",
  "#ffef08",
  "#85CC16",
  "#24C55E",
  "#13B8A7",
  "#07B6D5",
  "#0EA6E9",
  "#3B82F6",
  "#6465F1",
  "#8B5CF6",
  "#A755F8",
  "#D04CE5",
  "#a008ff",
  "#EB4899",
  "#F43F5E",
  "#65758C",
  "#737373",
  "#605349",
  "#564444",
  "#3A3A3A",
  "#0C0C0C",
];

const AddHabitForm = () => {
  const [search, setSearch] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);

  // BottomSheetModal ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // present modal
  const openSheet = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  // emojis filtered
  const emojis = useMemo(() => {
    const query = search.toLowerCase();
    return data
      .filter((e: any) => !e?.skin_variations)
      .filter((e: any) =>
        e?.short_names?.some((name: string) => name.includes(query)),
      )
      .slice(0, 300);
  }, [search]);

  return (
    <BottomSheetModalProvider>
      <View style={{ paddingHorizontal: 20, paddingTop: 44 }}>
        {/* Plus Button */}
        <View style={{ alignItems: "center", marginBottom: 20 }}>
          <Pressable onPress={openSheet}>
            <View
              style={{
                width: 64,
                height: 64,
                borderRadius: 16,
                backgroundColor: "#919EAB14",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {selectedEmoji ? (
                <Text style={{ fontSize: 28 }}>{selectedEmoji}</Text>
              ) : (
                <IconImagePlus />
              )}
            </View>
          </Pressable>
        </View>

        {/* Inputs */}
        <FloatingLabelInput label="Habit Name" />
        <FloatingLabelInput label="Description" multiline numberOfLines={5} />

        {/* Colors */}
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 8,
            marginTop: 16,
          }}
        >
          {colorsData.map((color, i) => (
            <Pressable key={i}>
              <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 4,
                  backgroundColor: color,
                }}
              />
            </Pressable>
          ))}
        </View>

        {/* BottomSheetModal */}
        <BottomSheetModal
          ref={bottomSheetModalRef}
          snapPoints={["70%"]}
          enablePanDownToClose
        >
          <BottomSheetView style={{ flex: 1, padding: 16 }}>
            <TextInput
              placeholder="Search emoji..."
              value={search}
              onChangeText={setSearch}
              style={{
                backgroundColor: "#f2f2f2",
                borderRadius: 12,
                paddingHorizontal: 12,
                paddingVertical: 10,
                marginBottom: 16,
              }}
            />

            <FlatList
              data={emojis}
              keyExtractor={(item) => item.unified}
              numColumns={9}
              keyboardShouldPersistTaps="handled"
              renderItem={({ item }) => {
                const emoji = String.fromCodePoint(
                  ...item.unified
                    .split("-")
                    .map((u: string) => parseInt(u, 16)),
                );
                return (
                  <Pressable
                    onPress={() => {
                      setSelectedEmoji(emoji);
                      bottomSheetModalRef.current?.dismiss();
                    }}
                    style={{
                      width: 40,
                      height: 40,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontSize: 22 }}>{emoji}</Text>
                  </Pressable>
                );
              }}
            />
          </BottomSheetView>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

export default AddHabitForm;
