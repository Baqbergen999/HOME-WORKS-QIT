const express = require('express');
const app = express();

app.use(express.static('public'));

app.use((req, res) => {
    res.status(404).json({ error: "Bet tabylmady" });
});

app.listen(3000, () => {
    console.log('Server uryp tur!');
});
