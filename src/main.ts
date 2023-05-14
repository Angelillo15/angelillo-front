import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
/** Dependencies */
import Vuesax from 'vuesax3'
import 'vuesax3/dist/vuesax.css'
import "boxicons";
import "boxicons/css/boxicons.min.css";
import "minecraft-text/style.css";
import mitt from 'mitt';
import '@sweetalert2/theme-dark/dark.min.css'
const emitter = mitt();

const app = createApp(App)
app.use(router)
app.use(Vuesax as any)
app.config.globalProperties.emitter = emitter;
app.mount('#app')
