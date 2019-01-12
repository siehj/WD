// const db = require('../../Database');

module.exports = {

  'addContact' : (req, res) => {
    let newContact = req.body.newContact;
    db.addContact(newContact, (err, result) => {
      if(err) console.log(err);
      else res.end();
    })
  },

  'getContacts' : (req, res) => {
    db.getAllContacts((err, contacts) => {
      if(err) console.log(err);
      else res.send(contacts)
    })
  },

  'searchContacts' : (req, res) => {
    db.searchContacts(req.body.query, (err, contacts) => {
      if(err) console.log(err);
      else {
        res.send(contacts);
      }
    });
  }

}
