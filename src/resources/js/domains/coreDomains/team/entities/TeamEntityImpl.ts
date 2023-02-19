/* import abstract */
import EntityImpl from '@/domains/subDomains/shared/entities/EntityImpl';
/* for types */
import {
    TeamCd,
    TeamName,
    TeamEntity, PlayerEntity
} from '@/@types';
import {Entity} from '@/@types/domains/entities/Entity';


/**
 * チーム Entity
 */
export default class TeamEntityImpl extends EntityImpl implements TeamEntity {
    // フィールド
    readonly team_cd: TeamCd // チームコード (PK)
    readonly name: TeamName // チーム名

    /**
     * コンストラクタ
     * @param team_cd
     * @param name
     */
    constructor(team_cd: TeamCd, name: TeamName) {
        super();
        this.team_cd = team_cd;
        this.name = name;
    }

    /**
     * 値同一判定
     * @param entity 判定する値
     * @returns {boolean} true:同一/false:それ以外
     */
    equals(entity: Entity): boolean {
        // インスタンス判定
        if (!TeamEntityImpl.is(entity)) return false; // 別インスタンスは除く
        // 値同一判定 = PK
        return this.team_cd.equals(entity.team_cd);
    }
    /**
     * @returns {Record<string, any>} シリアライズ
     */
    serialize(): Record<string, any> {
        return {
            team_cd: this.team_cd.value(), // チームコード
            name: this.name.value() // チーム名
        };
    }
    /**
     * 指定値が この値オブジェクトである判定
     * @param val 値
     */
    static is(val: any): val is TeamEntity { return val instanceof TeamEntityImpl; }
}
