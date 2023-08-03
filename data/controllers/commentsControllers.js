let express = require('express');
let router = express.Router();


router.post("comments", )

let comments = [];


const getAllComments = (req,res) => {
    res.json(comments);
}

const getCommentsById = (req, res) => {
    let myId = req.params.id;

    let matchingItem = comments.find((item,index) => {
        return item.id == myId;
    })

    if(matchingItem) {
        res.json(matchingItem);
    } else {
        res.send("ID not found")
        
    }
}

const postComments = (req,res) => {

    let newComments = {};

    newComments.body = req.body.body;
    newComments.postId = req.body.postId;
    newComments._id = randomInt();

    // send to database array
    comments.push(newComments);

    res.json(newComments);

}





module.exports = {postComments, getAllComments, getCommentsById}