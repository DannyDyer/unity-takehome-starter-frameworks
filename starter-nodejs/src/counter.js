const { Model, DataTypes } = require('sequelize');

class Counter extends Model {
}

const init = (sequelize) => {
  Counter.init({
    visit: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'counter',
  });
};
module.exports = {
  init,
};
