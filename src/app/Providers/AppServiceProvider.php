<?php

namespace App\Providers;

use App\Repositories\PlayerRepository;
use App\Repositories\PlayerRepositoryImpl;
use App\Repositories\PlayerScheduleRepository;
use App\Repositories\PlayerScheduleRepositoryImpl;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // injection
        $this->app->bind(PlayerRepository::class, PlayerRepositoryImpl::class);
        $this->app->bind(PlayerScheduleRepository::class, PlayerScheduleRepositoryImpl::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
