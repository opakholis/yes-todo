import { StatusBar } from 'expo-status-bar'
import React from 'react'

import AppContainer from './src/components/Container'
import MainScreen from './src/screens/MainScreen'

export default function App() {
  return (
    <AppContainer>
      <StatusBar style="auto" />
      <MainScreen />
    </AppContainer>
  )
}
