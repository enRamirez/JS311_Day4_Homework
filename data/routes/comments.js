let express = require('express');
let router = express.Router();

router.get("comments", commentsControllers.getAllComments)

router.get("comments", commentsControllers.getCommentsById)

router.post("comments", commentsControllers.postComments)




module.exports = router;