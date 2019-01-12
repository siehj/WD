const client = require('../index.js');

// CONTACTS -- add, remove, update, get all
const addContact = (contactInfo, callback) => {
  let qs = `INSERT INTO contacts (name, company, phone, email) VALUES ('${contactInfo.name}', '${contactInfo.company}', '${contactInfo.phone}', '${contactInfo.email}');`;
  client.query(qs, (err, result) => {
    if(err) console.log(err);
    else callback(null, result)
  })
};

const getAllContacts = (callback) => {
  let qs = `SELECT * FROM contacts;`;
  client.query(qs, (err, result) => {
    if(err) console.log(err);
    else callback(null, result);
  })
};

const searchContacts = (query, callback) => {
  let qs = `SELECT * FROM contacts WHERE name LIKE '%${query}%' OR company LIKE '%${query}%' OR phone LIKE '%${query}%' OR email LIKE '%${query}%';`;
  client.query(qs, (err, result) => {
    if(err) console.log(err);
    else callback(null, result);
  })
};

module.exports = { 
  addContact, 
  searchContacts
};
