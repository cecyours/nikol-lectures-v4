// fetch('https://dummyjson.com/products/add', {
//     method: 'GET',
// }).then(res => res.json()).then(data => console.log(data)
// )



let url = "https://dummyjson.com/products/add"

await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "Ada" }),
}).then(res => res.json())
    .then(data => console.log(data));


