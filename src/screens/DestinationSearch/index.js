import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react'
import { StyleSheet, TextInput, View, Text, FlatList, Pressable } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'


import SearchResults from '../../../assets/data/search';

const DestinationSearchScreen = () => {

    const navigation = useNavigation();

    const [inputText, setInputText] = useState('');

    return (
        <View style={styles.container}>
            {/* Input component */}
            <TextInput 
                style={styles.textInput} 
                placeholder='Where are you going'
                value={inputText}
                onChangeText={setInputText}            
            />

            {/* List of destination */}
            <FlatList
                data={SearchResults}
                renderItem={({item}) => (
                    <Pressable onPress={() => navigation.navigate('Guests')} style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Entypo name={'location-pin'} size={30} color={'#ff1493'} />
                        </View>
                        <Text style={styles.locationText}>{item.description}</Text>
                    </Pressable>
                )}
            />

        </View>
    )
}

export default DestinationSearchScreen;

const styles = StyleSheet.create({
    container: {
        margin: 30,
    },
    textInput: {
        fontSize: 20,
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
    },
    iconContainer: {
        backgroundColor: '#e7e7e7',
        padding: 8,
        borderRadius: 12,
        marginRight: 15,
    },
    locationText: {

    },
})
