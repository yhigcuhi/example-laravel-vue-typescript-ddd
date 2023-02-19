/* import abstract */
import {Name} from '@/domains/subDomains/shared/valueObjects';
/* import type */
import {TeamName} from '@/@types';

/**
 * チーム名 値オブジェクト
 */
export default class TeamNameImpl extends Name implements TeamName {
    // 定数
    static readonly TYPE_NAME: string = 'チーム名' // 値オブジェクト名

    /**
     * 値生成関数
     * @param val
     * @returns {LastName} 名前（姓）
     */
    static of(val: any): TeamName { return new TeamNameImpl(val); }

    /**
     * 指定値が この値オブジェクトである判定
     * @param val 値
     */
    static is(val: any): val is TeamName { return val instanceof TeamNameImpl; }
}
