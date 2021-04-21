'use strict'

const categoriesRoutes = require('../helpers/express');
const categoriesDb = require('../controllers/categories');

// Movements Routes
// categoriesRoutes.get('/api/catagories/:id', catagoriesDb.getCategoriesById);
// categoriesRoutes.post('/api/categories', catagoriesDb.createCategory);
// categoriesRoutes.patch('/api/categories/:id', catagoriesDb.updateCategory);
// categoriesRoutes.delete('/api/categories/:id', catagoriesDb.deleteCategory);

module.exports = categoriesRoutes;