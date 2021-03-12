// Global object to store songs for player
// Pre-filled with a selection of songs
const globalPlaylist = {
    "bindings": {
        37: 'prev',
        39: 'next',
        32: 'play_pause'
    },
    "default_album_art": "https://pinco227.github.io/D-man/media/music/cover.jpg",
    "songs": [
        {
            "name": "O viata",
            "artist": "Dahey & DMAN",
            "album": "Morphine",
            "url": "https://pinco227.github.io/D-man/media/music/2008%20MORPHINE%20project/01.%20Morphine%20-%20O%20viata.mp3",
            "cover_art_url": "https://pinco227.github.io/D-man/media/music/2008%20MORPHINE%20project/morphine.jpg",
            "duration": "03:35"
        },
        {
            "name": "Noi",
            "artist": "Dahey & DMAN",
            "album": "Morphine",
            "url": "https://pinco227.github.io/D-man/media/music/2008%20MORPHINE%20project/06.%20Morphine%20-%20Noi.mp3",
            "cover_art_url": "https://pinco227.github.io/D-man/media/music/2008%20MORPHINE%20project/morphine.jpg",
            "duration": "04:07"
        },
        {
            "name": "diliMan",
            "artist": "DMAN ft. SEBA",
            "album": "DOMINO Project",
            "url": "https://pinco227.github.io/D-man/media/music/2001%20DOMINO%20project/DMAN%20ft%20SEBA%20-%20diliMan.mp3",
            "cover_art_url": "https://pinco227.github.io/D-man/media/music/2001%20DOMINO%20project/cover.jpg",
            "duration": "03:33"
        },
        {
            "name": "Si Ingerii Plang",
            "artist": "Vineri 13",
            "album": "Ingeri si Demoni",
            "url": "https://pinco227.github.io/D-man/media/music/1999%20VINERI%2013%20-%20Ingeri%20si%20Demoni/Vineri%2013%20-%20Si%20ingerii%20plang.mp3",
            "cover_art_url": "https://pinco227.github.io/D-man/media/music/1999%20VINERI%2013%20-%20Ingeri%20si%20Demoni/cover.jpg",
            "duration": "04:30"
        },
        {
            "name": "Joaca dupa reguli",
            "artist": "Vineri 13",
            "album": "Ne Doare La BassK",
            "url": "https://pinco227.github.io/D-man/media/music/1998%20VINERI%2013%20-%20Ne%20doare%20la%20BassK/Vineri%2013%20%20-%20Joaca%20dupa%20reguli%20(1998).mp3",
            "cover_art_url": "https://pinco227.github.io/D-man/media/music/1998%20VINERI%2013%20-%20Ne%20doare%20la%20BassK/cover.jpg",
            "duration": "04:19"
        },
        {
            "name": "Mana la cer feat. Ovi",
            "artist": "Vineri 13",
            "album": "Ingeri si Demoni",
            "url": "https://pinco227.github.io/D-man/media/music/1999%20VINERI%2013%20-%20Ingeri%20si%20Demoni/Vineri%2013%20cu%20Ovi%20GENIUS%20-%20Mana%20la%20cer.mp3",
            "cover_art_url": "https://pinco227.github.io/D-man/media/music/1998%20VINERI%2013%20-%20Ne%20doare%20la%20BassK/cover.jpg",
            "duration": "03:39"
        },
        {
            "name": "1, 2 si 3 de 4 ft PDV",
            "artist": "DMAN, Dahey, Jonny, Mihai",
            "album": "Singles",
            "url": "https://pinco227.github.io/D-man/media/music/Singles/2000%20DMAN,%20DAHEY,%20JONNY,%20MIHAI%20ft%20PDV-%201%202%20%20si%203%20de%204%20.mp3",
            "cover_art_url": "https://pinco227.github.io/D-man/media/music/Singles/cover.jpg",
            "duration": "03:52"
        },
        {
            "name": "Amintirea ta",
            "artist": "DMAN ft. Andrei",
            "album": "Singles",
            "url": "https://pinco227.github.io/D-man/media/music/Singles/2002%20DILIMANU%20ft%20ANDREI%20-%20Amintirea%20Ta.mp3",
            "cover_art_url": "https://pinco227.github.io/D-man/media/music/Singles/cover.jpg",
            "duration": "04:17"
        },
        {
            "name": "Fak Ya Yo!",
            "artist": "DMAN ft. Dahey",
            "album": "Singles",
            "url": "https://pinco227.github.io/D-man/media/music/Singles/2005%20DMAN%20ft%20DAHEY-%20Fak%20Ya%20Yo%20!.mp3",
            "cover_art_url": "https://pinco227.github.io/D-man/media/music/Singles/cover.jpg",
            "duration": "04:15"
        },
        {
            "name": "Scrisoare de pe front",
            "artist": "LORE ft. DMAN",
            "album": "Singles",
            "url": "https://pinco227.github.io/D-man/media/music/Singles/2014%20LORE%20ft%20DMAN%20-%20Scrisoare%20de%20pe%20front%20.mp3",
            "cover_art_url": "https://pinco227.github.io/D-man/media/music/Singles/cover.jpg",
            "duration": "04:00"
        },
        {
            "name": "Inger si demon",
            "artist": "Rosu si Negru ft. DMAN",
            "album": "Singles",
            "url": "https://pinco227.github.io/D-man/media/music/Singles/2015%20ROSUsi%20NEGRU%20cu%20DMAN%20-%20Inger%20si%20Demonn%20.mp3",
            "cover_art_url": "https://pinco227.github.io/D-man/media/music/Singles/cover.jpg",
            "duration": "04:37"
        },
        {
            "name": "Las ca-i bine",
            "artist": "DMAN",
            "album": "Singles",
            "url": "https://pinco227.github.io/D-man/media/music/Singles/2018%20DMAN%20-%20Las%20ca-i%20bine.mp3",
            "cover_art_url": "https://pinco227.github.io/D-man/media/music/Singles/cover.jpg",
            "duration": "02:56"
        }
    ],
    callbacks: {
        play: function () {
            const playlist = globalPlaylist.songs;
            localStorage.setItem('playlist', JSON.stringify(playlist));

            const songIndex = Amplitude.getActiveIndex();
            localStorage.setItem('activeSongIndex', songIndex);

            let playPauseButton = document.getElementById("play-pause");
            let songArtDiv = document.getElementById("player-top");
            playPauseButton.classList.remove("amplitude-paused");
            playPauseButton.classList.add("amplitude-playing");
            songArtDiv.classList.add("rotate-art");
            songArtDiv.style.webkitAnimationPlayState = "running";

            const audioEl = Amplitude.getAudio();
            audioEl.onerror = function () {
                console.log("Error " + audioEl.error.code + "; details: " + audioEl.error.message);
                Amplitude.next();
            }
        },
        song_change: function () {
            const songIndex = Amplitude.getActiveIndex();
            localStorage.setItem('activeSongIndex', songIndex);
        },
        loadedmetadata: function () {
            updateMetadata(); // Media Session API
        },
        pause: function () {
            let playPauseButton = document.getElementById("play-pause");
            let songArtDiv = document.getElementById("player-top");
            playPauseButton.classList.remove("amplitude-playing");
            playPauseButton.classList.add("amplitude-paused");
            songArtDiv.style.webkitAnimationPlayState = "paused";
        },
        timeupdate: function () {
            const songPercentage = Amplitude.getSongPlayedPercentage();
            localStorage.setItem('songPercentage', songPercentage);

            updatePositionState(); // Media Session API, set the duration.
        }
    },
    waveforms: {
        sample_rate: 200
    },
};

/** 
* Updates the dom with playlist from global object
*/
function writePlayList() {
    var listDiv = document.getElementById('list');
    listDiv.innerHTML = globalPlaylist.songs.map(function (_, i) {
        return `
        <div class="song amplitude-song-container amplitude-play-pause" data-amplitude-song-index="${i}">
            <span class="song-number-now-playing">
                <span class="number">${i + 1}</span>
                <img class="now-playing" src="assets/images/music-note-beamed.svg" />
            </span>

            <div class="song-meta-container">
                <span class="song-name" data-amplitude-song-info="name" data-amplitude-song-index="${i}"></span>
                <span class="song-artist-album"><span data-amplitude-song-info="artist" data-amplitude-song-index="${i}"></span> - <span data-amplitude-song-info="album" data-amplitude-song-index="${i}"></span></span>
            </div>
            <span class="song-duration duration" data-amplitude-song-info="duration" data-amplitude-song-index="${i}"></span>
        </div>
        `;
    }).join("");
}
/** 
* Loads the global playlist into player after it has been changed
* @param {optional} again - Optional parameter to detect if function was called initialy or from the library
* @return {ReturnValueDataTypeHere} Brief description of the returning value here.
*/
function loadPlaylist(again = "yes", songIndex = 0) {
    if (again == "yes") { // Load playlist from library
        writePlayList();
        Amplitude.stop();   // Stop player in order to avoid overlaping songs

        // Promise
        let initPlayer = new Promise(
            function () {
                Amplitude.init(globalPlaylist);
                Amplitude.pause();
            }
        );
        if (songIndex != 0) {
            if (typeof (songIndex) == "number") {
                initPlayer.then(Amplitude.playSongAtIndex(songIndex));
            } else {
                initPlayer.then(playShuffle());
            }
        } else {
            initPlayer.then(Amplitude.play());
        }
    } else if (again == "no") { // Load playlist initialy
        writePlayList();
        Amplitude.init(globalPlaylist);
        Amplitude.pause();
        if (localStorage.getItem("activeSongIndex")) {  // Check if the play button was ever pressed
            // Ask for playback to reload from the stored state
            dialog('<i class="far fa-laugh-beam"></i> Welcome back!',
                function () {   // Yes callback function
                    if (localStorage.getItem("playlist")) { // Update songs list in the global variable
                        globalPlaylist.songs = JSON.parse(localStorage.getItem('playlist'));
                    }
                    writePlayList();
                    Amplitude.init(globalPlaylist);
                    Amplitude.pause();
                    Amplitude.playSongAtIndex(parseInt(localStorage.getItem('activeSongIndex')));

                    if (localStorage.getItem("songPercentage")) {   // Get song percentage stored from previous session
                        let songPercentageStored = localStorage.getItem('songPercentage')
                        setTimeout(function () {
                            Amplitude.setSongPlayedPercentage(parseFloat(songPercentageStored));
                        }, 700);
                    }
                    // Amplitude.play();
                }, function () {    // No callback function
                    localStorage.clear();   //Clear localstorage
                    writePlayList();
                    Amplitude.init(globalPlaylist);
                    Amplitude.pause();
                }
            );
        }
    }
}

/**
 * Set player Shuffle and play first song randomly
 */
function playShuffle() {
    Amplitude.setShuffle(true);
    Amplitude.play();
    Amplitude.next();
}

/** 
* Updates the Media Notification with current playing track information
*/
function updateMetadata() {
    const track = Amplitude.getActiveSongMetadata();
    navigator.mediaSession.metadata = new MediaMetadata({
        title: track.name,
        artist: track.artist,
        album: track.album,
        artwork: [
            {
                src: track.cover_art_url,
                sizes: '512x512',
                type: 'image/jpg'
            }
        ]
    });
}
/**
* Updates the Media Notification with current playing track position
*/
function updatePositionState() {
    if ('setPositionState' in navigator.mediaSession) {
        navigator.mediaSession.setPositionState({
            duration: Amplitude.getSongDuration(),
            playbackRate: Amplitude.getPlaybackSpeed(),
            position: Amplitude.getSongPlayedSeconds()
        });
    }
}

// Action handlers for media notification controls
navigator.mediaSession.setActionHandler('previoustrack', function () {
    Amplitude.prev();
});
navigator.mediaSession.setActionHandler('nexttrack', function () {
    Amplitude.next();
});
let defaultSkipTime = 10; /* Time to skip in seconds by default */
navigator.mediaSession.setActionHandler('seekbackward', function (event) {
    const skipTime = event.seekOffset || defaultSkipTime;
    const setTime = Math.max(Amplitude.getSongPlayedSeconds() - skipTime, 0);
    const setPercentage = (parseFloat(setTime) / parseFloat(Amplitude.getSongDuration())) * 100;
    Amplitude.setSongPlayedPercentage(setPercentage);
    updatePositionState();
});
navigator.mediaSession.setActionHandler('seekforward', function (event) {
    const skipTime = event.seekOffset || defaultSkipTime;
    const setTime = Math.min(Amplitude.getSongPlayedSeconds() + skipTime, Amplitude.getSongDuration());
    const setPercentage = (parseFloat(setTime) / parseFloat(Amplitude.getSongDuration())) * 100;
    Amplitude.setSongPlayedPercentage(setPercentage);
    updatePositionState();
});
navigator.mediaSession.setActionHandler('play', async function () {
    await Amplitude.play();
    navigator.mediaSession.playbackState = "playing";
    // Do something more than just playing audio...
});
navigator.mediaSession.setActionHandler('pause', function () {
    Amplitude.pause();
    navigator.mediaSession.playbackState = "paused";
    // Do something more than just pausing audio...
});
try {
    navigator.mediaSession.setActionHandler('stop', function () {
        Amplitude.stop();
        localStorage.clear();
    });
} catch (error) {
    console.log('Warning! The "stop" media session action is not supported.');
}
try {
    navigator.mediaSession.setActionHandler('seekto', function (event) {
        const setTime = event.seekTime;
        const setPercentage = (parseFloat(setTime) / parseFloat(Amplitude.getSongDuration())) * 100;
        Amplitude.setSongPlayedPercentage(setPercentage);
        updatePositionState();
    });
} catch (error) {
    console.log('Warning! The "seekto" media session action is not supported.');
}

// Amplitude key detection
window.onkeydown = function (e) {
    return !(e.keyCode == 32);
};

/** 
* Opens dialog modal
* @param {string} message - The message to be shown to user
* @param {function} yesCallback - Function to be called when user presses Yes
* @param {function} noCallback - Function to be called when user presses No
*/
function dialog(message, yesCallback, noCallback) {
    document.querySelector('#playback-dialog .modal-title').innerHTML = message;
    let dialogModal = new bootstrap.Modal(document.getElementById('playback-dialog'), {
        backdrop: 'static',
        keyboard: false
    });
    dialogModal.show();

    document.getElementById('dialog-yes').addEventListener('click', function () {
        dialogModal.hide();
        yesCallback();
    });
    document.getElementById('dialog-no').addEventListener('click', function () {
        dialogModal.hide();
        noCallback();
    });
}

// Resume playback dialog event listener
const playbackDialog = document.getElementById('playback-dialog');
playbackDialog.addEventListener('show.bs.modal', function () {
    const playerControlsPos = document.getElementsByTagName('footer')[0].getBoundingClientRect();
    const pDialog = document.getElementById('playback-dialog');

    // pDialog.style.width = playerPos.width + 'px';
    pDialog.style.height = playerControlsPos.height + 'px';
    pDialog.style.top = playerControlsPos.top + 'px';
    // pDialog.style.left = playerPos.left + 'px';
});
playbackDialog.addEventListener('shown.bs.modal', function () {
    const playerPos = document.getElementById('player-screen').getBoundingClientRect();
    const playerControlsPos = document.getElementsByTagName('footer')[0].getBoundingClientRect();
    const dBackDrop = document.getElementsByClassName('modal-backdrop')[0];
    const cloneBackDrop = dBackDrop.cloneNode(true);

    dBackDrop.style.height = playerControlsPos.height + 'px';
    dBackDrop.style.top = playerControlsPos.top + 'px';

    const cloneElement = document.body.appendChild(cloneBackDrop);

    cloneElement.style.width = playerPos.width + 'px';
    cloneElement.style.height = playerPos.height + 'px';
    cloneElement.style.top = playerPos.top + 'px';
    cloneElement.style.left = playerPos.left + 'px';
});
playbackDialog.addEventListener('hidden.bs.modal', function () {
    document.querySelectorAll('.modal-backdrop').forEach(function (el) { el.remove(); });
});// Make player image container square

// Initial load
loadPlaylist("no");