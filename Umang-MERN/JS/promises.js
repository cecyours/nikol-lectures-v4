const promise = new Promise((resolve, reject) => {
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
});




promise.then(
  data => console.log(data),   // success
  err => console.log(err)      // error (optional)
);

// // // // 

const p = new Promise((resolve, reject) => {
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
});

// logging data
p.then(data => {
    console.log(data);
})
.catch(err => {
    console.error(err);
});