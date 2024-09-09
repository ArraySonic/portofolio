const express = require('express');
const path = require('path');
const app = express();

// Set direktori root untuk file static
app.use(express.static(path.join(__dirname, 'public')));

// Set direktori root untuk file html
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile); // Tambahkan baris ini
app.set('view engine', 'html'); // Ganti 'ejs' dengan 'html'

// Router untuk menghapus .html dari file portofolio.html
app.get('/portofolio', (req, res) => {
  res.render('portofolio');
});

// Router untuk menambahkan router lainnya
app.get('/', (req, res) => {
  res.render('index');
});

// Set port untuk server
const port = process.env.PORT || 3000;

// Jalankan server
app.listen(port, () => {
  console.log(`Server is running at http://forlann.live:${port}`);
});
