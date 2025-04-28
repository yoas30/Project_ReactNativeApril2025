import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import { Colors } from '../constants/Colors'
import ThemeView from '../components/ThemeView';
import ThemedText from '../components/ThemedText';

const about = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light //identifikasi null (??)

  return (
    <ThemeView style={[styles.container,{backgroundColor : theme.background}]}>
      <ThemedText style={styles.title}>About Page</ThemedText>
      <Link href={'/'} style={styles.link}>
        <ThemedText>Back Home</ThemedText>
      </Link>
    </ThemeView>
  )
}

export default about

const styles = StyleSheet.create({
  container :{
    flex : 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize : 18,
    fontWeight: 'bold'
  },
  link:{
    marginVertical: 10,
    borderBottomWidth: 1
  }
})