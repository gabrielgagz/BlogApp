'use-strict'

const Post = require('../models/posts');
const Category = require('../models/categories');

// Get all posts
const getPosts = async (request, response) => {

    try {
        
        const allPosts = await Post.findAll( { 

            attributes: ['id', 'title', 'content', 'date', 'image', 'categoryId'],
            include: [{ model: Category, attributes: ['name'] }],
            order: [
                ['date', 'DESC'],
            ],

        });
        return response.json( allPosts ) 

    } catch (error) {
        
        response.status(400).send(error);

    } 
}

const getPostById = async (request, response) => {

    const id = parseInt(request.params.id);

    try {
        
        const idPost = await Post.findByPk( id, { 
            attributes: ['id','title', 'content', 'date', 'image', 'categoryId'] 
        } );
        return response.json( idPost ) 

    } catch (error) {
        
        response.status(400).send(error);

    }
}

const createPost = async (request, response) => {

    const { categoryId, content, date, image, title } = request.body;

    try {
        
        await Post.create({
            categoryId,
            content,
            date,
            image,
            title
        });
        return response.json( {success: true} ); 

    } catch (error) {
        
        response.status(400).send(error);

    } 
}

const updatePost = async (request, response) => {

    const id = parseInt(request.params.id);
    const { categoryId, content, date, image, title } = request.body;

    try {
        
        await Post.update({
            categoryId,
            content,
            date,
            image,
            title
        }, { where: { id } } );
        return response.json( {success: true} ); 

    } catch (error) {
        
        response.status(400).send(error);;

    } 
}

const deletePost = async (request, response) => {

    const id = parseInt(request.params.id);

    try {
        
        await Post.destroy( { where: { id } } );
        return response.json( {success: true} ); 

    } catch (error) {
        
        response.status(400).send(error);;

    } 
}

module.exports = { 
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
}