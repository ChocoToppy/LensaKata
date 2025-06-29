
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files (HTML, CSS, JS, images)
app.use(express.static(__dirname));

// Route to serve the main translator page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'translator.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Visit: http://localhost:${PORT}`);
}).on('error', (err) => {
    console.error('Server failed to start:', err);
});
