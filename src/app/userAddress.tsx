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
import { ProgressBar } from "@/components/progress/progress";

import { styleVariables } from "@/components/style/style";

export default function UserAddress() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountProps>();

  const streetAddressRef = useRef<TextInput>(null);
  const postalCodeRef = useRef<TextInput>(null);
  const streetNumberRef = useRef<TextInput>(null);
  const countryRef = useRef<TextInput>(null);
  const stateRef = useRef<TextInput>(null);
  const cityRef = useRef<TextInput>(null);
  const neighborhoodRef = useRef<TextInput>(null);
  const numberRef = useRef<TextInput>(null);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  function handleNextStep() {
    navigation.navigate("UserPassword");
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
        progress={0.8}
        icons={[
          { name: "home", color: "#FF8C00" },
          { name: "person", color: "#FF8C00" },
          { name: "pin-drop", color: "#FF8C00" },
          { name: "lock", color: "#FFFFFF" },
        ]}
      />
      <View style={{ flex: 1, marginHorizontal: 16, maxWidth: "100%" }}>
        <View style={{ marginTop: 29, gap: 16 }}>
          <Input
            ref={streetAddressRef}
            inputProps={{
              placeholder: "Street Address",
              onSubmitEditing: () => postalCodeRef.current?.focus(),
              textContentType: "fullStreetAddress",
              returnKeyType: "next",
            }}
            formProps={{
              name: "streetAddress",
              control: control,
              rules: { required: "Street Address is required" },
            }}
            inputI="large"
            error={errors.streetAddress?.message}
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
                ref={postalCodeRef}
                inputProps={{
                  placeholder: "Postal Code",
                  onSubmitEditing: () => streetNumberRef.current?.focus(),
                  returnKeyType: "next",
                  keyboardType: "numeric",
                }}
                formProps={{
                  name: "postalCode",
                  control,
                  rules: {
                    required: "Postal Code is required",
                  },
                }}
                sizeC="large"
                inputI="large"
                error={errors.postalCode?.message}
              />
            </View>
            <Input
              ref={streetNumberRef}
              inputProps={{
                placeholder: "Street Number",
                onSubmitEditing: () => countryRef.current?.focus(),
                returnKeyType: "next",
                keyboardType: "numeric",
              }}
              formProps={{
                name: "streetNumber",
                control,
                rules: {
                  required: "Street Number is required",
                },
              }}
              sizeC="default"
              inputI="default"
              error={errors.streetNumber?.message}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flex: 1 }}>
              <Input
                ref={countryRef}
                inputProps={{
                  placeholder: "Country",
                  onSubmitEditing: () => stateRef.current?.focus(),
                  returnKeyType: "next",
                  keyboardType: "default",
                }}
                formProps={{
                  name: "country",
                  control,
                  rules: {
                    required: "Country is required",
                  },
                }}
                sizeC="default"
                inputI="large"
                error={errors.country?.message}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Input
                ref={stateRef}
                inputProps={{
                  placeholder: "State",
                  onSubmitEditing: () => cityRef.current?.focus(),
                  returnKeyType: "next",
                  keyboardType: "default",
                }}
                formProps={{
                  name: "state",
                  control,
                  rules: {
                    required: "State is required",
                  },
                }}
                sizeC="default"
                inputI="large"
                error={errors.state?.message}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flex: 1 }}>
              <Input
                ref={cityRef}
                inputProps={{
                  placeholder: "City",
                  onSubmitEditing: () => neighborhoodRef.current?.focus(),
                  returnKeyType: "next",
                  keyboardType: "default",
                }}
                formProps={{
                  name: "city",
                  control,
                  rules: {
                    required: "City is required",
                  },
                }}
                sizeC="default"
                inputI="large"
                error={errors.city?.message}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Input
                ref={neighborhoodRef}
                inputProps={{
                  placeholder: "Neighborhood",
                  onSubmitEditing: () => numberRef.current?.focus(),
                  returnKeyType: "next",
                  keyboardType: "default",
                }}
                formProps={{
                  name: "neighborhood",
                  control,
                  rules: {
                    required: "Neighborhood is required",
                  },
                }}
                sizeC="default"
                inputI="large"
                error={errors.state?.message}
              />
            </View>
          </View>
          <Input
            ref={numberRef}
            inputProps={{
              placeholder: "(+00) Number",
              returnKeyType: "next",
              keyboardType: "phone-pad",
            }}
            formProps={{
              name: "number",
              control,
              rules: {
                required: "number is required",
                pattern: /^\+\d{1,3}\s?\d{4,14}$/,
              },
            }}
            sizeC="default"
            inputI="medium"
            error={errors.phoneNumber?.message}
          />
          <Button title="CONFIRM" onPress={handleButtonPress} />
        </View>
      </View>
    </View>
  );
}
