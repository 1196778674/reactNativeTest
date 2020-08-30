import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, Button } from 'react-native'

export default Login = ({navigation}) => {
    return (
        <SafeAreaView>
        <View>
            <Text>Login</Text>
        </View>
        <View>
        <Button title="x" onPress={() => navigation.push('Home')}/>
        </View>
        </SafeAreaView>
    )
}