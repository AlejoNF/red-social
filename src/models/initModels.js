const Users = require('./users.models')
const Posts = require('./posts.models')
const Likes = require('./likes.models')
const Comments = require('./comments.models')
const Follows = require('./follows.models')
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

    //? Relacion Users - Follows (Following)
    Users.hasMany(Follows)
    Follows.belongsTo(Users,{as: "following", foreignKey:"userId2"})
    Follows.belongsTo(Users,{as: "followers", foreignKey:"userId"})
    
    // //? Users -- Follows 
    // Follows.belongsTo(Users, { foreignKey: 'userId', as: 'Follower' })
    // Follows.belongsTo(Users, { foreignKey: 'userId2', as: 'Followed' })
}

module.exports = initModels