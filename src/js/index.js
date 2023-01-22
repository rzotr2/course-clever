const renderHeaderNav = (
    mobileNavLists,
    mobileHeader,
    navGroup,
    headerNav,
) => {
    if(window.innerWidth < 992) {
        Array.from(mobileNavLists).forEach(navList => {
            mobileHeader.append(navList);
        });
    } else {
        navGroup.append(mobileNavLists.item(0));
        headerNav.append(mobileNavLists.item(1));
    }
};

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const mobileHeader = document.querySelector('#js-header-mobile');
        const mobileNavLists = document.querySelectorAll('.js-header-nav-list');
        const navGroup = document.querySelector('#js-header-nav-group');
        const headerNav = document.querySelector('#header-nav');

        renderHeaderNav(mobileNavLists, mobileHeader, navGroup, headerNav);

        window.addEventListener("resize", (event) => {
            renderHeaderNav(mobileNavLists, mobileHeader, navGroup, headerNav);
        });
    });
})();