import './style.css'

const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);

var color, testDay

const inputColor = urlParams.get('color')
if (inputColor) {
  color = inputColor.replace(/[^a-z0-9]/gi, '')
}

const inputTestDay = urlParams.get('day')
if (inputTestDay) {
  testDay = inputTestDay.replace(/[^0-9]/gi, '')
}

const app = document.getElementById("app");
const title = document.getElementById("title");
const content = document.getElementById("content");

const date = new Date()
const day = testDay ? testDay : date.getDay();

if (day == 2 || day == 5) {
  // shop is closed
  title.innerHTML = "Merge to HF"
  content.innerHTML = "HF Builds open until 2:30 AM the next day"
  app.style.background = `#${(color ? color : "e60017")}`
  app.style.color = `#FFFFFF`
} else {
  title.innerHTML = "Can't Merge to HF"
  content.innerHTML = "HF Builds won't open until Tuesday or Friday"
  app.style.background = `#FFFFFF`
  app.style.color = `#000000`
}
