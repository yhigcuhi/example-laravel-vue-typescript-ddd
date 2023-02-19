// entity(単品オブジェクト) 共通インターフェイス TODO: declare classか？
export interface Entity {
    // シリアライズ => 連装配列
    serialize: () => Record<string, any>
    // 同一判定
    equals: (entity: Entity) => boolean
}
