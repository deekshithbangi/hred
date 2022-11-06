const express  = require('express');
const connectDB = require('./config/db');
const app =  express();

const PORT = process.env.PORT || 5000;

connectDB();

// app.get('/', (req, res) => res.send('API running'));
app.use(express.json({ extended: false }));
app.use('/api/users',require('./routes/api/users'));
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));