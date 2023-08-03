let express = require('express');
let router = express.Router();

router.get("contacts", contactsControllers.getAllContacts)

router.get("contacts", contactsControllers.getContactsById)

router.post("contacts", contactsControllers.postContacts)




module.exports = router;