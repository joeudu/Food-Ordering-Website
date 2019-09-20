const a = document.querySelector(".card-header");
const b = document.querySelector(".card-title");
// const c = document.querySelector(".card-text");
a.innerHTML = "Here's Your Order:"
b.innerHTML = localStorage.getItem('name') +' ' +' '+ '@ Rate of: ' + localStorage.getItem("price")+' '+ 'per plate';
console.log(b.innerHTML);

 const $name = $("#validationCustom01");
 const $address = $('#validationCustom03');
 const $phone = $('#validationCustom05');

// Example starter JavaScript for disabling form submissions if there are invalid fields
// (function() {
//     'use strict';
//     window.addEventListener('load', function() {
//       // Fetch all the forms we want to apply custom Bootstrap validation styles to
//       var forms = document.getElementsByClassName('needs-validation');
//       // Loop over them and prevent submission
//       var validation = Array.prototype.filter.call(forms, function(form) {
//         form.addEventListener('submit', function(event) {
//           if (form.checkValidity() === false) {
//             event.preventDefault();
//             event.stopPropagation();
//           }
//           form.classList.add('was-validated');
//         }, false);
//       });
//     }, false);
//   })();
//   const orderSubmit = event => {
//     event.preventDefault();
//     // const data;
// }
//  $('.btn btn-primary').on('submit', function (event) {
//      event.preventDefault();
//     const order = {
//         name: $name.val(),
//         address: $address.val(),
//     }
//     $.ajax({
//         type: 'POST',
//         url: 'http://localhost:3000/orders',
//         data: order,
//        success: function (newOrder) {
//             alert ('Success')
//        }
//  });
//  })
$('.sub').on('click', function(event){
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/orders",
        data: {name: $name.val(),
                address: $address.val(),
                phone: $phone.val(),
            },
        success: () => alert(Successful)
    })
})