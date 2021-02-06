// --------------------------------------- Single Page App (SPA) Navigation System ----------
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
* Set the page's title and content by overwriting current title and innerHtml
* @param {string} p - Page relative url
*/
function setPage(p) {
    document.title = titles[p] + ' | ' + mainTitle;
    contentDiv.innerHTML = routes[p];
    if (p === 'videos') {
        writeVideosToDoc();
    } else if (p === 'gallery') {
        writePhotosToDoc();
    } else if (p === 'music') {
        writeMusicToDoc();
    }
}

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
// ---------------------------------------------------------------------- SPA END  ----------

// ------------------------------------------------------------------- PAGES APIs  ----------
// Declare API urls to call for GET
// Youtube
const youtubePlaylistApiUrl = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UU-pMGW4z9PyJ8R8J19tBzsg&key=AIzaSyASZKSW8QjCJPjuRvlaSzEA67IYSxENYe0';
// Gallery
const galleryApiUrl = 'https://pinco227.github.io/D-man/media/photos/list.json';
// Music
const musicApiUrl = 'https://pinco227.github.io/D-man/media/music/list.json';

/** 
* API GET function. Gets the data from the url and sends it as a parameter to the callback function.
* @param {string} url - Api url to be called
* @param {function} cb - Callback function
*/
function getData(url, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
    xhr.open("GET", url);
    xhr.send();
}

/**
* Write the result of the Videos API call to the DOM
* @param {string} contentDiv - The id of the element to be written to
*/
function writeVideosToDoc() {
    getData(youtubePlaylistApiUrl, function (data) {
        var writeTo = document.getElementById('yt-content');
        data = data.items;
        var list = document.createElement('ul');

        data.forEach(function (item) {
            var listItem = document.createElement('li');
            listItem.innerHTML = `
                <img src="${item.snippet.thumbnails.medium.url}" />
            `;
            list.appendChild(listItem);
        });

        writeTo.appendChild(list);
    });
}

/** 
* Write the result of the Photos API call to the DOM
* @param {string} contentDiv - The id of the element to be written to
*/
function writePhotosToDoc() {
    getData(galleryApiUrl, function (data) {
        var writeTo = document.getElementById('gallery-content');
        data = data.files;
        var list = document.createElement('ul');

        data.forEach(function (item) {
            var listItem = document.createElement('li');
            listItem.innerHTML = `
                <img src="media/photos/${item.thumbnail}" alt="${item.title} - ${item.description}" />
            `;
            list.appendChild(listItem);
        });

        writeTo.appendChild(list);
    });
}
/** 
* Write the result of the Music API call to the DOM
* @param {number} album - album index. If is set the function writes the songs of album. If is not set it writes the album list
*/
function writeMusicToDoc(album) {
    getData(musicApiUrl, function (data) {
        globalPlaylist.songs = [];
        var writeTo = document.getElementById('music-library');
        writeTo.innerHTML = '';
        data = data.albums;

        // Write the songs list of album
        if (typeof album == "number") {
            writeTo.innerHTML = `<button onClick="writeMusicToDoc()">Back</button>`;
            var list = document.createElement('ul');
            data[album].songs.forEach(function (item) {
                var listItem = document.createElement('li');
                listItem.innerHTML = `
                    ${item.artist} - ${item.name}
                `;
                list.appendChild(listItem);

                var song = {
                    "name": item.name,
                    "artist": item.artist,
                    "album": data[album].name,
                    "url": "/media/music/" + data[album].path + "/" + item.url,
                    "cover_art_url": "/media/music/" + data[album].path + "/" + data[album].cover,
                    "duration": item.duration
                };
                globalPlaylist.songs.push(song);
            });
            writeTo.appendChild(list);

        } else { // writes the album list
            var list = document.createElement('ul');
            data.forEach(function (item, i) {
                var listItem = document.createElement('li');
                listItem.innerHTML = `
                    <img src="media/music/${item.path}/${item.cover}" alt="${item.artist} - ${item.name}" width="100" onClick="writeMusicToDoc(${i});" />
                `;
                list.appendChild(listItem);

                item.songs.forEach(function (sg) {
                    var song = {
                        "name": sg.name,
                        "artist": sg.artist,
                        "album": item.name,
                        "url": "/media/music/" + item.path + "/" + sg.url,
                        "cover_art_url": "/media/music/" + item.path + "/" + item.cover,
                        "duration": sg.duration
                    };
                    globalPlaylist.songs.push(song);
                });
            });
            writeTo.appendChild(list);
        }
        writeTo.innerHTML += `<button onClick="loadPlaylist()">Play</button>`;
    });
}

// ---------------------------------------------------------------- PAGES APIs END ----------

// Invoke the Main function
main();