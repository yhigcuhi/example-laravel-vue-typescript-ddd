<?php

namespace App\ValueObjects\casts;

use App\ValueObjects\PlayerId;
use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use InvalidArgumentException;

/**
 * Eloquent\Model $casts フィールド用のクラス
 *  TODO: trait化
 */
final class PlayerIdForCast implements CastsAttributes
{
    /**
     * Cast the given value.
     * DBの値 => 値オブジェクト
     * @param  \Illuminate\Database\Eloquent\Model  $model
     * @param  string  $key
     * @param  mixed  $value
     * @param  array  $attributes
     * @return PlayerId
     */
    public function get($model, string $key, $value, array $attributes)
    {
        return PlayerId::of($attributes['player_id']);
    }

    /**
     * 値オブジェクト => DBの値
     * @param  \Illuminate\Database\Eloquent\Model  $model
     * @param  string  $key
     * @param  mixed  $value
     * @param  array  $attributes
     * @return int
     */
    public function set($model, string $key, $value, array $attributes)
    {
        // キャストできない
        if (!$value instanceof PlayerId) throw new InvalidArgumentException('与えられた引数はPlayerIdのインスタンスではありません。');
        //
        return $value->value();
    }
}
