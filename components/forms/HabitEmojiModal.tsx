import { Pressable, Text, FlatList, TextInput } from "react-native";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { Dispatch, SetStateAction, useMemo } from "react";
import data from "emoji-datasource";

interface IHabitEmojiModalProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  setSelectedEmoji: Dispatch<SetStateAction<string | null>>;
  bottomSheetModalRef: React.RefObject<BottomSheetModal | null>;
  setValue: (field: "emoji", value: string) => void;
}

const HabitEmojiModal: React.FC<IHabitEmojiModalProps> = ({
  search,
  setSelectedEmoji,
  setSearch,
  bottomSheetModalRef,
  setValue,
}) => {
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
              ...item.unified.split("-").map((u: string) => parseInt(u, 16)),
            );
            return (
              <Pressable
                onPress={() => {
                  setSelectedEmoji(emoji); // for UI
                  setValue("emoji", emoji);
                  if (bottomSheetModalRef) {
                    bottomSheetModalRef?.current?.dismiss();
                  }
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
  );
};

export default HabitEmojiModal;
