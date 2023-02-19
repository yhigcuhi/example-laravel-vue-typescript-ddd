/* import class */
import {TeamEntity} from './entities';
import {TeamCd, TeamName} from './valueObjects';
/* for types */
import {TeamSchema} from '@/@types';


/***********************************
 * player 生成関数
 ***********************************/
/**
 * => Entity 生成関数
 * @param {TeamSchema|TeamEntity} val 生成元
 * @returns {TeamEntity} 生成結果
 */
const makeEntity = (val: TeamSchema|TeamEntity): TeamEntity => {
    // 型別の判定
    if (TeamEntity.is(val)) return val; // 結果の形 => そのまま
    // その他 object => Entity
    // field => value object
    const {team_cd, name} = val; // 対応のフィールド取得
    return new TeamEntity(TeamCd.of(team_cd), TeamName.of(name)); // Entityへ
}
export default {
    makeEntity
}
