import axios from './axios'

const Login = {
    test() {
        return axios.get('/mix/market/ticker/list')
    }
}

export default Login