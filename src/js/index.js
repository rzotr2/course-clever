class App {
    constructor(sizingService) {
        this.sizingService = sizingService;
        this.header = new Header(sizingService);
    }
}

class SizingService {
    mobileBreakpoint = 992;

    get currentSize() {
        return window.innerWidth < this.mobileBreakpoint ? 'mobile' : 'desktop';
    }
}

class Header {
    mobileHeader$ = document.querySelector('#js-header-mobile');
    desktopHeader$ = document.querySelector('#js-header-nav');
    navGroup$ = document.querySelector('#js-header-nav-group');
    navLists$ = document.querySelectorAll('.js-header-nav-list');

    #sizingService;

    constructor(sizingService) {
        this.#sizingService = sizingService;

        this.setupRenderer();
    }

    setupRenderer() {
        this.#renderNav();

        window.addEventListener('resize', () => {
            this.#renderNav();
        });
    }

    #renderNav() {
        const currentSize = this.#sizingService.currentSize;
        const currentNavListContainer$ = this.#findCurrentNavListContainer();

        if (currentSize === "mobile" && currentNavListContainer$ === "desktop") {
            Array.from(this.navLists$).forEach(navList => {
                this.mobileHeader$.append(navList);
            });
        }

        if (currentSize === "desktop" && currentNavListContainer$ === "mobile") {
            this.navGroup$.append(this.navLists$.item(0));
            this.desktopHeader$.append(this.navLists$.item(1));
        }
    }

    #findCurrentNavListContainer() {
        return this.desktopHeader$.contains(this.navLists$.item(0)) ? 'desktop' : 'mobile';
    }
}

((window, document) => {
    document.addEventListener('DOMContentLoaded', () => {
        const app = new App(
            new SizingService(),
        );
    });
})(window, document);
