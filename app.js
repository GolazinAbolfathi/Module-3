const Titles=['Battleship','Parking Lot System Management','Random Quate'];
// const port = 3000;
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false})); //add middleware

app.use('/static', express.static('public'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {  //index.pug
    res.render('index',{Heading:"Golazin's Portfolio",Description:"Golazin's description",Titles
    ,Name:"Golazin Abolfathi"});
});

app.get("/about", (req, res) => {
    res.render('about'
    ,{Name:"Golazin Abolfathi"});
});
app.get("/projects", (req, res) => {
// let veg = req.params.vegetable; ignore this
res.render('project'
,{Name:"Golazin Abolfathi"});
});
app.listen(3000, () => {
console.log('Server running on port: 3000');
});