<?php

namespace App\ValueObjects;

use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use Illuminate\Database\Eloquent\Model;

/**
 * 選手ID 値 オブジェクト
 */
final class PlayerId implements ValueObject
{

    // フィールド
    private int $value;

    /**
     * @param int $value
     */
    public function __construct(int $value)
    {
        // 整合性
        self::validate($value);
        // 値設定
        $this->value = $value;
    }

    /**
     * 値取得
     * @return int
     */
    public function value(): int { return $this->value; }

    /**
     * バリデーション実行
     * @return void
     */
    private static function validate(?int $value): void
    {
        // 前提条件 必須
        if (is_null($value)) throw new \InvalidArgumentException('必須！エラー');
        // 値
        if ($value < 0) throw new \InvalidArgumentException('マイナス！エラー');
    }

    /**
     * 生成関数
     * @param int $value 値
     * @return PlayerId 生成結果
     */
    public static function of(int $value): PlayerId
    {
        return new self($value);
    }

    /**
     * @return string[] バリデーションルール
     */
    public static function rules(): array
    {
        return ['number'];
    }

    /**
     * override
     * @return string 文字列化
     */
    public function __toString(): string
    {
        return $this->value();
    }

    /**
     * @return mixed JSONでの値
     */
    public function jsonSerialize(): mixed
    {
        return $this->value();
    }
}
