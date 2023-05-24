const dropDown = document.querySelector(`.dropDown`);
const dropDownAbout = document.querySelector(`.dropDownAbout`);
const listItem2 = document.querySelector(`#showForm`);
const listItem3 = document.querySelector(`#showAbout`);

const menuBtn = document.querySelector(`.hamburgerContainer`);
const bar1 = document.querySelector(`#bar1`);
const bar3 = document.querySelector(`#bar3`);
const bar2 = document.querySelector(`#bar2`);
const mobileMenu = document.querySelector(`.mobileMenu`);
const gridBox = document.querySelectorAll(`.gridBox`);

const dropMenuLinks = document.querySelectorAll(`.dropLink`);

dropMenuLinks.forEach((link) => {
  link.addEventListener(`click`, (e) => {
    e.preventDefault();
    console.log(this);
    const formId = link.dataset.formId;

    window.location.href = `/CapStone/forms.html?formId=${formId}`;
  });
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
