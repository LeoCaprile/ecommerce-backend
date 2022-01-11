# Ecommerce-backend

# Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)


# About <a name = "about"></a>

Ecommerce backend made with express and mysql.

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

# Usage <a name = "usage"></a>

In your local enviroment try "https://localhost:3000/api/(endpoint)"

## <span style="color:green">GET</span> getCategories

Obtain all categories.

<hr>

## <span style="color:green">GET</span> getDiscounts

Obtain products wich have discounts ordered from highest to lowest

<hr>

## <span style="color:green">GET</span> getProducts

url querys that can be added:

`?name= : return products wich contain string provided` 
<span style="background-color:green; padding: 2px">STRING</span>

`?category= : return products by it's category` <span style="background-color:blue; padding: 2px">NUMBER</span>

`?price= : return products by it's category` <span style="background-color:blue; padding: 2px">NUMBER</span>

In case it's passed another value like undefined, null or a type that's not compatible with the query, the endpoint returns an empty object.

### <strong>If there no url querys added or values to the querys, return all products from the database.</strong>


