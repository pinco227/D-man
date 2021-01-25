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
- ### Design Choices
  - #### Colours
  - #### Typography
  - #### Media
  - #### Iconography

## Features
Website's features are presented in an importance order.
- ### Navigation bar
    Allows users to navigate through the page. The navigation bar will be fixed to top and always visible.
- ### A music player
    The player's controls will always be visible as well as current playing song. The playlist and current playing song details will be collapsed (but expandable) on mobile and small screens and always visible on bigger screens.
- ### Music Library
    A library of song well organised in collections as albums.
- ### Video Library
    A list of videos from artist's YouTube channel.
- ### A photo gallery
    A gallery of photos from events and behind the scene shots.
- ### About page
    A page presenting the artist's biography.
- ### Contact page
    A page featuring all the contact details, link to social media pages and a contact form.
- ### Accessibility
    Images are provided with descriptive text. The website is optimised for screen readers and allows users with impaired vision to zoom at any point.
- ### Features left to implement

## Technologies used
- Workspace
  * [Ubuntu20.04](https://ubuntu.com/) as Operating System
  * [Visual Studio Code](https://code.visualstudio.com/) as Integrated Development Environment
- Languages
  * [HTML5](https://en.wikipedia.org/wiki/HTML5)
  * [CSS3](https://en.wikipedia.org/wiki/CSS)
  * [JS](https://en.wikipedia.org/wiki/JavaScript)
- Frameworks & Libraries
- Version Control
  * [Git](https://git-scm.com/) as Version Control System.
  * [Github](https://www.github.com) for repository hosting.
  * [Commitizen](https://github.com/commitizen/cz-cli) for commit linting.
- Wireframes
  * [Balsamiq](https://balsamiq.com/) for creating [wireframes](#wireframes).
- Media
- Other

## Testing
  - ## Encountered Issues
    - ### Issues found during the building process:
      - Dynamic content navigation working properly while user lands on index.html but it doesn't work if user access website by passing different page url's on the address bar or if user refreshes the page.

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