/* import abstract */
import {NameKana} from '@/domains/subDomains/shared/valueObjects';
/* import type */
import {LastNameKana} from '@/@types';

/**
 * ふりがな（姓）値オブジェクト
 */
export default class LastNameKanaImpl extends NameKana implements LastNameKana {
    // 定数
    static readonly TYPE_NAME: string = '名前（姓）' // 値オブジェクト名

    /**
     * 値生成関数
     * @param val
     * @returns {LastName} 値
     */
    static of(val: any): LastNameKana { return new LastNameKanaImpl(val); }

    /**
     * 指定値が この値オブジェクトである判定
     * @param val 値
     */
    static is(val: any): val is LastNameKana { return val instanceof LastNameKanaImpl; }
}
