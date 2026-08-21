const https = require('https');

const r2Key = "a/v1/5d6c8ee8-13cf-4d3c-b046-5f8a989959d8/ba648011-b6b9-4856-8be0-db797b37703d/hero.jpg";
const hosts = ['assets.lovable.dev', 'cdn.lovable.dev', 'cdn.lovableproject.com', 'assets.lovableproject.com', 'media.lovable.dev', 'backend.lovable.dev', 'alt.lovable.dev'];

hosts.forEach(host => {
  https.get(`https://${host}/${r2Key}`, (res) => {
    console.log(`${host}: ${res.statusCode}`);
  }).on('error', (e) => {
    console.log(`${host}: Error - ${e.message}`);
  });
});
