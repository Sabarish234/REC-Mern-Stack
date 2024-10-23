const express = require('express');
const student = express();

student.get('/', (req,res) => {
    res.send("Hello");
});
student.put('/', (req,res) => {
    res.send("Update Hello");
});
student.post('/', (req,res) => {
    res.send("Create Hello");
});
student.delete('/', (req,res) => {
    res.send("Delete Hello");
});

student.get('/details', (req,res) => {
    const std = [
        {"id":1, "name":"Sabarish"},
        {"id":2, "name":"Superman"},
    ];
    res.json(std);
});

student.listen(3000);

