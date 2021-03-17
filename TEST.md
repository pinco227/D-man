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
### Issues found during the building process:
Through the proccess of building this app, testing was made at every step there were many encountered issues and bugs along the way. Any issues that were quickly fixed were not worth mentioning. Therefore these are the issues that has persisted and were a bit more time consuming to fix:
> - Dynamic content navigation working properly while user lands on index.html but it doesn't work if user access website by passing different page url's on the address bar or if user refreshes the page.
> - **FIXED**: As this project is deployed to GitHub Pages (which doesn not accept server configuration), the only way to fix this issue was to make a redirect using custom error pages (404.html) as described by **Rafael Pedicini** on **[this repo](https://github.com/rafrex/spa-github-pages)**.

> - This Error when loading the song player percentage from localStorage:
      `Uncaught TypeError: Failed to set the 'currentTime' property on 'HTMLMediaElement': The provided double value is non-finite.`
> - **FIXED**: by setting a timeOut function on the call in order to get the song playing before trying to seek the played time.

> - Some functionality limited on mobile devices (song played/buffered progress position, store data to local storage and other functions related to AmplitudeJS library).
> - This is an open [ISSUE](https://github.com/serversideup/amplitudejs/issues/433) on AmplitudeJS developer's github.
> - **FIXED** (temporary): by calling ```Amplitude.pause()``` after initializing the player as described in [this comment](https://github.com/serversideup/amplitudejs/issues/433#issuecomment-674497553).

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
