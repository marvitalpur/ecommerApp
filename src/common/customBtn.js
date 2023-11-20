import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomBtn = ({ bg, title, onclick, color, Btntitle }) => {
    return (
        <TouchableOpacity onPress={onclick}
            style={[styles.btn, { backgroundColor: bg }]}>
            <Text style={{ color: color, fontSize: 18 }}>{Btntitle}</Text>
        </TouchableOpacity>
    )
}

export default CustomBtn

const styles = StyleSheet.create({
    btn: {
        width: Dimensions.get('window').width - 40,
        height: 50,
        justifyContent: 'center', alignItems: 'center',
        marginTop: 30,
        borderRadius: 30

    }
})