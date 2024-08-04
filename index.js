const express = require('express');
const app = express();
const path = require('path');

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Home Route
app.get('/', (req, res) => {
    res.render('index', { title: 'AeroVanguard | Home' });
});

// About Us Route
app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us | AeroVanguard' });
});

// Products Route
app.get('/products', (req, res) => {
    res.render('products', { title: 'Our Products | AeroVanguard' });
});

// Contact Route
app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Us | AeroVanguard' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
