import React from 'react'
import { StyleSheet, Text, View} from 'react-native'

export default Item = ({item}) => {
    return (
        <View style={styles.item}>
            <Text>{item.name} | {item.id}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 5,
        marginVertical: 8,
        marginHorizontal: 16, 
    }
})