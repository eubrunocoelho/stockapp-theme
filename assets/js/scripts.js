const
    windowOverlay = document.querySelector('.window-overlay'),
    sideNavigation = document.querySelector('.side-navigation'),
    openMenu = document.querySelector('#openMenu');

if (windowOverlay && sideNavigation && openMenu) {
    openMenu.addEventListener('click', (e) => {
        displayToBlock(windowOverlay);
        displayToBlock(sideNavigation);

        const closeMenu = document.querySelector('#closeMenu');

        if (closeMenu) {
            closeMenu.addEventListener('click', (e) => {
                displayToNone(sideNavigation);
                displayToNone(windowOverlay);
            });
        }

        window.addEventListener('click', (e) => {
            if (e.target == windowOverlay) {
                displayToNone(sideNavigation);
                displayToNone(windowOverlay);
            }
        });
    });
}

let displayToBlock = (element) => {
    element.style.display = 'block';
}

let displayToNone = (element) => {
    element.style.display = 'none';
}