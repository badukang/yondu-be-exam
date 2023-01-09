
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
``
CREATE DATABASE databasename;
``

update database config
``
open db/config/database.js
update your environment credentials
``


//for migrations
sequelize-cli db:migrate

//revert migration
sequelize-cli db:migrate:undo

//for seeding
sequelize-cli db:seed:all



