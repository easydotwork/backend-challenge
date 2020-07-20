'use strict'

const router = require('express').Router();
const cadController = require('../../../controllers/users/cad');

router.get('/', cadController.viewAll);
router.get('/:field', cadController.viewAllFilter);
router.get('/:field/:value', cadController.viewAllWhere);
router.patch('/', cadController.update);
router.delete('/', cadController.erase); 

module.exports = router;
