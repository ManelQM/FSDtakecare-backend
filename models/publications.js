
    'use strict';
    const {
      Model
    } = require('sequelize');
    module.exports = (sequelize, DataTypes) => {
      class Publications extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
          // define association here
          Publications.belongsTo(models.User,  {
            foreignKey: 'user_id'
          });
          Publications.hasMany(models.Services, {
            foreignKey: 'publication_id'
          }) 
        }
      }
      Publications.init({
        title: {
         type: DataTypes.STRING,
        },
        nickname: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        text: {
          type: DataTypes.STRING,
          allowNull: false, 
        },     
         fulljourney: {
          type: DataTypes.BOOLEAN,
          allowNull: false
         }, 
        childrencare:{
          type: DataTypes.BOOLEAN,
          allowNull:false
        },
        disablecare: DataTypes.BOOLEAN,
        elderlycare: DataTypes.BOOLEAN, 
        age: DataTypes.STRING,
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        }
      }, {
        sequelize,
        modelName: 'Publications',
        timestamps: false,
      });
      return Publications;
    };