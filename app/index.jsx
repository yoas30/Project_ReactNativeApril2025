import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import ThemeView from '../components/ThemeView';
import ThemedLogo from '../components/ThemedLogo';
import Spacer from '../components/Spacer';
import ThemedText from '../components/ThemedText';



const Home = () => {
  return (
    <ThemeView style={styles.container}>
    <ThemedLogo />
    <Spacer height={20}/>
      <ThemedText style={styles.title} title= {true} >
        The Number 1
      </ThemedText>

      <Spacer height={10}/>
      <ThemedText style={styles.title}>Reading List</ThemedText>
      <Spacer />

      <Link href={'/login'} style={styles.link}>
        <ThemedText>Login Pages</ThemedText>
      </Link>
      <Link href={'/register'} style={styles.link}>
        <ThemedText>Register Pages</ThemedText>
      </Link>
      <Link href={'/profile'} style={styles.link}>
        <ThemedText>Profile Pages</ThemedText>
      </Link>

{/* 
      <View style={styles.card}>
        <Text>Hello , this is card</Text>
      </View> */}

    </ThemeView>
  )
}

export default Home

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
  card:{
    backgroundColor: '#eee',
    padding: 20,
    borderRadius: 5,
    boxShadow: '3px 3px rgba(0,0,0,1)'
  },
  link:{
    marginVertical: 10,
    borderBottomWidth: 1
  }
})