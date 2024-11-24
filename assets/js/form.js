// TODO: Create a variable that selects the form element
var formEl = document.querySelector("form");

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
const handleFormSubmit = function (event) {
  event.preventDefault();
  var username = document.querySelector("#username").value.trim();
  var title = document.querySelector("#title").value.trim();
  var content = document.querySelector("#content").value.trim();

  if (!username || !title || !content) {
    var error = document.querySelector("#error-message");
    error.textContent = "You are missing a required field!";
    return;
  }

  var formData = {
    username: username,
    title: title,
    content: content,
  };

  localStorage.setItem("formData", JSON.stringify(formData));
  redirectPage(blog.html);
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
formEl.addEventListener("submit", handleFormSubmit);