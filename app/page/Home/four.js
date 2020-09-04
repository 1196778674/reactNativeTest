import React from 'react'
import { Text, View, Button, SafeAreaView, StyleSheet} from 'react-native'
import { List, WingBlank, SearchBar } from '@ant-design/react-native'
import Store from '@react-native-community/async-storage'

const Item = List.Item;
const Brief = Item.Brief;

const Four = ({ navigation }) => {
    const goSuccess = (id) => {
        navigation.navigate("One")
        !!window.changeStepOn && window.changeStepOn(3)
    }
    const goIng = (id) => {
        navigation.navigate("Two")
    }
    return (
        <SafeAreaView>
            <WingBlank>
                <SearchBar onPress={() => alert('sousuo')} placeholder="搜索"/>
                <List renderHeader={() => '发布列表'}>
                    <Item multipleLine 
                        extra={<Text style={styles.going}>发布中</Text>}
                        onClick={() => goIng(2)}>
                        58ex.com 
                        <Brief>127.0.0.3</Brief>
                        <Brief>小灰灰</Brief>
                    </Item>
                    <Item multipleLine
                        extra={<Text style={styles.success}>成功</Text>}
                        onClick={() => goSuccess(1)}>
                        58ex.com 
                        <Brief>127.0.0.3</Brief>
                        <Brief>小灰灰</Brief>
                    </Item>
                </List>
            </WingBlank>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    going: {
        color: '#e94f4f'
    },
    success: {
        color: '#108ee9'
    }
})

export default Four