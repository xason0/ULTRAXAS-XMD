<!-- URLs  -->

[repo]: https://github.com/vookav2/songlyrics
[issues]: https://github.com/vookav2/songlyrics/issues
[nodejs]: https://nodejs.org/
[codefactor]: https://www.codefactor.io/repository/github/vookav2/songlyrics
[npm]: https://www.npmjs.com/package/songlyrics
[versions]: https://www.npmjs.com/package/songlyrics?activeTab=versions
[buymeacoffee]: https://www.buymeacoffee.com/daphinokio
[saweria]: https://saweria.co/daphino
[mailto]: mailto:davinomoehdanino@gmail.com

# songlyrics

Search a lyrics. It scrapes the lyrics from unofficial sources.

[![Donate](https://img.shields.io/badge/donate-30363D?style=for-the-badge&logo=GitHub-Sponsors&logoColor=#white)][buymeacoffee]
[![Donate](https://img.shields.io/badge/SAWERIA-faae2b?style=for-the-badge&logo=GitHub-Sponsors&logoColor=#white)][saweria]

[![Codefactor](https://www.codefactor.io/repository/github/vookav2/songlyrics/badge)][codefactor]
[![Latest version](https://img.shields.io/npm/v/songlyrics?color=%2335C757)][versions]
[![Monthly downloads](https://img.shields.io/npm/dm/songlyrics)][npm]

<details>
  <summary>Table of contents</summary>
  <ol>
     <li>
       <a href="#getting-started">Getting Started</a>
       <ul>
         <li>
           <a href="#prerequisites">Prerequisites</a>
         </li>
         <li>
           <a href="#installation">Installation</a>
         </li>
       </ul>
     </li>
    <li>
       <a href="#usage">Usage</a>
       <ul>
         <li>
           <a href="#output">Output</a>
         </li>
       </ul>
     </li>
    <li>
       <a href="#contributing">Contributing</a>
     </li>
    <li>
       <a href="#disclaimer">Disclaimer</a>
     </li>
    <li>
       <a href="#support">Support</a>
     </li>
    <li>
       <a href="#license">License</a>
     </li>
  </ol>
</details>

## Getting Started

### Prerequisites

- [Node.js][nodejs] v16 or greater
  ```
  node --version
  ```

### Installation

- NPM
  ```sh
  npm install songlyrics
  ```
- Yarn
  ```sh
  yarn add songlyrics
  ```

## Usage

Import functions that you need.

```ts
import songlyrics from 'songlyrics'
const response = await songlyrics('one more light')

// with artist name
const response = await songlyrics('one more light linkin park')
```

### Output

<details>
<summary>Lyrics</summary>
<p>

```js
{
  lyrics: string,
  source: {
    name: string,
    url: string,
    link: string,
  },
}
```

</p>
</details>

## Contributing

Contributions, issues and feature requests are welcome. Feel free to check [issues][issues] page if you want to contribute.

## Support

Give a 🌟 [star][repo] if this project is useful to you.

## Disclaimer

This project is not affiliated with, endorsed, or sponsored by YouTube or any of their affiliates or subsidiaries. All trademarks, logos and brand names are the property of their respective owners, and are used only to directly describe the services being provided, as such, any usage of trademarks to refer to such services is considered nominative use.

Should you have any questions or concerns please contact me directly via [email][mailto].

## License

Distributed under the [MIT](https://github.com/vookav2/songlyrics/blob/main/LICENSE) License.

([⬆ back to top](#songlyrics))
