import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import ThemeView from '../components/ThemeView';
import ThemedText from '../components/ThemedText';

const contact = () => {
  return (
    <ThemeView style={styles.container}>
      <ThemedText style={styles.title}>Contact Page</ThemedText>
      <Link href={'/'} style={styles.link}>
      <ThemedText>Back Home</ThemedText>
      </Link>
    </ThemeView>
  )
}

export default contact

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