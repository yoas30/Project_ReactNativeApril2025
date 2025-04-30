import { StyleSheet } from 'react-native'

import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemeView from '../../components/ThemeView'


const Create = () => {
  return (
    <ThemeView style={styles.container}>
        <ThemedText style={styles.heading} title={true}>
            Add a new book 
        </ThemedText>
        <Spacer/>
    </ThemeView>
  )
}

export default Create

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },  
})