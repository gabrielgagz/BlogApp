'use-strict'

const Post = require('../models/posts');

const getPosts = async (request, response) => {

    try {
        
        const allPosts = await Post.findAll();
        return response.json( allPosts ) 

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

module.exports = { 
    getPosts,
    createPost
}