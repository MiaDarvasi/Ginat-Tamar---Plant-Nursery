
export function toggleMenu() {
    // Select the close button and menu elements
    const closeBtn = document.querySelector('._menu-close-btn');
    const menu = document.querySelector('._access-menu');
    console.log(menu.classList)
    console.log('toggle function activated')

    menu.classList.add('close');
};