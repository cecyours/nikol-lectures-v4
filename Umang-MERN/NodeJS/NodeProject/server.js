const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.json({
        name: "Rahul",
        age: 25
    });
})


app.get("/umang", (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send('Hello, Umang!');
})

app.get("/user/:id", (req, res) => {
    res.send(req.params.id);
});

// learn POST Method 
app.post('/data', (req, res) => {
    const { name, age } = req.body
    res.send(`Received data: Name=${name}, Age=${age}`);
})

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
