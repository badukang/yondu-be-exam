# Requirement:

- node v16
- npm 8
- mysql

# Installation

### for using sequalize-cli commands

```bash
npm i sequelize-cli -g
```

### install dep

```bash
npm i
```

## Database

`create mysql database`

```
CREATE DATABASE databasename;
```

`then update database config`

```
vi db/config/database.js
```

`update db env credentials`

```javascript
{
  username: "root",
  password: "",
  database: "db",
  host: "127.0.0.1",
  dialect: "mysql"
}
```

`for migrations`

```bash
sequelize-cli db:migrate
```

`for seeding`

```bash
sequelize-cli db:seed:all
```

`revert migration`

```bash
sequelize-cli db:migrate:undo
```

`run application`

```bash
npm start
```

`for testing`

```bash
npm run test
```

# REST API

REST API needs authentication

`Content-type: application/json or application/x-www-form-urlencoded`

## Auth

`login auth`

### Request

`Post auth/login`

```javascript
{
    "username": "admin",
    "password": "1234"
}
```

### Response

```javascript
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwiaWF0IjoxNjczMjc2MDY5LCJleHAiOjE2NzMyODMyNjl9.msV9BaFeTVl3_-tvKE7iYunXPUwBoM6sTTDeFj02Iq4"
}
```

## User

`headers need: {Authorization: ${token}}`

## _list user_

`GET /user`

### Request

```javascript
{
}
```

### Response

```javascript
[
  {
    id: 77,
    firstName: "testing",
    lastname: null,
    address: null,
    postcode: null,
    contactNumber: null,
    email: "0.ktk10zjixi.gmail.com",
    username: "0.ktk10zjixi",
    password: "$2b$10$KpliqsyVFUilY2qv3Ra1neoWWzGeerMeWpkHYcFTlMLgq7P8Hr30K",
    createdAt: "2023-01-09T14:28:12.000Z",
    updatedAt: "2023-01-09T14:28:12.000Z",
  },
  {
    id: 78,
    firstName: "testing",
    lastname: null,
    address: null,
    postcode: null,
    contactNumber: null,
    email: "0.s8au14pkt3.gmail.com",
    username: "0.s8au14pkt3",
    password: "$2b$10$rNSQVDTPb/KNIF/od.DCiOEHqC1w6Ov2REoF1XbuHmAkQ8231RtS6",
    createdAt: "2023-01-09T14:28:56.000Z",
    updatedAt: "2023-01-09T14:28:56.000Z",
  },
];
```

## _Create User_

`POST /user`

### Request

```javascript
{
    "firstName": "first",
    "lastname": "last",
    "address": null,
    "postcode": null,
    "contactNumber": null,
    "email": "0.s8au14pkt8.gmail.com",
    "username": "0.s8au14pkt8",
    "password": "1234"
}
```

### Response

```javascript
{
    "id": 83,
    "firstName": "first",
    "lastname": "last",
    "address": null,
    "postcode": null,
    "contactNumber": null,
    "email": "0.s8au14pkt8.gmail.com",
    "username": "0.s8au14pkt8",
    "password": "$2b$10$ygZGZKYjC8PLNik0jgl67uooV5uVJDUzL9TYlDOURNguRikeEZbyy",
    "updatedAt": "2023-01-09T15:07:43.706Z",
    "createdAt": "2023-01-09T15:07:43.706Z"
}
```

## _Update User_

`Patch /user/:id`

### Request

```javascript
{
    "firstName": "change first"
}
```

### Response

```javascript
{
    "id": "71",
    "message": "update successful"
}
```

## _Destroy user_

`Delete /user/:id`

### Request

```javascript
{
}
```

### Response

```javascript
{
    "id": "71",
    "message": "success delete"
}
```

# Postman collection

> postman collection also added in root directory
>
> > `postman_collection.json`
