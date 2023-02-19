/***********************************
 * チーム サービス
 ***********************************/
/* import repository */
import repository from './repository';
/* import factory */
import factory from './factory';
/* import util */
import {map} from 'lodash';
/* for type */
import {TeamEntity} from '@/@types';

/**
 * @returns {Promise<TeamEntity[]>} チーム一覧取得
 */
const getAll = async (): Promise<TeamEntity[]> => {
    // チーム一覧取得
    const items = await repository.getAll();
    // チーム一覧 スキーマを Entityに変換
    return map(items, factory.makeEntity);
}

// export 1moduleとして
export default {
    getAll
}

