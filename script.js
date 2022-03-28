"use strict";

fetch("http://worldtimeapi.org/api/ip/")
  .then((response) => response.json())
  .then((data) => {
    let time = data.datetime.slice(11, 16);
    let realTime = parseInt(time);
    if (realTime >= 18) {
      document.getElementById("day").classList.remove("bright");
      document.getElementById("day").classList.add("dark");
      document.getElementById("detailed-info").classList.remove("white");
      document.getElementById("detailed-info").classList.add("black");
      document.getElementById("info-region").classList.remove("white");
      document.getElementById("info-region").classList.add("whitee");
      document.getElementById("info-day").classList.remove("white");
      document.getElementById("info-day").classList.add("whitee");
      document.getElementById("info-week").classList.remove("white");
      document.getElementById("info-week").classList.add("whitee");
      document.getElementById("info-number").classList.remove("white");
      document.getElementById("info-number").classList.add("whitee");
      document.getElementById(
        "good-morning"
      ).innerHTML = `<img id="img-visibleTwo" class="hidden" src="./assets/desktop/icon-moon.svg" alt="" /> <p>GOOD EVENING, IT'S CURRENTLY</p`;
      document.getElementById("img-visible").classList.remove("visible");
      document.getElementById("img-visible").classList.add("hidden");
      document.getElementById("good").classList.remove("visible");
      document.getElementById("good").classList.add("hidden");
    }
  });

fetch("https://programming-quotes-api.herokuapp.com/quotes/random")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("quotes").innerHTML = `<p id="quote-p">${data.en}`;
  });
function quotes() {
  fetch("https://programming-quotes-api.herokuapp.com/quotes/random")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById(
        "quotes"
      ).innerHTML = `<p id="quote-p">${data.en}`;
    });
}

document.getElementById("shape").addEventListener("click", quotes);

function dynamic() {
  fetch("http://worldtimeapi.org/api/ip/")
    .then((response) => response.json())
    .then((data) => {
      let timerr = data.datetime.slice(11, 16);

      document.getElementById(
        "TIMER"
      ).innerHTML = `<span id="bold-time">${timerr}</span><span id="bold-zone">${data.abbreviation}</span>`;
    });
}

setInterval(dynamic, 1000);

fetch(
  "https://api.freegeoip.app/json/?apikey=2fc33440-aaaf-11ec-888c-c55943537f24"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.getElementById(
      "city"
    ).innerHTML = `<span id="location">in ${data.city}, ${data.country_name}</span>`;
  });
const detailed = document.getElementById("detailed-info");
const quotee = document.getElementById("quotes");
const shaper = document.getElementById("shape");
const times = document.getElementById("time");
const textMore = document.getElementById("text-more");
const textLess = document.getElementById("text-less");
const imgOne = document.getElementById("more-but");
const imgTwo = document.getElementById("img2");

function squezee() {
  if (detailed.classList.contains("hidden")) {
    detailed.classList.remove("hidden");
    quotee.classList.remove("visible");
    quotee.classList.add("hidden");
    shaper.classList.add("hidden");
    times.classList.remove("down");
    times.classList.add("up");
    textMore.classList.remove("visible");
    textMore.classList.add("hidden");
    textLess.classList.remove("hidden");
    textLess.classList.add("visible");
    imgOne.classList.remove("visible");
    imgOne.classList.add("hidden");
    imgTwo.classList.remove("hidden");
    imgTwo.classList.add("visiblee");
  } else {
    detailed.classList.add("hidden");
    quotee.classList.remove("hidden");
    shaper.classList.remove("hidden");
    quotee.classList.add("visible");
    times.classList.add("down");
    times.classList.remove("up");
    textMore.classList.add("visible");
    textMore.classList.remove("hidden");
    textLess.classList.add("hidden");
    textLess.classList.remove("visible");
    imgOne.classList.remove("hidden");
    imgOne.classList.add("visible");
    imgTwo.classList.remove("visible");
    imgTwo.classList.add("hidden");
  }
}

document.getElementById("more").addEventListener("click", squezee);

fetch("http://worldtimeapi.org/api/ip/")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById(
      "info-region"
    ).innerHTML += `<span id="timeeer">${data.timezone}</span>`;
    document.getElementById(
      "info-day"
    ).innerHTML += `<span id="timeeer">${data.day_of_year}</span>`;
    document.getElementById(
      "info-week"
    ).innerHTML += `<span id="timeeer">${data.day_of_week}</span>`;
    document.getElementById(
      "info-number"
    ).innerHTML += `<span id="timeeer">${data.week_number}</span>`;
  });
