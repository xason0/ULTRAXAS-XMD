"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRequest = void 0;
const follow_redirects_1 = require("follow-redirects");
const { request } = follow_redirects_1.https;
const makeRequest = (url, method = 'GET') => {
    const options = {
        hostname: url.hostname,
        port: url.protocol.startsWith('https') ? 443 : 80,
        path: `${url.pathname}${url.search}`,
        method: method,
    };
    return new Promise((resolve, reject) => {
        const req = request(options, res => {
            if (res.statusCode && (res.statusCode < 200 || res.statusCode > 299)) {
                return reject(new Error(`Failed to get the response: ${res.statusCode}`));
            }
            const data = [];
            res.on('data', chunk => {
                data.push(chunk);
            });
            res.on('end', () => resolve(Buffer.concat(data).toString('utf8')));
        });
        req.on('error', reject);
        req.end();
    });
};
exports.makeRequest = makeRequest;
