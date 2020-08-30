import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, View, Text, Image } from 'react-native'
import { TabBar, Icon, Button } from '@ant-design/react-native';
import { connect } from 'react-redux'
import { changeTab } from './actions'

const mapStateToProps = (state) => {
    return {
    tab: state.todo.tab
}
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeTab: (tab) => {
            dispatch(changeTab(tab))
        }
    }
}

const Home = ({ changeTab, navigation }) => {
    // navigation
    const [tab, setTab] = useState(1)

    const renderTab = (tab) => {
        return (
            <View>
                <Text>
                    这是 {tab} 模板！
                </Text>
                <Button onPress={() => {
                    return navigation.push('Todo')
                }}>home</Button>
            </View>
        )
    }
    return (
        <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        >
            <TabBar.Item
                title="首页"
                key="首页"
                icon={
                    (
                        <Image
                            style={styles.tinyLogo}
                            source={require('./images/home.png')}
                        />
                    )
                }
                selectedIcon={
                    (
                        <Image
                            style={styles.tinyLogo}
                            source={require('./images/homeSelect.png')}
                        />
                    )
                }
                selected={tab === 1}
                onPress={() => {
                    setTab(1)
                    changeTab(1)
                }}
                data-seed="logId"
            >
            {renderTab(tab)}
            </TabBar.Item>
            <TabBar.Item
                title="首页"
                key="首页"
                icon={
                    (
                        <Image
                            style={styles.tinyLogo}
                            source={require('./images/home.png')}
                        />
                    )
                }
                selectedIcon={
                    (
                        <Image
                            style={styles.tinyLogo}
                            source={require('./images/homeSelect.png')}
                        />
                    )
                }
                selected={tab === 2}
                onPress={() => {
                    setTab(2)
                    changeTab(2)
                }}
                data-seed="logId"
            >
            {renderTab(tab)}
            </TabBar.Item>
            <TabBar.Item
                title="首页"
                key="首页"
                icon={
                    (
                        <Image
                            style={styles.tinyLogo}
                            source={require('./images/home.png')}
                        />
                    )
                }
                selectedIcon={
                    (
                        <Image
                            style={styles.tinyLogo}
                            source={require('./images/homeSelect.png')}
                        />
                    )
                }
                selected={tab === 3}
                onPress={() => {
                    setTab(3)
                    changeTab(3)
                }}
                data-seed="logId"
            >
            {renderTab(tab)}
            </TabBar.Item>
            <TabBar.Item
                title="首页"
                key="首页"
                icon={
                    (
                        <Image
                            style={styles.tinyLogo}
                            source={require('./images/home.png')}
                        />
                    )
                }
                selectedIcon={
                    (
                        <Image
                            style={styles.tinyLogo}
                            source={require('./images/homeSelect.png')}
                        />
                    )
                }
                selected={tab === 4}
                onPress={() => {
                    setTab(4)
                    changeTab(4)
                }}
                data-seed="logId"
            >
            {renderTab(tab)}
            </TabBar.Item>
        </TabBar>
    )
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 22,
        height: 22,
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
// export default Home