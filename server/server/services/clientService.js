var mongoose = require('mongoose');
var Client = require('../models/clients');

var clientService = {

  newClient: function(data) {
    var client = new Client(data);
    client.save(function(err) {
      if(err) {
        console.log(err);
      }
    });
  },
  getClients: function(callback) {
    Client.find({}, function(err, clients) {
      if(err) {
        callback({message: 'No records found'});
      }
      callback(clients);
    });
  },

  editClient: function(data) {
    console.log('made it to editClient');
    console.log('heres the first name: ' + data.clientFirstName);
    var ObjectId = mongoose.Types.ObjectId;
    var id = ObjectId(data._id);
    var findUpdates = function() {

    };

    Client.update({_id: id}, {
      clientFirstName: data.clientFirstName,
      clientLastName: data.clientLastName,
      clientStreetL1: data.clientStreetL1,
      clientStreetL2: data.clientStreetL2,
      clientCity: data.clientCity,
      clientState: data.clientState,
      clientZip: data.clientZip,
      clientHomePh: data.clientHomePh,
      clientCellPh: data.clientCellPh,
      clientEmail: data.clientEmail,
      altContactName: data.altContactName,
      altContactPh: data.altContactPh,
      altContactRel: data.altContactRel,
      clientAge: data.clientAge,
      clientHeight: data.clientHeight,
      clientTopSize: data.clientTopSize,
      clientBottomSize: data.clientBottomSize,
      clientShoeSize: data.clientShoeSize,
      clientRestrictions: data.clientRestrictions,
      interviewStartDate: data.interviewStartDate,
      employmentStartDate: data.employmentStartDate,
      company: data.company,
      jobTitle: data.jobTitle,
      schedulingRestrictions: data.schedulingRestrictions
    }, function catchError(err){
      console.log(err);
    });
  },

  deleteClient: function(data) {
    var ObjectId = mongoose.Types.ObjectId;
    var id = ObjectId(data);
    Client.findByIdAndRemove(id, function(err) {
      if(err) {
        console.log('DB Error: ', err);
      } else {
        alert('Client Account Deleted');
      }
    });
  }
};

module.exports = clientService;
