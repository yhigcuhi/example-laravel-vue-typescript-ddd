
/***********************************
 * player module
 ***********************************/
/* import domain */
import {service} from '@/domains/coreDomains/player';
/* for type */
import {ActionTree, GetterTree, Module, MutationTree} from 'vuex';
import {RootState} from '@/store';
import commonState, {CommonState} from '../commonState';
import {PlayerEntity} from '@/@types';

// 保存する値の形
type State = CommonState & {
    all: PlayerEntity[], // 選手一覧
}
const state: State = {
    ...commonState,
    all: [], // 選手一覧
    // TODO: form
}

// 値取得 関数 (componentsで使えるところ)
const getters: GetterTree<State, RootState> = {
    // 選手一覧
    players: (state) => () => state.all,
    // TODO: 登録・編集フォーム 取得
    // TODO: フォームのエラー取得
};

const actions: ActionTree<State, RootState> = {
    // 一覧 最新化
    async fetchAll({state, commit}) {
        // 前提条件
        if (state.fetched) return; // 取得済み 不要
        commit('fetched'); // フェッチ済みへ
        // 選手一覧 GET -> 内部状態変更
        const entities = await service.getAll(); // 一覧 取得
        commit('setPlayers', entities); // 内部状態変更
    },
    // TODO:登録編集フォームのアイテム生成とかも
    // TODO:バリデーションとかも
};

const mutations: MutationTree<State> = {
    // 一覧 設定
    setPlayers: (state, players: State['all']) => {state.all = players; },
    // fetch済みへ
    fetched: (state) => {state.fetched = true; },
    // クリア
    clear: (state) => {
        state.fetched = commonState.fetched;
        state.all = []
    },
}


// export module
const module: Module<State, RootState> = {
    namespaced: true, // 名前空間利用
    // vuex moduleの内容たち
    state,
    getters,
    actions,
    mutations,
}
export default module;
