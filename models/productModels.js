const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/dbMySQL')

const Products = sequelize.define(
    'Products',
    {
        id:{
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        p_name:{
            type : DataTypes.STRING,
            allowNull:false,
        },
        p_desc:{
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue:"demo desc",

        },
        p_quantity:{
            type:DataTypes.INTEGER,
            allowNull: false,
        },
        p_price:{
            type: DataTypes.INTEGER,
            allowNull:false,
        }
    }
);

(async ()=> {
    try {
        await Products.sync({force : false});
        console.log('successfully created the schema ')
    }catch(error){console.log('error synchronizig the table ')

    }
}
)();

module.exports = Products