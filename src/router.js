import vueRouter from 'vue-router'
import Balance from './components/Balance'
import Record from './components/Record'
import App from './App'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [{
            path: '/',
            name: "root",
            component: Record
        },
        {
            path: '/newrecord',
            name: "Record",
            component: Record
        },
        {
            path: '/records',
            name: "Balance",
            component: Balance
        },
    ]
})

export default router