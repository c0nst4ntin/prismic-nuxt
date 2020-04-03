<h2 align="center">prismic-nuxt</h2>

<p align="center">
  <a href="https://github.com/c0nst4ntin/prismic-nuxt/blob/master/LICENSE">
    <img alt="License" src="https://img.shields.io/github/license/c0nst4ntin/prismic-nuxt.svg?color=orange">
  </a>
  <a href="https://github.com/c0nst4ntin/prismic-nuxt/">
    <img src="https://img.shields.io/github/package-json/v/c0nst4ntin/prismic-nuxt?color=success">
  </a>
  <a href="https://nuxtjs.org">
    <img src="https://img.shields.io/github/package-json/dependency-version/c0nst4ntin/prismic-nuxt/nuxt?color=blue">
  </a>
  <a href="https://sass-lang.com">
    <img src="https://img.shields.io/github/package-json/dependency-version/c0nst4ntin/prismic-nuxt/dev/node-sass?color=ff69b4">
  </a>
</p>

<p align="center">
  <em>
  A simple boilerplate using @prismicio & @nuxt
  </em>
</p>

This Nuxt.js & Prismic.io boilerplate contains all the features and scripts you need to start developing websites using Nuxt.js and the Headless CMS Prismic.io.

## Getting Started

### Nuxt Setup

```bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For a detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

### Prismic Config

In the `./prismic.config.js` file you need to fill in your API Endpoint.

```javascript
var api = {
  apiEndpoint: "https://your-repo-name.prismic.io/api/v2",
};

module.exports = api;
```
