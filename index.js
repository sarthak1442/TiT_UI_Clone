const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use('/style', express.static(path.join(__dirname, 'style')));

// Serve static files for images (if needed)
app.use('/assests', express.static(path.join(__dirname, 'assests')));

// Routes for different HTML pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
/*
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'blog.html'));
});

app.get('/course', (req, res) => {
    res.sendFile(path.join(__dirname, 'course.html'));
});

app.get('/overall', (req, res) => {
    res.sendFile(path.join(__dirname, 'overall.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});
*/
// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

