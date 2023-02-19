/***********************************
 * 選手サービス
 ***********************************/
/* import repository */
import repository from './repository';
/* import factory */
import factory from './factory';
/* import util */
import {map} from 'lodash';
/* for type */
import {PlayerEntity} from '@/@types';

/**
 * @returns {Promise<PlayerEntity[]>} 選手一覧取得
 */
const getAll = async (): Promise<PlayerEntity[]> => {
    // 選手一覧取得
    const items = await repository.getAll();
    // 選手一覧 スキーマを Entityに変換
    return map(items, factory.makeEntity);
}

// export 1moduleとして
export default {
    getAll
}

