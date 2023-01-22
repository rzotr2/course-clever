((window, document) => {
    document.addEventListener('DOMContentLoaded', () => {
        const headerToggle$ = document.querySelector('#js-header-toggle');
        const headerToggleIcon$ = headerToggle$.querySelector('i');
        const mobileNav$ = document.querySelector('#js-header-mobile-nav');

        headerToggle$.addEventListener('click', () => {
            mobileNav$.classList.toggle('shown');
            headerToggleIcon$.classList.toggle('bi-x');
            headerToggleIcon$.classList.toggle('bi-arrow-right');
        });
    });
})(window, document);
