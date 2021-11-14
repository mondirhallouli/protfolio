const menuBtn = document.querySelector('.nav__menu-btn');
const menuBox = document.querySelector('.mobile__menu');

// function to remove classes
const rvClass = (elem, className) => {
  elem.classList.remove(className);
}

// function to add classes
const addClass = (elem, className) => {
  elem.classList.add(className);
}

menuBtn.addEventListener('click', e => {
  e.stopPropagation();

  if(menuBtn.classList.contains('active')) {
    rvClass(menuBtn, 'active');
    rvClass(menuBox, 'show');
  } else {
    addClass(menuBtn, 'active');
    addClass(menuBox, 'show');
  }
});

