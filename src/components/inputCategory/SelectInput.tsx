import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { Controller, UseControllerProps } from "react-hook-form";
import { Input } from "@/components/input/input";
import { styleVariables } from "../style/style";

interface SelectInputProps {
  formProps: UseControllerProps;
  options: string[];
  placeholder?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  formProps,
  options,
  placeholder = "Selecione...",
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Controller
        {...formProps}
        render={({ field }) => (
          <>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Input
                formProps={formProps}
                inputProps={{
                  value: field.value,
                  placeholder,
                  editable: false, // Impede digitação direta
                  Icon: { name: "default-icon" }, // Replace "default-icon" with the actual icon name
                }}
                sizeC="default"
                inputI="default"
              />
            </TouchableOpacity>

            {/* Modal de seleção */}
            <Modal visible={modalVisible} transparent animationType="slide">
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <FlatList
                    data={options}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={styles.option}
                        onPress={() => {
                          field.onChange(item);
                          setModalVisible(false);
                        }}
                      >
                        <Text style={styles.optionText}>{item}</Text>
                      </TouchableOpacity>
                    )}
                  />
                  <TouchableOpacity
                    onPress={() => setModalVisible(false)}
                    style={styles.cancelButton}
                  >
                    <Text style={styles.cancelText}>Cancelar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#121212",
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
  option: {
    padding: 15,
  },
  optionText: { fontSize: 16, color: styleVariables.Colors.grey },
  cancelButton: { padding: 15, alignItems: "center" },
  cancelText: { color: styleVariables.Colors.red, fontWeight: "bold" },
});

export default SelectInput;
