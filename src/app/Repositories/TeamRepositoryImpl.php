<?php

namespace App\Repositories;

use App\Models\Teams;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

/**
 * チームリポジトリ 実装
 */
class TeamRepositoryImpl implements TeamRepository
{

    /**
     * 一覧取得
     * @return Collection<Teams> 一覧
     */
    public function getAll(): Collection
    {
        // 一覧取得
        return self::makeQueryBuilder()->get();
    }

    /**
     * 検索 Builder生成
     * @param array<string, mixed>|null $conditions 検索条件
     * @return Builder 検索Builder
     */
    private static function makeQueryBuilder(?array $conditions = []): Builder
    {
        // 共通条件
        $query = Teams::query();
        // 指定検索条件 同一 where 項目(key) = value
        foreach ($conditions as $key => $value) $query->where($key, $value);
        // 結果
        return $query;
    }
}
