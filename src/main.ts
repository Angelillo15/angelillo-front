import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
/** Dependencies */
import Vuesax from 'vuesax3'
import 'vuesax3/dist/vuesax.css'
import "boxicons";
import "boxicons/css/boxicons.min.css";

const app = createApp(App)
app.use(router)
app.use(Vuesax as any)
app.mount('#app')
