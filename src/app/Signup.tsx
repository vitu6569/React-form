// Importa o React
import React from 'react';
// Importa os componentes View e Text da biblioteca react-native
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native' 

import Header from '@/components/header/header';

// Define o componente de função ProfileScreen como padrão de exportação
export default function SignupScreen() {
  const navigation = useNavigation();
  
  return (
    // Retorna uma View com estilo flexível, alinhada ao centro
    <View style={{ flex: 1 }}>
      <Header showTextButton={true} showBackButton={true} onBackPress={() => navigation.goBack()} />
    </View>
  );
}
