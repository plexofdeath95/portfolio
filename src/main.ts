import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { auth } from './firebase/firebase';
import { getUser } from './composables/firebaseComposables/Firestore/UserSchema/UserOps';

let app:any;

//wait for firebase auth to init before creating the app
auth.onAuthStateChanged(async (user) => {
    if(!app)
    {
        localStorage.removeItem('user');
        app = createApp(App)
        app.use(router)
        if(user)
        {
            const userDoc = await getUser(user.uid)
            localStorage.setItem('user', JSON.stringify(userDoc))
        }
        app.mount('#app')
    }
}
)
