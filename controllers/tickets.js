const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    create,

};

function create(req, res) {
    let newTicket = {
        flight: req.params.id,
        seat: req.body.seat,
        price: req.body.price
    }

    Ticket.create(newTicket, function (err, ticket) {

        if (err) res.send(err)

        res.redirect(`/flights/${req.params.id}`)
    })
}





