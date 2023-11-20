import { FlatList, StyleSheet, Dimensions, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../common/Header'
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addProducts } from '../../redux/slices/ProductSlice';


const HomeTabs = ({ }) => {
    const navigation = useNavigation();
    const [products, setProducts] = useState([])
    const dispatch = useDispatch();
    useEffect(() => {
        getProducts();
    }, [])
    const getProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setProducts(json)
                dispatch(addProducts(json))
                console.log(json)
            })
    }
    return (
        <View style={styles.container}>
            <Header
                headerTitle="Grocery App "
                leftICon={require('../../assets/images/icons/arrow.png')}
                rightICon={require('../../assets/images/icons/shopping-bag.png')}
                onclickLeft={() => navigation.openDrawer()}
            />
            <View style={{ padding: 10, justifyContent: 'center' }}>
                <FlatList data={products} renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { data: item })} style={[styles.products, {}]}>
                            <View style={{ width: 80, height: 80, padding: 5 }} >
                                <Image source={{ uri: item.image }}
                                    resizeMode='contain'
                                    style={{ width: 60, height: 60, padding: 5 }} />
                            </View>
                            <View style={{ padding: 10 }}>
                                <Text style={styles.title}>{item.title.length >
                                    30 ? item.title.substring(0, 30) + '...'
                                    : item.title}</Text>

                                <Text style={styles.rating}>{item.rating.count}</Text>
                                <Text numberOfLines={3} style={styles.description}>
                                    {item.description.length > 60 ?
                                        item.description.substring(0, 60)
                                        + '...' : item.description}
                                    {item.description} </Text>
                                <Text style={styles.price}>{'$' + item.price}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }} />
            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {


    },
    products: {
        flexDirection: 'row'


    },
    Text: {
        backgroundColor: 'pink',
        // paddingHorizontal: 10
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    price: {
        fontSize: 18,
        color: 'green',
        fontWeight: 'bold',

    },
    description: {
        fontSize: 8, color: '#000',

    }


})

export default HomeTabs

