/* import 設定 */
import './bootstrap';
/* import vue */
import { createApp } from 'vue'
/* import css */
import 'bootstrap'; // bootstrap利用
/* import 部品 */
import App from './App.vue'

// 一旦 SPAとして記述
const app = createApp(App)
app.mount('#app')
