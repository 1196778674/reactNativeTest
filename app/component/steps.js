import React, { useState, useEffect, useRef } from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import { Steps } from '@ant-design/react-native'

const Step = Steps.Step;
const Lists = ({ step, changeStep, changeStepOn }) => {
    const stepsArr = [{title:'第1步', description: '第1步已完成'},{title:'第2步', description: '第2步已完成'},{title:'第3步', description: '第3步已完成'},{title:'第4步', description: '第4步已完成'},{title:'第5步', description: '第5步已完成'}]
    const time = useRef(0)
    const [state, setstate] = useState(time.current)

    useEffect(() => {
        let timeout = setTimeout(() => {
            setstate(state+1)
        }, 1000);
        if(state >= 4) {
            !!changeStep && changeStep(3)
            !!changeStepOn && changeStepOn(3)
            return () => {
                clearTimeout(timeout)
            }
        }
    }, [state])

    return (
        <View style={styles.lists}>
            <Steps size="lg" current={state}>
                {stepsArr.map((v, k) => (
                    <Step title={v.title} description={v.description} key={k} />
                ))}
            </Steps>
        </View>
    )
}

const styles = StyleSheet.create({
    lists: {
        marginTop: 20,
        marginLeft: 20,
    }
})

export default Lists