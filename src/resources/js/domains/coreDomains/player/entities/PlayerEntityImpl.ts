/* import abstract */
import EntityImpl from '@/domains/subDomains/shared/entities/EntityImpl';
/* import util */
import {every, isNull} from 'lodash';
/* for types */
import {
    FirstName,
    FirstNameKana,
    LastName,
    LastNameKana,
    PlayerEntity, PlayerId,
    TeamCd,
    TeamEntity
} from '@/@types';
import {Entity} from '@/@types/domains/entities/Entity';


/**
 * 選手 Entity
 */
export default class PlayerEntityImpl extends EntityImpl implements PlayerEntity {
    // フィールド
    readonly id?: PlayerId // 選手ID
    readonly last_name: LastName; // 名前（姓）
    readonly first_name: FirstName; //  名前（名）
    readonly last_name_kana: LastNameKana; // ふりがな（姓）
    readonly first_name_kana: FirstNameKana; // ふりがな（名）
    readonly gender: Gender; // 性別
    readonly belong_team: TeamEntity; // 所属チーム
    readonly belong_team_cd: TeamCd; // 所属チームコード

    /**
     * コンストラクタ
     * @param id
     * @param last_name
     * @param first_name
     * @param last_name_kana
     * @param first_name_kana
     * @param gender
     * @param belong_team
     * @param belong_team_cd
     */
    constructor(id: PlayerId|undefined = void 0, last_name: LastName, first_name: FirstName, last_name_kana: LastNameKana, first_name_kana: FirstNameKana, gender: Gender, belong_team: TeamEntity, belong_team_cd: TeamCd) {
        super();
        this.id = id;
        this.last_name = last_name;
        this.first_name = first_name;
        this.last_name_kana = last_name_kana;
        this.first_name_kana = first_name_kana;
        this.gender = gender;
        this.belong_team = belong_team;
        this.belong_team_cd = belong_team_cd;
    }

    /**
     * @returns {string} ふりがな (名前)
     */
    kana(): string { return `${this.last_name_kana.value()} ${this.first_name_kana.value()}`; }

    /**
     * @returns {string} 名前
     */
    name(): string { return `${this.last_name.value()} ${this.first_name.value()}`; }

    /**
     * 値同一判定
     * @param entity 判定する値
     * @returns {boolean} true:同一/false:それ以外
     */
    equals(entity: Entity): boolean {
        // インスタンス判定
        if (!PlayerEntityImpl.is(entity)) return false; // 別インスタンスは除く
        // 値同一判定 = unique
        return every([
            // 同一名、チーム
            this.name() === entity.name(),
            this.belong_team.equals(entity.belong_team),
        ]);
    }

    /**
     * @returns {Record<string, any>} シリアライズ
     */
    serialize(): Record<string, any> {
        return {
            id: this.id?.value(), // id
            last_name: this.last_name.value(), // 名前（姓）
            first_name: this.first_name.value(), //  名前（名）
            last_name_kana: this.last_name_kana.value(), // ふりがな（姓）
            first_name_kana: this.first_name_kana.value(),// ふりがな（名）
            gender: this.gender, // 性別
            belong_team: this.belong_team.serialize(), // 所属チーム
            belong_team_cd: this.belong_team_cd.value(), // 所属チームコード
        };
    }

    /**
     * 指定値が この値オブジェクトである判定
     * @param val 値
     */
    static is(val: any): val is PlayerEntity { return val instanceof PlayerEntityImpl; }

    /**
     * 新規登録値 判定
     */
    isCreate(): boolean { return isNull(this.id); }
}
