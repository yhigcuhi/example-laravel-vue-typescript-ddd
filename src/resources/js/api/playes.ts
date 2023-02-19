/***********************************
 * API players 通信クライアント
 ***********************************/
/* import client */
import axios from '@/api/MyAxios';
/* for type */
import {AxiosResponse} from 'axios';
import {PlayerSchema, PlayerScheduleSchema} from '@/@types';

/***********************************
 * export REST API 定義
 ***********************************/
/**
 * @return {PlayersResponse} 選手一覧取得
 */
type PlayersResponse = Promise<AxiosResponse<PlayerSchema[]>>;
export const getPlayers = (): PlayersResponse => axios.get('/players');

/**
 * 指定選手の選手予定 一覧取得
 * @param {PlayerSchedulesRequest} params 取得する 選手ID
 * @return {PlayersResponse} 選手予定一覧取得
 */
type PlayerSchedulesRequest = {playerId: PlayerScheduleSchema['player_id']}; // リクエスト型
type PlayerSchedulesResponse = Promise<AxiosResponse<PlayerScheduleSchema[]>>; // レスポンス型
export const getSchedulesByPlayer = ({playerId}: PlayerSchedulesRequest): PlayerSchedulesResponse => axios.get(`/players/${playerId}/schedules`);
