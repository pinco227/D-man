// CREDIT: https://blog.skay.dev/custom-spa-router-vanillajs

// Content Container
const contentDiv = document.getElementById('content');

//Declare the variables for home, about & contact html pages
let home = '';
let music = '';
let videos = '';
let gallery = '';
let about = '';
let contact = '';

// Declare Titles
const mainTitle = 'D-Man';
const homeTitle = 'Welcome';
const musicTitle = 'Music Library';
const videosTitle = 'Videos Library';
const galleryTitle = 'Photo Gallery';
const aboutTitle = 'About Me';
const contactTitle = 'Contact';

/** 
* Loads the page content
* @param {string} page - The relative url of the page
* @return {string} Returns the content of the page in a string.
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
    music = await loadPage('music-library.html');
    videos = await loadPage('video-library.html');
    gallery = await loadPage('photo-gallery.html');
    about = await loadPage('about-me.html');
    contact = await loadPage('contact-page.html');
};

/**
 * The Main Function is an async function that first loads All Page HTML to the variables
 * Once the variables are loaded with the contents, then they are assigned to the 'routes' variable
 */
async function main() {
    await loadAllPages();
    routes = {
        '': home,
        'index.html': home,
        'music': music,
        'videos': videos,
        'gallery': gallery,
        'about': about,
        'contact': contact,
    };
    titles = {
        '': homeTitle,
        'index.html': homeTitle,
        'music': musicTitle,
        'videos': videosTitle,
        'gallery': galleryTitle,
        'about': aboutTitle,
        'contact': contactTitle,
    }
    let page = window.location.pathname.split('/').slice(-1)[0];
    setPage(page);
};

/** 
* Set the page's title and content by overwriting current title and innerHtml
* @param {string} p - Page relative url
*/
function setPage(p) {
    if (p === 'videos') {
        writeToDoc('yt-content');
        // getData(youtubePlaylistApiUrl);
    }
    document.title = titles[p] + ' | ' + mainTitle;
    contentDiv.innerHTML = routes[p];
}

/**
 * The Function is invoked when the window.history changes
 */
window.onpopstate = () => {
    setPage(window.location.pathname);
};

// Navigation links event listeners for dynamic page load
document.querySelectorAll('.nav-link').forEach(function (button) {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        let pathName = button.href;
        let page = pathName.split('/').slice(-1)[0];
        window.history.pushState({}, titles[page], pathName);
        setPage(page);
    });
});

// Invoke the Main function
main();