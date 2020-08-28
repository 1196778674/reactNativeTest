import React, {Component} from 'react'
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native'

import { connect } from 'react-redux'
import { addTodo, thunkTodo } from './actions'

const mapStateToProps = (state, ownProps) => {
  return {
    test: state.todo.test
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    todo: (num) => {
      dispatch(addTodo(num))
    }
  }
}

const Apps = ({test, todo}) => {
  return(
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
          {test}
        </Text>
      </View>
      <View>
        <Button
          onPress={() => todo(1)}
          title="click me"
        />
      </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({

})

export default connect(mapStateToProps, mapDispatchToProps)(Apps)
// export default App