// const promise = new Promise((resolve, reject) => {
//     fetch('https://dummyjson.com/products')
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(err => console.error(err));
// });




// promise.then(
//   data => console.log(data),   // success
//   err => console.log(err)      // error (optional)
// );

// // // // // 

// const p = new Promise((resolve, reject) => {
//     fetch('https://dummyjson.com/products')
//         .then(res => res.json())
//         .then(data => resolve(data))
//         .catch(err => reject(err));
// });

// // logging data
// p.then(data => {
//     console.log(data);
// })
// .catch(err => {
//     console.error(err);
// });



// const p1 = new Promise(res => setTimeout(() => res("Slow"), 2000));
// const p2 = new Promise(res => setTimeout(() => res("Fast"), 1000));

// Promise.race([p1, p2])
//     .then(result => {
//         console.log(result); // "Fast"
//     });




// async function getData() {
//     let loading = true;

//     console.log("Loading start:", loading);

//     const p1 = Promise.reject("Fail 1"); // api
//     const p2 = Promise.resolve("Success");  // api 
//     const p3 = Promise.reject("Fail 2");  // api

//     try {
//         const result = await Promise.all([p1, p2, p3]);  // call api 

//         console.log("Data:", result); // "Success"
//     } catch (err) {
//         console.log("Error:", err);   // "Error"
//     } finally {
//         loading = false;
//         console.log("Loading end:", loading);
//     }
// }

// getData();





let user = false

if (!user) {
    throw new Error("User is required");
}


