// Declare youtube Api url to call for GET
const youtubePlaylistApiUrl = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UU-pMGW4z9PyJ8R8J19tBzsg&key=AIzaSyASZKSW8QjCJPjuRvlaSzEA67IYSxENYe0';

// Declare photos Api url to call for GET
const galleryApiUrl = '../../media/photos/list.json';

/** 
* Write the result of the Videos API call to the DOM
* @param {string} contentDiv - The id of the element to be written to
*/
function writeVideosToDoc(contentDiv) {
    getData(youtubePlaylistApiUrl, function (data) {
        var writeTo = document.getElementById(contentDiv);
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
function writePhotosToDoc(contentDiv) {
    getData(galleryApiUrl, function (data) {
        var writeTo = document.getElementById(contentDiv);
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