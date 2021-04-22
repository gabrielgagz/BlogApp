'use strict'

const categoriesRoutes = require('../helpers/express');
const categoriesDb = require('../controllers/categories');

// Categories Routes
categoriesRoutes.get('/api/categories', categoriesDb.getCategories);
categoriesRoutes.get('/api/categories/:id', categoriesDb.getCategoryById);
categoriesRoutes.post('/api/categories', categoriesDb.createCategory);
categoriesRoutes.patch('/api/categories/:id', categoriesDb.updateCategory);
categoriesRoutes.delete('/api/categories/:id', categoriesDb.deleteCategory);

module.exports = categoriesRoutes;