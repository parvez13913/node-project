const express = require('express');
const app = express();
const cors = require('cors');
const { request } = require('express');
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello Abir khulu Tumi Namaz Poroni Kakir kache bole dibo");
});

const users = [
    { id: 1, name: "Foklu Dadu", email: 'foklu@gmail.com', job: 'Kokil konthi shilpi', Number: '0199876555' },
    { id: 2, name: "Cuko Da", email: 'Cuko@gmail.com', job: 'Sidem giri kora', Number: '0199876555' },
    { id: 3, name: "Gama", email: 'gama@gmail.com', job: 'Mathe Haga', Number: '0199876555' },
    { id: 4, name: "Kuce The Superstar", email: 'kuche@gmail.com', job: 'Luccmi kora', Number: '0199876555' },
    { id: 6, name: "Khulu Kaku", email: 'kulu@gmail.com', job: 'Web Developer', Number: '0199876555' },
    { id: 7, name: "Nerat", email: 'nerat@gmail.com', job: 'Kamrano', Number: '0199876555' },
    { id: 8, name: "Behaya vai", email: 'behaiya@gmail.com', job: 'Demotivate kora', Number: '0199876555' },
]

app.get('/user', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else {
        res.send(users);
    }
});

app.post('/user', (req, res) => {
    console.log(req.body);
    const user = req.body;
    users.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    res.send(user);
});



app.get('/fruits', (req, res) => {
    res.send(['Mango', 'apple', 'oranges']);
});

app.listen(port, () => {
    console.log("Hello World");
});