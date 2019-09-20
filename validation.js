// Example starter JavaScript for disabling form submissions if there are invalid fields
const a = document.querySelector(".card-header");
const b = document.querySelector(".card-title");
// const c = document.querySelector(".card-text");
a.innerHTML = "Here's Your Order: "
b.innerHTML = localStorage.getItem('name') + ' '+ '@ Rate of: ' + localStorage.getItem("price") + ' ' + 'per plate';
console.log(b.innerHTML);




