# SHOPEE API
REST API.
## REST API

List of user routes:

Route|HTTP|Description
-----|----|-----------
/|POST|Login body (username, password) and get a token for credential
/register|POST|Register for added a user
/|GET|Get all the users info
/:id|DELETE|delete user using id user at params uri
/sellers|POST|Create seller, but u must login and using token at headers
/seller/:id|DELETE|Delete seller
/seller|GET|Get add seller

## Usage
with only npm:

```
git clone
npm install
npm start

```

Access the website via ``https://localhost:3000``.
