/* import util */
import {isEmpty, isNull} from 'lodash';
/* import error */
import {FormatError} from '@/exceptions/FormatError';
import {RequiredError} from '@/exceptions/RequiredError';
/* for type */
import {ValueObject} from '@/@types/domains/valueObjects/ValueObjects';

/**
 * 値オブジェクト 共通クラス
 * @param {VALUE} 値
 */
export default abstract class ValueObjectImpl<VALUE> implements ValueObject<VALUE> {
    // 定数
    static readonly TYPE_NAME: string; // 値オブジェクト 名
    static readonly REQUIRED_ERROR_MESSAGE: string|undefined; // 値必須エラーメッセージ
    static readonly FORMAT_ERROR_MESSAGE: string|undefined; // フォマットエラーメッセージ
    // フィールド 値
    private readonly val: VALUE

    /**
     * 共通コンストラクタ
     * @param val 値
     */
    protected constructor(val: VALUE) {
        // 値の整合性チェック
        this.validate(val);
        // 値設定s
        this.val = val
    }

    /**
     * @returns {VALUE} getter
     */
    protected value(): Readonly<VALUE> { return this.val; }

    /**
     * @param {this} val 値同一判定
     * @returns {boolean} true: 同一の値 / false:それ以外
     */
    protected equals(val: ValueObject<VALUE>|VALUE): boolean {
        // 型別の 値同一判定
        if (val instanceof ValueObjectImpl) return this.equals(val.value()); // 値オブジェクトの場合 値で判定
        else return this.val === (val as VALUE);
    }

    /**
     * 値の 整合性チェック
     * @param {VALUE} val チェックする値
     * @throws e エラー
     */
    abstract validate(val: VALUE): void
    /**
     * 値必須チェック
     * @param {VALUE} value 判定値
     * @throws RequiredError 必須エラー
     */
    protected validateRequired(value: VALUE): void {
        // 結果 整合性チェック = 初期値 正常
        let validate = true;
        switch (typeof this.value()) {
            // 数値の場合
            case 'number':
                validate = !isNull(value); // NULL以外
                break;
            // それ以外
            default:
                validate = !isEmpty(value); // それ以外は 値あり
                break;
        }
        // 空 => 必須エラー
        if (!validate) throw new RequiredError(this.REQUIRED_ERROR_MESSAGE);
    }
    /**
     * 値同一判定
     * @param {VALUE} value 判定値
     * @param {RegExp} regExp 判定正規表現
     * @throws FormatError フォーマットみすs
     */
    protected validateRegExp(value: VALUE, regExp: RegExp): void {
        if (!`${value}`.match(regExp)) throw new FormatError(this.FORMAT_ERROR_MESSAGE);
    }

    /**
     * @returns {string} 値オブジェクト 名共通取得
     */
    get TYPE_NAME(): string {
        return (this.constructor as typeof ValueObjectImpl).TYPE_NAME
    }

    /**
     * @returns {string} 必須エラーメッセージ 共通取得
     */
    get REQUIRED_ERROR_MESSAGE(): string {
        // 値必須エラーメッセージ
        const message = (this.constructor as typeof ValueObjectImpl).REQUIRED_ERROR_MESSAGE
        // 指定なし ?? デフォルトメッセージ
        return message ?? `${this.TYPE_NAME}の入力は必須です`;
    }
    /**
     * @returns {string} フォマットエラーメッセージ 共通取得
     */
    get FORMAT_ERROR_MESSAGE(): string {
        // フォマットエラーメッセージ
        const message = (this.constructor as typeof ValueObjectImpl).FORMAT_ERROR_MESSAGE
        // 指定なし ?? デフォルトメッセージ
        return message ?? `${this.TYPE_NAME}のフォーマットは不正です`;
    }
}
