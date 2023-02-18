<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Collection;

/**
 * 選手予定 リポジトリ インターフェイス
 */
interface PlayerScheduleRepository
{
    /**
     * 一覧 取得
     * @return Collection 一覧
     */
    public function getAll(): Collection;

    /**
     * 指定検索条件の一覧検索
     * @param array<string, mixed>|null $conditions 検索条件
     * @return Collection 検索結果
     */
    public function findBy(?array $conditions = []): Collection;
}
