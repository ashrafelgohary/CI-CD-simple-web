const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public')); // Serve static files from the 'public' folder

app.get('/hello', (req, res) => {
    res.send('Hello!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});