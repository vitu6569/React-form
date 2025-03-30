import React, { useRef, useState } from "react";
import { View } from "react-native";
import { useForm } from "react-hook-form";
import { TextInput } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/core";
import { RootStackParamList } from "@/routes/navigation";
import { AccountProps } from "@/context/accountFormContext";

import Button from "@/components/buttons/button/button";
import { Input } from "@/components/input/input";
import SelectInput from "@/components/inputCategory/SelectInput";
import BackButton from "@/components/buttons/backbutton/backButton";
import { ProgressBar } from "@/components/progress/progress";

import { styleVariables } from "@/components/style/style";

export default function UserInfo() {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AccountProps>();

  const [dateOfBirth, setDateOfBirth] = useState("");

  function formatDate(text: string) {
    const cleaned = text.replace(/\D/g, ""); // Remove não numéricos
    let formatted = cleaned;

    if (cleaned.length > 2) {
      formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    }
    if (cleaned.length > 4) {
      formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(
        2,
        4
      )}/${cleaned.slice(4, 8)}`;
    }

    setDateOfBirth(formatted);
    setValue("dateOfBirth", formatted);
  }

  const FirstNameRef = useRef<TextInput>(null);
  const LastNameRef = useRef<TextInput>(null);
  const OccupationRef = useRef<TextInput>(null);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  function handleNextStep() {
    navigation.navigate("UserAddress");
  }

  return (
    <View
      style={{ flex: 1, gap: 8, backgroundColor: styleVariables.Colors.black }}
    >
      <StatusBar hidden />
      <BackButton />
      <ProgressBar
        progress={0.5}
        icons={[
          { name: "home", color: "#FF8C00" },
          { name: "person", color: "#FF8C00" },
          { name: "pin-drop", color: "#FFFFFF" },
          { name: "lock", color: "#FFFFFF" },
        ]}
      />
      <View style={{ flex: 1, marginHorizontal: 16, maxWidth: "100%" }}>
        <View style={{ marginTop: 29, gap: 16 }}>
          <Input
            ref={FirstNameRef}
            inputProps={{
              placeholder: "First Name",
              returnKeyType: "next",
              textContentType: "name",
            }}
            formProps={{
              name: "firstName",
              control,
              rules: { required: "First Name is required" },
            }}
            sizeC="default"
            inputI="large"
            error={errors.firstName?.message}
          />
          <Input
            ref={LastNameRef}
            inputProps={{
              placeholder: "Last Name",
              textContentType: "familyName",
              returnKeyType: "next",
            }}
            formProps={{
              name: "lastName",
              control,
              rules: { required: "Last Name is required" },
            }}
            sizeC="default"
            inputI="large"
            error={errors.lastName?.message}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flex: 1 }}>
              <Input
                inputProps={{
                  placeholder: "Date of Birth",
                  returnKeyType: "next",
                  keyboardType: "numeric",
                  value: dateOfBirth,
                  onChangeText: formatDate,
                }}
                formProps={{
                  name: "dateOfBirth",
                  control,
                  rules: {
                    required: "Date of Birth is required",
                    pattern: {
                      value:
                        /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/,
                      message: "Invalid date format (MM/DD/YYYY)",
                    },
                  },
                }}
                sizeC="default"
                inputI="large"
                error={errors.dateOfBirth?.message}
              />
            </View>
            <View style={{ flex: 1 }}>
              <SelectInput
                formProps={{
                  control,
                  name: "gender", // Nome do campo no formulário
                  rules: { required: "gender is required" },
                }}
                options={["Male", "Female", "Other"]}
                placeholder="Gender"
              />
            </View>
          </View>
          <SelectInput
            formProps={{
              control,
              name: "language",
              rules: { required: "Language is required" },
            }}
            options={["English", "Spanish", "Portuguese"]}
            placeholder="Language"
          />
          <Input
            ref={OccupationRef}
            inputProps={{
              placeholder: "Occupation",
              textContentType: "familyName",
              returnKeyType: "next",
            }}
            formProps={{
              name: "occupation",
              control,
              rules: { required: "Occupation is required" },
            }}
            sizeC="default"
            inputI="large"
            error={errors.occupation?.message}
          />

          <Button onPress={handleSubmit(handleNextStep)} title="CONFIRM" />
        </View>
      </View>
    </View>
  );
}
