const express = require('express');
const router = express.Router();
const ticketCtrl = require('../controllers/tickets');


router.post('/flights/:id/tickets', ticketCtrl.create);

module.exports = router;