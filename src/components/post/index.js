import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'

const Post = (props) => {

    const post = props.post;
    



    return (
        <SafeAreaView>
            <View style={styles.container}>
            {/* Image */}
            <Image 
                style={styles.image} 
                source={{uri: post.image}} 
            />


            {/* Bed & Bedroom */}
            <Text style={styles.bedrooms}>{post.bed} Bed . {post.bedroom} Bedroom</Text>

            {/* Type & Description */}
            <Text style={styles.desc} numberOfLines={2}>
                {post.type} . {post.title}
            </Text>

            {/* Old price & New price */}
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>${post.oldPrice}</Text>
                <Text style={styles.newPrice}> ${post.newPrice} </Text>
                / night
            </Text>

            {/* Total price */}
            <Text style={styles.totalPrice}>${post.totalPrice}</Text>

            </View>
        </SafeAreaView>
    )
}

export default Post;

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    image: {
        width: '100%',
        aspectRatio: 3/2,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    bedrooms: {
        marginVertical: 10,
        color: '#5b5b5b',
    },
    desc: {
        fontSize: 18,
        lineHeight: 25,
    },
    prices: {
        fontSize: 18,
        marginVertical: 10,
    },
    oldPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through',
    },
    newPrice: {
        fontWeight: 'bold',
    },
    totalPrice: {
        textDecorationLine: 'underline',
        color: '#5b5b5b',
    },
})
