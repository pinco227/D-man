# D-Man

This project represents an artist's page featuring a music player. The main goal is to get the interested user to follow on social networks or contact regarding a collaboration or event. D-Man is an educational project made to serve as a Milestone Project for the **Software Developer Diploma** programme of **Code Institute**.

## Table of Contents
  - [Demo](#demo)
  - [UX](#ux)
    - [Business Goals](#business-goals)
    - [User Goals](#users-goals)
    - [User Scenarios](#user-scenarios)
    - [Structure](#structure)
    - [Skeleton](#skeleton)
      - [Wireframes](#initial-wireframes)
      - [Improvements](#improvements)
    - [Design Choices](#design-choices)
  - [Features](#features)
  - [Technologies used](#technologies-used)
  - [Testing](#testing)
  - [Deployment](#deployment)
  - [Credits](#credits)
  - [Aknowledgements](#aknowledgements)

## Demo

### [Live website](https://pinco227.github.io/D-man/)

[![Responsive Mockup](https://github.com/pinco227/D-man/blob/main/docs/responsive-mockup.png)](http://ami.responsivedesign.is/?url=https://pinco227.github.io/D-man)

## UX

- ### Business Goals
  - Create online presence;
  - Gather followers on artist's other social media pages;
  - Promote artist for potential collaborations, concerts and other events;
  - Present artist's work in an organised and interactive manner;
  - Keep users up to date with new releases and upcoming events;
  - Offer users with a music player and provide control.
- ### Users Goals
  - Learn about the artist by exploring his work;
  - Stay up to date with artist's work and events;
  - Check up and follow artist's social media pages;
  - Contact the artist's team for an eventual collaboration, event;
  - Control the music player in order to have a better exploring experience of artist's work;
  - Have detailed information about each song.
- ### User Scenarios
  - #### As a user I need:
    - to easily navigate throughout the content.
    - to easily understand how to control the music player.
    - to be able to find artist's other social media profiles.
    - to find details about artist and his work.
    - to enjoy artist's work while navigating through the website.
  - #### As an artist I need:
    - to be able to contact the artist's team for potential collaborations.
  - #### As an event organiser I need:
    - to find contact information.
    - to research artist's work and previous performances.
- ### Structure
  The website is designed to be consistent, intuitive and learnable.
  - Interaction design
    - For predictability, the interface interacts with user actions as the user expetcs. The scroll/swipe actions respond with the normal behaviour and buttons acts instantly on press.
    - For consistency, the interface offers a subtle visual feedback to the user (on hover, focus and press of buttons and fields) which is similar throughout the application and helps the user to quickly learn the functionality.
  - Information architecture
    - The content is organised and prioritised by importance from top to bottom and left to right.
    - The information is structured in nested lists.
- ### Skeleton
  - ### Initial wireframes
    - Music Player:
      - [mobile](https://github.com/pinco227/D-man/blob/main/docs/wireframes/player-mobi.png)
      - [tablet](https://github.com/pinco227/D-man/blob/main/docs/wireframes/player-tablet.png)
    - Music Library:
      - [mobile](https://github.com/pinco227/D-man/blob/main/docs/wireframes/music-mobi.png)
      - [tablet](https://github.com/pinco227/D-man/blob/main/docs/wireframes/music-tablet.png)
      - [desktop](https://github.com/pinco227/D-man/blob/main/docs/wireframes/music-desktop.png)
    - Video Library:
      - [mobile](https://github.com/pinco227/D-man/blob/main/docs/wireframes/video-mobi.png)
      - [tablet](https://github.com/pinco227/D-man/blob/main/docs/wireframes/video-tablet.png)
      - [desktop](https://github.com/pinco227/D-man/blob/main/docs/wireframes/video-desktop.png)
    - Photo Gallery:
      - [mobile](https://github.com/pinco227/D-man/blob/main/docs/wireframes/gallery-mobi.png)
      - [tablet](https://github.com/pinco227/D-man/blob/main/docs/wireframes/gallery-tablet.png)
      - [desktop](https://github.com/pinco227/D-man/blob/main/docs/wireframes/gallery-desktop.png)
    - About Me:
      - [mobile](https://github.com/pinco227/D-man/blob/main/docs/wireframes/about-mobi.png)
      - [tablet](https://github.com/pinco227/D-man/blob/main/docs/wireframes/about-tablet.png)
      - [desktop](https://github.com/pinco227/D-man/blob/main/docs/wireframes/about-desktop.png)
    - Contact:
      - [mobile](https://github.com/pinco227/D-man/blob/main/docs/wireframes/contact-mobi.png)
      - [tablet](https://github.com/pinco227/D-man/blob/main/docs/wireframes/contact-tablet.png)
      - [desktop](https://github.com/pinco227/D-man/blob/main/docs/wireframes/contact-desktop.png)
  - ### Improvements
    - #### **Landing Page**:
      - There are now 3 hero cards on landing page, inviting users to check out the content of the site, to check out the social networks of the artist and to get in touch if interested.
        
        ![Home Screenshot](https://github.com/pinco227/D-man/blob/main/docs/home-ss.jpg)
    - #### **Music Library**:
      - The album list is better displayed as each album looks like an actual CD/vinyl coming out of its case/slip.
        
        ![Album page Screenshot](https://github.com/pinco227/D-man/blob/main/docs/albums-animation.gif)
      - There is a dynamic page generated after clicking on any of the albums. This page displays the album's data, the list of songs and "play all", "shuffle all" and "play" (for each song) buttons.
        
        ![Album details screenshot](https://github.com/pinco227/D-man/blob/main/docs/album-list-ss.jpg)
    - #### **About Me**
      - Due to the nature and format of the "about me" data received from the author, this page is now structured as a timeline in order to be the best presented.
  
        ![About me page screenshot](https://github.com/pinco227/D-man/blob/main/docs/about-ss.jpg)
    - #### **Player**
      - **Mobile**:
        - The bottom player controls are simplified to display the "waveform" (seeker), "now playing info", "play/pause button" and "next button" while the rest of controls are only displayed when the player is in expanded state (click/tap on "now playing info").
  
          ![Mobile player controls screenshot](https://github.com/pinco227/D-man/blob/main/docs/mobile-player-ctrls.png)
        - The expanded player is full-screen and contains "now playing info", "waveform", "controls" including "shuffle" and "loop" and a list of songs in current playlist with the one playing marked out.
  
          ![Mobile player expanded](https://github.com/pinco227/D-man/blob/main/docs/mobile-player-expanded.png)
      - **Tablet/Dektop**:
        - The bottom player controls are always visible, they are full page width and they contain "waveform" and "controls".
          
          ![Desktop player controls](https://github.com/pinco227/D-man/blob/main/docs/desktop-player-ctrls.png)
- ### Design Choices
  - #### Colours
    For better dynamics and consistency, the colours are automatically generated from the playing song art image and they are consistent throughout the website. They are set to be in good contrast and in relation with the focus of the website (the music). The same art image is set to be displayed in the background with a dark frost effect on top of it to offer dynamic and colourful backgrounds while keeping the contrast. *All colours and effects have fall-backs for unsupported browsers.*
  - #### Typography
    There are four fonts used throughout the project, two main fonts used for text and headings, one font is used for brand text (logo) and one is used for now playing information on mobile:
    - [Big Shoulders Stencil Text](https://fonts.google.com/specimen/Big+Shoulders+Stencil+Text) is used for logo and it has a ```cursive``` fallback and ```font-weight``` of ```800```.
    - [Goldman](https://fonts.google.com/specimen/Goldman) is used for headings and it has a ```cursive``` fallback.
    - [Baloo 2](https://fonts.google.com/specimen/Baloo+2) is used as a general font for all the text and links with different weights. It has a ```cursive``` fallback.
    - [VT323](https://fonts.google.com/specimen/VT323) is used for playing now information displayed on mobile footer. It is selected to replicate the classic lcd display found on most of media players. It has a ```monospace``` fallback.
  - #### Media
    - All the media used in the project is the actual media received from the artist, it is genuine and it has all the copy rights.
    - All videos in video library are loaded from external source (youtube) and they are approved by the source.
    - All images are sized and compressed for the best UX flow.
  - #### Iconography
    - Icons are used throughout the project to help user understand more efficiently the meaning of the content. They are a very good asset to improve UX.
  - #### Animations
    - Animations are used to better render the idea of music playing.
      - The player art image is round and it rotates as music plays, it stops rotating when music is paused.
      - The now playing section on mobile's bottom controls is animating left and right when the containing text exceeds the size of it's container.
      - In the same now playing section there is an arrow moving up and down to let user know there will be feedback if it's clicked/tapped.
    - Transitions are used to ease the user's progress while navigating the site and using the player.
      - Collapsed player is sliding up when expanding and down when collapsing.
      - Albums (discs) are coming out of their "box" when hovered by mouse or tapped.
      - Photo thumbnails in the gallery light up when hovered and the large photos are transitioning between each other when changed.
      - All buttons transitions their background colour, text colour and/or shadow by case.
## Features
Website's features are presented in an importance order.
- ### Navigation bar
    Allows users to navigate through the site. The navigation bar is fixed to top and always visible. The navigation links are grouped by expandable and non-expandable. The main links are non-expandable ("Music library", "Video Library" and "Photo gallery") but their text dissapears when on mobile, leaving only the meaningful icons.
- ### A music player
    - The player's most used controls will always be visible (on footer) as well as current playing song. The playlist and more controls will be collapsed (but expandable) on mobile and small screens and always visible on bigger screens.
    - The website features a ***Media Session API*** which offers user a better control on any device. The media keeps playing while browser is minimized or device is locked. The browser (desktop) or the device has it's own implementation of Media Session API and it effectively communicates with the website to control the player.
  
      ![media session screenshot](https://github.com/pinco227/D-man/blob/main/docs/media-session-ss.png)
- ### Music Library
    A library of songs well organised in collections as albums. Each album can be played (normal or shuffled) individually, all albums cand be played (normal or shuffled) at once. Each song has a play button to be selected as starting song while loading the album's playlist.
- ### Video Library
    A list of videos dinamically loaded from artist's YouTube channel. They can be played without leaving the website. When video is played, music is paused automatically.
- ### A photo gallery
    A gallery of photos from events and behind the scene shots.
- ### About page
    A page presenting the artist's history, organised in a timeline manner.
- ### Contact page
    A page featuring all the contact details, link to social media pages and a contact form.
- ### Accessibility
    Images are provided with descriptive text. The website is optimised for screen readers and allows users with impaired vision to zoom at any point.

## Technologies used
- Workspace
  * [Ubuntu20.04](https://ubuntu.com/) as Operating System
  * [Visual Studio Code](https://code.visualstudio.com/) as Integrated Development Environment
- Languages
  * [HTML5](https://en.wikipedia.org/wiki/HTML5)
  * [CSS3](https://en.wikipedia.org/wiki/CSS)
  * [JS](https://en.wikipedia.org/wiki/JavaScript)
- Frameworks & Libraries
  * [Bootstrap5](https://getbootstrap.com/) is used for its great responsivness and styling classes and its javascript functionality (modal).
  * [Font Awesome](https://fontawesome.com/) icons were used for aesthetic and [UX](#ux) improvements.
  * [Google Fonts](https://fonts.google.com/) is used as the main font resource.
  * [AmplitudeJS](https://521dimensions.com/open-source/amplitudejs) for audio player capabilities.
  * [Vibrant.js](https://jariz.github.io/vibrant.js/) to extract colours from the meta image.
- Version Control
  * [Git](https://git-scm.com/) as Version Control System.
  * [Github](https://www.github.com) for repository hosting.
  * [Commitizen](https://github.com/commitizen/cz-cli) for commit linting.
- Wireframes
  * [Balsamiq](https://balsamiq.com/) for creating [wireframes](#wireframes).
- Media
  * [Inkscape](https://inkscape.org/) for creating the favicon.
  * [Adobe Photoshop Express](https://photoshop.adobe.com/resize) for quick resizing and cropping images top improve performance.
  * [TinyJPG](https://tinyjpg.com/) for compressing images.
  * [Convertio](https://convertio.co/) for converting favicon from ```.png``` to ```.ico```.
  * [CloudConvert](https://cloudconvert.com/webm-to-gif) for converting screen recording from ```.webm``` to ```.gif```.
  * [EZGif](https://ezgif.com/) for cropping ```.gif``` files used writing this documentation.
- Other

## Testing
  - ## Encountered Issues
    - ### Issues found during the building process:
    > - Dynamic content navigation working properly while user lands on index.html but it doesn't work if user access website by passing different page url's on the address bar or if user refreshes the page.
    > - **FIXED**: As this project is deployed to GitHub Pages (which doesn not accept server configuration), the only way to fix this issue was to make a redirect using custom error pages (404.html) as described by **Rafael Pedicini** on **[this repo](https://github.com/rafrex/spa-github-pages)**.

    > - This Error when loading the song player percentage from localStorage:
      `Uncaught TypeError: Failed to set the 'currentTime' property on 'HTMLMediaElement': The provided double value is non-finite.`
    > - **FIXED**: by setting a timeOut function on the call in order to get the song playing before trying to seek the played time.

    > - Some functionality limited on mobile devices (song played/buffered progress position, store data to local storage and other functions related to AmplitudeJS library).
    > - This is an open [ISSUE](https://github.com/serversideup/amplitudejs/issues/433) on AmplitudeJS developer's github.
    > - **FIXED** (temporary): by calling ```Amplitude.pause()``` after initializing the player as described in [this comment](https://github.com/serversideup/amplitudejs/issues/433#issuecomment-674497553).

## Deployment
- ### GitHub Pages
  The project was deployed to GitHub Pages using the following steps:
  1. Log in to GitHub and locate the [Dublin Hills Repository](https://github.com/pinco227/D-man).
  2. At the top of the Repository, locate and click the "Settings" Button on the menu.
  3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
  4. Under "Source", click the dropdown called "**None**" and select "**main**" branch.
  5. The page will automatically refresh.
  6. Scroll back down through the page to locate the now published [site link](https://pinco227.github.io/D-man/) in the "GitHub Pages" section.
- ### Forking the GitHub Repository
  By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps:
  1. Log in to GitHub and locate the [Dublin Hills Repository](https://github.com/pinco227/D-man).
  2. At the top right of the Repository just above the "Settings" Button on the menu, locate and click the "**Fork**" Button.
  3. You should now have a copy of the original repository in your GitHub account.
- ### Making a Local Clone
  1. Log in to GitHub and locate the [Dublin Hills Repository](https://github.com/pinco227/D-man).
  2. At the top of the Repository just above the list of files, locate and click the "**Code**" dropdown.
  3. To clone the repository using HTTPS, under "**Clone**", make sure "**HTTPS**" is selected and copy the link.
  4. Open Git Bash.
  5. Change the current working directory to the location where you want the cloned directory to be made.
  6. Type ```git clone```, and then paste the URL you copied in Step 3.
    ```
    $ git clone https://github.com/pinco227/D-man.git
    ```
  7. Press Enter. Your local clone will be created.
    ```
    $ git clone https://github.com/pinco227/D-man.git
    Cloning into 'D-man'...
    remote: Enumerating objects: 408, done.
    remote: Counting objects: 100% (408/408), done.
    remote: Compressing objects: 100% (258/258), done.
    remote: Total 408 (delta 156), reused 368 (delta 116), pack-reused 0
    Receiving objects: 100% (408/408), 24.92 MiB | 15.71 MiB/s, done.
    Resolving deltas: 100% (156/156), done.
    ```
  Click [Here](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.
  

## Credits
- ### Content
- ### Media
- ### Code

## Aknowledgements