// Importa o React
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/core"; 
import { RootStackParamList } from "@/routes/navigation";
import { AccountProps } from "@/context/accountFormContext";

import Button from "@/components/buttons/button/button";
import { Input } from "@/components/input/input";
import BackButton from "@/components/buttons/backbutton/backButton";

import { styleVariables } from "@/components/style/style"

// Define o componente de função ProfileScreen como padrão de exportação
export default function UsernameAndEmail() {
  const { control, handleSubmit, formState: { errors } } = useForm<AccountProps>();

  const emailRef = useRef<TextInput>(null);
  const confirmEmaiRef = useRef<TextInput>(null);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  function handleNextStep(data: AccountProps) {
    console.log(data);
    navigation.navigate("UserInfo")
  }

  function handleButtonPress() {
    handleSubmit(handleNextStep)();
  }

  return (
    // Retorna uma View com estilo flexível, alinhada ao centro
    <View style={{ flex: 1, gap: 8, backgroundColor: styleVariables.Colors.black  }}>
      <BackButton />

      <View style={{ flex: 1, marginHorizontal: 16, maxWidth: "100%",}}>

        <View style={{ marginTop: 29, gap: 16 }}>
          <Input
            inputProps={{
              placeholder: "Username",
              onSubmitEditing: () => emailRef.current?.focus(),
              textContentType: "username",
              returnKeyType: "next",
            }}
            formProps={{
              name: "username",
              control: control,
              rules: { required: "Username is required" },
            }}
            error={errors.username?.message}
          />
          <Input
            ref={emailRef}
            inputProps={{
              placeholder: "Email",
              textContentType: "emailAddress",
              onSubmitEditing: () => confirmEmaiRef.current?.focus(),
              returnKeyType: "next",
            }}
            formProps={{
              name: "email",
              control: control,
              rules: { required: "Email is required", pattern: /^\S+@\S+\.\S+$/ },
            }}
            error={errors.email?.message?.toString()}
          />
          <Input
            ref={confirmEmaiRef}
            inputProps={{
              placeholder: "Confirm Email",
              textContentType: "emailAddress",
              onSubmitEditing: () => confirmEmaiRef.current?.focus(),
              returnKeyType: "next",
            }}
            formProps={{
              name: "confirmEmail",
              control: control,
              rules: {
                required: "Confirm Email is required", // Validação: campo obrigatório
                pattern: {
                  value: /^\S+@\S+\.\S+$/, // Validação: padrão de e-mail
                  message: "Invalid email format", // Mensagem de erro para padrão inválido
                },
                validate: (value) =>
                  value === control._formValues.email || "Emails do not match", // Validação personalizada
              },
            }}
            error={errors.confirmEmail?.message?.toString()} // Exibe a mensagem de erro
          />
          <Button title="CONFIRM" onPress={handleButtonPress} />
        </View>
      </View>
    </View>
  );
}
