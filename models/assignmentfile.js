'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AssignmentFile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AssignmentFile.belongsTo(models.Student,{as:'student',foreignKey:'studentId'})
    }
  }
  AssignmentFile.init({
    title: DataTypes.TEXT,
    subjectName: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    studentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AssignmentFile',
  });
  return AssignmentFile;
};