'use strict'

const categoriesRoutes = require('../helpers/express');
const categoriesDb = require('../controllers/categories');

// Categories Routes
categoriesRoutes.get('/api/categories/:id', categoriesDb.getCategoryById);
// categoriesRoutes.post('/api/categories', catagoriesDb.createCategory);
// categoriesRoutes.patch('/api/categories/:id', catagoriesDb.updateCategory);
// categoriesRoutes.delete('/api/categories/:id', catagoriesDb.deleteCategory);

module.exports = categoriesRoutes;