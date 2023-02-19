/* import abstract */
import {ID} from '@/domains/subDomains/shared/valueObjects';
/* import type */
import {PlayerId} from '@/@types';

/**
 * 選手ID 値オブジェクト
 */
export default class PlayerIdImpl extends ID implements PlayerId {
    // 定数
    static readonly TYPE_NAME: string = '選手ID' // 値オブジェクト名

    /**
     * 値生成関数
     * @param val
     * @returns {PlayerId} 選手ID
     */
    static of(val: any): PlayerId { return new PlayerIdImpl(val); }

    /**
     * 指定値が この値オブジェクトである判定
     * @param val 値
     */
    static is(val: any): val is PlayerId { return val instanceof PlayerIdImpl; }
}
