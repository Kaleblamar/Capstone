let cardElement = document.querySelector(".card");
const container = document.querySelector(`.container`);
cardElement.addEventListener("click", flip);

function flip() {
  cardElement.classList.toggle("flipped");
  container.classList.add(`shadow`);
  setTimeout(() => {
    container.classList.remove(`shadow`);
  }, 1000);
}

function startTime() {
  var weekday = new Array();
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var d = today.getDate();
  var y = today.getFullYear();
  var wd = weekday[today.getDay()];
  var mt = month[today.getMonth()];

  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("date").innerHTML = d;
  document.getElementById("day").innerHTML = wd;
  document.getElementById("month").innerHTML = mt + "/" + y;

  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

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

    // window.location.href = `/CapStone/forms.html?formId=${formId}`;
    window.location.href = `https://kaleblamar.github.io/Capstone/forms.html?formId=${formId}`;
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
