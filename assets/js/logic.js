// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggleMode = document.querySelector("#toggle");
const asideEl = document.querySelector("aside");


const root = document.documentElement;
root.style.setProperty("--circle-color", "#563D7C");

let mode = localStorage.getItem("mode") || "light";

document.body.setAttribute("class", mode);
toggleMode.textContent = (mode === "dark") ? '🌞' : '🌛';

//toggleMode.checked = (mode === "dark");

toggleMode.addEventListener("click", function () {
  if (mode === "light") {
    mode = "dark";
    document.body.setAttribute("class", "dark");
    toggleMode.textContent = '🌞';
  } else {
    mode = "light";
    document.body.setAttribute("class", "light");
    toggleMode.textContent = '🌛';
  }

  localStorage.setItem("mode", mode);
  //toggleMode.checked = (mode === "dark");
});

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
const readLocalStorage = function () {
  return JSON.parse(localStorage.getItem("blogData")) || [];
};


// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
const storeLocalStorage = function (data) {
  const blogData = readLocalStorage();
  blogData.push(data);
  console.log(blogData);
  localStorage.setItem("blogData", JSON.stringify(blogData));
};

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

