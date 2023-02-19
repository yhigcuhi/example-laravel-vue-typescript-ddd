/***********************************
 * 選手 Entity
 ***********************************/
/* import 継承 */
import {Entity} from '@/@types/domains/entities/Entity';
/* for types */
import {
    PlayerId,
    LastName,
    FirstName,
    LastNameKana,
    FirstNameKana,
    TeamCd,
    TeamEntity,
} from '@/@types';


// 選手 Entity
export interface PlayerEntity extends Entity {
    // フィールド
    readonly id?: PlayerId // 選手ID
    readonly last_name: LastName // 名前（姓）
    readonly first_name: FirstName // 名前（名）
    readonly last_name_kana: LastNameKana, // ふりがな（姓）
    readonly first_name_kana: FirstNameKana // ふりがな（名）
    readonly belong_team_cd: TeamCd // 所属チームコード
    readonly gender: Gender // 性別
    readonly belong_team: TeamEntity // 所属チーム

    // 新規登録値である
    isCreate: () => boolean
    // 名前取得
    name: () => string
    // ふりがな取得
    kana: () => string
}
