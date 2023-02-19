/* import class */
import {PlayerEntity} from './entities';
import {FirstName, FirstNameKana, LastName, LastNameKana, PlayerId} from './valueObjects';
/* import factory */
import {factory as TeamFactory} from '../team';
/* for types */
import {PlayerSchema, TeamSchema} from '@/@types';
import {TeamEntity} from '@/domains/coreDomains/team/entities';
import {TeamCd, TeamName} from '@/domains/coreDomains/team/valueObjects';


/***********************************
 * 選手Entity 生成関数
 ***********************************/
/**
 * => Entity 生成関数
 * @param {PlayerSchema|PlayerEntity} val 生成元
 * @returns {PlayerEntity} 生成結果
 */
const makeEntity = (val: PlayerSchema|PlayerEntity): PlayerEntity => {
    // 型別の判定
    if (PlayerEntity.is(val)) return val; // 結果の形 => そのまま
    // その他 object => Entity
    const id: PlayerId|undefined = val.id ? PlayerId.of(val.id) : void 0; // 補完
    const belong_team: TeamEntity = makeTeamEntity(val.belong_team); // 補完
    return new PlayerEntity( // Entityへ
        id,
        LastName.of(val.last_name),
        FirstName.of(val.first_name),
        LastNameKana.of(val.last_name_kana),
        FirstNameKana.of(val.first_name_kana),
        Gender[val.gender],
        belong_team,
        TeamCd.of(val.belong_team_cd)
    );
}

/**
 * => TeamEntity
 * @param {TeamSchema} val チームスキーマ
 * @returns {TeamEntity} TeamEntity
 */
const makeTeamEntity = (val: TeamSchema) => TeamFactory.makeEntity(val);
export default {
    makeEntity
}
