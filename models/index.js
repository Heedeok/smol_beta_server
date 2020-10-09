var path = require('path'); 
var Sequelize = require('sequelize'); 
var env = process.env.NODE_ENV || 'development'; 
var config = require(path.join(__dirname, '..', 'config.json'))[env]; 
var db = {}; 
var sequelize = new Sequelize(config.database, config.username, config.password, config); 

db.sequelize = sequelize; 
db.Sequelize = Sequelize; 

db.PostCard = require('./PostCard')(sequelize, Sequelize); 
db.User = require('./User')(sequelize, Sequelize); 

db.PostCard.belongsTo(db.User, {foreignKey: 'pc_us_id', targetKey: 'us_id'});

module.exports = db;
