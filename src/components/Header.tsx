import React from 'react';
import { View, Text, StatusBar, StyleSheet, Switch } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export function Header() {

  const { isDarkTheme,setIsDarkTheme } = useTheme();

  return (
    <View style={isDarkTheme ? styles.headerDark : styles.header}>
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      <Switch 
        style={styles.switch} 
        value={isDarkTheme} 
        onValueChange={() => setIsDarkTheme(!isDarkTheme)} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerDark: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#483C67',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  switch: {
    position: 'absolute',
    top: 30,
    right: 15
  }
});
