const express = require("express");
const app = express();
const port = process.env.PORT || 5001;
app.use(express.json())

app.use(express.static('public'));




// ------get all 

// contacts
app.get('contacts', (req, res) => {
    res.json(contacts)
})

// vehicles
app.get('vehicles', (req, res) => {
    res.json(vehicles)
})

// comments
app.get('comments', (req, res) => {
    res.json(comments)
})

// products
app.get('products', (req, res) => {
    res.json(products)
})






// ------get by Id

// contacts
app.get('contacts/:id', (req, res) => {
    let myId = req.params.id;
    
    let matchingItem = contacts.find((item, index) => {
        return item.id ==myId;
    })
    
    if(matchingItem) {
        req.json(matchingItem);
    } else {
        res.send("ID not found")
    }
    
})

// vehicles
app.get('vehicles/:id', (req, res) => {
    let myId = req.params.id;
    
    let matchingItem = contacts.find((item, index) => {
        return item.id ==myId;
    })
    
    if(matchingItem) {
        req.json(matchingItem);
    } else {
        res.send("ID not found")
    }
    
})

// comments
app.get('comments/:id', (req, res) => {
    let myId = req.params.id;
    
    let matchingItem = contacts.find((item, index) => {
        return item.id ==myId;
    })
    
    if(matchingItem) {
        req.json(matchingItem);
    } else {
        res.send("ID not found")
    }
    
})

// products
app.get('products/:id', (req, res) => {
    let myId = req.params.id;

    let matchingItem = contacts.find((item, index) => {
        return item.id ==myId;
    })
    
    if(matchingItem) {
        req.json(matchingItem);
    } else {
        res.send("ID not found")
    }
    
})






// ------post

// contacts
app.post('contacts', (req, res) => {
    
    let newContact = {};

    newContact.name = req.body.name;
    newContact.occupation = req.body.occupation;
    newContact.avatar = req.body.avatar;
    newContact._id = randomInt();
    
    contacts.push(newContact);
    res.json(newContact);
    
})

// vehicles
app.post('vehicles', (req, res) => {
    
    let newVehicles = {};
    
    newVehicles.year = req.body.year;
    newVehicles.make = req.body.make;
    newVehicles.model = req.body.model;
    newVehicles.price = req.body.price;
    newVehicles.fuel = req.body.fuel;
    newVehicles.city = req.body.city;
    newVehicles.isNew = req.body.isNew;
    newVehicles.occupation = req.body.occupation;
    newVehicles.avatar = req.body.avatar;
    newVehicles._id = randomInt();
    
    Vehicles.push(newVehicles);
    res.json(newVehicles);
    
})

// comments
app.post('comments', (req, res) => {
    
    let newComments = {};
    
    newComments.body = req.body.body;
    newComments.postId = req.body.postId;
    newComments._id = randomInt();
    
    comments.push(newComments);
    res.json(newComments);
    
})

// products
app.post('products', (req, res) => {
    
    let newProducts = {};
    
    newProducts.name = req.body.name;
    newProducts.description = req.body.description;
    newProducts.rating = req.body.rating;
    newProducts.price = req.body.price
    newProducts.category = req.body.price
    newProducts._id = randomInt();
    
    products.push(newProducts);
    res.json(newProducts);
    
})



// require the data from the .js file for each 
let contacts = require('./data/contacts');
let vehicles = require('./data/vehicles');
let comments = require('./data/comments');
let products = require('./data/products');











const randomInt = () => {
    let randomFloat = Math.random();
    let bigRandomFloat = randomFloat * 100000;
    let randomInt = Math.floor(bigRandomFloat);

    return randomInt;
}


app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
