import React, { forwardRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  StyleSheet,
} from "react-native";
import { Controller, UseControllerProps } from "react-hook-form";
import { styles, styleVariables } from "@/components/style/style";
/**
 * A reusable Input component for React Native, integrated with react-hook-form.
 * This component supports different sizes, error handling, and dynamic styling
 * based on focus, error, and value states.
 *
 * @component
 * @param {Props} props - The props for the Input component.
 * @param {UseControllerProps} props.formProps - The react-hook-form controller props for managing the input's state.
 * @param {TextInputProps} props.inputProps - The native TextInput props for customization.
 * @param {string} [props.error] - Optional error message to display below the input.
 * @param {"default" | "small"} [props.size="default"] - The size of the input field. Defaults to "default".
 * 
 * @example
 * ```tsx
 * import { Input } from "@/components/input/input";
 * import { useForm, Controller } from "react-hook-form";
 * 
 * const MyForm = () => {
 *   const { control, handleSubmit } = useForm();
 * 
 *   const onSubmit = (data: any) => {
 *     console.log(data);
 *   };
 * 
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <Input
 *         formProps={{
 *           control,
 *           name: "username",
 *           rules: { required: "Username is required" },
 *         }}
 *         inputProps={{
 *           placeholder: "Enter your username",
 *         }}
 *         size="default"
 *       />
 *     </form>
 *   );
 * };
 * ```
 */
type Props = {
  formProps: UseControllerProps;
  inputProps: TextInputProps;
  error?: string;
  size?: "default" | "small";
};

// eslint-disable-next-line react/display-name
const Input = forwardRef<TextInput, Props>(
  ({ size = "default", formProps, inputProps }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputSize = size === "default" ? styles.defaultInput : styles.smallInput;

    return (
      <Controller
        {...formProps}
        render={({ field, fieldState }) => (
          <View>
            <TextInput
              ref={ref}
              value={field.value}
              onChangeText={field.onChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              style={StyleSheet.flatten([
                fieldState.error // Checks if there is an error
                  ? styles.inputE // Applies error style
                  : isFocused // Checks if the field iFs focused
                  ? styles.inputF
                  : !field.value // Checks if the field is empty
                  ? styles.inputI
                  : styles.inputS, // Default style (value filled)
                inputSize,
              ])}
              placeholderTextColor={
                styleVariables.Colors.grey // Default placeholder color
              }
              {...inputProps}
            />
            {fieldState.error && (
              <Text style={styles.Error}>{fieldState.error.message}</Text>
            )}
          </View>
        )}
      />
    );
  }
);

export { Input };
