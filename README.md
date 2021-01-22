<h1 align="center">
  <img src=".github/images/logo.png" alt="Happy">
</h1>

<h3 align="center">
  Happy - Spread happiness Into The World.
</h3>
<h4 align="center">Next.js | Graphql | Apollo Client | TypeScript | Styled Components</h4>
<!-- E02041 -->
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/johnfreitasau/happy-web?color=%2329B6D1">
  <a href="https://www.linkedin.com/in/johnfreitasau/"><img alt="Made by" src="https://img.shields.io/badge/made%20by-John%20Freitas-%2329B6D1"></a>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/johnfreitasau/happy-web?color=%2329B6D1">
  <a href="https://github.com/johnfreitasau/happy-web/commits/main"><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/johnfreitasau/happy-web?color=%2329B6D1"></a>
  <a href="https://github.com/johnfreitasau/happy-web/issues"><img alt="Repository issues" src="https://img.shields.io/github/issues/johnfreitasau/happy-web?color=%2329B6D1"></a>
  <img alt="GitHub" src="https://img.shields.io/github/license/johnfreitasau/happy-web?color=%2329B6D2">
</p>

<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#construction_worker-installation">Installation</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#runner-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#postbox-faq">FAQ</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#bug-issues">Found a bug? Missing a specific feature?</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tada-contributing">Contributing</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#closed_book-license">License</a>
</p>

<p align="center">
   <img src="./.github/images/happy_web_demo1.gif" width="500"/>
</p>


To see the Mobile repository, [click here](https://github.com/johnfreitasau/happy-mobile)

To see the API repository, [click here](https://github.com/johnfreitasau/happy-api)


# :rocket: Technologies

- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Next-Apollo](https://github.com/adamsoffer/next-apollo)
- [Next Images](https://vercel.com/docs/next.js/image-optimization)
- [GraphQL](https://graphql.org/)
- [GraphQL CodeGen](https://graphql-code-generator.com/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [Formik](https://formik.org/)
- [Leaflet](https://leafletjs.com/)
- [Mapbox API](https://www.mapbox.com/)
- [React Icons](https://react-icons.netlify.com/#/)
- [Styled Components](https://styled-components.com/)
- [Yup](https://github.com/jquense/yup)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)


# :rocket: Features

* List Orphanages on the Map
* Register a new Orphanage
* See Orphanage Details


# :construction_worker: Installation

**You need to install [Node.js](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/) first, then in order to clone the project via HTTPS, run this command:**

```git clone https://github.com/johnfreitasau/happy-web.git```

SSH URLs provide access to a Git repository via SSH, a secure protocol. If you have a SSH key registered in your Github account, clone the project using this command:

```git clone git@github.com:johnfreitasau/happy-web.git```

**Mapbox API**

To be able to access the Mapbox API, you'll need to register on their website (https://account.mapbox.com/) and get a Mapbox access token. Mapbox uses access tokens to associate API requests with your account. You can find your access tokens on your Access Tokens page (https://account.mapbox.com/).


**Install dependencies**

```yarn install```

Create your enviroment variables based on the examples of ```.env.example```

```cp .env.example.local .env.local```

After copying the examples, make sure to fill the variables with new values.


**Setup the API**

The interface needs to interact with the server to receive and register data.

Make sure to go to the [Happy API](https://github.com/johnfreitasau/happy-api) repository and follow the instructions in order to get it running in your machine.


# :runner: Getting Started

Run the following command in order to start the application in a development environment:

```yarn dev```


# :postbox: Faq

**Question:** What are the tecnologies used in this project?

**Answer:** The tecnologies used in this project are Next.js + Graphql + Apollo Client + TypeScript + Styled Components.


# :bug: Issues

Feel free to **file a new issue** with a respective title and description on the the [Happy](https://github.com/johnfreitasau/happy-web/issues) repository. If you already found a solution to your problem, **I would love to review your pull request**! Have a look at our [contribution guidelines](https://github.com/johnfreitasau/happy-web/blob/main/CONTRIBUTING.md) to find out about the coding standards.

# :tada: Contributing

Check out the [contributing](https://github.com/johnfreitasau/happy-web/blob/master/CONTRIBUTING.md) page to see the best places to file issues, start discussions and begin contributing.


# :closed_book: License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
