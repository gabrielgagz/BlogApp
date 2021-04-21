const postsRoutes = require('../helpers/express');
const postsDb = require('../controllers/posts');

// Movements Routes
// postsRoutes.get('/api/posts/:id', postsDb.getPostsById);
// postsRoutes.post('/api/posts', postsDb.createPost);
// postsRoutes.patch('/api/posts/:id', postsDb.updatePost);
// postsRoutes.delete('/api/posts/:id', postsDb.deletePost);

module.exports = postsRoutes;