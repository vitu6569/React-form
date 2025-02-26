import React from 'react';
import { View, Text} from 'react-native';
import Header from '@/components/header/header';

// Define o tipo para a propriedade de navegação da tela Home

export default function HomeScreen() {

  return (
    // Cria uma View com estilo flex, centralizando os itens
    <View style={{flex: 1}}>
      <Header showTextButton={true} showBackButton={false} onBackPress={() => null}/>
    </View>
  );
}
