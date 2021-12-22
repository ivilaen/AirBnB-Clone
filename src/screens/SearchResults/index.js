import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'

import feed from '../../../assets/data/feed'
import Post from '../../components/post'

const SearchResultsScreen = () => {
    return (
        <FlatList
            data={feed}
            renderItem={({item}) => <Post post={item} />}
        />
    )
}

export default SearchResultsScreen;

const styles = StyleSheet.create({})
