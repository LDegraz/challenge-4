// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainEl = document.querySelector("main");
const backBtn = document.querySelector("#back");

// TODO: Create a function that builds an element and appends it to the DOM
const divEl = document.createElement("div");
document.body.appendChild(mainEl);

// TODO: Create a function that handles the case where there are no blog posts to display
const noPosts = function () {
  const h2El = document.createElement("h2");
  h2El.textContent = "No Blog posts yet...";
  mainEl.appendChild(h2El);
};
// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
const renderBlogList = function () {
    const blogData = JSON.parse(localStorage.getItem("formData")) || [];
    if (!blogData.length) {
        noPosts();
        return;
    }
    blogData.forEach(function (post) {
        const divEl = document.createElement("div");
        const h2El = document.createElement("h2");
        const pEl = document.createElement("p");
        const dateEl = document.createElement("p");
    
        h2El.textContent = post.title;
        pEl.textContent = post.content;
        dateEl.textContent = post.username;
    
        divEl.appendChild(h2El);
        divEl.appendChild(pEl);
        divEl.appendChild(dateEl);
    
        mainEl.appendChild(divEl);
    });
}
// TODO: Call the `renderBlogList` function
renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

// Add event listener to the back button
backBtn.addEventListener("click", function() {
  redirectPage("index.html");
});
