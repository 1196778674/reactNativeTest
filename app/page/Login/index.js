import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, View, Text } from 'react-native'
import { List, InputItem,WingBlank, Button } from '@ant-design/react-native';

export default Login = ({navigation}) => {
    const [name, setname] = useState('')
    const [password, setpassword] = useState('')
    const Login = () => {
        let params = {
            name: name,
            password: password
        }
        alert(JSON.stringify(params))
    }
    const Close = () => {
        navigation.navigate('Home')
    }
    return (
        <SafeAreaView style={styles.container}>
            <WingBlank>
                <View>
                    <Text style={styles.close}
                    onPress={() => Close()}
                    >×</Text>
                </View>
                <View>
                    <Text style={styles.header}>登录</Text>
                </View>
                <View style={styles.form}>
                    <InputItem
                        type="text"
                        clear
                        placeholder="请输入用户名"
                        onChange={(value) => setname(value)}
                    >账号</InputItem>
                    <InputItem
                        type="password"
                        clear
                        placeholder="请输入密码"
                        onChange={(value) => setpassword(value)}
                    >密码</InputItem>
                    <Button
                        loading={false}
                        disabled={false}
                        style={styles.button}
                        type="primary"
                        onPress={() => Login()}
                    >登 录</Button>
                </View>
            </WingBlank>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fafafa',
    },
    header: {
        top: 70,
        fontSize: 30,
        textAlign: 'left'
    },
    form: {
        top: 120,
    },
    button: {
        top: 20,
    },
    close: {
        fontSize: 30,
        top: 10,
        width: 40,
        height: 40,
        borderRadius: 10,
        color: '#999',
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#fafafa',
        overflow: 'hidden',
    }
})