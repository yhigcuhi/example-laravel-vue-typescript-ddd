/* for type */
import {Entity} from '@/@types/domains/entities/Entity';
/**
 * Entity 共通クラス
 */
export default abstract class EntityImpl implements Entity {
    /**
     * 値同一判定
     * @param {Entity} entity 判定する値
     */
    abstract equals(entity: Entity): boolean
    /**
     * @returns {Record<string, any>} シリアライズ => 連装配列
     */
    abstract serialize(): Record<string, any>
}
