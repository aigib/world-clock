function updateTime() {
  let tallinnElement = document.querySelector("#tallinn");
  let tallinnDateElement = tallinnElement.querySelector(".date");
  let tallinnTimeElement = tallinnElement.querySelector(".time");
  let tallinnTime = moment().tz("Europe/Tallinn");

  tallinnDateElement.innerHTML = moment().format("MMMM Do YYYY");

  tallinnTimeElement.innerHTML = tallinnTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let osloElement = document.querySelector("#oslo");
  let osloDateElement = osloElement.querySelector(".date");
  let osloTimeElement = osloElement.querySelector(".time");
  let osloTime = moment().tz("Europe/Oslo");

  osloDateElement.innerHTML = moment().format("MMMM Do YYYY");

  osloTimeElement.innerHTML = osloTime.format("h:mm:ss [<small>]A[</small>]");
}
setInterval(updateTime, 1000);
