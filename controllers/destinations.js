const Flight = require("../models/flight");

module.exports = {
    create,
};

function create(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        console.log(flight)
        console.log(req.body, 'this is req.body')
        // req.body is the contents of the destination form 
        // located in our show.ejs, that gets submitted by the client
        // (when the user fill outs the form and clicks submit)
        flight.destinations.push(req.body);

        // req.body must match our schema for our destinations
        // the properties are coming from the name attributes on our form

        // reason we have to call save here
        // is if we manipulate the document (movie)

        // we have to tell mongodb we did that
        // thats what the save is for
        flight.save(function (err) {
            res.redirect(`/flights/${flight._id}`);
        });
    });
}