const Users = require('./users.models')
const Posts = require('./posts.models')
const Likes = require('./likes.models')
const Comments = require('./comments.models')
const RecoveryPasswords = require('./recoveryPasswords.models')

const initModels = () => {
    //? FK = RecoveryPasswords
    Users.hasMany(RecoveryPasswords)
    RecoveryPasswords.belongsTo(Users)

    //? Relacion entre Users - Posts
    Users.hasMany(Posts)
    Posts.belongsTo(Users)

    //? Relacion Users - Likes
    Users.hasMany(Likes)
    Likes.belongsTo(Users)

    //? Relacion Posts - Likes
    Posts.hasMany(Likes)
    Likes.belongsTo(Posts)


}

module.exports = initModels