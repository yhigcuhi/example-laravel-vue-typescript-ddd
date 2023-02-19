/* import abstract */
import {NameKana} from '@/domains/subDomains/shared/valueObjects';
/* import type */
import {FirstNameKana} from '@/@types';

/**
 * ふりがな（名）値オブジェクト
 */
export default class FirstNameKanaImpl extends NameKana implements FirstNameKana {
    // 定数
    static readonly TYPE_NAME: string = '名前（名）' // 値オブジェクト名

    /**
     * 値生成関数
     * @param val
     * @returns {LastName} 値
     */
    static of(val: any): FirstNameKana { return new FirstNameKanaImpl(val); }

    /**
     * 指定値が この値オブジェクトである判定
     * @param val 値
     */
    static is(val: any): val is FirstNameKana { return val instanceof FirstNameKanaImpl; }
}
