import { Text, View } from "react-native";
import FloatingLabelInput from "@/components/inputs/FloatingInput";
import { Controller, useForm } from "react-hook-form";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProfileFormData, profileSchema } from "@/schemas/profile.schema";
import DatePickerInput from "@/components/inputs/DatePickerInput";
import Button from "@/components/ui/Button";
import AvatarUploader from "@/components/inputs/AvatarUploader";

const ProfileInfoForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      birth: undefined, // or new Date()
      avatar: undefined,
    },
  });

  const onSubmit = (data: ProfileFormData) => {
    console.log("Profile Updated:", data);
  };

  return (
    <View className="flex-1">
      <Controller
        control={control}
        name="avatar"
        render={({ field: { onChange, value } }) => (
          <AvatarUploader value={value} onChange={onChange} />
        )}
      />

      <Controller
        control={control}
        name="first_name"
        render={({ field: { onChange, value } }) => (
          <>
            <FloatingLabelInput
              label="First name"
              value={value}
              onChangeText={onChange}
            />
            {errors.first_name && (
              <Text style={{ color: "red" }}>{errors.first_name.message}</Text>
            )}
          </>
        )}
      />
      <Controller
        control={control}
        name="last_name"
        render={({ field: { onChange, value } }) => (
          <>
            <FloatingLabelInput
              label="Last name"
              value={value}
              onChangeText={onChange}
            />
            {errors.last_name && (
              <Text style={{ color: "red" }}>{errors.last_name.message}</Text>
            )}
          </>
        )}
      />
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <>
            <FloatingLabelInput
              label="Email"
              value={value}
              onChangeText={onChange}
            />
            {errors.email && (
              <Text style={{ color: "red" }}>{errors.email.message}</Text>
            )}
          </>
        )}
      />
      <Controller
        control={control}
        name="birth"
        render={({ field: { onChange, value } }) => (
          <DatePickerInput
            label="Birth"
            value={value}
            onChange={onChange}
            error={errors?.birth?.message}
          />
        )}
      />

      {/* Submit Button */}
      <Button
        onPress={handleSubmit(onSubmit)} // ✅ attach handleSubmit directly
        title="submit_btn"
        wrapperClassName="mt-5"
      >
        <Text className="text-white font-publicsans font-bold text-lg">
          Save
        </Text>
      </Button>
    </View>
  );
};

export default ProfileInfoForm;
