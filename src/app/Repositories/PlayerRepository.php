<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Collection;

/**
 * 選手リポジトリ インターフェイス
 */
interface PlayerRepository
{
    /**
     * 一覧 取得
     * @return Collection 一覧
     */
    public function getAll(): Collection;
}
