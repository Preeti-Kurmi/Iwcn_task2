const sequelize=require('sequelize');
const mysql=new sequelize('note','root','Sagar!@#123',{
   
    host:'localhost',
    dialect:'mysql'
})
module.exports=mysql;

