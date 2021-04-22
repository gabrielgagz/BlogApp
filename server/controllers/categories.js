'use-strict'

const Category = require('../models/categories');

const getCategoryById = async (request, response) => {

    const id = parseInt(request.params.id);

    try {
        
        const idCategory = await Category.findByPk( id );
        return response.json( idCategory ) 

    } catch (error) {
        
        console.log(error)

    }
}

module.exports = { getCategoryById }