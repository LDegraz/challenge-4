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
    const blogData = readLocalStorage();
    if (!blogData.length) {
        noPosts();
        return;
    }
    blogData.forEach(function (post) {
        const divEl = document.createElement("div");
        const h2El = document.createElement("h2");
        const pEl = document.createElement("p");
        const dateEl = document.createElement("p");
        console.log(post);
    
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

document.getElementById("back").addEventListener("click", function () {
    redirectPage("index.html");
    });
