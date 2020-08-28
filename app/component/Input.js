import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, TextInput} from 'react-native'

export default Input = ({lists, subCallback}) => {
    const [value, setvalue] = useState('')
    const subFun = (val) => {
        let list = lists || []
        list.push({id: list.length-1, name: val})
        subCallback(list)
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={text => setvalue(text)}
                placeholder="输入内容"
            />
            <Button
                onPress={() => subFun(value)}
                title="add"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    input: {
        width: '50%',
        height: 32,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 5,
    }
})