const requestURL = 'https://wmsmckay.github.io/wdd230/chamber/data/data.json';
const cards = document.querySelector('.cards');


fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      console.table(jsonObject);
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayBusinessesCard);
    });



function displayBusinessesCard(business) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h3');
    let logo = document.createElement('img');
    let location = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('a');

    h2.textContent = `${business.name}`;
    logo.setAttribute('src', business.imageurl);
    logo.setAttribute('alt', `Logo of ${business.name}`)
    logo.setAttribute('loading', 'lazy');
    
    location.textContent = business.location;
    phone.textContent = business.phone;
    website.textContent = 'Website'
    website.setAttribute('href', business.website);

    card.appendChild(logo);
    card.appendChild(h2);
    card.appendChild(location);
    card.appendChild(phone);
    card.appendChild(website);
    
    cards.appendChild(card);
    }

const listBtn = document.querySelector('#listView');
const cardBtn = document.querySelector('#cardView');

listBtn.addEventListener("click", ()=> { cards.classList.replace("listView", "cardView")});
cardBtn.addEventListener("click", ()=> { cards.classList.replace("cardView", "listView")});
