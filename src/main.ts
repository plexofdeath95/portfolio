import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { auth } from './firebase/firebase';

let app:any;

//wait for firebase auth to init before creating the app
auth.onAuthStateChanged((user) => {
    if(!app)
    {
        app = createApp(App)
        app.use(router)
        app.mount('#app')
    }
}
)
