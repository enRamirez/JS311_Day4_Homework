let express = require('express');
let router = express.Router();

router.get("products", productsControllers.getAllProducts)

router.get("products", productsControllers.getProductsById)

router.post("products", productsControllers.postProducts)




module.exports = router;