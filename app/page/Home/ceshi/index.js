import React, { useState } from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import { WingBlank, WhiteSpace } from '@ant-design/react-native'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    return {
        step: state.Reduce.step
    }
}

import Sub from './sub';
import Steps from './steps';
import Success from './success';
const Index = ({ navigation, step, changeStep }) => {
    
    return (
        <SafeAreaView>
            <WingBlank>
                <View>
                    <Text style={styles.title}>测试环境发布</Text>
                </View>
                <WhiteSpace/>
                {step === 1 && (<Sub/>)}
                {step === 2 && (<Steps/>)}
                {step === 3 && (<Success/>)}
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

export default connect(mapStateToProps)(Index)