# 🎶 Music-Lyrics

A simple api to search for lyrics!

# 📌 Installation

```js
npm i music-lyric
```


# 🔎 Usage

```js
const lyrics = require("music-lyrics"); 

(async() => {
	try {
		const lyric = await lyrics.search('Watermelon Sugar');
		console.log(lyric);
	} catch (error) {
		console.log("Unknow lyric.");
	}
})()
```
