const dropDown = document.querySelector(`.dropDown`);
const dropDownAbout = document.querySelector(`.dropDownAbout`);
const listItem2 = document.querySelector(`#showForm`);
const listItem3 = document.querySelector(`#showAbout`);
const images = document.querySelectorAll(`header img`);
const menuBtn = document.querySelector(`.hamburgerContainer`);
const bar1 = document.querySelector(`#bar1`);
const bar3 = document.querySelector(`#bar3`);
const bar2 = document.querySelector(`#bar2`);
const mobileMenu = document.querySelector(`.mobileMenu`);
const gridBox = document.querySelectorAll(`.gridBox`);
const login = document.querySelector(`.signInBox`);
const donate = document.querySelector(`#donate`);
const close = document.querySelector(`#close`);
let index = 0;

function fadeInOut() {
  images.forEach((image, i) => {
    if (i === index) {
      image.classList.add(`fadeIn`);
    } else {
      image.classList.remove(`fadeIn`);
    }
  });
}

function activate() {
  fadeInOut();
  index++;
  if (index >= images.length) {
    index = 0;
  }
  setTimeout(activate, 12200);
}

activate();

const loyal = document.querySelector(`.loyal`);
const loyalText = ` A Loyal Friend  `;
const petInNeed = `A Pet In Need  `;
let index2 = 0;
const caret = document.querySelector(`.caret`);
function interval() {
  index2++;
  setTimeout(() => {
    loyal.innerText = loyalText.substring(0, index2);

    if (index2 < loyalText.length) {
      interval();
    } else if (index2 >= loyalText.length) {
      // index2 = 0;
      // interval_2();

      backspace2();
    }
  }, 500);
}

interval();

function interval_2() {
  index2++;
  setTimeout(() => {
    loyal.innerText = petInNeed.substring(0, index2);

    if (index2 < petInNeed.length) {
      interval_2();
    } else if (index2 >= petInNeed.length) {
      // index2 = 0;
      // interval();
      backspace();
    }
  }, 500);
}

function blink() {
  setInterval(() => {
    caret.classList.toggle("blink");
  }, 500);
}
blink();

function backspace() {
  index2--;
  setTimeout(() => {
    loyal.innerText = petInNeed.substring(0, index2);
    if (index2 >= 0) {
      backspace();
    } else {
      index2 = 0;
      interval();
    }
  }, 100);
}

function backspace2() {
  index2--;
  setTimeout(() => {
    loyal.innerText = loyalText.substring(0, index2);
    if (index2 >= 0) {
      backspace2();
    } else {
      index2 = 0;
      interval_2();
    }
  }, 100);
}

listItem2.addEventListener(`mouseover`, () => {
  dropDown.classList.add(`showDropDown`);
});
listItem2.addEventListener(`mouseout`, () => {
  dropDown.classList.remove(`showDropDown`);
});

listItem3.addEventListener(`mouseover`, () => {
  dropDownAbout.classList.add(`showDropDown`);
});
listItem3.addEventListener(`mouseout`, () => {
  dropDownAbout.classList.remove(`showDropDown`);
});

menuBtn.addEventListener(`click`, () => {
  menuBtn.classList.toggle(`spin`);
  bar2.classList.toggle(`xPattern`);
  bar3.classList.toggle(`xPattern2`);
  bar1.classList.toggle(`disappear`);
  mobileMenu.classList.toggle(`showMobileMenu`);

  gridBox.forEach((item) => {
    item.classList.toggle(`zoomMobile`);
  });
});

donate.addEventListener(`click`, () => {
  login.classList.add(`popUp`);
});
close.addEventListener(`click`, () => {
  login.classList.remove(`popUp`);
});

const dropMenuLinks = document.querySelectorAll(`.dropLink`);

dropMenuLinks.forEach((link) => {
  link.addEventListener(`click`, (e) => {
    e.preventDefault();

    const formId = link.dataset.formId;

    window.location.href = `https://kaleblamar.github.io/Capstone/forms.html?formId=${formId}`;
  });
});
