
/***********************************
 * team module
 ***********************************/
/* import domain */
import {service} from '@/domains/coreDomains/team';
/* for type */
import {ActionTree, GetterTree, Module, MutationTree} from 'vuex';
import {RootState} from '@/store';
import commonState, {CommonState} from '../commonState';
import {TeamEntity} from '@/@types';

// 保存する値の形
type State = CommonState & {
    all: TeamEntity[], // チーム一覧
}
const state: State = {
    ...commonState,
    all: [], // チーム一覧
}

// 値取得 関数 (componentsで使えるところ)
const getters: GetterTree<State, RootState> = {
    // TODO: gettersの各Getter<State>は Stateの取得というより算出関数(computed)として扱う意味合いが正しいのかと...
    // チーム数
    teamCount: (state: State): () => number => () => state.all.length, // TODO: 使わないが、上記の例
    // チーム一覧
    teams: (state) => () => state.all,
};

const actions: ActionTree<State, RootState> = {
    // 一覧 最新化
    async fetchAll({state, commit}) {
        // 前提条件
        if (state.fetched) return; // 取得済み 不要
        commit('fetched'); // フェッチ済みへ

        // 一覧 GET -> 内部状態変更
        const entities = await service.getAll(); // 一覧 取得
        commit('setTeams', entities); // 内部状態変更
    },
};

const mutations: MutationTree<State> = {
    // 一覧 設定
    setTeams: (state, all: State['all']) => {state.all = all; },
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
