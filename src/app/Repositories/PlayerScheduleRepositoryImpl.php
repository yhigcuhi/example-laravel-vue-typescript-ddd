<?php

namespace App\Repositories;

use App\Models\PlayerSchedules;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

/**
 * 選手 予定リポジトリ 実装
 */
class PlayerScheduleRepositoryImpl implements PlayerScheduleRepository
{

    /**
     * 一覧 取得
     * @return Collection<PlayerSchedules> 一覧
     */
    public function getAll(): Collection
    {
        return self::makeQueryBuilder()->get();
    }

    /**
     * 指定検索条件の一覧検索
     * @param array<string, mixed> $conditions 検索条件
     * @return Collection<PlayerSchedules> 検索結果
     */
    public function findBy(?array $conditions = []): Collection
    {
        return self::makeQueryBuilder($conditions)->get();
    }

    /**
     * 検索 Builder生成
     * @param array<string, mixed>|null $conditions 検索条件
     * @return Builder 検索Builder
     */
    private static function makeQueryBuilder(?array $conditions = []): Builder
    {
        // 共通条件
        $query = PlayerSchedules::with(['player']);
        // 指定検索条件 同一 where 項目(key) = value
        foreach ($conditions as $key => $value) $query->where($key, $value);
        // 結果
        return $query;
    }
}
