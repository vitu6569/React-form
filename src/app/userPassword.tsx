import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/core";
import { RootStackParamList } from "@/routes/navigation";
import { AccountProps } from "@/context/accountFormContext";

import Button from "@/components/buttons/button/button";
import { Input } from "@/components/input/input";
import BackButton from "@/components/buttons/backbutton/backButton";
import { ProgressBar } from "@/components/progress/progress";

import { styleVariables } from "@/components/style/style";

export default function UsernameAndPassword() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountProps>();

  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  function handleNextStep() {
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }], // Replace "Home" with your desired route name
    });
  }

  function handleButtonPress() {
    handleSubmit(handleNextStep)();
  }

  return (
    <View
      style={{ flex: 1, gap: 8, backgroundColor: styleVariables.Colors.black }}
    >
      <StatusBar hidden />
      <BackButton />
      <ProgressBar
        progress={1}
        icons={[
          { name: "home", color: "#FF8C00" },
          { name: "person", color: "#FF8C00" },
          { name: "pin-drop", color: "#FF8C00" },
          { name: "lock", color: "#FF8C00" },
        ]}
      />
      <View style={{ flex: 1, marginHorizontal: 16, maxWidth: "100%" }}>
        <View style={{ marginTop: 29, gap: 16 }}>
          <Input
            ref={passwordRef}
            inputProps={{
              placeholder: "Password",
              textContentType: "password",
              secureTextEntry: true,
              onSubmitEditing: () => confirmPasswordRef.current?.focus(),
              returnKeyType: "next",
            }}
            formProps={{
              name: "password",
              control: control,
              rules: {
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message: "Password must be at least 8 characters",
                },
              },
            }}
            sizeC="default"
            inputI="large"
            error={errors.password?.message?.toString()}
          />
          <Input
            ref={confirmPasswordRef}
            inputProps={{
              placeholder: "Confirm Password",
              textContentType: "password",
              secureTextEntry: true,
              returnKeyType: "done",
            }}
            formProps={{
              name: "confirmPassword",
              control: control,
              rules: {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === control._formValues.password ||
                  "Passwords do not match",
              },
            }}
            sizeC="default"
            inputI="large"
            error={errors.confirmPassword?.message?.toString()}
          />
          <Button title="CONFIRM" onPress={handleButtonPress} />
        </View>
      </View>
    </View>
  );
}
