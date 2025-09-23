<p align="center">
<img src="https://avatars0.githubusercontent.com/u/4674786?s=400&u=2f77d382a4428c141558772a2b7ad3a36bebf5bc&v=4" width="128" height="128"/>
</p>
<p align="center">
<a href="#"><img title="Instagram-Direct-URL" src="https://img.shields.io/badge/Instagram%20Direct%20URL-green?colorA=%23ff0000&colorB=C13584&style=for-the-badge"></a>
</p>
<p align="center">
<a href="https://github.com/victorsouzaleal"><img title="Autor" src="https://img.shields.io/badge/Author-victorsouzaleal-5851DB.svg?style=for-the-badge&logo=github"></a>
</p>
</p>
<p align="center">
<a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fvictorsouzaleal%2Finstagram-direct-url.git&count_bg=%23833AB4&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=true"/></a>
<a href="#"><img title="Version" src="https://img.shields.io/github/package-json/v/victorsouzaleal/instagram-direct-url?color=%23833AB4&logo=github&style=flat-square"></a>
<a href="#"><img title="Size" src="https://img.shields.io/bundlephobia/min/instagram-url-direct?color=%23833AB4&logo=npm&style=flat-square"></a>
<a href="https://github.com/victorsouzaleal/followers"><img title="Followers" src="https://img.shields.io/github/followers/victorsouzaleal?color=%23833AB4&logo=github&style=flat-square"></a>
<a href="https://github.com/victorsouzaleal/instagram-direct-url/stargazers/"><img title="Stars" src="https://img.shields.io/github/stars/victorsouzaleal/instagram-direct-url?color=%23833AB4&logo=github&style=flat-square"></a>
<a href="https://github.com/victorsouzaleal/lbot-whatsapp/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/victorsouzaleal/instagram-direct-url?color=%23833AB4&logo=github&style=flat-square"></a>
<a href="#"><img title="MAINTENED" src="https://img.shields.io/badge/MAINTENED-YES-%23833AB4?style=flat-square"/></a>
</p>

## Works with:
It currently works with general Instagram posts, which can contain multiple images/videos or a single one.

Stories not supported.

## Instalation :
```bash
> npm i --save instagram-url-direct
```

## Example
```js
import instagramGetUrl from "instagram-url-direct"
let data = await instagramGetUrl("https://www.instagram.com/tv/CdmYaq3LAYo/")
console.log(data)
```
## Output Example

### Single result
```
{
    results_number : 1,
    post_info:{
        owner_username: "username",
        owner_fullname: "fullname",
        is_verified: false,
        is_private: false,
        likes: 6,
        is_ad: false
    }
    url_list : [
        'https://scontent.cdninstagram.com....'
    ],
    media_details:[
        {
            type: "video",
            dimensions: {height: "1080", width: "1920"},
            video_view_count: 1000,
            url: "https://scontent.cdninstagram.com...",
            thumbnail: 'https://scontent.cdninstagram.com...'
        }
    ]
}
```

### Multi results
```
{
    results_number : 3,
    post_info:{
        owner_username: "username",
        owner_fullname: "fullname",
        is_verified: false,
        is_private: false,
        likes: 10,
        is_ad: false
    }
    url_list : [
        'https://scontent.cdninstagram.com...',
        'https://scontent.cdninstagram.com...',
        'https://scontent.cdninstagram.com...',
    ],
    media_details:[
        {
            type: "video",
            dimensions: {height: "640", width: "640"},
            video_view_count: 100,
            url: "https://scontent.cdninstagram.com...",
            thumbnail: 'https://scontent.cdninstagram.com...'
        },
        {
            type: "video",
            dimensions: {height: "640", width: "640"},
            video_view_count: 100,
            url: "https://scontent.cdninstagram.com...",
            thumbnail: 'https://scontent.cdninstagram.com...'
        },
        {
            type: "image",
            dimensions: {height: "640", width: "640"},
            url: "https://scontent.cdninstagram.com...",
        }
    ]
}
```