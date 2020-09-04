# reactNativeTest

安装antd UI
npm install @ant-design/react-native --save

import { Provider as AntProvider } from '@ant-design/react-native'

安装字体库
npm install @ant-design/icons-react-native --save

建立连接
react-native link @ant-design/icons-react-native 

如果不成功执行 
npx react-native link

配置路由
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Home from './Home'
const router = createStackNavigator({
        Home: {
            screen: Home,
            navigationOptions:{
                title:'首页', 
                tabBarVisible: false, 
                swipeEnabled: true,    
            }
        }
    },
    {
        initialRouteName: 'Home'
    });

const Router = createAppContainer(router)
export default Router

路由传参
navigation.navigate({routeName: "One", params: {id: 1}})
获取参数
navigation.state.params.id

