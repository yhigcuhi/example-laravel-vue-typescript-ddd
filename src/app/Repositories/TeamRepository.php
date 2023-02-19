<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Collection;

/**
 * チームリポジトリ インターフェイス
 */
interface TeamRepository
{
    /**
     * 一覧 取得
     * @return Collection 一覧
     */
    public function getAll(): Collection;
}
