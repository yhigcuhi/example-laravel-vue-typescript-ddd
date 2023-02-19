// value object 共通インターフェイス TODO:declare 使うべきか？
export interface ValueObject<VALUE> {
    // 値取得 (getter)
    value: () => Readonly<VALUE>
    // 同一判定
    equals: (value: ValueObject<VALUE>|VALUE) => boolean
    // 値 整合性 確認
    validate: (value: VALUE) => void
}
