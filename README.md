# BREWS
A simple, somewhate opinionate boilerplate for [Babel](https://babeljs.io/), [React](https://facebook.github.io/react/), [EJS](http://ejs.co/), [Webpack](http://webpack.github.io/), and [SASS](http://sass-lang.com/).

## What's in it?

* Babel (transpiles ES2015 and JSX syntax into compatible JS)
* React (flexible and efficient DOM rendering with shades of MVC)
* EJS (JavaScript templating for HTML (here used to render pages at build rather than runtime))
* Webpack (all-in-wonder module bundler, task runner, and build tool)
* SASS (better than CSS in every way)

Also included are files for an app entry point and React root App component - basically index.ejs, index.jsx, index.scss, and App.jsx.

package.json already includes the necessary dependencies, and Webpack is preconfigured for development and production. This eliminates two of the major pain points when starting a new React project (installying npm dependencies and configuring Webpack). [Webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) and [react-hot-loader](https://github.com/gaearon/react-hot-loader) recompile only parts of the app that have changed and facilitate rapid development iterations without having to reload the page (most of the time.)

####To run####

* You'll need to have [git](https://git-scm.com/) and [node](https://nodejs.org/en/) installed in your system.

Clone the project:

```
> $ git clone https://github.com/jereddanielson/brews.git
```

Then install the dependencies:

```
> $ npm install
```

####Commands####

For development mode (which will start webpack-dev-server and react-hot-reloader on localhost:3000):

```
> $ npm run dev
```

For production mode including clean directory, NODE_ENV flag, and minification:

```
> $ npm run build
```

To clean the public directory without running webpack:

```
> $ npm run clean
```

Forked from Ali Al Dallal's [react-webpack-babel](https://github.com/alicoding/react-webpack-babel) boilerplate.
