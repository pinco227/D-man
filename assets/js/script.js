// // Get html from url and insert into index.html
// function fetchUrl(url) {
//     // https://gomakethings.com/getting-html-with-fetch-in-vanilla-js/
//     // Fetch the content of the destination page
//     fetch(url).then(function (response) {
//         return response.text();
//     }).then(function (html) {
//         // Parse the response text to html object
//         var parser = new DOMParser();
//         var doc = parser.parseFromString(html, 'text/html');
//         var html = doc.querySelector('html').innerHTML;
//         var title = doc.querySelector('title').innerHTML;
//         var body = doc.querySelector('body').innerHTML;
//         contentDiv.innerHTML = body;
//         document.title = title;
//         window.history.pushState({ "html": html, "pageTitle": title }, "", url);
//     }).catch(function (err) {
//         // There was an error
//         console.warn('Something went wrong.', err);
//     });
// }

// CREDIT: https://blog.skay.dev/custom-spa-router-vanillajs
// Content Container
let contentDiv = document.getElementById('content');

//Declare the variables for home, about & contact html pages
let home = '';
let music = '';
let videos = '';
let gallery = '';
let about = '';
let contact = '';

/**
 *
 * @param {String} page - Represents the page information that needs to be retrieved
 * @returns {String} resHtml - The Page's HTML is returned from the async invocation
 */
async function loadPage(page) {
    const response = await fetch(page);
    const resHtml = await response.text();
    return resHtml;
};

/**
 * The Async function loads all HTML to the variables 'home', 'about' & 'contact'
 */
async function loadAllPages() {
    home = await loadPage('home.html');
    music = await loadPage('music.html');
    videos = await loadPage('videos.html');
    gallery = await loadPage('gallery.html');
    about = await loadPage('about.html');
    contact = await loadPage('contact.html');
};

/**
 * The Main Function is an async function that first loads All Page HTML to the variables
 * Once the variables are loaded with the contents, then they are assigned to the 'routes' variable
 */
async function main() {
    await loadAllPages();
    routes = {
        '': home,
        'home': home,
        'index.html': home,
        'music': music,
        'videos': videos,
        'gallery': gallery,
        'about': about,
        'contact': contact,
    };
    contentDiv.innerHTML = routes[window.location.pathname];
};

// Invoke the Main function
main();

/**
 * The Function is invoked when the window.history changes
 */
window.onpopstate = () => {
    contentDiv.innerHTML = routes[window.location.pathname];
};

// Navigation links event listeners for dynamic page load
document.querySelectorAll('.nav-link').forEach(function (button) {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        var pathName = button.href;
        var page = pathName.split('/').slice(-1)[0];
        window.history.pushState({}, page, pathName);
        contentDiv.innerHTML = routes[page];
    });
});

console.log(window.location.origin);