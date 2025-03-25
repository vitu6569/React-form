import './gesture-handler';
import React from 'react';
import Routes from './src/routes';
import { AccountProvider } from '@/context/accountFormContext';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Montserrat_400Regular, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { Roboto_300Light ,Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

// Função principal do aplicativo
export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AccountProvider>
        <Routes/>
    </AccountProvider>
  );
}