# Ecommerce-backend

# Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)

# About <a name = "about"></a>

This is the backend part for an ecommerce app. You can see the frontend part <a href="https://github.com/LeoCaprile/ecommerce-frontend">**here**</a>.

## Dependencies:

- Expressjs
- mysql2
- cors

## Process before coding:

- Create the repository in github.
- Clone repo in my local enviroment.
- Add proyect to vercel.
- Install dependencies in local enviroment. (express, mysql2).
- Make folder structure.

## Process during coding:

- Make index.js entry point.
- Added vercel.json file config to configure entry point.
- Require dependencies in the index.js.
- Make a redirect status 404, to routes that dont exist.
- Make routes, getProducts, getDiscounts, getCategories.

<hr>

# Folder structure <a name = "folder_structure"></a>

```
│   .gitignore
│   index.js
│   package-lock.json
│   package.json
│   README.md
│   vercel.json
│
├───api
│       getCategories.js
│       getDiscounts.js
│       getProducts.js
│
└───config
        connection.js
```

### Folders description:

- "api": contains all endpoints.
- "config": contains the config to make a conection to the database.

### Files description:

- "index.js": the principal config of express.
- "vercel.json": vercel config for get express work in production.
- "getCategories.js": Route to get all the categories in json.
- "getDiscounts.js": Route to get all the discounts in json.
- "getProducts.js": Route to get all the products by its query filters.
- "connection.js": Config file to make the mysql connection.

<hr>

# Getting Started <a name = "getting_started"></a>

To run this app on your local machine do the following steps:

```
git clone (this repo)
```

```
npm install
```

```
npm run dev
```

# Endpoints <a name = "endpoints"></a>

In your local enviroment try "https://localhost:3000/api/(endpoint)"

## **GET** getCategories

Obtain all categories.

example in local enviroment:

```
https://localhost:3000/api/getCategories
```

<hr>

## **GET** getDiscounts

Obtain products wich have discounts ordered from highest to lowest.

example in local enviroment:

```
https://localhost:3000/api/getDiscounts
```

<hr>

## **GET** getProducts

Return all products

`?name= : return products wich contain string provided`
**type : STRING**

`?category= : return products by it's category`
**type : NUMBER**

`?price= : return products by it's category` **type : NUMBER**

Example:

```
https://localhost:3000/api/getProducts?name=pisco&category=2&price=5000
```

In case it's passed another value like undefined, null or a type that's not compatible with the query, the endpoint returns an empty object.

### <strong>If there no url querys added or values to the querys, return all products from the database.</strong>
