// Importa o React
import React from 'react';
// Importa os componentes View e Text da biblioteca react-native
import { 
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {  useNavigation } from '@react-navigation/native' 
import { styleVariables } from '@/components/style/style';




// Define o componente de função ProfileScreen como padrão de exportação
export default function BackButton() {
  const navigation = useNavigation();
  
  return (
    // Retorna uma View com estilo flexível, alinhada ao centro
    <View style={styles.backButton}>
        <TouchableOpacity
          style={{ justifyContent: "center", alignItems: "center" }}
          onPress={() => navigation.goBack()}
        >
          <Image
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            source={require("../../../../assets/arrow.png")}
            style={{ width: 25, height: 25, tintColor: styleVariables.Colors.white }}
          />
        </TouchableOpacity>
    </View>
  );
}
 const styles = StyleSheet.create({
  backButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10%",
    marginHorizontal: 8,
    paddingHorizontal: 10,
    height: 60,
  },
});