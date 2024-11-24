// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggleMode = document.querySelector("#toggle");
const asideEl = document.querySelector("aside");

let mode = localStorage.getItem("mode") || "light";
asideEl.setAttribute("class", mode);

toggleMode.checked = (mode === "dark");

toggleMode.addEventListener("click", function () {
  if (mode === "light") {
    mode = "dark";
    toggleButton.textContent = '🌞';
    asideEl.setAttribute("class", "dark");
  } else {
    mode = "light";
    toggleButton.textContent = '🌛';
    asideEl.setAttribute("class", "light");
  }
  localStorage.setItem("mode", mode);
  toggleMode.checked = (mode === "dark");
});

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
const readLocalStorage = function () {
  return JSON.parse(localStorage.getItem("formData")) || [];
};


// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
const storeLocalStorage = function (data) {
  const blogData = readLocalStorage();
  blogData.push(data);
  localStorage.setItem("formData", JSON.stringify(blogData));
};

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

