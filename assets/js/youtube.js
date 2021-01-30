// Declare youtube Api url to call for GET
const youtubePlaylistApiUrl = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UU-pMGW4z9PyJ8R8J19tBzsg&key=AIzaSyASZKSW8QjCJPjuRvlaSzEA67IYSxENYe0';

/** 
* Gets the data from the url and sends it as a parameter to the callback function.
* @param {string} url - Api url to be called
* @param {function} cb - Callback function
*/
function getData(url, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // console.log(JSON.parse(this.responseText).items);
            cb(JSON.parse(this.responseText));
        }
    };
    xhr.open("GET", url);
    xhr.send();
}

/** 
* Write the result of the API call to the DOM
* @param {string} contentDiv - The id of the element to be written to
*/
function writeToDoc(contentDiv) {
    getData(youtubePlaylistApiUrl, function (videos) {
        var writeTo = document.getElementById(contentDiv);
        videos = videos.items;
        var list = document.createElement('ul');

        videos.forEach(function (item) {
            var listItem = document.createElement('li');
            listItem.innerHTML = `
                <img src="${item.snippet.thumbnails.medium.url}" />
            `;
            list.appendChild(listItem);
        });

        writeTo.appendChild(list);
    });
}