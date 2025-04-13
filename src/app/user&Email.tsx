// Importa o React
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

import { styleVariables } from "@/components/style/style";

// Define o componente de função ProfileScreen como padrão de exportação
export default function UsernameAndEmail() {
  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountProps>();

  const emailRef = useRef<TextInput>(null);
  const confirmEmaiRef = useRef<TextInput>(null);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleGetValues = () => {
    const values = getValues(); // Obtém todos os valores do formulário
    console.log(values);
  };

  function handleNextStep() {
    navigation.navigate("UserInfo");
  }

  function handleButtonPress() {
    handleSubmit(handleNextStep)();
  }

  return (
    // Retorna uma View com estilo flexível, alinhada ao centro
    <View
      style={{ flex: 1, gap: 8, backgroundColor: styleVariables.Colors.black }}
    >
      <StatusBar hidden />
      <BackButton />
      <View style={{ flex: 1, marginHorizontal: 16, maxWidth: "100%" }}>
        <View style={{ marginTop: 29, gap: 16 }}>
          <Input
            inputProps={{
              placeholder: "Username",
              textContentType: "username",
              returnKeyType: "next",
              accessibilityLabel: "Enter your username",
              onSubmitEditing: () => emailRef.current?.focus(),
            }}
            formProps={{
              name: "username",
              control: control,
              rules: {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters long",
                },
              },
            }}
            sizeC="default"
            inputI="large"
            error={errors.username?.message?.toString()}
          />

          <Input
            ref={emailRef}
            inputProps={{
              placeholder: "Email",
              textContentType: "emailAddress",
              onSubmitEditing: () => confirmEmaiRef.current?.focus(),
              returnKeyType: "next",
              accessibilityLabel: "Enter your email address",
            }}
            formProps={{
              name: "email",
              control: control,
              rules: {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format",
                },
              },
            }}
            sizeC="default"
            inputI="large"
            error={errors.email?.message?.toString()}
          />

          <Input
            ref={confirmEmaiRef}
            inputProps={{
              placeholder: "Confirm Email",
              textContentType: "emailAddress",
              returnKeyType: "done",
              accessibilityLabel: "Confirm your email address",
            }}
            formProps={{
              name: "confirmEmail",
              control: control,
              rules: {
                required: "Confirm Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format",
                },
                validate: (value) =>
                  value === getValues("email") || "Emails do not match",
              },
            }}
            sizeC="default"
            inputI="large"
            error={errors.confirmEmail?.message?.toString()}
          />
          <Button title="CONFIRM" onPress={() => { handleButtonPress(); handleGetValues(); }} />
        </View>
      </View>
    </View>
  );
}
