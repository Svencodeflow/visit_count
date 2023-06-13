import express from "express";

const app = express();

const port = 3000;

const besucher = [];

app.get("/visit", (req, res) => {
    const site = req.query.site;

    if (besucher.includes(site)) {
        besucher[site]++;
        res.send("Sie waren schon mal hier");
    } else {
        besucher.push(site);
        besucher[site] = 1;
        res.send("Willkommen auf der Seite");
    }

    res.send("Hello World!");
});

app.get("/visited", (req, res) => {
    let result = "Besuchsstatistik:\n";

    for (const site of besucher) {
        result += `${site}: ${visits[site]}<br>`;
    }

    res.send(result);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
