/* import abstract */
import {NameKanji} from '@/domains/subDomains/shared/valueObjects';
/* import type */
import {LastName} from '@/@types';

/**
 * 名前（姓）値オブジェクト
 */
export default class LastNameImpl extends NameKanji implements LastName {
    // 定数
    static readonly TYPE_NAME: string = '名前（姓）' // 値オブジェクト名

    /**
     * 値生成関数
     * @param val
     * @returns {LastName} 名前（姓）
     */
    static of(val: any): LastName { return new LastNameImpl(val); }

    /**
     * 指定値が この値オブジェクトである判定
     * @param val 値
     */
    static is(val: any): val is LastName { return val instanceof LastNameImpl; }
}
