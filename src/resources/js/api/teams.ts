/***********************************
 * API teams 通信クライアント
 ***********************************/
/* import client */
import axios from '@/api/MyAxios';
/* for type */
import {AxiosResponse} from 'axios';
import {TeamSchema} from '@/@types';

/***********************************
 * export REST API 定義
 ***********************************/
/**
 * @return {Response} チーム一覧取得
 */
type Response = Promise<AxiosResponse<TeamSchema[]>>;
export const getTeams = (): Response => axios.get('/teams');
