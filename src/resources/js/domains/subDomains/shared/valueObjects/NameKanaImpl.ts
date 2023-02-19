/***********************************
 * 名前(かな) 値オブジェクト クラス
 ***********************************/
/* import abstract */
import Name from './NameImpl';
/* import type */
import {NameKana} from '@/@types';

// 内部参照可能定数
const FORMAT: RegExp = /^[ぁ-んー]{1,15}$/; // 正規表現
/**
 * 名前 かな 共通 値オブジェクトクラス
 */
export default abstract class NameKanjiImpl extends Name implements NameKana {
    // 定数
    static readonly FORMAT_ERROR_MESSAGE: string|undefined; // フォマットエラーメッセージ

    /**
     * 値の整合性チェック
     * @param value
     */
    validate(value: string): void {
        // 共通チェック
        super.validate(value);
        // 正規表現チェック
        this.validateRegExp(value, FORMAT);
    }

    /**
     * @returns {string} フォマットエラーメッセージ 共通取得
     */
    get FORMAT_ERROR_MESSAGE(): string {
        // フォマットエラーメッセージ
        const message = (this.constructor as typeof NameKanjiImpl).FORMAT_ERROR_MESSAGE
        // 指定なし ?? デフォルトメッセージ
        return message ?? `${this.TYPE_NAME}は ひらがなで指定してください`;
    }
}
