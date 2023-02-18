<?php

namespace App\ValueObjects;

/**
 * 値オブジェクト インターフェイス
 */
interface ValueObject extends \JsonSerializable
{
    /**
     * @return string[] バリデーションルール
     */
    public static function rules(): array;

    /**
     * @return string 文字列化
     */
    public function __toString(): string;
}
