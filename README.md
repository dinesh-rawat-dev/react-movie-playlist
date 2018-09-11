# React-movie-playlist
[url=https://ibb.co/nQCes9][img]https://preview.ibb.co/k6JKs9/5b979cf00b175124066495.gif[/img][/url]
![Movie Playlist](https://preview.ibb.co/k6JKs9/5b979cf00b175124066495.gif)


#### Setting up react project from skretch

Install webpack and webpack-dev-server (https://webpack.js.org/)

> npm i webpack webpack-dev-server -D

Installing babel transpilers:

> npm i babel-loader @babel/core @babel/preset-env @babel/preset-react html-webpack-plugin -D

Some more webpack plugins:

> npm i extract-text-webpack-plugin@next style-loader css-leader js-loader html-webpack-plugin -D

Details:
-------
- extract-text-webpack-plugin@next plugin extract out the css from js bundle file and make a separate css bundle file.

- style-loader and css-leader: These are for loading CSS files.
 
- js-loader: A js file loader

- html-webpack-plugin: Moves the index.html file to dist folder with bundle js and css files

If you don't understand the above commands/plugins just install them for the time being.

##### Directory stucture


├── src <br>
├──── index.html<br>
├──── index.js<br>
├── package.json    <br>
├── webpack.dev.config.js   <br>
├── webpack.prod.config.js<br>
├── .babelrc<br>
└── README.md

#### .babelrc
The `.babelrc` contains the code for the presets:

`
{
  "presets": [
    "@babel/preset-react",
    "@babel/preset-env"
  ]
}`

Thats it!

# Running the movie playlist

Running the movie playlist in development mode-

> npm start

Generate production build files:-

> npm run build
