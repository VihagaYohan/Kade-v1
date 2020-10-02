import {Platform} from 'react-native'

import Colors from './colors';

export default {
    colors:Colors,
    text:{
        color:Colors.darkGrey,
        fontSize:18,
        fontFamily:Platform.OS === 'android'?"Roboto":"Avenir"
    }
}