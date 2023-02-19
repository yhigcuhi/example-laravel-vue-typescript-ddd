/***********************************
 * 名前(漢字) 値オブジェクト クラス
 ***********************************/
/* import abstract */
import ValueObjectImpl from './ValueObjectImpl';
/* import type */
import {Name} from '@/@types';
/**
 * 名前 共通 値オブジェクトクラス
 */
export default abstract class NameKanjiImpl extends ValueObjectImpl implements Name {
    // 定数
    static readonly FORMAT_ERROR_MESSAGE: string|undefined; // フォマットエラーメッセージ

    /**
     * 値の整合性チェック
     * @param value
     */
    validate(value: string): void {
        // 必須チェック
        this.validateRequired(value);
    }
}
