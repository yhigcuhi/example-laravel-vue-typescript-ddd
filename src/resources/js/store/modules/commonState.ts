/***********************************
 * vuex moduleのstate 共通定義
 ***********************************/
// 共通 State定義
export type CommonState = {
    // 取得通信済み (true: 済み / false: 未実行)
    fetched?: boolean,
    // 通信中 (true: 通信中 / false: 未実行)
    processing?: boolean,
    // エラー
    errors?: Record<string, string>
}
const state: CommonState = {
    // 取得通信済み (true: 済み / false: 未実行)
    fetched: false,
    // 通信中 (true: 通信中 / false: 未実行)
    processing: false,
    // エラー
    errors: {}
};
export default state;
