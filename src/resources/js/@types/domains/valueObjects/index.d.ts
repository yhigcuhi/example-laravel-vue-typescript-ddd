/***********************************
 * 値オブジェクト 集約
 ***********************************/

/* for type */
import {ValueObject} from '@/@types/domains/valueObjects/ValueObjects';

// 共通値オブジェクト 宣言
interface ID extends ValueObject<number> {} // 漢字
interface Name extends ValueObject<string> {} // 名前
interface NameKanji extends Name {} // 漢字
interface NameKana extends Name {} // ふりがな

// 各値オブジェクト 宣言
export interface PlayerId extends ID {} // 選手ID型
export interface LastName extends NameKanji {} // 名前（姓）
export interface FirstName extends NameKanji {} // 名前（名）
export interface LastNameKana extends NameKana {} // ふりがな（姓）
export interface FirstNameKana extends NameKana {} // ふりがな（名）
export interface TeamCd extends ValueObject<string> {} // チームコード
export interface TeamName extends Name {} // 名

