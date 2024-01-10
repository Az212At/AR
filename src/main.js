import { createApp } from 'vue'
import App from './App.vue'
import myComponent from "@/myComponent.vue";


const app = createApp(App);
app.component('my-component', myComponent)
app.mount('#app')
