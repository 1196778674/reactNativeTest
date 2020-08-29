import React, {useEffect, useState, useMemo} from 'react'
import { SafeAreaView, StyleSheet, Text, View, StatusBar, FlatList } from 'react-native'

import { connect } from 'react-redux'
import { addList, removeList, resetList } from './actions'

// components
import Input from './component/Input'

import { Button, Toast } from '@ant-design/react-native';

const mapStateToProps = (state) => {
  return {
    list: state.todo.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addList: (arr) => {
      dispatch(addList(arr))
    },
    removeList: (arr) => {
      dispatch(removeList(arr))
    },
    resetList: () => {
      dispatch(resetList())
    }
  }
}
const Apps = ({list, addList, removeList, resetList}) => {
  const removeFun = (id) => {
    let arr = list.splice(0, list.length)
    let newArr = arr.filter(v => v.id != id)
    removeList(newArr)
    Toast.success('删除成功', 1)
  }
  const resetFun = () => {
    resetList()
    Toast.success('清除成功', 1)
  }
  return(
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header}>list</Text>
      </View>

      <View>
        <Input subCallback={addList} lists={list}/>
      </View>

      <View>
        {
          list.map(item => (
            <Text style={styles.item} onPress={() => removeFun(item.id)} key={item.id}>{item.name} | {item.id}</Text>
          ))
        }
      </View>
      <Button type="default" onPress={() => resetFun()}>reset</Button>
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
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16, 
}
})

export default connect(mapStateToProps, mapDispatchToProps)(Apps)