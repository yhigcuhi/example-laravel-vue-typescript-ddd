<?php

namespace App\Services;

use App\Models\Players;
use App\Repositories\PlayerRepository;
use Illuminate\Support\Collection;

/**
 * 選手サービス
 */
class PlayerService
{
    /* 利用リポジトリ */
    private PlayerRepository $repository; // メイン = 選手リポジトリ

    /**
     * コンストラクタ
     * @param PlayerRepository $repository
     */
    public function __construct(PlayerRepository $repository)
    {
        $this->repository = $repository;
    }


    /**
     * 選手一覧取得
     * @return Collection<Players> 結果
     */
    public function getAll(): Collection
    {
        return $this->repository->getAll();
    }
}
