let express = require('express');
let router = express.Router();


router.post("vehicles", )

let vehicles = [];


const getAllVehicles = (req,res) => {
    res.json(vehicles);
}

const getVehiclesById = (req, res) => {
    let myId = req.params.id;

    let matchingItem = vehicles.find((item,index) => {
        return item.id == myId;
    })

    if(matchingItem) {
        res.json(matchingItem);
    } else {
        res.send("ID not found")
        
    }
}

const postVehicles = (req,res) => {

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

    // send to database array
    vehicles.push(newVehicles);

    res.json(newVehicles);

}





module.exports = {postVehicles, getAllVehicles, getVehiclesById}