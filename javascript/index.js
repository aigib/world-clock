function updateTime() {
  let tallinnElement = document.querySelector("#tallinn");
  let tallinnDateElement = tallinnElement.querySelector(".date");
  let tallinnTimeElement = tallinnElement.querySelector(".time");
  let tallinnTime = moment().tz("Europe/Tallinn");

  tallinnDateElement.innerHTML = moment().format("MMMM Do YYYY");

  tallinnTimeElement.innerHTML = tallinnTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let perthElement = document.querySelector("#perth");
  let perthDateElement = perthElement.querySelector(".date");
  let perthTimeElement = perthElement.querySelector(".time");
  let perthTime = moment().tz("Australia/Perth");

  perthDateElement.innerHTML = moment().format("MMMM Do YYYY");

  perthTimeElement.innerHTML = perthTime.format("h:mm:ss [<small>]A[</small>]");
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class ="city">
  <div>
  <h2>${cityName}</h2>
  <div class ="date">${cityTime.format("MMMM Do YYYY")}</div>
  </div>
  <div class ="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div></div>`;
}
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
