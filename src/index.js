const app = require('express')();
const fs = require('node:fs');

app.get('/', (req, res) => {
    fs.writeFile('../data/test.txt', "Toast\n", {flag: 'a+'}, err => {
        console.log("Error writing to file", __dirname, err);
    });
    res.json({message: 'Docker is easy'})
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`));

