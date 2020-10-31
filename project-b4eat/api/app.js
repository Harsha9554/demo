const express = require('express');
const app = express();

const { mongoose } = require('./db/mongoose')
const bodyParser = require('body-parser');

const {Restaurant, Review} = require('./db/models');

app.use(bodyParser.json());

//ROUTE HANDLERS


//LIST ROUTES
app.get('/restaurants', (req, res) => {
    Restaurant.find({}).then((restaurants) => {
        res.send(restaurants);
    }).catch((e) => {
        res.send(e);
    });
})

app.post('/restaurants', (req, res) => {
    let title = req.body.title;

    let newRestaurant = new Restaurant({
        title
    });
    newRestaurant.save().then((restDoc) => {
        res.send(restDoc);
    })
})

app.patch('/restaurants/:id', (req, res) => {
    Restaurant.findOneAndUpdate({_id: req.params.id},{
        $set: req.body
    }).then(()=> {
        res.sendStatus(200);
    });
})

app.delete('/restaurants/:id', (req, res) => {
    Restaurant.findByIdAndRemove({
       _id: req.params.id 
    }).then((removedRestDoc)=> {
        res.send(removedRestDoc);
    })
});


app.get('/restaurants/:restaurantId/review', (req, res) => {
   Review.find({
    _restaurantId: req.params.restaurantId
   }).then((review) => {
     res.send(review);
   })
});

app.post('/restaurants/:restaurantId/review',(req, res)=>{
    let newReview = new Review({
        customerName: req.body.customerName,
        reviewDescription: req.body.reviewDescription,
        rating:req.body.rating,
        _restaurantId:req.params.restaurantId
    });
    newReview.save().then((revDoc) => {
        res.send(revDoc);
    })
});

app.patch('/restaurants/:restaurantId/review/:id',(req, res)=> {
    Review.findOneAndUpdate({
        _id:req.params.id
    }, {
        $set: req.body
    }).then(()=> {
        res.sendStatus(200);
    });
})





app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})