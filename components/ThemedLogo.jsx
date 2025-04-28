
import { Image, useColorScheme } from 'react-native'

// images
const DarkLogo = require('../assets/img/logo-dark.png');
const LightLogo = require('../assets/img/logo.png');


const ThemedLogo =({ ...props }) => {
    const colorscheme = useColorScheme ()
    const logo = colorscheme === 'dark' ? DarkLogo: LightLogo
        return (
        <Image source={logo} { ...props }/>
        )
    }
export default ThemedLogo