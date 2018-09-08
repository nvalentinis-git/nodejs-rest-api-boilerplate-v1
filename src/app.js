import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, error => {
    if (error) {
        throw error;

    } else {
        console.log(`Server running on port: ${PORT} - Running on ${process.env.NODE_ENV} - Make something great!`);
    }
});

