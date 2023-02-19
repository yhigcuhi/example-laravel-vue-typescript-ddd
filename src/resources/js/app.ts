/***********************************
 * エントリーポイント
 ***********************************/
/* import 設定 */
import './bootstrap';
/* import vue */
import { createApp } from 'vue'
/* import css */
import 'bootstrap'; // bootstrap利用
/* import 部品 */
import Players from '@/components/pages/Players.vue'; // 選手一覧
import PlayerSchedules from '@/components/pages/PlayerSchedules.vue'; // 選手予定一覧
import App from '@/App.vue'
/* import vuex */
import {key, store} from '@/store';

// MPA componentsとして配布
createApp({
    components: {
        MainApp: App,
        Players,
        PlayerSchedules,
    }
})
    .use(store, key) // vuex利用
    .mount('#app') // マウント先登録
;
