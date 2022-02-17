const sequelize = require("./util/database");

const Customer = require("./models/customer");
const Order = require("./models/order");
let customerId = null;

//A.hasMany(B) association means that One-To-Many relationship b/w A & B, with the foreign key being defined in the target model(B).
Customer.hasMany(Order);

sequelize
.sync({force: true}) //use for sync method.
//.sync()
.then((result) => {
    return Customer.create({name: "Solanki", email: "singhraj1998@gmail.com",
    name: "Asfgg" , email: "123@gmail.com"

    
 })
    console.log(result);
})
.then(customer => {
    customerId = customer.id;
    console.log("First Customer Created:", customer);
    return customer.createOrder({total: 45});
    //return Order.create({total: 45});
})
.then(order => {
    console.log("Order is : ", order);
    return Order.findAll({ where: customerId});
})
.then(orders => {
    console.log("All the Orders are: ",orders);
})
.catch((err) => {
    console.log(err);
});