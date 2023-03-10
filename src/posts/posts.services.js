const postControllers = require('./posts.controllers')

const getAllPosts = (req,res) => {
    postControllers.findAllPosts()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message:err.message})
        })
}

const getPostById = (req,res) => {
    const id = req.params.id
    postControllers.findPostById(id)
        .then(data => {
            if(data){
                res.status(200).json(data)
            }else{
                res.status(404).json({message:'Invalid Id'})
            }
        } )
        .catch(err => {
                res.status(400).json({message:err.message})
        } )
}

const postNewPost = (req,res) => {
    const userId = req.user.id
    const {content} = req.body
    postControllers.createPost({userId,content})
        .then(data =>  {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json({message:err.message,fields:{
                content:'text'
            }})
        })
}

const patchPost = (req,res) => {
    const {content} = req.body
    const id = req.params.id
    const userId = req.user.id
    postControllers.updatePost(id,{content})
        .then(data => {
            if(data){
                res.status(200).json({message:`Post with id ${id} edited successfully`})
            }else{
                res.status(400).json({message: 'Post not avaliable'})
            }
        })
        .catch(err => {
                res.status(400).json({message:err.message})
        })
}

const deletePost = (req,res) => {
    const id = req.params.id
    postControllers.removePost(id)
        .then(data => {
            if(data){
                res.status(204).json()
            }else{
                res.status(404).json({message:'Invalid Id'})
            }
        })
        .catch(err => {
            res.status(400).json({message:err.message})
        })
}

module.exports = {
    getAllPosts,
    getPostById,
    postNewPost,
    patchPost,
    deletePost
} 