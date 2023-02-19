/***********************************
 * 選手リポジトリ
 ***********************************/
/* import infrastructure */
import {getPlayers} from '@/api/playes'; // データ操作 API
/* for type */
import {PlayerSchema} from '@/@types';
/**
 * @return {PlayerSchema[]} 選手一覧取得
 */
const getAll = async (): Promise<PlayerSchema[]> => {
    // 選手一覧取得 by api
    const response = await getPlayers(); // 通信実行
    return response.data; // 通信結果
};

// export 1moduleとして
export default {
    getAll
}
