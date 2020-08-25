const Flight = require("../models/flight");
const Ticket = require('../models/ticket');

module.exports = {
  new: newFlight,
  create,
  index,
  delete: deleteFlight,
  show
};

function show(req, res) {
  console.log(req.params.id);
  Flight.findById(req.params.id, function (err, flight) {
    Ticket.find({ flight: flight._id }, function (err, tickets) {
      res.render('flights/show', { flight, tickets, title: 'Details' });
    })
  });
}

function deleteFlight(req, res) {
  Flight.deleteOne({ _id: req.params.id }, function (err) {
    if (err) return;
    res.redirect("/flights");
  });
}

function newFlight(req, res) {
  res.render("flights/new");
}

function create(req, res) {
  const flight = new Flight(req.body);
  flight.save(function (err) {
    if (err) return res.render("flights/new");
    console.log(flight);
    res.redirect("/flights");
  });
}

function index(req, res) {
  Flight.find({}, function (err, flights) {
    res.render("flights/index", { flights });
  });
}
