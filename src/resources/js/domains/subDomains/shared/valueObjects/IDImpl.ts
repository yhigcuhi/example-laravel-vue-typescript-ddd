/***********************************
 * ID 値オブジェクト クラス
 ***********************************/
/* import abstract */
import ValueObjectImpl from './ValueObjectImpl';
/* import type */
import {ID} from '@/@types';
import {FormatError} from '@/exceptions/FormatError';


/**
 * ID 共通 値オブジェクトクラス
 */
export default abstract class IDImpl extends ValueObjectImpl implements ID {
    /**
     * 値の整合性チェック
     * @param value
     */
    validate(value: number): void {
        // 値形式
        if (value < 0) throw new FormatError(this.FORMAT_ERROR_MESSAGE);
    }

    /**
     * @returns {string} フォマットエラーメッセージ 共通取得
     */
    get FORMAT_ERROR_MESSAGE(): string {
        // フォマットエラーメッセージ
        const message = (this.constructor as typeof ValueObjectImpl).FORMAT_ERROR_MESSAGE
        // 指定なし ?? デフォルトメッセージ
        return message ?? `${this.TYPE_NAME}は 1以上の値を指定してください`;
    }
}
