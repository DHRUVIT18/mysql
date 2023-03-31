const Sequelize = require("sequelize");

// var con=mysql.createConnection({
//     host:"database-2.czhsqg9lhdzd.ap-south-1.rds.amazonaws.com",
//     user:"admin",
//     password:"L1fLFVL4Rm8nLElEL4xn",
//     database:"classicmodels",
//     port:3306
// })
const sequelize = new Sequelize(
    'classicmodels',
    'admin',
    'L1fLFVL4Rm8nLElEL4xn',
    {
        host: 'database-2.czhsqg9lhdzd.ap-south-1.rds.amazonaws.com',
        dialect: 'mysql',
        define: {
            freezeTableName: true
        }
    }
);


sequelize.sync({ force: false }).then(() => {
    console.log('DB Connected....');
}).catch((error) => {
    console.error('Unable to connect to the database : ', error);
});


module.exports = sequelize;


