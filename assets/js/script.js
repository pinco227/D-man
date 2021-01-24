// Navigation links event listeners for dynamic page load
document.querySelectorAll('.nav-link').forEach(function (button) {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        var url = button.getAttribute('href');

        // https://gomakethings.com/getting-html-with-fetch-in-vanilla-js/
        // Fetch the content of the destination page
        fetch(url).then(function (response) {
            return response.text();
        }).then(function (html) {
            // Parse the response text to html object
            var parser = new DOMParser();
            var doc = parser.parseFromString(html, 'text/html');
            processAjaxData(doc, url);
        }).catch(function (err) {
            // There was an error
            console.warn('Something went wrong.', err);
        });
    });
});

// https://stackoverflow.com/a/3354511
function processAjaxData(doc, urlPath) {
    var html = doc.querySelector('html').innerHTML;
    var title = doc.querySelector('title').innerHTML;
    var body = doc.querySelector('body').innerHTML;
    document.getElementById("content").innerHTML = body;
    document.title = title;
    window.history.pushState({ "html": html, "pageTitle": title }, "", urlPath);
}

window.onpopstate = function (e) {
    if (e.state) {
        document.getElementById("content").innerHTML = e.state.html;
        document.title = e.state.pageTitle;
    }
};