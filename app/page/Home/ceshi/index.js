import React, { useState } from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import { WingBlank, WhiteSpace } from '@ant-design/react-native'
import { connect } from 'react-redux'
import { changeStep } from '../../../actions/steps';
import Store from '@react-native-community/async-storage';

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

import Sub from './sub';
import Steps from '../../../component/steps';
import Success from '../../../component/success';
const Index = ({ navigation, step, changeStep }) => {
    window.changeStep = changeStep
    return (
        <SafeAreaView>
            <WingBlank>
                <View>
                    <Text style={styles.title}>测试环境发布</Text>
                </View>
                <WhiteSpace/>
                {step === 1 && (<Sub step={step} changeStep={changeStep}/>)}
                {step === 2 && (<Steps step={step} changeStep={changeStep}/>)}
                {step === 3 && (<Success step={step} changeStep={changeStep}/>)}
            </WingBlank>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: '#000',
        padding: 15,
        paddingLeft: 0,
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)