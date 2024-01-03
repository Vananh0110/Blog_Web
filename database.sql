-- Drop the database if it exists
DROP DATABASE IF EXISTS db_blog;

-- Create a new database
CREATE DATABASE db_blog;

-- Connect to the newly created database
\c db_blog;

-- Create the Users table
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(50) NOT NULL,
    user_email VARCHAR(100) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    google_id VARCHAR(255),
    CONSTRAINT unique_email UNIQUE (user_email)
);

CREATE TABLE blogs (
    blog_id SERIAL PRIMARY KEY,
    user_id INT,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    imageUrl VARCHAR(255),
    videoUrl VARCHAR(255),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    blog_id INT,
    user_id INT,
    content TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (blog_id) REFERENCES blogs(blog_id) ON DELETE CASCADE
);