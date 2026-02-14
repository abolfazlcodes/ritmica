import React, { useState, useRef, useCallback } from "react";
import { Pressable, View, Text } from "react-native";
import FloatingLabelInput from "@/components/inputs/FloatingInput";
import { IconImagePlus, IconCheckmark } from "@/constants/icons";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import Button from "@/components/ui/Button";
import HabitEmojiModal from "@/components/forms/HabitEmojiModal";
import { colorsData } from "@/constants/data/colors";

const AddHabitForm = () => {
  const [search, setSearch] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  // BottomSheetModal ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // present modal
  const openSheet = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

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
            <Pressable key={i} onPress={() => setSelectedColor(color)}>
              <View style={{ padding: 6 }}>
                <View
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 4,
                    backgroundColor: color,
                    justifyContent: "center",
                    alignItems: "center",
                    ...(selectedColor === color
                      ? {
                          // iOS shadow
                          shadowColor: color,
                          shadowOpacity: 0.5,
                          shadowOffset: { width: 2, height: 2 },
                          shadowRadius: 8,
                          // Android shadow
                          elevation: 6,
                        }
                      : {}),
                  }}
                >
                  {selectedColor === color && (
                    <IconCheckmark style={{ width: 12, height: 12 }} />
                  )}
                </View>
              </View>
            </Pressable>
          ))}
        </View>

        {/* Submit Button */}
        <Button
          title="submit_btn"
          wrapperClassName="mt-20"
          onPress={() => {
            console.log("clicked");
            // router.push("/(root)/home");
          }}
        >
          <Text className="text-white font-publicsans font-bold text-lg">
            Create
          </Text>
        </Button>

        <HabitEmojiModal
          search={search}
          setSearch={setSearch}
          setSelectedEmoji={setSelectedEmoji}
          bottomSheetModalRef={bottomSheetModalRef}
        />
      </View>
    </BottomSheetModalProvider>
  );
};

export default AddHabitForm;
