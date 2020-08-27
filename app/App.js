import React, {Component} from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { add } from '../app/action'

class App extends Component {
  render() {
    return (
      <SafeAreaView>
      <View>
        <Text>
          todo list
        </Text>
      </View>
      <View>
        <Text>
          redux 数据
        </Text>
      </View>
      <View>
        <Text>
        123
        </Text>
      </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({

})

export default App