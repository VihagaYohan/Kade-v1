import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Colors from '../config/colors'

export default function ListItemSeparator() {
    return (
        <View style={styles.separator}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    separator:{
        width: "100%",
        height: 1,
        backgroundColor: Colors.lightGrey
    }
})