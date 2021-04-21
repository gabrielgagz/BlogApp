'use-strict'

const Post = require('../models/posts');

// Get all posts
const getPosts = async (request, response) => {

    try {
        
        const allPosts = await Post.findAll();
        return response.json( allPosts ) 

    } catch (error) {
        
        console.log(error)

    } 
}

const getPostById = async (request, response) => {

    const id = parseInt(request.params.id);

    try {
        
        const idPost = await Post.findByPk( id );
        return response.json( idPost ) 

    } catch (error) {
        
        console.log(error)

    }
}

const createPost = async (request, response) => {

    const { category, content, date, image, title } = request.body;

    try {
        
        await Post.create({
            category,
            content,
            date,
            image,
            title
        });
        return response.json( {success: true} ); 

    } catch (error) {
        
        console.log(error);

    } 
}

const updatePost = async (request, response) => {

    const id = parseInt(request.params.id);
    const { category, content, date, image, title } = request.body;

    try {
        
        await Post.update({
            category,
            content,
            date,
            image,
            title
        }, { where: { id } } );
        return response.json( {success: true} ); 

    } catch (error) {
        
        console.log(error);

    } 
}

const deletePost = async (request, response) => {

    const id = parseInt(request.params.id);

    try {
        
        await Post.destroy( { where: { id } } );
        return response.json( {success: true} ); 

    } catch (error) {
        
        console.log(error);

    } 
}

module.exports = { 
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
}