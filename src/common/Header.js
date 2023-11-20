import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
const { height, width } = Dimensions.get('window')
const Header = ({ title, isBAck, leftICon, rightICon,
    onclickLeft,
    onClickRight,
    headerTitle }) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={onclickLeft} style={styles.btnL}>
                <Image resizeMode='contain' source={leftICon} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{headerTitle}</Text>
            <TouchableOpacity onPress={onClickRight} resizeMode='contain' style={styles.btnR}>
                <Image source={rightICon} style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#000',
        height: 60,
        width: width,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    btnL: {
        width: 40, height: 40,
        justifyContent: 'center',
        alignItems: "center"
    },
    icon: {
        width: 30,
        height: 30,
        tintColor: '#fff'
    },
    headerTitle: {
        fontSize: 22,
        color: '#fff'

    }
})