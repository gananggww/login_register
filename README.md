# My First API
Demo app with basic REST API.
## REST API

List of user routes:

Route|HTTP|Description
-----|----|-----------
/|POST|Login body (username, password) and get a token for credential
/register|POST|Register for added a user
/|GET|Get all the users info
/:id|DELETE|delete user using id user at params uri
/sellers|POST|Create seller, but u must login and using token at headers
/:id|DELETE|Delete seller
/|GET|Get add seller

## Usage
with only npm:

```

npm install
npm start
npm run dev
```

Access the website via ``https://localhost:3000`` or API via ``https://localhost:3000/api``.
