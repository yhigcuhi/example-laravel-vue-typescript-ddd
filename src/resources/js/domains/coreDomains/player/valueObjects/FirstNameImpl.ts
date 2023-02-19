/* import abstract */
import {NameKanji} from '@/domains/subDomains/shared/valueObjects';
/* import type */
import {FirstName} from '@/@types';

/**
 * 名前（名）値オブジェクト
 */
export default class FirstNameImpl extends NameKanji implements FirstName {
    // 定数
    static readonly TYPE_NAME: string = '名前（名）' // 値オブジェクト名

    /**
     * 値生成関数
     * @param val
     * @returns {LastName} 名前（名）
     */
    static of(val: any): FirstName { return new FirstNameImpl(val); }

    /**
     * 指定値が この値オブジェクトである判定
     * @param val 値
     */
    static is(val: any): val is FirstName { return val instanceof FirstNameImpl; }
}
