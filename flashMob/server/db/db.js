var Sequelize = require('sequelize');
// SQL credentials:
// Sequelize([database name], [SQL username], [SQL password]);
var sequelize = new Sequelize('flashMob', 'root', 'hi');

// model definition for Sessions
var Session = sequelize.define('Session', {

  username: Sequelize.STRING,
  secret: Sequelize.STRING,
  store: Sequelize.STRING,
  resave: Sequelize.BOOLEAN,
  saveUninitialized: Sequelize.BOOLEAN

});

// model definition for Users
var User = sequelize.define('User', {

  username: Sequelize.STRING,
  password: Sequelize.STRING

});

// model definition for Events
var Event = sequelize.define('Event', {

  title: Sequelize.STRING,
  category: Sequelize.STRING,
  location: Sequelize.STRING,
  date: Sequelize.DATE,
  description: Sequelize.TEXT()
  // Foreign key relationship with Users table to be added later
  // organizer: Sequelize.STRING

});

// force: true drops table if it exists, development only
User.sync({force: true}).then(function () {
});

Event.sync({force: true}).then(function () {
});

Session.sync({force: true}).then(function () {
});

sequelize.authenticate()
  .then(function(err) {
    console.log('Connection has been made successfully.');
  })
  .catch(function(err) {
    console.log('Unable to connect to the db: ', err);
  });

module.exports.sequelize = sequelize;
module.exports.User = User;
module.exports.Event = Event;
module.exports.Session = Session;