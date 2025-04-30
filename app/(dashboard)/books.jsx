import { StyleSheet } from 'react-native'

import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemeView from '../../components/ThemeView'


const Books = () => {
  return (
    <ThemeView style={styles.container}>
        <Spacer />
        <ThemedText style={styles.heading} title={true}>
            Your reading list
        </ThemedText>
        <Spacer/>
    </ThemeView>
  )
}

export default Books

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },  
})