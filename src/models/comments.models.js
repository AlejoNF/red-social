const {DataTypes} = require('sequelize')
const Users = require('./users.models')

const db = require('../utils/database')


const Posts = db.define('posts', {
    id:{
        type: DataTypes.UUID,
        primaryKey: true
    },
    userId:{
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            key   : 'id',
            model : Users
        }
    },
        content:{
            type: DataTypes.TEXT,
            allowNull:false
        }
})

module.exports = Posts 