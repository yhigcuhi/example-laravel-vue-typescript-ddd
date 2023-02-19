/*********************************************
 * REST API Schema定義：集約
 *********************************************/
// チームスキーマ
export type TeamSchema = {
    team_cd: string // チームコード (PK)
    name: string // チーム名
}
// 選手スキーマ
export type PlayerSchema = {
    id?: number // 選手ID (指定なし 登録)
    last_name: string // 名前（姓）
    first_name: string // 名前（名）
    last_name_kana: string, // ふりがな（姓）
    first_name_kana: string // ふりがな（名）
    belong_team_cd: string // 所属チームコード
    gender: 'MEN' | 'WOMEN' // 性別
    belong_team: TeamSchema // 所属チーム
}
// 選手予定 スキーマ
export type PlayerScheduleSchema = {
    id?: number // 選手予定ID (指定なし 登録)
    player_id: number // 選手ID
    schedule_day: string // 予定 日 (yyyy-MM-dd)
    schedule_start_at: string // 予定 開始時間 (hh:mm:ss)
    schedule_end_at: string // 予定 終了時間 (hh:mm:ss)
    schedule_type: 'MLEAGUE' | 'ETC' // スケジュール種別
    name: string // 予定 名
    overview?: string|null // 予定 概要
    note?: string|null // 予定 内容
    player: PlayerSchema // 選手情報
}
