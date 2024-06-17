This repository contains the backend service for AnswersAi, a platform that provides AI-generated answers to user questions. This service is built using Node.js, Express.js, and integrates with various AWS services for scalability.

Table of Contents
  1.Overview
  2.Prerequisites
  3.Setup
    Installing Dependencies
    Database Setup
    Environment Variables
  4.Running the Application
  5.API Documentation
  6.Testing
  7.Deployment
  8.Additional Notes
  9.Contributing
  10.License

  
Overview
    The AnswersAi backend provides a RESTful API to manage user questions, user profiles, and integrate with an AI service for generating answers. It includes authentication using JWT tokens for secure API access and supports scalable infrastructure design on AWS.

Prerequisites
    Ensure you have the following installed:
     1. Node.js (version >= 12.0.0)
     2. Docker (optional, for containerization)
     3. PostgreSQL or MySQL database

Setup
    Installing Dependencies
    Install Node.js dependencies using npm

Database Setup
    1. Database Creation: Create a PostgreSQL or MySQL database for AnswersAi.
    2. Database Configuration: Update the .env file with your database credentials:
            DB_HOST=your_database_host
            DB_PORT=your_database_port
            DB_NAME=your_database_name
            DB_USER=your_database_username
            DB_PASSWORD=your_database_password

  3. Database Migration: Run database migrations to set up tables (using Sequelize or similar ORM)

Environment Variables
    Ensure you have set the following environment variables in a .env file at the root of your project:
          PORT=3000
          JWT_SECRET=your_jwt_secret
          JWT_EXPIRATION=3600

Running the Application
    Start the application in development mode: npm run dev

















