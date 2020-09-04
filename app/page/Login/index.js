import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, View, Text } from 'react-native'
import { List, InputItem,WingBlank, Button, Checkbox, Toast } from '@ant-design/react-native';
import Store from '@react-native-community/async-storage'

const AgreeItem = Checkbox.AgreeItem;

export default Login = ({navigation}) => {
    const [name, setname] = useState('')
    const [password, setpassword] = useState('')
    const [isLogin, setisLogin] = useState(false)
    const [agree, setagree] = useState(false)

    // 初始化账号密码
    useEffect(() => {
        Store.getItem('login', (e, res) => {
            if(e) return
            let obj = JSON.parse(res)
            if(obj && obj.name && obj.password) {
                setname(obj.name)
                setpassword(obj.password)
                setagree(true)
            }
        })
    }, [])
    const Login = () => {
        let params = {
            name: name,
            password: password
        }
        if(!params.name.trim() || !params.password.trim()) {
            Toast.fail('账号或密码为空', 1);
            return
        }
        setisLogin(true)
        setTimeout(() => {
            setisLogin(false)
            Store.setItem('token', 'xxxxxxxxxxxx')
            Close()
        }, 3000);
    }
    const Close = () => {
        navigation.navigate('Home')
    }
    const Check = (e)=> {
        let params = {
            name: name,
            password: password
        }
        let check = e.target.checked
        setagree(check)
        if(check && params.name && params.password) {
            Store.setItem('login', JSON.stringify(params))
        } else {
            Store.removeItem('login')
        }
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
                        value={name}
                        clear
                        placeholder="请输入用户名"
                        onChange={(value) => setname(value)}
                    >账号</InputItem>
                    <InputItem
                        type="password"
                        value={password}
                        clear
                        placeholder="请输入密码"
                        onChange={(value) => setpassword(value)}
                    >密码</InputItem>
                    <AgreeItem style={styles.agree} checked={agree} onChange={e => Check(e)}>
                        记住密码
                    </AgreeItem>
                    <Button
                        loading={isLogin}
                        disabled={isLogin}
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
    },
    agree: {
        marginTop: 20,
    }
})