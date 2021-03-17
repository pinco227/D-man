# Testing

## Table of Contents
- [Encountered Issues](#encountered-issues)
- [Testing User Stories](#testing-user-stories)
- [Testing Functionality](#testing-functionality)
- [Testing Compatibility](#testing-compatibility)
- [Testing Performance](#testing-performance)
- [Testing Accessibility](#testing-accessibility)
- [Code Validation](#code-validation)
- [Further Testing](#further-testing)
## Encountered Issues
- ### Issues found during the building process:
    Through the proccess of building this app, testing was made at every step there were many encountered issues and bugs along the way. Any issues that were quickly fixed were not worth mentioning. Therefore these are the issues that has persisted and were a bit more time consuming to fix:
    > - Dynamic content navigation working properly while user lands on index.html but it doesn't work if user access website by passing different page url's on the address bar or if user refreshes the page.
    > - **FIXED**: As this project is deployed to GitHub Pages (which doesn not accept server configuration), the only way to fix this issue was to make a redirect using custom error pages (404.html) as described by **Rafael Pedicini** on **[this repo](https://github.com/rafrex/spa-github-pages)**.

    > - This Error when loading the song player percentage from localStorage:
        `Uncaught TypeError: Failed to set the 'currentTime' property on 'HTMLMediaElement': The provided double value is non-finite.`
    > - **FIXED**: by setting a timeOut function on the call in order to get the song playing before trying to seek the played time.

    > - Some functionality limited on mobile devices (song played/buffered progress position, store data to local storage and other functions related to AmplitudeJS library).
    > - This is an open [ISSUE](https://github.com/serversideup/amplitudejs/issues/433) on AmplitudeJS developer's github.
    > - **FIXED** (temporary): by calling `Amplitude.pause()` after initializing the player as described in [this comment](https://github.com/serversideup/amplitudejs/issues/433#issuecomment-674497553).
- ### Issues found while testing:
    > - Resume playback would not work properly if the "**Shuffle**" was **On** before reloading the page.
    > - **FIXED**: When player is on shuffle, songs indexes are randomised so first song in the list doesn't have the index `0` anymore. The *resume playback* function was extracting the `songIndex` from the `localStorage` but it will load different song if shuffle state is different. Now shuffle state is stored to `localStorage` to fix this issue.

    > - SPA navigation was not working on ***Samsung Internet***.
    > - Debugging result: `scrollAnimation` declared on `player.js` and called on `script.js` not runing.
    > - **FIXED**: by moving the call of `scrollAnimation` on `window.onresize` event listener. `scrollAnimation` is initially called within `player.js` on `song_change` callback, therefore the functionality is not affected.

    > - Player not working on ***Safari***. `MediaSession API` not supported.
    > - **FIXED**: by storing `typeof(navigator.mediaSession)` in a variable. If it is `undefined` then it is not supported by browser. All the depending code is wrapped in an `if(mediaSessionSupported)` condition.
## Testing user stories
  - #### As a user I need:
    - to easily navigate throughout the content.
        > The navigation bar is fixed to top which means it is visible and accessible at all times on any device.
    - to easily understand how to control the music player.
        > The music player controls are always visible to the bottom of the screen and they follow the same standards that users are well used with, by using common icons and descriptive text.
    - to be able to find artist's other social media profiles.
        > Social links are displayed in a "hero" styled call to action panel on landing page and on contact page as well.
    - to find details about artist and his work.
        > The whole website is focused around the artist's music. There are separate pages to present all the music, photos of the artist, details about the artist and other content.
    - to enjoy artist's work while navigating through the website.
        > The website is built as a SPA (Single page app) just for the reason of keeping music playing while navigating. Music never stops until the tab/browser is closed or page is closed/refreshed.
  - #### As an artist I need:
    - to be able to contact the artist's team for potential collaborations.
        > There is a "hero" styled CTA panel on landing page, taking interested people to the contact page. There is a contact form on the contact page.
  - #### As an event organiser I need:
    - to find contact information.
        > Contact information is displayed on the contact page.
    - to research artist's work and previous performances.
        > Every song of the artist can be listened in the website's player. There is also a timeline of events on the "About me" page.

## Testing Functionality
   - ### Testing links and buttons
        > #### Landing Page
        > Starting from top to bottom, left to right, click on every button, link, toggle to check for expected action.
        > - top navigation fully functional including the brand title.
        > - Hero panels links are fully functional, they call the navigate function and it runs as expected. The external links are opening in new tabs and links are not broken.
        > - Player: Clicking on any displayed songs will play that song. Click again on playing song will pause the song. On mobile, the controls are displayed in the player. Every button responds as expected (shuffle,prev,play/pause,next,loop and range seeker).
        > - Footer: On mobile, click on the now playing metadata ("up" arrow) opens the expandable/collapsible player. The "down" arrow button on the top right corner collapses back the player. The controls are responding as expected on both mobile and desktop.
        > #### Music Library
        > - Navbar, player and footer are untouched as navigating througj pages is only changing the content.
        > - On the music library album list, click on each album opens its album details page.
        > - Clicking on **Play all** and **Shuffle all** buttons, loads all the songs into the player as expected, the later initializes the player in shuffle state.
        > - On each album page, clicking on the **Back** button goes back to album list. Clicking on **Shuffle** and **Play this album** loads the album playlist into the player, first one on the shuffle state. Clicking on any song of each album, loads the albums playlist into the player and starts playing from the clicked song.
        > #### Videos
        > - Clicking on each video item in the list, opens a modal playing the clicked video and pauses the music.
        > - The video is a youtube embedded element and is functioning as expected.
        > - Clicking on the **X** on the top right corner or anywhere outside the video frame closes the modal.
        > #### Gallery
        > - Clicking on each photo in the list, opens a modal showing the clicked photo at a bigger resolution/size.
        > - Clicking on "**<**" and "**>**" navigates through photos. Clicking on the *X* on the top right corner closes the modal. 
        > #### Contact
        > - Clicking on the email address in the contact details card opens the platforms default mail software.
        > - Social links are opening in separate tabs and links are not broken.
        > - **Send** button submits the form.

   - ### Testing browser back/forward action
        > - **Navigation**: this SPA is built to memorize the browser history for each openned page, therefore the browser's back and forward buttons and mobile back tap works as expected navigating through pages.
        > - **Videos** and **Gallery** pages: when video or photo modal is open, browser's back button and mobile back tap will close it without navigating back.
   - ### Testing form validation
        > - Contact form: the form was tested for validation by trying to submit first with no data and then by filling the fields one by one. Result as expected, all fields asked for input. The email field asks for email format with `@`.
   - ### Testing Player functionality
        > - Media Session API: Changing song and/or duration is updating the Media Session API. Also on the API controls, buttons are working as expected, each sending the right command to the player, both on mobile and deskop.
        > - Keyboard: *Left* and *Right* keys navigates through songs in playlist. *Space* plays/pauses the music.
        > - LocalStorage: After using the player, on refresh on return to the app, *Welcome back* dialog is shown, covering the player. Clicking on **Resume playback** loads all the previous playlist into the player, starts playing the same song it was playing and it seeks the played time to the sored percentage. Clicking on **No thanks** will only close the modal and let user to take control of the player.
        > - Play/pause: Clicking on songs, pressing **space** key, clicking/tapping on Media Session API play/pause button and any other action that changes the playing state will also toggle the play/pause buton as expected. Playing the music by any of the above means, starts the rotation of the cover art. Pausing stops the rotation.
        > - Now playing (mobile): on a small screen, if any of the now playing song (footer) metadata text's width is bigger than its container, the left-right animation kicks in. On window resize/rotate and on song change, animation function is called again to recalculate.
        > - All controls work as expected.
   - ### Testing for errors
        > - `The AudioContext was not allowed to start. It must be resumed (or created) after a user gesture on the page.` This warning is caused by **AmplitudeJS** waveform. 
        >
        > ![AudioContext Warning](https://github.com/pinco227/D-man/blob/main/docs/audiocontext-warning.png)
        > - `Uncaught (in promise) DOMException: The play() request was interrupted by a call to pause().` This error might show some times and it is caused by the *"quick fix"* for the **AmplitudeJS** bug (`Amplitude.pause()` call after initializing). This is not affecting functionality. [See bug here](#encountered-issues).
        > - `No 'Access-Control-Allow-Origin' header is present on the requested resource.` This error is shown every time a youtube video is loaded on the videos page and it is caused by youtube's api script. This is not affecting functionality.
        >
        > ![Youtube errors](https://github.com/pinco227/D-man/blob/main/docs/youtube-error.png)
## Testing Compatibility
   - ### Responsiveness
        > Using DevTools and different device sizes such as mobile and tablet, the website was tested for any posible screen size combination and orientation. No issues found. Site is size compatible.

   - ### OS test
        > #### Desktop
        > The website was tested on Ubuntu 20.04, Windows 7 and Windows 10 systems. Result as expected, desktop system-cross compatible.
        > #### Mobile
        > The website was tested on Android 6, Android 9, Android 10 and iOS 14 systems. Result as expected, mobile system-cross compatible.

   - ### Devices test
        > The website was tested on ASUS 17" notebook, ACER 17" notebook, Huawei P30 PRO, Huawei P20 PRO, Huawei P10, iPhone 11, Samsung Galaxy Note10, Samsung Galaxy A7, Samsung Galaxy TabS6, Lenovo Yoga Tab. The result is consistent, website is platform-cross compatible.

   - ### Browser test
        > The website was tested on Google Chrome, Firefox, Safari, Edge, Samsung Internet. This website is NOT designed to be compatible with IE. Browsers versions were all up to date. Results were consistent. Conclusion: the website is browser-cross compatible.