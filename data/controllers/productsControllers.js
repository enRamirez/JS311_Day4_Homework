let express = require('express');
let router = express.Router();


router.post("products", )

let products = [];


const getAllProducts = (req,res) => {
    res.json(products);
}

const getProductsById = (req, res) => {
    let myId = req.params.id;

    let matchingItem = products.find((item,index) => {
        return item.id == myId;
    })

    if(matchingItem) {
        res.json(matchingItem);
    } else {
        res.send("ID not found")
        
    }
}

const postProducts = (req,res) => {

    let newProducts = {};

    newProducts.name = req.body.name;
    newProducts.description = req.body.description;
    newProducts.rating = req.body.rating;
    newProducts.price = req.body.price
    newProducts.category = req.body.price
    newProducts._id = randomInt();

    // send to database array
    products.push(newProducts);

    res.json(newProducts);

}





module.exports = {postProducts, getAllProducts, getProductsById}