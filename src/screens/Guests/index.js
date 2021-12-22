import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'


const GuestsScreen = () => {


    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infant, setInfant] = useState(0);


    const navigation = useNavigation();


    return (
        <View style={{justifyContent: 'space-between', height: '100%'}}>

            <View>
            {/* Row 1 : Adults */}
                <View style={styles.row}>
                {/* Title */}
                    <View>
                        <Text style={{fontWeight: 'bold'}}>Adults</Text>
                        <Text style={{color: '#8d8d8d'}}>Ages 13 or above</Text>
                    </View>

                {/* Button with value */}
                    <View style={{flexDirection: 'row', alignItems: 'center',}}>
                        {/* - button */}
                            <Pressable 
                                onPress={()=> setAdults(Math.max(0, adults - 1))}
                                style={styles.button}
                            >
                                <Text style={{fontSize: 20, color: '#676767'}}>-</Text>
                            </Pressable>
                        {/* value */}
                            <Text style={{marginHorizontal: 20, fontSize: 16,}}>{adults}</Text>
                        {/* + button */}
                            <Pressable 
                                onPress={()=> setAdults(adults + 1)}
                                style={styles.button}
                            >
                                <Text style={{fontSize: 20, color: '#676767'}}>+</Text>
                            </Pressable>
                    </View>
                </View>

            {/* Row 2 : Children */}
                <View style={styles.row}>
                {/* Title */}
                    <View>
                        <Text style={{fontWeight: 'bold'}}>Children</Text>
                        <Text style={{color: '#8d8d8d'}}>Ages 2 - 12</Text>
                    </View>

                {/* Button with value */}
                    <View style={{flexDirection: 'row', alignItems: 'center',}}>
                        {/* - button */}
                            <Pressable 
                                onPress={()=> setChildren(Math.max(0, children - 1))}
                                style={styles.button}
                            >
                                <Text style={{fontSize: 20, color: '#676767'}}>-</Text>
                            </Pressable>
                        {/* value */}
                            <Text style={{marginHorizontal: 20, fontSize: 16,}}>{children}</Text>
                        {/* + button */}
                            <Pressable 
                                onPress={()=> setChildren(children + 1)}
                                style={styles.button}
                            >
                                <Text style={{fontSize: 20, color: '#676767'}}>+</Text>
                            </Pressable>
                    </View>
                </View>

            {/* Row 3 : Adults */}
                <View style={styles.row}>
                {/* Title */}
                    <View>
                        <Text style={{fontWeight: 'bold'}}>Infants</Text>
                        <Text style={{color: '#8d8d8d'}}>Under 2</Text>
                    </View>

                {/* Button with value */}
                    <View style={{flexDirection: 'row', alignItems: 'center',}}>
                        {/* - button */}
                            <Pressable 
                                onPress={()=> setInfant(Math.max(0, infant - 1))}
                                style={styles.button}
                            >
                                <Text style={{fontSize: 20, color: '#676767'}}>-</Text>
                            </Pressable>
                        {/* value */}
                            <Text style={{marginHorizontal: 20, fontSize: 16,}}>{infant}</Text>
                        {/* + button */}
                            <Pressable 
                                onPress={()=> setInfant(infant + 1)}
                                style={styles.button}
                            >
                                <Text style={{fontSize: 20, color: '#676767'}}>+</Text>
                            </Pressable>
                    </View>
                </View>
            </View>

            {/* Search Button */}
            
                <Pressable style={styles.nextButton} onPress={() => navigation.navigate('SearchResults')}>
                    <Text style={styles.nextButtonText}>Search</Text>
                </Pressable>

        </View>
    )
}

export default GuestsScreen;

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: '#676767',
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        paddingVertical: 20, 
        marginHorizontal:20, 
        borderBottomWidth: 1, 
        borderColor: 'lightgrey'
    },
    nextButton: {
        marginBottom: 10,
        marginHorizontal: 20,
        backgroundColor: '#f15454',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 15,
        
    },
    nextButtonText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },

})
