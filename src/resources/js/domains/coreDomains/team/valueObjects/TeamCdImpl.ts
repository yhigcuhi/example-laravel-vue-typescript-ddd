/* import abstract */
import ValueObjectImpl from '@/domains/subDomains/shared/valueObjects/ValueObjectImpl';
/* import type */
import {TeamCd} from '@/@types';
// 内部参照可能定数
const FORMAT: RegExp = /\d{3}/g; // 正規表現
/**
 * チームコード 値オブジェクト
 */
export default class TeamCdImpl extends ValueObjectImpl implements TeamCd {
    // 定数
    static readonly TYPE_NAME: string = 'チームコード' // 値オブジェクト名

    /**
     * 値の整合性チェック
     * @param value
     */
    validate(value: string): void {
        // 正規表現チェック
        this.validateRegExp(value, FORMAT);
    }
    /**
     * 値生成関数
     * @param val
     * @returns {LastName} 名前（名）
     */
    static of(val: any): TeamCdImpl { return new TeamCdImpl(val); }

    /**
     * 指定値が この値オブジェクトである判定
     * @param val 値
     */
    static is(val: any): val is TeamCd { return val instanceof TeamCdImpl; }
}
