const express = require('express');
const router = express.Router();
const ticketCtrl = require('../controllers/tickets');


router.post('/flights/:id/tickets', ticketCtrl.create);
router.get('/flights/:id/tickets/new', ticketCtrl.new);

module.exports = router;