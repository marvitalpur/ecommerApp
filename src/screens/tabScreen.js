import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../common/Header';
import HomeTabs from './tabs/HomeTabs';
import SearchTab from './tabs/SearchTab';
import WishlistTab from './tabs/WishlistTab';
import NotificationTab from './tabs/NotificationTab';
import profileTab from './tabs/profileTab';

const TabsScreen = () => {
    const [seleted, setSelected] = useState(0);
    const [products, setProducts] = useState(0);

    return (
        <View style={styles.container}>
            {seleted == 0 ?
                <HomeTabs /> :
                seleted == 1 ?
                    <SearchTab />
                    : seleted == 2 ?
                        WishlistTab :
                        seleted == 3 ?
                            NotificationTab :
                            profileTab}
            <View style={styles.bottomView}>
                <TouchableOpacity onPress={() => setSelected(0)} style={[styles.bottomTab,
                { backgroundColor: seleted == 0 ? "green" : null }]}>
                    {seleted == 0 ? (<Image source={require('../assets/images/icons/home.png')}
                        style={styles.bottomTabIcon}
                        resizeMode='contain' />) : (
                        <Image source={require('../assets/images/icons/homeOutline.png')}
                            style={styles.bottomTabIcon}
                            resizeMode='contain' />
                    )}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelected(1)}
                    style={[styles.bottomTab, { backgroundColor: seleted == 1 ? "green" : null }]}>
                    {seleted == 1 ? (<Image source={require('../assets/images/icons/magnifying-glass.png')}
                        style={styles.bottomTabIcon}
                        resizeMode='contain' />) : (<Image source={require('../assets/images/icons/search.png')}
                            style={styles.bottomTabIcon}
                            resizeMode='contain' />)}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelected(2)} style={[styles.bottomTab,
                { backgroundColor: seleted == 2 ? "green" : null }]}>
                    {seleted == 2 ? (<Image source={require('../assets/images/icons/favourite.png')}
                        style={styles.bottomTabIcon}
                        resizeMode='contain' />) :
                        (<Image source={require('../assets/images/icons/heart.png')}
                            style={styles.bottomTabIcon}
                            resizeMode='contain' />)}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelected(3)} style={[styles.bottomTab,
                { backgroundColor: seleted == 3 ? "green" : null }]}>
                    {seleted == 3 ? (<>
                        <Image source={require('../assets/images/icons/bell.png')}
                            style={styles.bottomTabIcon}
                            resizeMode='contain' />
                    </>) : (<Image source={require('../assets/images/icons/notification.png')}
                        style={styles.bottomTabIcon}
                        resizeMode='contain' />)}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelected(4)} style={[styles.bottomTab,
                { backgroundColor: seleted == 4 ? "green" : null }]}>
                    {seleted == 4 ? (
                        <Image source={require('../assets/images/icons/profile-user.png')}
                            style={styles.bottomTabIcon}
                            resizeMode='contain' />
                    ) : (<Image source={require('../assets/images/icons/user.png')}
                        style={styles.bottomTabIcon}
                        resizeMode='contain' />)}
                </TouchableOpacity>
            </View>
        </View >
    );
};
export default TabsScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'green',
    },
    bottomView: {
        position: 'absolute',
        bottom: 0,
        height: 70,
        width: '100%',
        backgroundColor: '#ffff',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    bottomTab: {
        width: '15%',
        height: '80%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomTabIcon: {
        width: 24,
        height: 24,

    }
});

