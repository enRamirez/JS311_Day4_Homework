let express = require('express');
let router = express.Router();

router.get("vehicles", vehiclesControllers.getAllVehicles)

router.get("vehicles", vehiclesControllers.getVehiclesById)

router.post("vehicles", vehiclesControllers.postVehicles)




module.exports = router;