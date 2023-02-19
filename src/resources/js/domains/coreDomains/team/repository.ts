/***********************************
 * チームリポジトリ
 ***********************************/
/* import infrastructure */
import {getTeams} from '@/api/teams'; // データ操作 API
/* for type */
import {TeamSchema} from '@/@types';
/**
 * @return {TeamSchema[]} チーム一覧取得
 */
const getAll = async (): Promise<TeamSchema[]> => {
    // チーム一覧取得 by api
    const response = await getTeams(); // 通信実行
    return response.data; // 通信結果
};

// export 1moduleとして
export default {
    getAll
}
