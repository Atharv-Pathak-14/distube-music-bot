const express = require('express');
const app = express();
const port = 8080;
app.get('/', (req, res) => res.send('Harmony Alive!'));

app.listen(port, () => console.log(`Harmony streaming to http://localhost:${port}`));
