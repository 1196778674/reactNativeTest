import React, {useEffect, useState, useMemo} from 'react'
import { SafeAreaView, StyleSheet, Text, View, StatusBar, FlatList } from 'react-native'

import { connect } from 'react-redux'
import { addList } from './actions'

// components
import Item from './component/Item'
import Input from './component/Input'

const mapStateToProps = (state) => {
  return {
    list: state.todo.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addList: (arr) => {
      dispatch(addList(arr))
    }
  }
}
const Apps = ({list, addList}) => {
  const [state, setstate] = useState(5)
  return(
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header}>list</Text>
      </View>

      <View>
        <Input subCallback={addList} lists={list}/>
      </View>
      <FlatList 
        data={list}
        renderItem={Item}
        keyExtractor={(data, id) => id.toString()}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
    textAlign: 'center'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Apps)