# paroles

[![NPM version][npm-image]][npm-url] [![NPM Downloads][npm-download]][npm-url] [![License][license]][license-url] [![Minified Size][minified-size]][npm-url] [![Build Status][build-status]][github-actions]

`paroles` is a library for parsing, making, modifying and "playing" LRC format lyrics

- support typescript
- support ES module and commonjs
- fully tested
- zero dependencies

## Install

```sh
npm i paroles
```

Or

```sh
pnpm add paroles
```

```sh
yarn add paroles
```

## Usage

### Parse lyrics

```js
import { Lyrics } from 'paroles'

const text = `
  [ti:We are the world]
  [ar:USA for africa]
  [00:25.32]There comes a time
  [00:28.57]When we hear a certain call
`
const lyrics = new Lyrics(text)

console.log(lyrics.info.title) // We are the world
console.log(lyrics.lines[0]) // There comes a time
console.log(lyrics.atTime(26)) // There comes a time
```

### Make lyrics

```js
import { Lyrics } from 'paroles'

const lyrics = new Lyrics()
lyrics.insert({ time: 25.32, text: 'There comes a time' })
const piece = new Lyrics(`
[00:28.57]When we hear a certain call
[00:31.82]When the world must come together as onee
[00:38.82]advertisement
`)
const french = new Lyrics(`
[00:25.32]Il arrive un moment où nous avons besoin d'un certain appel
[00:31.82]Quand le monde doit être uni
`)
/** It is able to chain the operation methods (i.e. insert, merge, remove, replace, setInfo) */
lyrics
    .merge(piece)
    .merge(french, {
        resolveConflict: (original, affiliate) => {
            return `${original}\n${affiliate}`
        }
    })
    .remove('advertisement')
    .replace('When the world must come together as onee', 'When the world must come together as one')
    .setInfo({
        artist: 'USA for africa',
        length: '07:00.19',
        title: 'We are the world',
        version: 'v1.0.0',
    })
console.log(lyrics.toString())
// [ar:USA for africa]
// [ti:We are the world]
// [length:07:00.19]
// [ve:v1.0.0]
// [00:25.32]There comes a time
// [00:28.57]When we hear a certain call
// [00:31.82]When the world must come together as one
```

### Play lyrics

```js
import { LyricsPlayer } from 'paroles'

const lyricsPlayer = new LyricsPlayer(lyrics)
// subscribe linechange event
lyricsPlayer.on('linechange', (line) => {
    console.log(line) // There comes a time
})

// update play time with audio element
const audio = ducument.querySelector('audio')
audio.addEventListener('timeupdate', (e) => {
    lyricsPlayer.updateTime(e.target.currentTime)
})
```

## API

### `Lyrics`

- `new Lyrics(lyrics?: string | Lyrics, option?: LyricsOption)`: creates a `Lyrics` object
    - `option.resolveConflict`: used to handle lines with exact same time. can be `merge`, `preserve`, `overwrite` or a custom function, defaults to `merge`. `merge` equals to `(line1, line2) => line1 + this.eol + line2`; `preserve` equals to `(line1, line2) => line1`; `overwrite` equals to `(line1, line2) => line2`

    ```ts
        interface LyricsOption {
            resolveConflict?:
                | 'merge'
                | 'preserve'
                | 'overwrite'
                | ((line1: string, line2: string) => string)
        }
    ```

- `info`: information contained in lrc text. The abbreviation is replaced with the full word for better readability. Note that `offset`, which is in milliseconds in LRC format, is converted to seconds in `LyricsInfo` for consistency.

    ```ts
    interface LyricsInfo {
        /** al, Album where the song is from */
        album?: string
        /** ar, Lyrics artist */
        artist?: string
        /** au, Creator of the Songtext */
        author?: string
        /** ti, Lyrics (song) title */
        title?: string
        /** by, Creator of the LRC file */
        creator?: string
        /** +/- Overall timestamp adjustment (in seconds), + shifts time up, - shifts down i.e. A positive value let lyrics appear sooner, a negative value delays the lyrics */
        offset?: number
        /** How long the song is (in seconds) */
        length?: string
        /** re, The player or editor that created the LRC file */
        editor?: string
        /** ve, version of program */
        version?: string
    }
    ```

- `lines`: an array consists of every single lyrics line.
- `eol`: end of line symbol detected when initialized.
- `clone()`: clone and return a new `Lyrics` object.
- `toString()`: return the raw text of the `Lyrics` object.
- `at(index: number)`: return the lyrics line at the index. Similar to `Array.prototype.at()`, when given negative index, it returns the last nth line.
- `atTime(time: number)`: return the lyrics line based on the time (in seconds). If the provided time is smaller/bigger than the times of all lyrics, the first/last line will be returned.
- `setOffset(time: number)`: set time offset (in seconds). A positive value let lyrics appear sooner, a negative value delays the lyrics.
- `setInfo(info: LyricsInfo)`: set `LyricsInfo`. New properties will override the original ones.
- `merge(lyrics: string | Lyrics, option?)`: merge another lyrics. The original lyrics is prior by default if there are conflicts.
    - `option.override`: if `true`, lyrics to merge is prior to, and will overwrite the original one for `LyricsInfo` and lines with the same time.
    - `option.resolveInfo(originalInfo, affiliateInfo)`: manually control how to merge `LyricsInfo`, should return a `LyricsInfo` object. `option.override` for `LyricsInfo` is neglected when use this option.
    - `resolveConflict(originalLine, affiliateLine)`: manually control how to merge two lines with the same time. `option.override` for lyrics lines is neglected when use this option.
- `insert(line: LyricsLine | LyricsLine[])`: insert a new line or several lines. If there is a line with the same time, the inserted line will replace the original one.
- `remove(line: LyricsLine | string | RegExp)`: remove a line or lines (if multiple lines match). If no such line, it fails in silent.
- `replace(oldLine: LyricsLine | string | RegExp, newLine: LyricsLine | string)`: replace a line or lines (if multiple lines match). If a RegExp object is provided, it uses `String.prototype.replace` under the hood. For example, `replace(/(abc)xxx/, '$1')` will replace the string with the first capturing group.

### `LyricsPlayer`

- `currentTime`: current play time (in seconds).
- `lyrics`: the Lyrics object.
- `updateTime(time: number)`: update the current play time (in seconds), should be synchronized with the song play time. If the current lyrics line changes after the update, `linechange` is triggered.
- `getCurrentLine()`: get the current lyrics line based on the current play time. (use `Lyrics.atTime` under the hood)
- `getCurrentIndex()`: get the current lyrics line index based on the current play time.
- `rewind(lyrics?)`: reset `currentTime`. If `lyrics` is provided, `LyricsPlayer.lyrics` will be replaced and `lyricschange` will be triggered.
- `on(event, callback)`: subscribe the event and the callback will be called when event triggers. 
    - `linechange` event: triggered when current lyrics line changes. Current lyrics line and index is available in callback `callback(currentLine: text, index: number)`.
    - `lyricschange` event: triggered when `rewind(lyrics)` called and lyrics changes.
- `off(event?, callback?)`: remove the event listener. If `callback` is omited, all listeners belong to that event will be removed. If `event` and `callback` are both omited, all of the event listeners will be removed.

## Changelog

See [CHANGELOG](https://github.com/Clarkkkk/paroles/blob/main/CHANGELOG.md)

## Migrate from v1

- the package is renamed to `paroles`. Uninstall `lyrics-player` and install `paroles`
- rename `update` event to `linechange` in `LyricsPlayer`
- `LyricsPlayer.reset()` is removed. Use `LyricsPlayer.rewind()` and `LyricsPlayer.off()` together instead

## LRC format

There is no definite and strict specification for LRC format. Therefore, [descriptions on WikiPedia](https://en.wikipedia.org/wiki/LRC_(file_format)) are used to confine the behaviour in `paroles`.

## Credit
This library is inspired by:
- [lrc.js](https://www.npmjs.com/package/lrc.js)
- [lrc-kit](https://www.npmjs.com/package/lrc-kit)

## Acknowledgment

If you found it useful somehow, I would be grateful if you could leave a star in the project's GitHub repository.

Thank you.

[npm-url]: https://www.npmjs.com/package/paroles
[npm-image]: https://badge.fury.io/js/paroles.svg
[npm-download]: https://img.shields.io/npm/dw/paroles
[license]: https://img.shields.io/github/license/Clarkkkk/paroles
[license-url]: https://github.com/Clarkkkk/paroles/blob/main/LICENSE.md
[minified-size]: https://img.shields.io/bundlephobia/min/paroles
[build-status]: https://img.shields.io/github/actions/workflow/status/Clarkkkk/paroles/.github%2Fworkflows%2Fpublish.yml
[github-actions]: https://github.com/Clarkkkk/paroles/actions
