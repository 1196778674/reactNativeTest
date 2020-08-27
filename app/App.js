/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Alert,
  FlatList,
  StatusBar
} from 'react-native';

const lists = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const App = () => {
  const PressButton = (t) => {
    Alert.alert(t)
  }
  const Item = ({ title }) => {
    return (
      <View style={style.item}>
        <Text style={style.title}>{ title }</Text>
      </View>
    )
  }
  const renderItem = ({ item }) => {
    return <Item title={item.title}/>
  }
  return (
    <SafeAreaView style={[style.container]}>

      <Button
      onPress={()=>{
        PressButton('123')
      }}
      title="click me"
      />

      <FlatList
        data={lists}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  list: {
    backgroundColor: 'red',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
})

export default App;
