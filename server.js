const express = require('express');
const db = require('./db/database');

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Connection working!');
  });


app.use((req, res) => {
    res.status(404).end();
});

// db.on('open', () => {
//     app.listen(PORT, () => {
//         console.log(`Server is running at http://localhost:${PORT}`);
//     })
// })

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
  