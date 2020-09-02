import React, { useState, useRef } from 'react'
import { Text, View, SafeAreaView, StyleSheet, FlatList} from 'react-native'
import { List, Picker, InputItem, Button, Modal } from '@ant-design/react-native'
import { connect } from 'react-redux'
import { changeStep } from '../../../actions/steps';

const mapStateToProps = (state, ownProps) => {
    return {
        step: state.Reduce.step
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeStep: (num) => {
            dispatch(changeStep(num))
        }
    }
}


const Alert = Modal.alert
const Sub = ({ navigation, step, changeStep }) => {
    const domainArr = [{ value: 1, label: '58main' },{ value: 2, label: '58desktop' }]
    const passArr = [{value:0, label: 'deploy'}, {value: 1, label: 'pass'}]
    const tagsArr = [{value:0, label: 'v0.0.1'}, {value: 1, label: 'v0.0.11'},{value:2, label: 'v0.0.3'}, {value: 3, label: 'v0.0.4'}]
    const setNameArr = [{value:0, label: '58ex.com'}, {value: 1, label: '58coin.pro'}]
    const [domain, setDomain] = useState('')
    const [radio, setradio] = useState(0)
    const [setname, setsetname] = useState(0)
    const [tags, settags] = useState('')
    const [tagsList, settagsList] = useState([])
    const [domainList, setdomainList] = useState([])
    const [showSearch, setshowSearch] = useState(false)
    const [showDomain, setshowDomain] = useState(false)
    const tagsRef = useRef(null)
    const domainRef = useRef(null)

    const FilterTag = (val) => {
        let arr = tagsArr.filter(v => v.label.includes(val))
        settagsList(arr)
        settags(val)
        HideFilter('tag')
    }
    const FilterDmain = (val) => {
        let arr = domainArr.filter(v => v.label.includes(val))
        setdomainList(arr)
        setDomain(val)
        HideFilter('domain')
    }
    const HideFilter = (type) => {
        if(type === 'tag') {
            setshowSearch(true)
        } else {
            setshowDomain(true)
        }
        tagsRef.current.blur()
        domainRef.current.blur()
    }
    const SubmitFun = () => {
        let params = {
            domain,
            radio,
            tags,
            setname
        }
        Alert('点击确认即可发布', '请认真确认发布消息!', [{
            text: '取消', onPress: () => {}
        }, {
            text: '确定', onPress: () => {
                setTimeout(() => {
                    changeStep(step+1)
                }, 2000);
            }
        }])
        
    }
    return (
        <View>
            <List renderHeader={() => 'domain'}>
                <InputItem
                    value={domain}
                    placeholder="domain"
                    clear
                    ref={domainRef}
                    onChange={val => FilterDmain(val)}
                    onFocus={() => setshowDomain(true)}
                />
                {
                    showDomain ? (
                        <FlatList
                            keyboardShouldPersistTaps='always'
                            style={styles.optionView}
                            data={domainList.length ? domainList : domainArr}
                            renderItem={({item}) => (
                                <View style={styles.option}>
                                    <Text onPress={() => {
                                        setDomain(item.label)
                                        setshowDomain(false)
                                    }}>{item.label}</Text>
                                </View>
                            )}
                            keyExtractor={item => (item.value).toString()}
                        />
                    ) : (<Text style={{height: 0}}></Text>)
                }
            </List>
            <List renderHeader={() => 'tags'}>
                <InputItem
                    value={tags}
                    clear
                    ref={tagsRef}
                    placeholder="search tag"
                    onChange={val => FilterTag(val)}
                    onFocus={() => setshowSearch(true)}
                />
                {
                    showSearch ? (
                        <FlatList
                            keyboardShouldPersistTaps='always'
                            style={styles.optionView}
                            data={tagsList.length ? tagsList : tagsArr}
                            renderItem={({item}) => (
                                <View style={styles.option}>
                                    <Text onPress={() => {
                                        settags(item.label)
                                        setshowSearch(false)
                                    }}>{item.label}</Text>
                                </View>
                            )}
                            keyExtractor={item => (item.value).toString()}
                        />
                    ) : (<Text style={{height: 0}}></Text>)
                }
            </List>
            <List renderHeader={() => ''}>
                <Picker 
                    title='dptype选择'
                    data={passArr}
                    cols={1}
                    value={radio}
                    onOk={v => setradio(v)}
                >
                    <List.Item arrow="horizontal">dptype</List.Item>
                </Picker>
            </List>
            <List renderHeader={() => ''}>
                <Picker 
                    title='sitename'
                    data={setNameArr}
                    cols={1}
                    value={setname}
                    onOk={v => setsetname(v)}
                >
                    <List.Item arrow="horizontal">sitename</List.Item>
                </Picker>
            </List>
            <View style={styles.button}>
                <Button type="primary" onPress={() => SubmitFun()}>发 布</Button>
            </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Sub)