'use-strict'

// Load env vars
require('./helpers/dotenv');

const bodyParser = require('body-parser');
const app = require('./helpers/express');
const cors = require('cors');
const port = process.env.PORT || 4000;

// Allow cors
app.use(cors());

app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
    extended: true,
    })
);

app.get('/', (request, response) => {
    response.json({ info: 'Blog App API' })
});

app.listen(port, () => {
    console.log(`Blog App Server running on port ${port}.`)
});

// Routes
const postsRoutes = require('./routes/posts');
const categoriesRoutes = require('./routes/categories');