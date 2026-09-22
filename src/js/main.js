import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

// Disclaimer link
const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

// Page title
document.title = parkData.fullName;

// Hero image
const heroImage = document.querySelector(".hero-banner > img");
heroImage.src = parkData.images[0].url;
heroImage.alt = parkData.images[0].altText;

// Hero content 
function parkInfoTemplate(info) {
  return `<a href="/" class="hero-banner__title">${info.name}</a>
  <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}

document.querySelector(".hero-banner__content").innerHTML = parkInfoTemplate(parkData);