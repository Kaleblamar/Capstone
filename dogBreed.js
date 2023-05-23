function createCard(data) {
  const dogCard = document.querySelector(`#template`);
  const card = document.createElement(`div`);
  dogCard.append(card);
  card.innerHTML = ` <div class="card" data-aos="zoom-in" data-aos-duration="1500">
        <div class="imgContainer">
          <img
            src="${data[0].image_link}"
            alt=""
          />
        </div>
        <div class="info">
          <h3>${data[0].name}</h3>
          <div class="stats">
            <ul>
              <li>Friendliness: <span>${data[0].good_with_strangers}</span></li>
              <li>Shedding: <span>${data[0].shedding}</span></li>
              <li>Playfulness: <span>${data[0].playfulness}</span></li>
              <li>Energy: <span>${data[0].energy}</span></li>
              <li>Potectivness: <span>${data[0].protectiveness}</span></li>
              <li>Intelligence: <span>${data[0].trainability}</span></li>
            </ul>

            <ul>
              <li>Life-Expectancy: <span>${data[0].max_life_expectancy}</span></li>
              <li>Male Height: <span>${data[0].max_height_male}</span></li>
              <li>Male Weight: <span>${data[0].max_weight_male}</span></li>
              <li>Female Height: <span>${data[0].max_height_female}</span></li>
              <li>Female Weight: <span>${data[0].max_weight_female}</span></li>
            </ul>
          </div>
        </div>
      </div>
`;
}

const popularDogBreeds = [
  "Labrador Retriever",
  "German Shepherd",
  "Golden Retriever",
  "Bulldog",
  "Beagle",
  "Poodle",
  "Rottweiler",
  "Yorkshire Terrier",
  "Boxer",
  "Dachshund",
  "Siberian Husky",
  "Doberman Pinscher",
  "Great Dane",
  "Corgi",
  "French Bulldog",
  "Shih Tzu",
  "Pomeranian",
  "Chihuahua",
  "Boston Terrier",
  "Maltese",
  "Australian Shepherd",
  "Border Collie",
  "Cavalier King Charles Spaniel",
  "Dalmatian",
  "English Bulldog",
  "French Poodle",
  "German Shorthaired Pointer",
  "Havanese",
  "Italian Greyhound",
  "Jack Russell Terrier",
  "Keeshond",
  "Labradoodle",
  "Mastiff",
  "Newfoundland",
  "Old English Sheepdog",
  "Pug",
  "Rottweiler",
  "Schnauzer",
  "Tibetan Mastiff",
  "Vizsla",
  "Weimaraner",
  "Xoloitzcuintli",
  "Yorkipoo",
  "Zuchon",
];

const apiKey = "obpgW5wRSVxCukjuMh2r2pfhD3H7T1RI1lOZjC9m";
const baseUrl = "https://api.api-ninjas.com/v1/dogs";

for (let dogName of popularDogBreeds) {
  $.ajax({
    method: "GET",
    url: `${baseUrl}?name=${encodeURIComponent(dogName)}`,
    headers: { "X-Api-Key": apiKey },
    contentType: "application/json",
    success: function (result) {
      if (result[0] != null) {
        createCard(result);
      }
      console.log(result);
    },
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
    },
  });
}

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
