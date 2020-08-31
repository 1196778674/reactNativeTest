import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, View, Text, Image } from 'react-native'
import { TabBar, Icon, Button } from '@ant-design/react-native';
import { connect } from 'react-redux'
import { changeTab } from '../actions'

// component
import One from './Home/one';
import Two from './Home/two';
import Three from './Home/three';
import Four from './Home/four';

const mapStateToProps = (state) => {
    return {
    tab: state.Tab.tab
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
        if(tab === 1) return (<One/>)
        if(tab === 2) return (<Two/>)
        if(tab === 3) return (<Three/>)
        if(tab === 4) return (<Four/>)
    }
    return (
        <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        >
            <TabBar.Item
                title="One"
                key="One"
                icon={
                    (
                        <Image
                            style={styles.tinyLogo}
                            source={require('../images/home.png')}
                        />
                    )
                }
                selectedIcon={
                    (
                        <Image
                            style={styles.tinyLogo}
                            source={require('../images/homeSelect.png')}
                        />
                    )
                }
                selected={tab === 1}
                onPress={() => {
                    setTab(1)
                    changeTab(1)
                }}
            >
            {renderTab(tab)}
            </TabBar.Item>
            <TabBar.Item
                title="Two"
                key="Two"
                icon={
                    (
                        <Image
                            style={styles.tinyLogo}
                            source={require('../images/home.png')}
                        />
                    )
                }
                selectedIcon={
                    (
                        <Image
                            style={styles.tinyLogo}
                            source={require('../images/homeSelect.png')}
                        />
                    )
                }
                selected={tab === 2}
                onPress={() => {
                    setTab(2)
                    changeTab(2)
                }}
            >
            {renderTab(tab)}
            </TabBar.Item>
            <TabBar.Item
                title="Three"
                key="Three"
                icon={
                    (
                        <Image
                            style={styles.tinyLogo}
                            source={require('../images/home.png')}
                        />
                    )
                }
                selectedIcon={
                    (
                        <Image
                            style={styles.tinyLogo}
                            source={require('../images/homeSelect.png')}
                        />
                    )
                }
                selected={tab === 3}
                onPress={() => {
                    setTab(3)
                    changeTab(3)
                }}
            >
            {renderTab(tab)}
            </TabBar.Item>
            <TabBar.Item
                title="我的"
                key="my"
                icon={
                    (
                        <Image
                            style={styles.tinyLogo}
                            source={require('../images/home.png')}
                        />
                    )
                }
                selectedIcon={
                    (
                        <Image
                            style={styles.tinyLogo}
                            source={require('../images/homeSelect.png')}
                        />
                    )
                }
                selected={tab === 4}
                onPress={() => {
                    setTab(4)
                    changeTab(4)
                }}
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