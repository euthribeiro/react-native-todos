import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from './src/hooks/useTheme';
import { Home } from './src/pages/Home';

export default function App() {
  return (
    <ThemeProvider>
      <StatusBar 
        backgroundColor="transparent" 
        translucent 
        barStyle="light-content" 
      />
      <Home />
    </ThemeProvider>
  );
}
