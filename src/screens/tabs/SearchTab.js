import { Image, StyleSheet, TouchableOpacity, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Header from '../../common/Header';
const SearchTab = () => {
    const [Search, setSearch] = useState('')
    const products = useSelector(state => state);
    console.log(JSON.stringify(products.product.data))
    const [oldData, setOldData] = useState(products.product.data)
    const filterData = (txt) => {
        let newData = oldData.filter(item => {
            return item.title.toLowerCase().match(txt.toLowerCase())
        });
        console.log(newData)
    }


    return (
        <View style={styles.container}>
            <Header
                headerTitle="Search Items "
                // leftICon={require('../../assets/images/icons/arrow.png')}
                // rightICon={require('../../assets/images/icons/search.png')}
                onclickLeft={() => navigation.openDrawer()}
            />
            <View style={styles.searchView}>
                <Image
                    source={require('../../assets/images/icons/search.png')}
                    style={styles.icon} />
                <TextInput value={Search}
                    onChangeText={(txt => {

                        setSearch(txt)
                        filterData(txt)
                    }
                    )}

                    placeholder='Search here'
                    style={styles.input} />
                {Search !== '' && (
                    <TouchableOpacity style={styles.icon}>
                        <Image
                            source={require('../../assets/images/icons/cancel.png')}
                            style={styles.icon} />
                    </TouchableOpacity>
                )}

            </View>

        </View>
    )
}
export default SearchTab

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    searchView: {
        height: 60,
        width: "90%",
        borderRadius: 25,
        borderWidth: 0.5,
        alignSelf: 'center',
        paddingHorizontal: 10,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 24,
        height: 24,
        resizeMode: 'center',
    },
    input: {
        width: '85%',
        paddingLeft: 10
    }
})