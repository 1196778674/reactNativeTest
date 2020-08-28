import React from 'react'
import { StyleSheet, Text, View} from 'react-native'

export default Item = ({item}) => {
    return (
        <View style={styles.item}>
            <Text>{item.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,  
    }
})