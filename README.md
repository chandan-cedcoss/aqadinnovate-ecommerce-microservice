# Node.js Microservice for User, Product, Variant, and Order Management

## Overview
This is a Node.js microservice-based project built using MySQL, Sequelize, and Express.js. It includes functionality for managing users, products, variants, and orders, with features like role-based authentication, file uploads for bulk operations, and efficient data retrieval through joins. The system also supports multi-language (English and Arabic) data management in the database.

## Features
- **User Management**: Create, update, and manage user profiles with roles and authentication using JWT.
- **Product & Variant Management**: Handle product creation, variant management, and bulk uploads using CSV.
- **Order Management**: Manage order placement, status updates, and payment methods.
- **Role-Based Authorization**: Different permissions for 'customer', 'admin', etc.
- **File Upload**: CSV bulk upload for product and variant data.
- **Data Validation**: Proper validations for all forms of data.
- **Pagination & Filtering**: Efficient data retrieval using joins, pagination, and filtering.

## Tech Stack
- **Node.js**: Backend framework
- **Express.js**: Web framework
- **MySQL**: Database
- **Sequelize**: ORM for database interactions
- **JWT**: JSON Web Tokens for authentication and authorization
- **Multer**: Middleware for handling `multipart/form-data` for file uploads
- **csv-parser**: To parse and process CSV files
- **bcryptjs**: Password hashing
- **dotenv**: Environment variables management

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MySQL

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repository-url.git
   cd your-repository-directory