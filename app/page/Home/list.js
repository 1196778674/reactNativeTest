import React, { useState, useEffect, useRef } from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import { List, WingBlank, WhiteSpace, Picker, Radio, InputItem, Button, Modal } from '@ant-design/react-native'

const List = () => {
    const [list, setList] = useState('list')
    return (
        <SafeAreaView>
        <View>
            <Text>{list}</Text>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

export default List