'use-strict'

const Category = require('../models/categories');

// Get all categories
const getCategories = async (request, response) => {

    try {
        
        const allCategories = await Category.findAll();
        return response.json( allCategories ) 

    } catch (error) {
        
        response.status(400).send(error);

    } 
}

const getCategoryById = async (request, response) => {

    const id = parseInt(request.params.id);

    try {
        
        const idCategory = await Category.findByPk( id );
        return response.json( idCategory ) 

    } catch (error) {
        
        response.status(400).send(error);

    }
}

const createCategory = async (request, response) => {

    const { name } = request.body;

    try {
        
        await Category.create({
            name
        });
        return response.json( {success: true} ); 

    } catch (error) {
        
        response.status(400).send(error);

    } 
}

const updateCategory = async (request, response) => {

    const id = parseInt(request.params.id);
    const { name } = request.body;

    try {
        
        await Category.update({
            name,
        }, { where: { id } } );
        return response.json( {success: true} ); 

    } catch (error) {
        
        response.status(400).send(error);

    } 
}

const deleteCategory = async (request, response) => {

    const id = parseInt(request.params.id);

    try {
        
        await Category.destroy( { where: { id } } );
        return response.json( {success: true} ); 

    } catch (error) {
        
        response.status(400).send(error);

    } 
}

module.exports = {
    getCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}