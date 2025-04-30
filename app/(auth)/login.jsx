import { StyleSheet, Text} from 'react-native'
import { Link } from 'expo-router';
import { Colors } from '../../constants/Colors';

// themed components
import ThemeView from '../../components/ThemeView';
import Spacer from '../../components/Spacer';
import ThemedText from '../../components/ThemedText';
import ThemedButton from '../../components/ThemeButtom';

const Login = () => {

  const handleSubmit = () => {
    // Handle login logic here
    console.log('Login button pressed');
  }

  return (
    <ThemeView style={styles.container}>

      <Spacer height={20}/>

      <ThemedText style={styles.title} title= {true} >
        Login to your account
      </ThemedText>
      
      <ThemedButton onPress={handleSubmit} style={styles.btn}>
        <Text style={{ color: '#f2f2f2'}}>Login</Text>
      </ThemedButton>


      <Spacer height={100}/>

      <Link href={'/register'}>
        <ThemedText style={{ textAlign : 'center' }}>
          Register instead
        </ThemedText>
      </Link>
    </ThemeView>
  )
}

export default Login

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
    btn: {
      backgroundColor: Colors.primary,
      padding: 15,
      borderRadius: 5,
    },
    pressed: {
      opacity: 0.8
    }
})