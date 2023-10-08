const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.use(express.static('public'));

// ROUTES
const userRoutes = require('./routes/UserRoutes');
const authRoutes = require('./routes/AuthRoutes')

app.use('/users', userRoutes);
app.use('/auth', authRoutes);

app.listen(5000);