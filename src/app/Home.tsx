import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { View, TextInput, Text, TouchableOpacity } from "react-native";

import { Input } from "@/components/input/input";
import Button from "@/components/buttons/button/button";

import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/core";
import { RootStackParamList } from "@/routes/navigation";
import { AccountProps } from "@/context/accountFormContext";

import { styleVariables, styles } from "@/components/style/style";

export default function HomeScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountProps>();

  const emailRef = useRef<TextInput>(null);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  function handleNextStep(data: AccountProps) {
    console.log(data);
  }

  function handleButtonPress() {
    handleSubmit(handleNextStep)();
  }

  return (
    <View
      style={{ flex: 1, gap: 8, backgroundColor: styleVariables.Colors.black }}
    >
      <View
        style={{
          flex: 1,
          marginHorizontal: 16,
          maxWidth: "100%",
          marginVertical: 32,
        }}
      >
        <View style={{ marginHorizontal: 3, marginTop: 53, gap: 24 }}>
          <Text
            style={[styles.LabelsFont, { color: styleVariables.Colors.white }]}
          >
            WELCOME BACK
          </Text>
          <Text style={[styles.H2, { color: styleVariables.Colors.white }]}>
            Log in to your Account
          </Text>
        </View>

        <View style={{ marginTop: 53, gap: 16 }}>
          <Input
            ref={emailRef}
            inputProps={{
              placeholder: "Email",
            }}
            formProps={{
              name: "email",
              control,
              rules: {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email format",
                },
              },
            }}
            sizeC="default"
            inputI="large"
            error={errors.email?.message}
          />

          <Input
            inputProps={{
              placeholder: "Password",
              secureTextEntry: true,
              onSubmitEditing: () => handleSubmit(handleButtonPress),
              returnKeyType: "done",
            }}
            formProps={{
              name: "password",
              control,
              rules: {
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message: "The password is wrong",
                },
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              },
            }}
            sizeC="default"
            inputI="large"
            error={errors.password?.message}
          />

          <Button
            title="Login"
            size="big"
            variant="primary"
            onPress={handleButtonPress}
            style={{ marginTop: 28 }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 24,
          }}
        >
          <Text
            style={[
              { color: styleVariables.Colors.lightGrey },
              styles.LabelsFont,
            ]}
          >
            New User?{" "}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("UsernameAndEmail")}
          >
            <Text
              style={[
                { color: styleVariables.Colors.white },
                styles.LabelsFont,
              ]}
            >
              SIGN UP HERE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
