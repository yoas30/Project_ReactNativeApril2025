import { StyleSheet, Text} from 'react-native'
import { Link } from 'expo-router';

// themed components
import ThemeView from '../../components/ThemeView';
import Spacer from '../../components/Spacer';
import ThemedText from '../../components/ThemedText';
import ThemedButton from '../../components/ThemeButtom';

const Register = () => {

    const handleSubmit = () => {
        // Handle login logic here
        console.log('Register button pressed');
      }
    

  return (
    <ThemeView style={styles.container}>

      <Spacer height={20}/>

      <ThemedText style={styles.title} title= {true} >
        Register for an account
      </ThemedText>

      <ThemedButton onPress={handleSubmit} style={styles.btn}>
        <Text style={{ color: '#f2f2f2'}}>Register</Text>
      </ThemedButton>

      <Spacer height={100}/>

      <Link href={'/login'}>
        <ThemedText style={{ textAlign : 'center' }}>
          Login instead
        </ThemedText>
      </Link>
    </ThemeView>
  )
}

export default Register

const styles = StyleSheet.create({
    container :{
      flex : 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize : 18,
      textAlign: 'center',
      marginBottom: 30
    },
})