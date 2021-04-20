CREATE TABLE categories (
    category_id SERIAL NOT NULL,
    category_name VARCHAR(25) NOT NULL,
    PRIMARY KEY (category_id)
);

CREATE TABLE posts (
    post_id SERIAL NOT NULL,
    post_category INTEGER NOT NULL,
    post_content TEXT NOT NULL,
    post_date TIMESTAMP NOT NULL,
    post_image VARCHAR(100) NOT NULL,
    post_title VARCHAR(60) NOT NULL,
    PRIMARY KEY (post_id),
    FOREIGN KEY (post_category) REFERENCES categories(category_id)
);
