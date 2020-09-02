import React, { useState, useEffect, useRef } from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import { Steps } from '@ant-design/react-native'
import { connect } from 'react-redux'
import { changeStep } from '../../../actions/steps';

const mapStateToProps = (state, ownProps) => {
    return {
        step: state.Reduce.step
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeStep: (num) => {
            dispatch(changeStep(num))
        }
    }
}

const Step = Steps.Step;
const Lists = ({ navigation, step, changeStep }) => {
    const stepsArr = [{title:'第1步', description: '第1步已完成'},{title:'第2步', description: '第2步已完成'},{title:'第3步', description: '第3步已完成'},{title:'第4步', description: '第4步已完成'},{title:'第5步', description: '第5步已完成'}]

    const [state, setstate] = useState(0)

    useEffect(() => {
        let timeout = setTimeout(() => {
            setstate(state+1)
        }, 2000)
        if(state >= 4) {
            changeStep(step+1)
        }
        return () => {
            clearTimeout(timeout)
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

export default connect(mapStateToProps, mapDispatchToProps)(Lists)