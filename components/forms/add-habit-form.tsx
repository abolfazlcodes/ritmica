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
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HabitFormData, habitSchema } from "@/schemas/habit.schema";

const AddHabitForm = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<HabitFormData>({
    resolver: zodResolver(habitSchema),
    defaultValues: {
      name: "",
      description: "",
      emoji: "",
      color: "",
    },
  });

  const [search, setSearch] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);

  // BottomSheetModal ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // present modal
  const openSheet = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const onSubmit = (data: HabitFormData) => {
    console.log("Habit created:", data);
  };

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
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <>
              <FloatingLabelInput
                label="Habit Name"
                value={value}
                onChangeText={onChange}
              />
              {errors.name && (
                <Text style={{ color: "red" }}>{errors.name.message}</Text>
              )}
            </>
          )}
        />
        <Controller
          control={control}
          name="description"
          render={({ field: { onChange, value } }) => (
            <FloatingLabelInput
              label="Description"
              value={value}
              onChangeText={onChange}
              multiline
              numberOfLines={5}
            />
          )}
        />

        {/* Colors */}
        <Controller
          control={control}
          name="color"
          render={({ field: { onChange, value } }) => (
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 8,
                marginTop: 16,
              }}
            >
              {colorsData.map((color, i) => (
                <Pressable
                  key={i}
                  onPress={() => {
                    onChange(color);
                  }}
                >
                  <View style={{ padding: 6 }}>
                    <View
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: 4,
                        backgroundColor: color,
                        justifyContent: "center",
                        alignItems: "center",
                        ...(value === color
                          ? {
                              // Shadow for selected color
                              shadowColor: color,
                              shadowOpacity: 0.3,
                              shadowOffset: { width: 2, height: 2 },
                              shadowRadius: 8,
                              elevation: 6,
                            }
                          : {}),
                      }}
                    >
                      {value === color && (
                        <IconCheckmark style={{ width: 12, height: 12 }} />
                      )}
                    </View>
                  </View>
                </Pressable>
              ))}
              {errors.color && (
                <Text style={{ color: "red", marginTop: 4 }}>
                  {errors.color.message}
                </Text>
              )}
            </View>
          )}
        />

        {/* Submit Button */}
        <Button
          onPress={handleSubmit(onSubmit)} // ✅ attach handleSubmit directly
          title="submit_btn"
          wrapperClassName="mt-20"
        >
          <Text className="text-white font-publicsans font-bold text-lg">
            Create
          </Text>
        </Button>

        <HabitEmojiModal
          search={search}
          setSearch={setSearch}
          setValue={setValue}
          setSelectedEmoji={setSelectedEmoji}
          bottomSheetModalRef={bottomSheetModalRef}
        />
      </View>
    </BottomSheetModalProvider>
  );
};

export default AddHabitForm;
