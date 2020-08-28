import React, {Component} from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import { connect } from 'react-redux'
import { addTodo, thunkTodo } from './actions'

const mapStateToProps = state => ({
  test: state.todo.test,
  geturl: state.todo.geturl
})
const mapDispatchToProps = dispatch => ({
  todo: num => dispatch(addTodo(num)),
  thunk: num => dispatch(thunkTodo()),
})

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
          {this.props.geturl}
        </Text>
      </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({

})

export default connect(mapStateToProps, mapDispatchToProps)(App)
// export default App