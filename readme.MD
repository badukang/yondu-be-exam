requirement:
node v16
npm 8
mysql

// for using sequalize-cli commands
npm i sequelize-cli -g

// install dep
npm i

// database
create mysql database
`CREATE DATABASE databasename;`

update database config
`open db/config/database.js`
update db env credentials

//for migrations
sequelize-cli db:migrate

//revert migration
sequelize-cli db:migrate:undo

//for seeding
sequelize-cli db:seed:all

//for using the api
post localhost:3000/auth {user:admin, pass:1234}, will return {token}

//for users api
note: config for postman add header "Authorization: ${token}"


