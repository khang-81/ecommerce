# 🛒 Ecommerce Web Application

A full-featured and modern E-commerce website built using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js). This project includes user authentication, product management, shopping cart, order processing, and an admin dashboard.


## 📌 Project Highlights

- 🔐 Secure user authentication (JWT)
- 🛍️ Paginated product listing.
- 🛒 Shopping cart & checkout functionality.
- 📦 Order management system.
- 🧑‍💼 Registration, login functionality.
- 📱 Alphabetical filtering (A-Z and Z-A) and price sorting (ascending and descending).

## ⚙️ Tech Stack

### Frontend

- Vite React.
- React Router DOM.
- Tailwind CSS.

### Backend

- Express.js
- MySql.
- JWT & Bcrypt for Authentication.

## Installation

```bash
# Clone this repository
$ git clone https://github.com/MatthewBleUK/ecommerce-site.git

# Go into the repository
$ cd ecommerce-site

# Install the front-end dependencies
$ npm install

# Install the back-end dependencies (this is separated for modularity)
$ cd ./src/api
$ npm install

# Create the MySQL database and tables with the products.sql file inside the api directory

# Set up back-end environment file (needs to be inside the api directory)
$ nano .env

PORT=5001
DATABASE_HOST="localhost"
DATABASE_USER="root"
DATABASE_PASSWORD=""
DATABASE_NAME="ecommerce_site"
DATABASE_CONNECTION_LIMIT=10

# Run the app
$ cd ../../
$ npm start
```

## License

This project is released under the GNU General Public License v3.
