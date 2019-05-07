const bcrypt = require('bcrypt');
const saltRounds = 10;
'use strict';
module.exports = (sequelize, DataTypes) => {
  //Table Column Description
  //firstname: Holds first name of account
  //lastname: Holds last name of account
  //phone: Holds phone number for account
  //email: Holds email for account
  //password: Holds password (bcrypt hashed) for account
  //address: Holds address for account
  //zipcode: Holds zipcode of address for the account
  //available: Holds boolean stating true if worker is available to take a new task
  //average_rating: Holds the decimal value of the workers average rating (0.0-5.0)
  //rating_count: Holds the amount of customer reviews
  //pending_tasks: Holds current pending tasks for a worker (cannot be available if over a certain amount of jobs [Allow batch laundry pickups?])
  //completed_tasks:Holds the current amount of completed tasks for a worker

  const Workers = sequelize.define('Workers', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.TEXT,
    address: DataTypes.STRING,
    zipcode: DataTypes.INTEGER,
    available: DataTypes.BOOLEAN,
    average_rating: DataTypes.DECIMAL,
    rating_count: DataTypes.INTEGER,
    pending_task: DataTypes.INTEGER,
    completed_tasks: DataTypes.INTEGER
  }, {});

  Workers.beforeSave((workers, options)=> {
      if (workers.changed('password')) {
          workers.password = bcrypt.hashSync(workers.password, bcrypt.genSaltSync(10), null);
      }
  });

  Workers.prototype.comparePassword = function(input, cb){
    bcrypt.compare(input, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
  };

  Workers.associate = function(models) {
    Workers.belongsTo(models.Orders);
    Workers.belongsTo(models.Transactions);
    Workers.belongsTo(models.Reviews);
    Workers.belongsTo(models.WorkerBilling); 
  };
  return Workers;
};