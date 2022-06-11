const closeMenu = document.querySelector('.close-menu'),
      openMenu = document.querySelector('.open-menu'),
      subNav1 = document.querySelector('#sub-nav1'),
      subNav2 = document.querySelector('#sub-nav2'),
      drop1 = document.querySelector('#drop1'),
      drop2 = document.querySelector('#drop2'),
      navContainer = document.querySelector('.nav-container'),
      firstNav = document.querySelector('#nav-list1'),
      secondNav = document.querySelector('#nav-list2');

openMenu.addEventListener('click', showNav);

firstNav.addEventListener('click', () => {
    subNav1.classList.toggle('active');
    if (subNav1.classList.contains('active')) {
        drop1.innerHTML = `<img src="./images/icon-arrow-up.svg" alt=""></img>`;
    }else {
        drop1.innerHTML = `<img src="./images/icon-arrow-down.svg" alt=""></img>`;
    }
});

secondNav.addEventListener('click', () => {
    subNav2.classList.toggle('active');
    if (subNav2.classList.contains('active')) {
        drop2.innerHTML = `<img src="./images/icon-arrow-up.svg" alt=""></img>`;
    }else {
        drop2.innerHTML = `<img src="./images/icon-arrow-down.svg" alt=""></img>`;
    }
});

closeMenu.addEventListener('click', hideNav);

function showNav() {
    navContainer.classList.add('active');
    closeMenu.classList.add('active');
    openMenu.style.display = "none";
}

function hideNav() {
    navContainer.classList.remove('active');
    closeMenu.classList.remove('active');
    openMenu.style.display = "block";
}
