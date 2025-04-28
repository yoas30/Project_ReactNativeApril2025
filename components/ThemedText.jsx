
import { Text, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'


const ThemedText =({ style, title = false, ...props }) => {
    const colorscheme = useColorScheme () //ambil warna
    const theme = Colors[colorscheme] ?? Colors.light //identifikasi null (??)

    const textColor = title ? theme.title : theme.text

        return (
            <Text
                style={[{ color: textColor}, style]}
                {...props}
            />
        )
    }

export default ThemedText