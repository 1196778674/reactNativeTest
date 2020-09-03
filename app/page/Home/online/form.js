import React, { useState, useRef } from 'react'
import { Text, View, SafeAreaView, StyleSheet, FlatList} from 'react-native'
import { List, Picker, InputItem, Button, ActivityIndicator, Toast, Checkbox } from '@ant-design/react-native'

const CheckboxItem = Checkbox.CheckboxItem
const Form = ({ changeStepOn }) => {
    const domainArr = [{ value: 1, label: '58main' },{ value: 2, label: '58desktop' }]
    const hostArr = [{ value: 1, label: '58ex.com' },{ value: 2, label: '58coin.pro' }]
    const checkArr = [{ value: 1, label: '127.0.0.1' }, { value: 2, label: '127.0.0.2' }]
    const zipArr = [{ value: 1, label: '2000000000.zip' },{ value: 2, label: '2000000001.zip' }]

    const [domain, setdomain] = useState('')
    const [domainList, setdomainList] = useState([])
    const [showDomain, setshowDomain] = useState(false)

    const [host, sethost] = useState('')
    const [hostList, sethostList] = useState([])
    const [showhost, setshowhost] = useState(false)

    const [zip, setZip] = useState('')

    const [toast, settoast] = useState(false)

    const Filter = (val, list, type) => {
        let arr = list.filter(v => v.label.includes(val))
        if(type === 1){
            setdomainList(arr)
            setdomain(val)
            setshowDomain(true)
        }
        if(type === 2) {
            sethostList(arr)
            sethost(val)
            setshowhost(true)
            // 获取ip
            getIpList(val)
        }
    }
    // 获取ip
    const getIpList = (val) => {

    }
    // 发布
    const SubmitFun = () => {
        let ips = []
        checkArr.map(item => {
            if(!!item.checked) {
                ips.push(item.value)
            }
        });
        let params = {
            domain,
            host,
            zip,
            ips
        }
        console.log('\n\n------ begin: params ------')
        console.log(params)
        console.log('------ end: params ------\n\n')
        settoast(true)
        setTimeout(() => {
            settoast(false)
            changeStepOn(2)
        }, 2000);
    }
    return (
        <View>
            <List renderHeader={() => '项目'}>
                <InputItem
                    value={domain}
                    placeholder="请选择项目"
                    clear
                    onChange={val => Filter(val, domainArr, 1)}
                    onFocus={() => setshowDomain(true)}
                />
                {
                    showDomain ? (<FlatList
                        keyboardShouldPersistTaps='always'
                        style={styles.optionView}
                        data={domainList.length ? domainList : domainArr}
                        renderItem={({item}) => (
                            <View style={styles.option}>
                                <Text onPress={() => {
                                    setdomain(item.label)
                                    setshowDomain(false)
                                }}>{item.label}</Text>
                            </View>
                        )}
                        keyExtractor={item => (item.value).toString()}
                    />) : (<Text style={{height: 0}}></Text>)
                }
            </List>
            <List renderHeader={() => '主站'}>
                <InputItem
                    value={host}
                    placeholder="请选择发布站点"
                    clear
                    onChange={val => Filter(val, hostArr, 2)}
                    onFocus={() => setshowhost(true)}
                />
                {
                    showhost ? (<FlatList
                        keyboardShouldPersistTaps='always'
                        style={styles.optionView}
                        data={hostList.length ? hostList : hostArr}
                        renderItem={({item}) => (
                            <View style={styles.option}>
                                <Text onPress={() => {
                                    sethost(item.label)
                                    setshowhost(false)
                                }}>{item.label}</Text>
                            </View>
                        )}
                        keyExtractor={item => (item.value).toString()}
                    />) : (<Text style={{height: 0}}></Text>)
                }
            </List>
            <List renderHeader={() => '更新ip'}>
                {checkArr.map(v => (
                    <CheckboxItem key={v.value} onChange={(e) => {
                        v['checked'] = e.target.checked
                    }}>
                        {v.label}
                    </CheckboxItem>
                ))}
            </List>
            <List renderHeader={() => '主站包'}>
                <Picker 
                    title='主站包选择'
                    data={zipArr}
                    cols={1}
                    value={zip}
                    onOk={v => setZip(v)}
                >
                    <List.Item arrow="horizontal">主站包</List.Item>
                </Picker>
            </List>
            <View style={styles.button}>
                <Button type="primary" onPress={() => SubmitFun()}>发 布</Button>
            </View>
            <ActivityIndicator
                toast
                size='large'
                text="项目发布中"
                animating={toast}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: '#000',
        padding: 15,
        paddingLeft: 0,
    },
    optionView: {
        maxHeight: 70,
    },
    option: {
        paddingTop: 10,
        paddingLeft: 15,
        paddingBottom: 5,
        borderBottomColor: '#fcfcfc',
        borderBottomWidth: 1,
    },
    button: {
        marginTop: 30,
    }
})

export default Form