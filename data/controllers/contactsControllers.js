let express = require('express');
let router = express.Router();


router.post("contacts", )

let contacts = [];


const getAllContacts = (req,res) => {
    res.json(contacts);
}

const getContactsById = (req, res) => {
    let myId = req.params.id;

    let matchingItem = contacts.find((item,index) => {
        return item.id == myId;
    })

    if(matchingItem) {
        res.json(matchingItem);
    } else {
        res.send("ID not found")
        
    }
}

const postContacts = (req,res) => {

    let newContact = {};

    newContact.name = req.body.name 
    newContact.occupation = req.body.occupation;
    newContact.avatar = req.body.avatar
    newContact._id = randomInt();

    // send to database array
    contacts.push(newContact);

    res.json(newContact);

}





module.exports = {postContacts, getAllContacts, getContactsById}