// -------------------------------------------------------------- Device Detection ----------
// CREDIT: https://stackoverflow.com/a/3540295
let isMobile = false; //initiate as false
// device detection
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
    isMobile = true;
}

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
    home = await loadPage('homepage.html');
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
    p = p in routes ? p : '';
    document.title = titles[p] + ' | ' + mainTitle;
    contentDiv.innerHTML = routes[p];
    if (p === 'videos') {
        // Inserts youtube api script before first <script> in HTML
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

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
        'home': home,
        'index.html': home,
        'music': music,
        'videos': videos,
        'gallery': gallery,
        'about': about,
        'contact': contact
    };
    titles = {
        '': homeTitle,
        'home': homeTitle,
        'index.html': homeTitle,
        'music': musicTitle,
        'videos': videosTitle,
        'gallery': galleryTitle,
        'about': aboutTitle,
        'contact': contactTitle
    }
    let page = window.location.pathname.split('/').pop().split('#')[0];
    setPage(page);
};

function navigate(event, href) {
    event.preventDefault();
    let pathName = href;
    let page = pathName.split('/').pop();
    window.history.pushState({}, titles[page], pathName);
    setPage(page);
}

// ###################################### SPA EVENTS
/**
 * The Function is invoked when the window.history changes
 */
window.onpopstate = () => {
    let page = window.location.pathname.split('/').pop().split('#')[0];
    setPage(page);
};

// Navigation links event listeners for dynamic page load
document.querySelectorAll('.spa-nav').forEach(function (button) {
    button.addEventListener('click', function (e) {
        navigate(e, button.href);
        // e.preventDefault();
        // let pathName = button.href;
        // let page = pathName.split('/').pop();
        // window.history.pushState({}, titles[page], pathName);
        // setPage(page);
    });
});
// ---------------------------------------------------------------------- SPA END  ----------

// ------------------------------------------------------------------- PAGES APIs  ----------
// Declare API urls to call for GET
// Youtube
const youtubePlaylistApiUrl = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=UU-pMGW4z9PyJ8R8J19tBzsg&key=AIzaSyASZKSW8QjCJPjuRvlaSzEA67IYSxENYe0';
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

// ###################################### Video Library Page

// Declare global youtube Modal and Player variables
// let ytModalEl;
// let ytModal;
let ytPlayer;
function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player('yt-player');
}

/**
* Write the result of the Videos API call to the DOM
* @param {string} contentDiv - The id of the element to be written to
*/
function writeVideosToDoc() {
    getData(youtubePlaylistApiUrl, function (data) {
        const writeTo = document.getElementById('yt-content');
        let html = '';
        data = data.items;
        ytModalEl = document.getElementById('yt-modal');
        // ytModal = new bootstrap.Modal(ytModalEl);

        data.forEach(function (item) {
            html += `
            <div class="col-6 col-sm-4 col-md-6 col-lg-3 video-col" data-bs-toggle="modal" data-bs-target="#yt-modal" data-yt-id="${item.snippet.resourceId.videoId}">
                <article>
                <div class="video-thumb-container">
                    <img src="${item.snippet.thumbnails.medium.url}" class="yt-item" />
                    <i class="far fa-play-circle video-play-icon"></i>
                </div>
                <span class="video-title">${item.snippet.title}</span>
                </article>
            </div>
            `;
        });

        writeTo.innerHTML = html;

        ytModalEl.addEventListener('hide.bs.modal', function (event) {
            ytPlayer.stopVideo();
            // Amplitude.play();
        })

        // Navigation links event listeners for dynamic page load
        document.querySelectorAll('.video-col').forEach(function (button) {
            button.addEventListener('click', function () {
                ytPlayer.loadVideoById(this.getAttribute("data-yt-id"));
                // ytModal.show();
                Amplitude.pause();
                ytPlayer.playVideo();
            });
        });
    });
}
// ###################################### Video Library Page END

// ###################################### Photo Gallery Page
/** 
* Write the result of the Photos API call to the DOM
* @param {string} contentDiv - The id of the element to be written to
*/
function writePhotosToDoc() {
    getData(galleryApiUrl, function (data) {
        const galleryContent = document.getElementById('gallery-content');
        const galleryCarouselInner = document.getElementById('galleryCarousel').firstElementChild;
        data = data.files;

        galleryCarouselInner.innerHTML = data.map(function (item, i) {
            return `
                <div class="carousel-item ${i == 0 ? 'active' : ''}" style="background-image:url('media/photos/${item.file}');">
                    <div class="carousel-caption d-none d-md-block">
                        <h3>${item.title}</h3>
                        <h5>${item.description}</h5>
                    </div>
                </div>
            `;
        }).join("");

        galleryContent.innerHTML = data.map(function (item, i) {
            return `
                <div class="col-6 col-sm-4 col-md-6 col-lg-3" data-bs-toggle="modal" data-bs-target="#galleryModal">
                  <figure>
                    <img class="gallery-image" src="media/photos/${item.thumbnail}" alt="${item.title} - ${item.description}" data-bs-target="#galleryCarousel" data-bs-slide-to="${i}">
                  </figure>
                </div>
            `;
        }).join("");
    });
}
// ###################################### Photo Gallery Page END

// ###################################### Music Library Page
/** 
* Write the result of the Music API call to the DOM
* @param {number} album - album index. If is set the function writes the songs of album. If is not set it writes the album list
*/
function writeMusicToDoc(album) {
    getData(musicApiUrl, function (data) {
        globalPlaylist.songs = [];
        const writeTo = document.getElementById('music-library');
        writeTo.innerHTML = '';
        data = data.albums;

        // Write the songs list of album
        if (typeof album == "number") {
            let html = `
            <div class="col-12">
                <button onClick="writeMusicToDoc()" class="btn btn-back"><i class="fas fa-angle-left"></i> Back</button>
            </div>
            <article>
            <div class="col-12">
                <div class="album-details">
                    <div class="album-art-container">
                        <img class="album-art" src="media/music/${data[album].path}/${data[album].cover}" alt="${data[album].artist} - ${data[album].name}" />
                    </div>
                    <div class="album-data">
                        <span class="album-title">${data[album].name}</span>
                        <span class="album-artist">${data[album].artist}</span>
                        <button class="btn btn-dmn" onClick="loadPlaylist(); closeModals();"><i class="fa fa-play" aria-hidden="true"></i> Play this album</button>
                    </div>
                </div>
                <div class="album-songs">
                `;
            data[album].songs.forEach(function (item, i) {
                html += `
                <div class="album-song-container" onClick="loadPlaylist('yes', ${i}); closeModals();">
                    <span class="album-song-index">${i + 1}</span>
                    <span class="album-song-name">${item.name}</span>
                    <span class="album-song-duration">${item.duration}</span>
                    <button class="btn btn-sm album-song-play">Play this <i class="fas fa-play"></i></button>
                    
                </div>
                `;

                const song = {
                    "name": item.name,
                    "artist": item.artist,
                    "album": data[album].name,
                    "url": "https://pinco227.github.io/D-man/media/music/" + data[album].path + "/" + item.url,
                    "cover_art_url": "https://pinco227.github.io/D-man/media/music/" + data[album].path + "/" + data[album].cover,
                    "duration": item.duration
                };
                globalPlaylist.songs.push(song);
            });
            html += `
                </div>
            </div>
            </article>`;
            writeTo.innerHTML += html;

        } else { // writes the album list
            let html = '<div class="row">';
            data.forEach(function (item, i) {
                html += `
                    <div class="col-6 col-sm-4 col-md-6 col-lg-3" onClick="clickHandler(writeMusicToDoc,${i},${isMobile ? '800' : '0'});">
                        <article>
                        <div class="album-card">
                            <div class="album-card-image" style="background-image:url('media/music/${item.path}/${item.cover}');"></div>
                            <div class="album-card-label">
                                <span class="album-card-name">${item.name}</span>
                                <span class="album-card-artist">${item.artist}</span>
                            </div>
                        </div>
                        </article>
                    </div>
                    
                `;

                item.songs.forEach(function (sg) {
                    var song = {
                        "name": sg.name,
                        "artist": sg.artist,
                        "album": item.name,
                        "url": "media/music/" + item.path + "/" + sg.url,
                        "cover_art_url": "media/music/" + item.path + "/" + item.cover,
                        "duration": sg.duration
                    };
                    globalPlaylist.songs.push(song);
                });
            });
            html += `
                <div class="col-6 col-sm-4 col-md-6 col-lg-3">
                    <div class="album-card">
                        <button class="btn btn-dmn btn-album-play" onClick="loadPlaylist(); closeModals();"><i class="fa fa-play" aria-hidden="true"></i> Play all</button>
                    </div>
                </div>
            </div>`;
            writeTo.innerHTML += html;
        }
    });
}

/**
* Pass a function with parameters and delay to a onclick event
* CREDIT : https://stackoverflow.com/a/386971
*/
function clickHandler(func, param, delay) {
    setTimeout(function () { func(param); }, delay);
}
// ###################################### Music Library Page END
// ---------------------------------------------------------------- PAGES APIs END ----------

// ----------------------------------------------------------------- APP EVENTS -------------
// Use Vibrant.js to theme the app based on the music art img
const playImg = document.getElementById('player-cover-art');
playImg.addEventListener('load', function () {
    Vibrant.from(playImg.src).getPalette()
        .then((palette) => {
            let root = document.querySelector(':root');
            let bgColor = `rgb(${palette.DarkMuted.getRgb()})`;
            // let textColor = `rgba(${palette.LightVibrant.r},${palette.LightVibrant.g},${palette.LightVibrant.b},.75)`;
            let linkColor = `rgb(${palette.LightVibrant.getRgb()})`;
            // let linkHover = `rgb(${palette.LightMuted.getRgb()})`;
            let headingsColor = `rgb(${palette.Vibrant.getRgb()})`;
            root.style.setProperty('--main-bg-color', bgColor);
            // root.style.setProperty('--main-text-color', textColor);
            root.style.setProperty('--main-link-color', linkColor);
            // root.style.setProperty('--main-link-color-hover', linkHover);
            root.style.setProperty('--headings-color', headingsColor);
            document.querySelector('meta[name="theme-color"]').setAttribute('content', palette.DarkMuted.getHex());
        });
    document.documentElement.style.backgroundImage = `url('${playImg.src}')`;
    const nowPlayingCover = document.getElementById('now-playing-cover');
    nowPlayingCover.style.backgroundImage = `url('${playImg.src}')`;
});

// Player Expand event listener (mobile)
document.getElementById('now-playing').addEventListener('click', function () {
    const player = document.getElementById('player-collapse');
    const collapseButton = document.getElementById('collapse-player');
    collapseButton.style.display = 'block';
    player.style.visibility = 'visible';
    player.style.top = '0';
});

// Player Collapse event listener (mobile)
document.getElementById('collapse-player').addEventListener('click', function () {
    const player = document.getElementById('player-collapse');
    this.style.display = 'none';
    player.style.visibility = 'hidden';
    player.style.top = '100vh';
});

// Close modals on browser back button trick
// CREDIT: https://stackoverflow.com/a/40033565
document.querySelectorAll('div.modal').forEach(function (el) {
    el.addEventListener('show.bs.modal', function () {
        let modal = this;
        let hash = modal.id;
        window.location.hash = hash;
    });
    el.addEventListener('hide.bs.modal', function () {
        window.history.pushState("", document.title, window.location.pathname);
    });
});
window.onhashchange = function () {
    if (!window.location.hash) {
        document.querySelectorAll('div.modal').forEach(function (el) {
            let modal = bootstrap.Modal.getInstance(el);
            modal ? modal.hide() : '';
        });
    }
}
// --------------------------------------------------------------- APP EVENTS END -----------

// ----------------------------------------------------------------- APP FUNCTIONS ----------

/**
* Set the height of the content and player area
* CREDIT : https://www.w3schools.com/howto/howto_js_media_queries.asp
*/
function setDocHeight(x) {
    const navbarHeight = document.getElementsByTagName('nav')[0].offsetHeight;
    const footerHeight = document.getElementsByTagName('footer')[0].offsetHeight;
    const docHeight = window.innerHeight;
    document.getElementById("content").style.height = `${docHeight - (navbarHeight + footerHeight)}px`;
    document.querySelector('#player-top').style.height = document.querySelector('#player-top').offsetWidth + 'px'; // make Player Art square
    if (x.matches) { // If media query matches
        document.getElementById("player-screen").style.height = `${docHeight - (navbarHeight + footerHeight)}px`;
    } else {
        document.getElementById("player-screen").style.height = '100vh';
    }
}

/**
 * Close any open modals
 */
function closeModals() {
    document.querySelectorAll('.modal.show').forEach(function (modal) {
        var modalInst = bootstrap.Modal.getInstance(modal); // Returns a Bootstrap modal instance
        modalInst.hide();
    });
}

const mediaQ = window.matchMedia("(min-width: 768px)");
mediaQ.addListener(setDocHeight); // Attach listener function on state changes

/**
 * On window resize/rotate/zoom event
 * @param {*} event 
 */
window.onresize = function (event) {
    setDocHeight(mediaQ);
    console.log('resize');
};

setDocHeight(mediaQ); // Call listener function at run time
main(); // Invoke the Main function which loads all pages into variables, create routes and set the current page