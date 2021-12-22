import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Pressable, Dimensions, SafeAreaView } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView>
        <View>
            
            <ImageBackground source={require('../../../assets/images/wallpaper.jpg')} style={styles.image}>

                {/* SearchBar */}
                <Pressable style={styles.searchbutton} onPress={() => navigation.navigate('Destination Search')} >
                    <Fontisto name="search" size={25} color={"#f15454"} />
                    <Text style={styles.searchbuttonText}> Where are you going?</Text>
                </Pressable>

                {/* Title */}
                <Text style={styles.title}>Go Near</Text>


                {/* Button */}
                <Pressable 
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Explore nearby stays</Text>
                </Pressable>
            </ImageBackground>
        </View>
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        justifyContent: 'center',

    },
    title: {
        fontSize: 100,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        marginLeft: 25,
        marginTop: 60,
        lineHeight: 96,
    },
    button: {
        backgroundColor: '#fff',
        width: 200,
        height: 40,
        marginLeft: 25,
        marginTop: 25,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    searchbutton: {
        backgroundColor: '#fff',
        width: Dimensions.get('screen').width - 40,
        height: 60,
        marginHorizontal: 20,
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 45,
        zIndex: 100,
    },
    searchbuttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },

})
