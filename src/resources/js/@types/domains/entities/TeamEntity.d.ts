/***********************************
 * 選手 Entity
 ***********************************/
/* import 継承 */
import {Entity} from '@/@types/domains/entities/Entity';
/* import valueObjects */
import {TeamCd, TeamName} from '@/@types/domains/valueObjects';

// 選手 Entity
export interface TeamEntity extends Entity {
    // フィールド
    readonly team_cd: TeamCd // チームコード (PK)
    readonly name: TeamName // チーム名
}
