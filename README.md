# reactNativeTest

安装antd UI
npm install @ant-design/react-native --save


import { Provider as AntProvider } from '@ant-design/react-native'
<AntProvider>
    <App />
</AntProvider>

安装字体库
npm install @ant-design/icons-react-native --save

建立连接
react-native link @ant-design/icons-react-native 

如果不成功执行 
npx react-native link