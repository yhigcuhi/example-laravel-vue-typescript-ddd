<ul class="navbar-nav bg-gradient-primary">
    <!-- Sidebar - Brand -->
    <a class="d-flex align-items-center justify-content-center" href="/">
        <div class="d-flex py-4">
            @include('components.images.logo')
        </div>
    </a>
    <!-- Divider -->
    <hr class="my-2">
    <!-- Nav Item - Dashboard -->
    <li class="nav-item active">
        <a class="nav-link" href="/">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
        </a>
    </li>
    <!-- Divider -->
    <hr class="my-2">
    <!-- Heading -->
    <div>メニュー</div>
    <!-- Nav Item - Pages Collapse Menu -->
    <li class="nav-item">
        <a class="nav-link" href="{{ route('page.players')}}">
            <span>Mリーガー</span>
        </a>
    </li>
</ul>
