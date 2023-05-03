# covvalent

Backend Project in Node.js and SQL

# Functions:

• Fetches all products with category-wise filtering<br>
• Fetches categories<br>
• Pagination on the product list API endpoint.<br>
• Search functionality to the product list API endpoint.<br>

# Steps to Follow:

1. Clone the repository: `git clone https://github.com/your-username/covvalent.git`
2. Navigate to the project directory: `cd covvalent`
3. Install dependencies: `npm install`
4. Setup your mySQL database by create a `.env` file and add the following env variables

   - DB_HOST: the hostname of your MySQL server (default: localhost)
   - DB_USER: the username for your MySQL database
   - DB_PASSWORD: the password for your MySQL database
   - DATABASE: the name of your MySQL database
   - DB_PORT: the database port number

   If that don't works, then change the variables names in connection.js file
   host: "localhost",
   user: "your_userName",
   password: "your_password",
   database: "your_databaseName",
   port: 3306,

5. Create the database tables by running the SQL script provided in the `script.txt` fie

6. Start the Server: `npm start`

# USAGE:

Once the server is running, you can use the following endpoints to retrieve data:

1. GET /product-list/fetchProducts: fetches a list of products. You can filter by category name using the categoryName query parameter, and search for products using the search query parameter. You can also specify the page number and limit using the page and limit query parameters.
2. GET /categories/fetchCategories: fetches a list of categories.

# Screenshots:

1. Curl for product-list endpoint:

   1.1 For Fetching Product-list on the basis of category

   `curl --location 'http://localhost:3000/product-list/fetchProducts?categoryName=Sporting%20Goods&page=1&limit=5'`
   
   ![product_list1](https://user-images.githubusercontent.com/94482800/235915160-1131f2db-a470-42a7-96af-209556242c9f.png)


   1.2 For Fetching product-list on the basis of search (searches on product_name and product_description)

   `curl --location 'http://localhost:3000/product-list/fetchProducts?search=storage'`
   
   ![product_list2](https://user-images.githubusercontent.com/94482800/235915236-d2c6c81c-acaf-4088-bc28-a62314dff572.png)


2. Curl for categories endpoint:
   `curl --location 'http://localhost:3000/categories/fetchCategories'`
   
   ![categories](https://user-images.githubusercontent.com/94482800/235915280-86e7a85e-9bee-4f6e-9e66-e3aa9a1c91b4.png)

   
