## [Bullet-in-Board](http://jaakkosaranpaa.com)
A bulletin/notification board meant for condominiums and schools, where you can anonymously post any concerns. The application also has profanity filtering, so it can be used in family-friendly environments

Long gone are the days of condominium facebook groups, where all people post are complaints. Now you can do just that anonymously with Bullet-in-Board! Click the header or [here](http://jaakkosaranpaa.com) to visit the site.

You can also watch a __Screencast__ on [Youtube](https://www.youtube.com/watch?v=5Js9DXOwa3Q)

 
## Screenshots
![Näyttökuva 2022-1-13 kello 19 34 46](https://user-images.githubusercontent.com/69541309/149380372-36621aab-399a-4a28-8ad5-c0008cf00af3.png)

## Tech/framework used

<b>Built with</b>
- [ReactJS](https://reactjs.org)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com)
- [Bootstrap](https://getbootstrap.com)
- [leo-profanity](https://www.npmjs.com/package/leo-profanity)

## Features
Bullet-in-Board filters all english profanity out to keep things family-friendly. All your posts get random colors to keep the site interesting! Admins can delete posts and all admin-posts are colored differently. 

## Installation
To install, clone the repository and install:
```
git clone https://github.com/Jaakko00/Fullstack-project.git
cd Fullstack-project
npm install
```
After cloning and installing, if you want to run the backend locally, you have to change the all the urls in Posts.js to localhost, then run 
```
nodemon index.js
```
If you want to use the existing backend on Heroku, you can skip the previous step. To run the frontend locally, in project directory run:
```
cd frontend/
npm install
npm start
```
You can also check the application on [jaakkosaranpaa.com](http://jaakkosaranpaa.com)

## API Reference

API hosted on [Heroku](https://bullet-in-board.herokuapp.com/posts/)

## How to use?
To add a post, click *New post* on the navigation bar, and type in your title, text and sender(optional). To delete posts, login with your admin password and press *delete* on the post.
