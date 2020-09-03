import React, { useState } from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import { WingBlank, WhiteSpace } from '@ant-design/react-native'
import { connect } from 'react-redux'
import { changeStep } from '../../../actions/steps';


import Form from './form';

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
            <Form/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

export default connect(mapStateToProps, mapDispatchToProps)(Two)