var globalPlaylist = {
    "bindings": {
        37: 'prev',
        39: 'next',
        32: 'play_pause'
    },
    "default_album_art": "https://pinco227.github.io/D-man/media/music/cover.jpg",
    "songs": [
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
            "name": "diliMan",
            "artist": "DMAN ft. SEBA",
            "album": "DOMINO Project",
            "url": "https://pinco227.github.io/D-man/media/music/2001%20DOMINO%20project/DMAN%20ft%20SEBA%20-%20diliMan.mp3",
            "cover_art_url": "https://pinco227.github.io/D-man/media/music/2001%20DOMINO%20project/cover.jpg",
            "duration": "03:33"
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
            "name": "Noi",
            "artist": "DMAN",
            "album": "Morphine",
            "url": "https://pinco227.github.io/D-man/media/music/2008%20MORPHINE%20project/06.%20Morphine%20-%20Noi.mp3",
            "cover_art_url": "https://pinco227.github.io/D-man/media/music/2008%20MORPHINE%20project/morphine.jpg",
            "duration": "04:07"
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
    ]
};

function updatePlayList() {
    var listDiv = document.getElementById('list');
    listDiv.innerHTML = "";
    var j = 1;
    globalPlaylist.songs.forEach(function (song, i) {
        listDiv.innerHTML += `
        <div class="song amplitude-song-container amplitude-play-pause" data-amplitude-song-index="${i}">
            <span class="song-number-now-playing">
                <span class="number">${j}</span>
                <img class="now-playing" src="https://521dimensions.com/img/open-source/amplitudejs/examples/flat-black/now-playing.svg" />
            </span>

            <div class="song-meta-container">
                <span class="song-name" data-amplitude-song-info="name" data-amplitude-song-index="${i}"></span>
                <span class="song-artist-album"><span data-amplitude-song-info="artist" data-amplitude-song-index="${i}"></span> - <span data-amplitude-song-info="album" data-amplitude-song-index="${i}"></span></span>
            </div>
            <span class="song-duration duration" data-amplitude-song-info="duration" data-amplitude-song-index="${i}"></span>
        </div>
        `;
        j++;
    });
}

function loadPlaylist(again) {
    if (typeof again == "undefined") {
        Amplitude.stop();
    }
    updatePlayList();
    Amplitude.init(globalPlaylist);
}

window.onkeydown = function (e) {
    return !(e.keyCode == 32);
};

/*
  Handles a click on the song played progress bar.
*/
document.getElementById('song-played-progress').addEventListener('click', function (e) {
    var offset = this.getBoundingClientRect();
    var x = e.pageX - offset.left;

    Amplitude.setSongPlayedPercentage((parseFloat(x) / parseFloat(this.offsetWidth)) * 100);
});

// document.querySelector('img[data-amplitude-song-info="cover_art_url"]').style.height = document.querySelector('img[data-amplitude-song-info="cover_art_url"]').offsetWidth + 'px';

loadPlaylist(1);