// Importa o React
import React from 'react';
// Importa os componentes View e Text da biblioteca react-native
import { 
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native';
import {  useNavigation } from '@react-navigation/native' 




// Define o componente de função ProfileScreen como padrão de exportação
export default function LoginScreen() {
  const navigation = useNavigation();
  
  return (
    // Retorna uma View com estilo flexível, alinhada ao centro
    <View style={styles.header}>
        <TouchableOpacity
          style={{ justifyContent: "center", alignItems: "center" }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../../assets/arrow.png")}
            style={{ width: 25, height: 25 }}
          />
        </TouchableOpacity>
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
  },
});