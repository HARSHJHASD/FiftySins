/* eslint-disable import/no-extraneous-dependencies */
// const { createServer } = require('http');
// const { parse } = require('url');
// const next = require('next');

// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//     createServer((req, res) => {
//         // Be sure to pass `true` as the second argument to `url.parse`.
//         // This tells it to parse the query portion of the URL.
//         const parsedUrl = parse(req.url, true);
//         const { pathname, query } = parsedUrl;
//         // if (pathname === '/api/') {
//         //   app.render(req, res, pathname, query)
//         // } else if (pathname === '/') {
//         //   app.render(req, res, pathname, query)
//         // } else {
//         //   handle(req, res, parsedUrl)
//         // }
//         handle(req, res, parsedUrl);
//     }).listen(process.env.PORT || 3000, (err) => {
//         if (err) throw err;
//         console.log('Server started...');
//     });
// });

const express = require('express');
const next = require('next');
const cors = require('cors');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
    const server = express();

    // Enable CORS for your GCP API
    const corsOptions = {
        origin: 'https://fifty-fin-auth-n77ca4jn5a-el.a.run.app',
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    };

    server.use(cors(corsOptions));

    server.all('*', (req, res) => handle(req, res));

    server.listen(PORT, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${PORT}`);
    });
});
