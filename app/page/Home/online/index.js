import React, { useState } from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import { WingBlank, WhiteSpace } from '@ant-design/react-native'
import { connect } from 'react-redux'
import { changeStepOn } from '../../../actions/steps';


import Form from './form';
import Steps from '../../../component/steps';
import Success from '../../../component/success';

const mapStateToProps = (state, ownProps) => {
    return {
        stepOn: state.Reduce.stepOn
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeStepOn: (num) => {
            dispatch(changeStepOn(num))
        }
    }
}

const Two = ({ stepOn, changeStepOn }) => {
    window.changeStepOn = changeStepOn

    return (
        <SafeAreaView>
            <WingBlank>
                <View>
                    <Text style={styles.title}>正式环境发布</Text>
                </View>
                {stepOn === 1 && <Form stepOn={stepOn} changeStepOn={changeStepOn}/>}
                {stepOn === 2 && <Steps stepOn={stepOn} changeStepOn={changeStepOn}/>}
                {stepOn === 3 && <Success stepOn={stepOn} changeStepOn={changeStepOn}/>}
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

export default connect(mapStateToProps, mapDispatchToProps)(Two)