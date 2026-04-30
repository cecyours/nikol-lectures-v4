// callback hell 
// setTimeout(() => {
//     console.log("Step 1");

//     setTimeout(() => {
//         console.log("Step 2");

//         setTimeout(() => {
//             console.log("Step 3");

//             setTimeout(() => {
//                 console.log("Step 4");
//             }, 1000);

//         }, 1000);

//     }, 1000);

// }, 1000);




// amother example of callback hell

function getUser(userId, callback) {
    setTimeout(() => {
        const user = { id: userId, name: "John Doe" };
        console.log("User fetched:", user);
        callback(user);
    }, 500);
}

function getOrders(userId, callback) {
    setTimeout(() => {
        const orders = [
            { id: 101, item: "Laptop" },
            { id: 102, item: "Phone" }
        ];
        console.log("Orders fetched:", orders);
        callback(orders);
    }, 500);
}

function getOrderDetails(orderId, callback) {
    setTimeout(() => {
        const details = { id: orderId, amount: 1200 };
        console.log("Order details fetched:", details);
        callback(details);
    }, 500);
}

function processPayment(details, callback) {
    setTimeout(() => {
        const result = { status: "success", paidAmount: details.amount };
        callback(result);
    }, 500);
}

// Calling the chain with dummy userId callback hell 
getUser(1, (user) => {
    getOrders(user.id, (orders) => {
        getOrderDetails(orders[0].id, (details) => {
            processPayment(details, (result) => {
                console.log("Payment done:", result);
            });
        });
    });
});