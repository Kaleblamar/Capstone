// forms

const vol = document.querySelector(`#volunteer`);
const res = document.querySelector(`#rescue`);
const member = document.querySelector(`#membership`);
const sur = document.querySelector(`#surrender`);
const field = document.querySelector(`#field`);
const fieldMobile = document.querySelector(`.field`);
const volLink = document.querySelector(`#rescueLink`);
const volMobile = document.querySelector(`#volunteerMobile`);
const rescueMobile = document.querySelector(`#rescueMobile`);
const membershipMobile = document.querySelector(`#membershipMobile`);
const surrenderMobile = document.querySelector(`#surrenderMobile`);
field.style.display = `none`;
vol.addEventListener(`click`, displayVol);
res.addEventListener(`click`, displayRes);
member.addEventListener(`click`, displayMem);
sur.addEventListener(`click`, displaySur);
rescueMobile.addEventListener(`click`, displayResMobile);
volMobile.addEventListener(`click`, displayVolMobile);
membershipMobile.addEventListener(`click`, displayMemMobile);
surrenderMobile.addEventListener(`click`, displaySurMobile);

const urlParams = new URLSearchParams(window.location.search);
const formId = urlParams.get("formId");
console.log(formId);

if (formId === "volunteerForm") {
  displayVol();
} else if (formId === "rescueForm") {
  displayRes();
} else if (formId === "membershipForm") {
  displayMem();
} else if (formId === "surrenderForm") {
  displaySur();
}

function displayRes() {
  field.style.display = `flex`;
  res.classList.add(`scale`);
  vol.classList.remove(`scale`);
  member.classList.remove(`scale`);
  sur.classList.remove(`scale`);
  field.classList.add(`slide`);
  field.addEventListener(`animationend`, () => {
    field.classList.remove(`slide`);
  });

  field.innerHTML = ``;
  field.innerHTML = `<legend>Rescue Form</legend>
        <form>
          <div id="form1">
            <div class="box1">
              <label for="firstName">First Name</label>
              <input type="text" id="firstName" placeholder="First Name" />

              <label for="lastName">Last Name</label>
              <input type="text" id="lastName" placeholder="Last Name" />

              <label for="phoneNumber">Phone Number</label>
              <input type="tel" id="phoneNumber" placeholder="Phone Number" />

              <label for="city">City, State</label>
              <input type="text" id="city" placeholder="city" />
            </div>

            <div class="box2">
              <label for="email">Email</label>
              <input type="email" name="email" id="email" placeholder="email" />

              <label for="username">username</label>
              <input type="text" placeholder="username" />

              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />

              <label for="confirmPassword">Password</label>
              <input
                type="password"
                name="password"
                id="confirmPassword"
                placeholder="confirm password"
              />
            </div>
          </div>
          <div id="form2">
            <div class="formBox formBoxRescue">
              <label for="rescueName">Rescue Name</label>
              <input type="text" name="rescueName" id="rescueName" placeholder="Enter name of animal "  />

              <label for="rescueAddress">Rescue Address</label>
              <input type="text" name="rescueAddress" id="rescueAddress" placeholder="Enter Address" />

              <label for="rescueSite">Rescue Website</label>
              <input type="url" placeholder="Enter URL" name="rescueSite" id="rescueSite" />
            </div>
            <div class="formBox formBoxRescue">
              <label for="peopleInfo"
                >People that may work under your rescue name</label
              >
              <textarea
                name="peopleInfo"
                id="peopleInfo"
                cols="30"
                rows="5"
              ></textarea>

              <label for="comments"
                >People that may work under your rescue name</label
              >
              <textarea
                name="comments"
                id="comments"
                cols="30"
                rows="5"
              ></textarea>
            </div>
          </div>
          <div class="submitBox">
            <input type="submit" value="Register" />
            <input type="reset" value="Reset" />
          </div>
        </form>`;
}

function displayVol() {
  field.style.display = `flex`;
  vol.classList.add(`scale`);
  res.classList.remove(`scale`);
  member.classList.remove(`scale`);
  sur.classList.remove(`scale`);
  field.classList.add(`slide`);
  field.addEventListener(`animationend`, () => {
    field.classList.remove(`slide`);
  });
  field.innerHTML = ``;
  field.innerHTML = `<legend>Contact Information</legend>
        <form>
          <div id="form1">
            <div class="box1">
              <label for="firstName">First Name</label>
              <input type="text" id="firstName" placeholder="First Name" />

              <label for="lastName">Last Name</label>
              <input type="text" id="lastName" placeholder="Last Name" />

              <label for="phoneNumber">Phone Number</label>
              <input type="tel" id="phoneNumber" placeholder="Phone Number" />

              <label for="city">City, State</label>
              <input type="text" id="city" placeholder="city" />
            </div>

            <div class="box2">
              <label for="email">Email</label>
              <input type="email" name="email" id="email" placeholder="email" />

              <label for="username">username</label>
              <input type="text" placeholder="username" />

              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />

              <label for="confirmPassword">Password</label>
              <input
                type="password"
                name="password"
                id="confirmPassword"
                placeholder="confirm password"
              />
            </div>
          </div>
          <div id="form2">
            <div class="formBox">
              <label for="select">How would you like to help/volunteer?</label>
              <select name="select" id="select">
                <option hidden value="">click to see options</option>
                <option value="I would like to vol">
                  I would like to volunteer my time to help with animals
                </option>
                <option value="donate">I would like to donate</option>
                <option value="transport">Help transport the animals</option>
                <option value="funds">Help fundraise</option>
              </select>
              <label for="convict"
                >Have you been investigated/convicted for animal abuse?</label
              >
              <input type="text" id="convict" />
            </div>
            <div class="formBox">
              <label for="member?"
                >Are you interested in becoming a paying member?</label
              >
              <input type="text" id="member" />
              <label for="available">Availability</label>
              <select name="schedule" id="schedule">
                <option hidden>Click here to see options</option>
                <option value="monday am">Monday-AM</option>
                <option value="monday pm">Monday-PM</option>
                <option value="tuesday am">Tuesday-AM</option>
                <option value="tuesday pm">Tuesday-PM</option>
                <option value="wednesday am">Wednesday-AM</option>
                <option value="wednesday pm">Wednesday-PM</option>
                <option value="thursday">Thursday-AM</option>
                <option value="thursday pm">Thursday-PM</option>
                <option value="friday am">Friday-AM</option>
                <option value="friday pm">Friday-PM</option>
                <option value="saturday am">Saturday-AM</option>
                <option value="saturday pm">Saturday-PM</option>
                <option value="sunday am">Sunday-AM</option>
                <option value="sunday pm">Sunday-PM</option>
              </select>
            </div>
          </div>
          <div class="submitBox">
            <input type="submit" value="Register" />
            <input type="reset" value="Reset" />
          </div>
        </form>`;
}

function displayMem() {
  field.style.display = `flex`;
  vol.classList.remove(`scale`);
  res.classList.remove(`scale`);
  member.classList.add(`scale`);
  sur.classList.remove(`scale`);

  field.classList.add(`slide`);
  field.addEventListener(`animationend`, () => {
    field.classList.remove(`slide`);
  });
  field.innerHTML = ``;
  field.innerHTML = `<legend>Membership Application</legend>
        <form>
          <div id="form1">
            <div class="box1">
              <label for="firstName">First Name</label>
              <input type="text" id="firstName" placeholder="First Name" />

              <label for="lastName">Last Name</label>
              <input type="text" id="lastName" placeholder="Last Name" />

              <label for="phoneNumber">Phone Number</label>
              <input type="tel" id="phoneNumber" placeholder="Phone Number" />

              <label for="city">City, State</label>
              <input type="text" id="city" placeholder="city" />
            </div>

            <div class="box2">
              <label for="email">Email</label>
              <input type="email" name="email" id="email" placeholder="email" />

              <label for="username">username</label>
              <input type="text" placeholder="username" />

              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />

              <label for="confirmPassword">Password</label>
              <input
                type="password"
                name="password"
                id="confirmPassword"
                placeholder="confirm password"
              />
            </div>
          </div>
          <div id="formMem">
            <h3>Areas of Interest</h3>
            <div class="areasOfInterest">
              <p>
                As a member, I volunteer to help S.T.A.R. in the following
                area(s)
              </p>
              <h4>Foster</h4>
              <div class="checkBoxDiv">
                <span>
                  <input type="checkbox" name="fosterShort" id="fosterShort" />
                  <label for="fosterShort"
                    >Fostering - Short term - (under two weeks)</label
                  >
                </span>
                <span>
                  <input type="checkbox" name="fosterLong" id="fosterLong" />
                  <label for="fosterLong"
                    >Fostering - Long term - (over two weeks)</label
                  >
                </span>
              </div>
              <h4>Fundraising</h4>
              <p>
                Activities include helping to promote events; baking/cooking for
                events; picking up or delivering items for events; working at
                events.
              </p>
              <div class="checkBoxDiv2">
                <input type="checkbox" name="fundraise" id="fundraise" />
                <label for="fundraise"
                  >I'm interested in helping fundraise.</label
                >
              </div>

              <h4>Transports</h4>
              <div class="checkBoxDiv3">
                <span>
                  <input type="checkbox" name="localDriver" id="localDriver" />
                  <label for="localDriver"
                    >Local Driver - Driving dogs to and from local vets; to
                    foster homes; and/or local boarding facilities.</label
                  >
                </span>
                <span>
                  <input
                    type="checkbox"
                    name="longDistance"
                    id="longDistance"
                  />
                  <label for="longDistance"
                    >Long Distance Transport - Transporting within a 120 mile
                    radius; or transporting to rescues located in bordering or
                    other states.</label
                  >
                </span>
                <span>
                  <input type="checkbox" name="loadingCrew" id="loadingCrew" />
                  <label for="loadingCrew"
                    >Loading Crew - Preparing a transport vehicle; to include
                    loading, securing and prepping the crates.</label
                  >
                </span>
                <span>
                  <input
                    type="checkbox"
                    name="cleaningCrew"
                    id="cleaningCrew"
                  />
                  <label for="cleaningCrew"
                    >Cleaning Crew - Includes cleaning dog crates after
                    transports; cleaning the inside the transport vehicles;
                    laundry as needed.</label
                  >
                </span>
              </div>
            </div>
              <h3>Availability</h3> 
            <div class="formBox formBoxRescue">
             
              <select name="schedule" id="schedule">
                <option hidden>Click here to see options</option>
                <option value="monday am">Monday-AM</option>
                <option value="monday pm">Monday-PM</option>
                <option value="tuesday am">Tuesday-AM</option>
                <option value="tuesday pm">Tuesday-PM</option>
                <option value="wednesday am">Wednesday-AM</option>
                <option value="wednesday pm">Wednesday-PM</option>
                <option value="thursday">Thursday-AM</option>
                <option value="thursday pm">Thursday-PM</option>
                <option value="friday am">Friday-AM</option>
                <option value="friday pm">Friday-PM</option>
                <option value="saturday am">Saturday-AM</option>
                <option value="saturday pm">Saturday-PM</option>
                <option value="sunday am">Sunday-AM</option>
                <option value="sunday pm">Sunday-PM</option>
              </select>
            </div>
          </div>

          <h3>Type of Membership</h3>
          <select name="memType" id="memType">
            <option value="regular">Regular Membership - $12</option>
            <option value="student">Student Membership - $6</option>
          </select>
          <p>
            By signing this Agreement, I will actively participate in the areas
            I have selected above.
          </p>
          <span class="signiture">
            <input
              type="text"
              id="signiture"
              placeholder="Electronic signiture"
            />
            <input type="date" />
          </span>
          <div class="submitBox">
            <input type="submit" value="Register" />
            <input type="reset" value="Reset" />
          </div>
        </form>`;
}

function displaySur() {
  field.style.display = `flex`;
  sur.classList.add(`scale`);
  vol.classList.remove(`scale`);
  res.classList.remove(`scale`);
  member.classList.remove(`scale`);
  field.classList.add(`slide`);
  field.addEventListener(`animationend`, () => {
    field.classList.remove(`slide`);
  });
  field.innerHTML = ``;
  field.innerHTML = `<legend>Surrender Form</legend>
        <form>
          <div id="form1">
            <div class="box1">
              <label for="firstName">First Name</label>
              <input type="text" id="firstName" placeholder="First Name" />

              <label for="lastName">Last Name</label>
              <input type="text" id="lastName" placeholder="Last Name" />

              <label for="phoneNumber">Phone Number</label>
              <input type="tel" id="phoneNumber" placeholder="Phone Number" />

              <label for="city">City, State</label>
              <input type="text" id="city" placeholder="city" />
            </div>

            <div class="box2">
              <label for="email">Email</label>
              <input type="email" name="email" id="email" placeholder="email" />

              <label for="username">username</label>
              <input type="text" placeholder="username" />

              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />

              <label for="confirmPassword">Password</label>
              <input
                type="password"
                name="password"
                id="confirmPassword"
                placeholder="confirm password"
              />
            </div>
          </div>
          <div id="form2">
            <div class="formBox formBoxRescue">
              <label for="rescueName">Surrender Name</label>
              <input type="text" name="rescueName" id="rescueName" />

              <label for="rescueAddress">Rescue Address</label>
              <input type="text" name="rescueAddress" id="rescueAddress" />

              <label for="rescueSite">Surrender Website</label>
              <input type="text" name="rescueSite" id="rescueSite" />
            </div>
            <div class="formBox formBoxRescue">
              <label for="peopleInfo"
                >People that may work under your surrender name</label
              >
              <textarea
                name="peopleInfo"
                id="peopleInfo"
                cols="30"
                rows="5"
              ></textarea>

              <label for="comments"
                >People that may work under your Surrender name</label
              >
              <textarea
                name="comments"
                id="comments"
                cols="30"
                rows="5"
              ></textarea>
            </div>
          </div>
          <div class="submitBox">
            <input type="submit" value="Register" />
            <input type="reset" value="Reset" />
          </div>
        </form>`;
}

const dropDown = document.querySelector(`.dropDown`);
const dropDownAbout = document.querySelector(`.dropDownAbout`);
const listItem2 = document.querySelector(`#showForm`);
const listItem3 = document.querySelector(`#showAbout`);

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

const menuBtn = document.querySelector(`.hamburgerContainer`);
const bar1 = document.querySelector(`#bar1`);
const bar3 = document.querySelector(`#bar3`);
const bar2 = document.querySelector(`#bar2`);
const mobileMenu = document.querySelector(`.mobileMenu`);
const gridBox = document.querySelectorAll(`.gridBox`);

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

function displayResMobile() {
  field.style.display = `flex`;
  rescueMobile.classList.add(`color`);
  volMobile.classList.remove(`color`);
  membershipMobile.classList.remove(`color`);
  surrenderMobile.classList.remove(`color`);
  field.classList.add(`slideSide`);
  field.addEventListener(`animationend`, () => {
    field.classList.remove(`slideSide`);
  });

  field.innerHTML = ``;
  field.innerHTML = `<legend>Rescue Form</legend>
        <form>
          <div id="form1">
            <div class="box1">
              <label for="firstName">First Name</label>
              <input type="text" id="firstName" placeholder="First Name" />

              <label for="lastName">Last Name</label>
              <input type="text" id="lastName" placeholder="Last Name" />

              <label for="phoneNumber">Phone Number</label>
              <input type="tel" id="phoneNumber" placeholder="Phone Number" />

              <label for="city">City, State</label>
              <input type="text" id="city" placeholder="city" />
            </div>

            <div class="box2">
              <label for="email">Email</label>
              <input type="email" name="email" id="email" placeholder="email" />

              <label for="username">username</label>
              <input type="text" placeholder="username" />

              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />

              <label for="confirmPassword">Password</label>
              <input
                type="password"
                name="password"
                id="confirmPassword"
                placeholder="confirm password"
              />
            </div>
          </div>
          <div id="form2">
            <div class="formBox formBoxRescue">
              <label for="rescueName">Rescue Name</label>
              <input type="text" name="rescueName" id="rescueName" placeholder="Enter name of animal "  />

              <label for="rescueAddress">Rescue Address</label>
              <input type="text" name="rescueAddress" id="rescueAddress" placeholder="Enter Address" />

              <label for="rescueSite">Rescue Website</label>
              <input type="url" placeholder="Enter URL" name="rescueSite" id="rescueSite" />
            </div>
            <div class="formBox formBoxRescue">
              <label for="peopleInfo"
                >People that may work under your rescue name</label
              >
              <textarea
                name="peopleInfo"
                id="peopleInfo"
                cols="30"
                rows="5"
              ></textarea>

              <label for="comments"
                >People that may work under your rescue name</label
              >
              <textarea
                name="comments"
                id="comments"
                cols="30"
                rows="5"
              ></textarea>
            </div>
          </div>
          <div class="submitBox">
            <input type="submit" value="Register" />
            <input type="reset" value="Reset" />
          </div>
        </form>`;
}

function displayVolMobile() {
  field.style.display = `flex`;
  volMobile.classList.add(`color`);
  rescueMobile.classList.remove(`color`);
  membershipMobile.classList.remove(`color`);
  surrenderMobile.classList.remove(`color`);
  field.classList.add(`slideSide`);
  field.addEventListener(`animationend`, () => {
    field.classList.remove(`slideSide`);
  });
  field.innerHTML = ``;
  field.innerHTML = `<legend>Contact Information</legend>
        <form>
          <div id="form1">
            <div class="box1">
              <label for="firstName">First Name</label>
              <input type="text" id="firstName" placeholder="First Name" />

              <label for="lastName">Last Name</label>
              <input type="text" id="lastName" placeholder="Last Name" />

              <label for="phoneNumber">Phone Number</label>
              <input type="tel" id="phoneNumber" placeholder="Phone Number" />

              <label for="city">City, State</label>
              <input type="text" id="city" placeholder="city" />
            </div>

            <div class="box2">
              <label for="email">Email</label>
              <input type="email" name="email" id="email" placeholder="email" />

              <label for="username">username</label>
              <input type="text" placeholder="username" />

              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />

              <label for="confirmPassword">Password</label>
              <input
                type="password"
                name="password"
                id="confirmPassword"
                placeholder="confirm password"
              />
            </div>
          </div>
          <div id="form2">
            <div class="formBox">
              <label for="select">How would you like to help/volunteer?</label>
              <select name="select" id="select">
                <option hidden value="">click to see options</option>
                <option value="I would like to vol">
                  I would like to volunteer my time to help with animals
                </option>
                <option value="donate">I would like to donate</option>
                <option value="transport">Help transport the animals</option>
                <option value="funds">Help fundraise</option>
              </select>
              <label for="convict"
                >Have you been investigated/convicted for animal abuse?</label
              >
              <input type="text" id="convict" />
            </div>
            <div class="formBox">
              <label for="member?"
                >Are you interested in becoming a paying member?</label
              >
              <input type="text" id="member" />
              <label for="available">Availability</label>
              <select name="schedule" id="schedule">
                <option hidden>Click here to see options</option>
                <option value="monday am">Monday-AM</option>
                <option value="monday pm">Monday-PM</option>
                <option value="tuesday am">Tuesday-AM</option>
                <option value="tuesday pm">Tuesday-PM</option>
                <option value="wednesday am">Wednesday-AM</option>
                <option value="wednesday pm">Wednesday-PM</option>
                <option value="thursday">Thursday-AM</option>
                <option value="thursday pm">Thursday-PM</option>
                <option value="friday am">Friday-AM</option>
                <option value="friday pm">Friday-PM</option>
                <option value="saturday am">Saturday-AM</option>
                <option value="saturday pm">Saturday-PM</option>
                <option value="sunday am">Sunday-AM</option>
                <option value="sunday pm">Sunday-PM</option>
              </select>
            </div>
          </div>
          <div class="submitBox">
            <input type="submit" value="Register" />
            <input type="reset" value="Reset" />
          </div>
        </form>`;
}

function displaySurMobile() {
  surrenderMobile.classList.add(`color`);
  volMobile.classList.remove(`color`);
  rescueMobile.classList.remove(`color`);
  membershipMobile.classList.remove(`color`);
  field.classList.add(`slideSide`);
  field.addEventListener(`animationend`, () => {
    field.classList.remove(`slideSide`);
  });
  field.innerHTML = ``;
  field.innerHTML = `<legend>Surrender Form</legend>
        <form>
          <div id="form1">
            <div class="box1">
              <label for="firstName">First Name</label>
              <input type="text" id="firstName" placeholder="First Name" />

              <label for="lastName">Last Name</label>
              <input type="text" id="lastName" placeholder="Last Name" />

              <label for="phoneNumber">Phone Number</label>
              <input type="tel" id="phoneNumber" placeholder="Phone Number" />

              <label for="city">City, State</label>
              <input type="text" id="city" placeholder="city" />
            </div>

            <div class="box2">
              <label for="email">Email</label>
              <input type="email" name="email" id="email" placeholder="email" />

              <label for="username">username</label>
              <input type="text" placeholder="username" />

              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />

              <label for="confirmPassword">Password</label>
              <input
                type="password"
                name="password"
                id="confirmPassword"
                placeholder="confirm password"
              />
            </div>
          </div>
          <div id="form2">
            <div class="formBox formBoxRescue">
              <label for="rescueName">Surrender Name</label>
              <input type="text" name="rescueName" id="rescueName" />

              <label for="rescueAddress">Rescue Address</label>
              <input type="text" name="rescueAddress" id="rescueAddress" />

              <label for="rescueSite">Surrender Website</label>
              <input type="text" name="rescueSite" id="rescueSite" />
            </div>
            <div class="formBox formBoxRescue">
              <label for="peopleInfo"
                >People that may work under your surrender name</label
              >
              <textarea
                name="peopleInfo"
                id="peopleInfo"
                cols="30"
                rows="5"
              ></textarea>

              <label for="comments"
                >People that may work under your Surrender name</label
              >
              <textarea
                name="comments"
                id="comments"
                cols="30"
                rows="5"
              ></textarea>
            </div>
          </div>
          <div class="submitBox">
            <input type="submit" value="Register" />
            <input type="reset" value="Reset" />
          </div>
        </form>`;
}

function displayMemMobile() {
  field.style.display = `flex`;
  volMobile.classList.remove(`color`);
  rescueMobile.classList.remove(`color`);
  membershipMobile.classList.add(`color`);
  surrenderMobile.classList.remove(`color`);

  field.classList.add(`slideSide`);
  field.addEventListener(`animationend`, () => {
    field.classList.remove(`slideSide`);
  });
  field.innerHTML = ``;
  field.innerHTML = `<legend>Membership Application</legend>
        <form>
          <div id="form1">
            <div class="box1">
              <label for="firstName">First Name</label>
              <input type="text" id="firstName" placeholder="First Name" />

              <label for="lastName">Last Name</label>
              <input type="text" id="lastName" placeholder="Last Name" />

              <label for="phoneNumber">Phone Number</label>
              <input type="tel" id="phoneNumber" placeholder="Phone Number" />

              <label for="city">City, State</label>
              <input type="text" id="city" placeholder="city" />
            </div>

            <div class="box2">
              <label for="email">Email</label>
              <input type="email" name="email" id="email" placeholder="email" />

              <label for="username">username</label>
              <input type="text" placeholder="username" />

              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />

              <label for="confirmPassword">Password</label>
              <input
                type="password"
                name="password"
                id="confirmPassword"
                placeholder="confirm password"
              />
            </div>
          </div>
          <div id="formMem">
            <h3>Areas of Interest</h3>
            <div class="areasOfInterest">
              <p>
                As a member, I volunteer to help S.T.A.R. in the following
                area(s)
              </p>
              <h4>Foster</h4>
              <div class="checkBoxDiv">
                <span>
                  <input type="checkbox" name="fosterShort" id="fosterShort" />
                  <label for="fosterShort"
                    >Fostering - Short term - (under two weeks)</label
                  >
                </span>
                <span>
                  <input type="checkbox" name="fosterLong" id="fosterLong" />
                  <label for="fosterLong"
                    >Fostering - Long term - (over two weeks)</label
                  >
                </span>
              </div>
              <h4>Fundraising</h4>
              <p>
                Activities include helping to promote events; baking/cooking for
                events; picking up or delivering items for events; working at
                events.
              </p>
              <div class="checkBoxDiv2">
                <input type="checkbox" name="fundraise" id="fundraise" />
                <label for="fundraise"
                  >I'm interested in helping fundraise.</label
                >
              </div>

              <h4>Transports</h4>
              <div class="checkBoxDiv3">
                <span>
                  <input type="checkbox" name="localDriver" id="localDriver" />
                  <label for="localDriver"
                    >Local Driver - Driving dogs to and from local vets; to
                    foster homes; and/or local boarding facilities.</label
                  >
                </span>
                <span>
                  <input
                    type="checkbox"
                    name="longDistance"
                    id="longDistance"
                  />
                  <label for="longDistance"
                    >Long Distance Transport - Transporting within a 120 mile
                    radius; or transporting to rescues located in bordering or
                    other states.</label
                  >
                </span>
                <span>
                  <input type="checkbox" name="loadingCrew" id="loadingCrew" />
                  <label for="loadingCrew"
                    >Loading Crew - Preparing a transport vehicle; to include
                    loading, securing and prepping the crates.</label
                  >
                </span>
                <span>
                  <input
                    type="checkbox"
                    name="cleaningCrew"
                    id="cleaningCrew"
                  />
                  <label for="cleaningCrew"
                    >Cleaning Crew - Includes cleaning dog crates after
                    transports; cleaning the inside the transport vehicles;
                    laundry as needed.</label
                  >
                </span>
              </div>
            </div>
              <h3>Availability</h3> 
            <div class="formBox formBoxRescue">
             
              <select name="schedule" id="schedule">
                <option hidden>Click here to see options</option>
                <option value="monday am">Monday-AM</option>
                <option value="monday pm">Monday-PM</option>
                <option value="tuesday am">Tuesday-AM</option>
                <option value="tuesday pm">Tuesday-PM</option>
                <option value="wednesday am">Wednesday-AM</option>
                <option value="wednesday pm">Wednesday-PM</option>
                <option value="thursday">Thursday-AM</option>
                <option value="thursday pm">Thursday-PM</option>
                <option value="friday am">Friday-AM</option>
                <option value="friday pm">Friday-PM</option>
                <option value="saturday am">Saturday-AM</option>
                <option value="saturday pm">Saturday-PM</option>
                <option value="sunday am">Sunday-AM</option>
                <option value="sunday pm">Sunday-PM</option>
              </select>
            </div>
          </div>

          <h3>Type of Membership</h3>
          <select name="memType" id="memType">
            <option value="regular">Regular Membership - $12</option>
            <option value="student">Student Membership - $6</option>
          </select>
          <p>
            By signing this Agreement, I will actively participate in the areas
            I have selected above.
          </p>
          <span class="signiture">
            <input
              type="text"
              id="signiture"
              placeholder="Electronic signiture"
            />
            <input type="date" />
          </span>
          <div class="submitBox">
            <input type="submit" value="Register" />
            <input type="reset" value="Reset" />
          </div>
        </form>`;
}

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
