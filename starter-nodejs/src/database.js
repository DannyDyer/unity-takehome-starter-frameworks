const { Sequelize } = require('sequelize');
const counter = require('./counter');

class Database {
  async init() {
    this.sequelize = new Sequelize('sqlite::memory:', {
      logging: false,
    });
    this.initModels();
    this.sequelize = await this.sequelize.sync();
    return this.sequelize;
  }

  initModels() {
    counter.init(this.sequelize);
  }

  middleware() {
    return (req, res, next) => {
      req.models = this.sequelize.models;
      next();
    };
  }
}
module.exports = new Database();
