const Flight = require("../models/flight");

module.exports = {
  new: newFlight,
  create,
  index,
  delete: deleteFlight,
  show
};

function show(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    console.log(flight);
    res.render("flights/show", { title: "Flight Detail", flight });
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
