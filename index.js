const express = require("express");
const app = express();
const port = process.env.PORT || 5001;
app.use(express.json())

app.use(express.static('public'));



// require the data from the .js file for each 
let contacts = require('./data/contacts');

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

    newVehicles.name = req.body.name;
    newVehicles.occupation = req.body.occupation;
    newVehicles.avatar = req.body.avatar;
    newVehicles._id = randomInt();

    Vehicles.push(newVehicles);
    res.json(newVehicles);

})

// comments
app.post('comments', (req, res) => {

    let newComments = {};

    newComments.name = req.body.name;
    newComments.occupation = req.body.occupation;
    newComments.avatar = req.body.avatar;
    newComments._id = randomInt();

    comments.push(newComments);
    res.json(newComments);

})

// products
app.post('products', (req, res) => {

    let newProducts = {};

    newProducts.name = req.body.name;
    newProducts.occupation = req.body.occupation;
    newProducts.avatar = req.body.avatar;
    newProducts._id = randomInt();

    products.push(newProducts);
    res.json(newProducts);

})



// let vehicles = require('./data/vehicles');
// let comments = require('./data/comments');
// let products = require('./data/products');











const randomInt = () => {
    let randomFloat = Math.random();
    let bigRandomFloat = randomFloat * 100000;
    let randomInt = Math.floor(bigRandomFloat);

    return randomInt;
}


app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
