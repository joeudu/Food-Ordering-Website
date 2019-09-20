const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');

    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav_active');
    })

}
navSlide();

$(document).ready(() => {
    $.get("http://localhost:3000/dishes", (data) => {
        const row1 = document.querySelector('.row1');
        const row2 = document.querySelector('.row2');
        for (let index = 0; index < 6; index++) {
            if (data[index]) {
                const article = document.createElement('div');
                const card = document.createElement('div');
                const img = document.createElement('img');
                const cardBody = document.createElement('div');
                const h5 = document.createElement('h5');
                const h6 = document.createElement('h6');
                const p = document.createElement('p');
                const a = document.createElement('a');
                if (index < 3) {
                row1.appendChild(article);
                } else {
                row2.appendChild(article);
                }
                article.className += 'col-sm-4 ';
                article.appendChild(card);
                card.className += 'card ';
                card.appendChild(img);
                img.className += 'card-img-top ';
                img.src = data[index].imgUrl
                card.appendChild(cardBody);
                cardBody.className += 'card-body ';
                cardBody.appendChild(h5);
                h5.className += 'card-title ';
                h5.innerHTML = data[index].name;
                cardBody.appendChild(h6);
                h6.className += 'card-subtitle mb-2 text-muted ';
                h6.innerHTML = data[index].cost;
                cardBody.appendChild(p);
                p.className += 'card-text ';
                p.innerHTML = data[index].description;
                cardBody.appendChild(a);
                a.className += 'btn btn-primary ';
                a.innerHTML += 'Order here';
                a.href= 'orders.html';
                localStorage.removeItem('name');
                localStorage.removeItem('price');
                localStorage.setItem('name', data[index].name);
                localStorage.setItem('price', data[index].cost);
            }
        }
    });
}); 