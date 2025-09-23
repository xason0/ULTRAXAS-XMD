const cheerio = require('cheerio');
const request = require('superagent');

const finder = [
    '</div></div></div></div><div class="hwc"><div class="BNeawe tAd8D AP7Wnd"><div><div class="BNeawe tAd8D AP7Wnd">',
    '</div></div></div><div><span class="hwc"><div class="BNeawe uEec3 AP7Wnd">',
];

module.exports = async function (title) {

    try {
        
        const link = await findByGoogle(title);

        if (!link) throw new Error("Error"); 

        const value = await parse(link);

        return value;

    } catch (error) {
        throw new Error("Error")
    }

    async function parse(link) {

        try {

            if (!isLink(link)) return link;

            const rest = await request.get(link);

            const $ = cheerio.load(rest.text);

            if (link.includes('https://www.letras.mus.br/') || link.includes('https://www.letras.com/')) {
                return $('.cnt-letra.p402_premium').toString().replace(/<.*?>/g, "\n").trim();
            }

            if (link.includes('https://www.letras.com.br/')) {
                return $('.lyrics-section').toString().replace(/<.*?>/g, "\n").trim();
            }

            if (link.includes('https://www.musixmatch.com/')) {
                return $('.mxm-lyrics__content').toString().replace('</span>', '\n').replace(/<.*?>/g, '')
            }

            if (link.includes('https://www.vagalume.com.br/')) {
                return $('div[id="lyrics"]').toString().replace(/<.*?>/g, "\n").trim();
            }

            throw new Error("Error");

        } catch (error) {
            throw new Error("Error")
        }
    }

    async function findByGoogle(title) {

        const rest = await request.get(`https://www.google.com/search?q=${encodeURIComponent(title)}+letra`);

        const $ = cheerio.load(rest.text);

        const values = [];

        $("a").each(function (i, link) {

            let url = $(link).attr("href").replace("/url?q=", "").split("&")[0];

            if (url[0] === "/") return;

            if (!isLink(url)) return;

            values.push(url);

        });


        if (values.length > 0) return values[0];

        $("div").each(function (i, link) {

            if (!$(link).toString().includes(finder[0])) return;

            let url = $(link).toString().split(finder[0])[1].split(finder[1])[0].replace(/<.*?>/g, "\n").trim();

            values.push(url);

        });

        return values[0];
    }

    function isLink(link) {

        const mus = 'https://www.letras.mus.br/';
        const letter = 'https://www.letras.com/';
        const letterbr = 'https://www.letras.com.br/';
        const musix = 'https://www.musixmatch.com/';
        const vagalume = 'https://www.vagalume.com.br/';

        const regex = /(https?:\/\/)?[a-z\.-]+\/.+/gi;

        return regex.test(link)
            && (link.includes(mus)
                || link.includes(letter)
                || link.includes(letterbr)
                || link.includes(musix)
                || link.includes(vagalume));
    }
}
