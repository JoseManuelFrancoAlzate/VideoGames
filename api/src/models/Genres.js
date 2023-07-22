const {DataTypes} = require('sequelize')

module.exports = (sequelize)=>{
 sequelize.define('Genre',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
 },
 {
    timestamps: false
 }
 );
};

 
/*
{"name":"aventura",
"userId": "1"
},
{"name":"pelea",
"userId": "2"
},
{"name":"terror",
"userId":3}, 
{{"name":"shooter",
"userId":4}}
 */