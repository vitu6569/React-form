import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/core";
import { RootStackParamList } from "@/routes/navigation";

export default function Header({
  showBackButton,
  onBackPress,
  showTextButton,
}: {
  showBackButton: boolean;
  onBackPress: () => void;
  showTextButton: boolean;
}) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.header}>
      {showBackButton ? (
        <TouchableOpacity
          style={{ justifyContent: "center", alignItems: "center" }}
          onPress={onBackPress}
        >
          <Image
            source={require("../../../assets/arrow.png")}
            style={{ width: 25, height: 25 }}
          />
        </TouchableOpacity>
      ) : (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Image
            style={{ width: 40, height: 40, borderRadius: 20 }}
            source={require("../../../assets/icon.png")}
          />
          <Text style={{ textAlign: "center", color: "black" }}>To Do</Text>
        </View>
      )}
      {showTextButton ? (
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={{ color: "#FFFFFF" }}>Login</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          <Text style={{ color: "#FFFFFF" }}>Sign up</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10%",
    marginHorizontal: 16,
    paddingHorizontal: 10,
    height: 60,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  button: {
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
    height: 40,
    borderRadius: 4,
    color: "#FFFFFF",
  },
});
