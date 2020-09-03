import React, { useState, useEffect, useRef } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { Result, Button } from '@ant-design/react-native'

const Success = ({changeStep, step}) => {

    const [state, setstate] = useState(0)
    return (
        <View style={styles.lists}>
        <Result
            style={styles.result}
            img={
                <Image 
                source={require('../images/success.png')}
                />
            }
            title="发布成功"
            message="提交内容已成功发布"
        />
        <Button style={styles.button} type="primary" onPress={() => changeStep(1)}>继续发布</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    result: {
        marginTop: 50,
    },
    button: {
        marginTop: 20,
    }
})

export default Success