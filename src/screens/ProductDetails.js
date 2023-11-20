import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../common/Header'
import { useNavigation, useRoute } from '@react-navigation/native'
import CustomBtn from '../common/customBtn'


const ProductDetails = ({ }) => {
    const navigation = useNavigation();
    const route = useRoute();
    return (
        <View style={styles.container}>
            <Header
                headerTitle="Product Details"
                leftICon={require('../assets/images/icons/arrow.png')}
                rightICon={require('../assets/images/icons/shopping-bag.png')}
                onclickLeft={() => navigation.goBack()}
            />
            <View style={{ padding: 15, marginTop: 15 }} >
                <Image
                    source={{ uri: route.params.data.image }}
                    style={styles.banner} />
                <View style={{ marginTop: 25 }} />
                <Text style={styles.title}>{route.params.data.title}</Text>
                <View style={{ marginTop: 10 }} />
                <Text style={styles.description}>{route.params.data.description}</Text>
                <View style={{ marginTop: 10 }} />
                <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.price, { color: '#000' }]}>{'Price :'}</Text>
                    <Text style={styles.price}>{'$' + route.params.data.price}</Text>
                </View>
                <TouchableOpacity style={styles.wishlistbtn}>
                    <Image tintColor={'#fff'} source={require('../assets/images/icons/heart.png')}
                        style={{ width: 30, height: 30 }} />
                </TouchableOpacity>
                <CustomBtn bg={'#000'}
                    Btntitle={'Add To Cart'} color={'#fff'}
                    onclick={() => { }} />

            </View>

        </View>
    )
}

export default ProductDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff'
    },
    banner: {
        width: "100%",
        height: 200,
        resizeMode: 'center'

    },
    Text: {
        backgroundColor: 'pink',
        lineHeight: 33,
        // paddingHorizontal: 10
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        lineHeight: 33
    },
    price: {
        fontSize: 18,
        color: 'green',
        fontWeight: 'bold',
        lineHeight: 33

    },
    description: {
        fontSize: 16, color: '#000',
        lineHeight: 33

    },

    wishlistbtn: {
        position: 'absolute',
        top: 60,
        right: 50,
        backgroundColor: 'green',
        width: 50,
        height: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    }
})