// const menuItems =['Tea','Coffee','Sandwich','Cookie']
// console.log(menuItems[0])
// console.log(menuItems[2])
// console.log(menuItems.length)
// console.log(menuItems.length-1)

// const waitingCustomers = ['Aisha', 'Omar', 'Noor'];



// waitingCustomers[1]="Ali"
// waitingCustomers.push("Dana")

// const removedCustomer = waitingCustomers.pop()

// console.log(removedCustomer)
// console.log(waitingCustomers)



// const drinks = ['Water', 'Tea', 'Coffee', 'Juice'];

// for (i = 0; i < drinks.length; i++) {

//     console.log(`${i + 1}. ${drinks[i]}`)

// }


// const prices = [2, 5, 3, 6, 4];
// let totalPrice = 0;
// let expensiveItemCount = 0;
// prices.forEach((x) => {
//     totalPrice = totalPrice + x
//     if (x <= 4) {
//         expensiveItemCount = expensiveItemCount + 1
//     }
// }),
//     console.log(`${'Total price:'} ${totalPrice}`)
// console.log(`${"Items costing 4 or more:"}${expensiveItemCount}`)


// const drink = {
//   name: 'Campus Café',
//   location: 'Building A',
//   seats: 24,
//   isOpen: true,
// };
// console.log(`${drink.name} ${"is"} ${"in"} ${drink.location} `)
// console.log(`${"Available seats:"} ${drink.seats}`)


// const drink = {
//   name: 'Iced Coffee',
//   price: 3,
//   size: 'small',
//   temporaryCode: 'TEMP-01',
// };
// drink.size='large';
// drink.price= drink.price +1 ;
// drink.isAvailable=true;
// delete drink.temporaryCode;


// console.log(drink)




// const order = {
//   customerName: 'Mariam',
//   itemName: 'Sandwich',
//   price: 4,
//   quantity: 3,
//   isPaid: false,

// };
// console.log(order);

// order.orderTotal= order.price + order.quantity ;
// console.log(`${order.customerName }${" ordered"} ${order.quantity} ${order.itemName}`)
// if (order.isPaid === true) {
//   console.log('Ready to prepare');
// } else {
//   console.log('Waiting for payment');
// }

//   Mariam ordered 3 Sandwich items.
//   Order total: 12





// const studySession = {
//   title: 'JavaScript Practice',
//   room: 'Lab 2',
//   topics: ['Variables', 'Arrays'],
// };
// studySession.room = 3
// studySession.topics.push('Objects')
// console.log(studySession)

// console.log(studySession.topics.length)

// studySession.topics.forEach(x => {
//     console.log(x)
// });

// //  JavaScript Practice will take place in Lab 3.
//   console.log(`${studySession.title} ${"will take place in"} ${"Lab"} ${studySession.room}`) 







// const products = [
//   { name: 'Tea', price: 2 },
//   { name: 'Sandwich', price: 4 },
//   { name: 'Cookie', price: 1 },
// ];
// products[1].price = 5
// products.push({ name: 'Juice', price: 3 })

// products.forEach((product) => {
//   console.log(`${product.name} costs ${product.price} BD.`);
// });
// console.log(products)



// const studyGroup = {
//   name: 'JavaScript Crew',
//   members: [
//     { name: 'Aisha', completedHomework: true },
//     { name: 'Omar', completedHomework: false },
//     { name: 'Noor', completedHomework: true },
//   ],
// };
// let completedCount = 0 ;
// console.log(studyGroup.name)
// console.log(studyGroup.members.length)

// studyGroup.members.forEach(members => {
//     if(members.completedHomework === true){
//       completedCount = completedCount + 1;
       
//     }else{
//         console.log(`${members.name} ${"needs to finish the homework."}`)
//     }
// });
// console.log(`Completed homework: ${completedCount}`);
