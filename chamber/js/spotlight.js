const requestURL = 'https://wmsmckay.github.io/wdd230/chamber/data/data.json';
const spotlights = document.querySelector('#spotlights');
fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      console.table(jsonObject);
    const businesses = jsonObject['businesses'];
    const used_index = []
    // cards = []
    for (let i = 0; i < 3; i++) {
        i_random = Math.floor(Math.random() * businesses.length);

        while (used_index.includes(i_random)) {
            i_random = Math.floor(Math.random() * businesses.length);
        }
        used_index.push(i_random)
        displayBusinessesCard(businesses[i_random]);
    }
});


function displayBusinessesCard(business) {
    // Create elements to add to the document
    let card = document.createElement('div');
    let h2 = document.createElement('h3');
    let logo = document.createElement('img');
    let location = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('a');

    h2.textContent = `${business.name}`;
    logo.setAttribute('src', business.imageurl);
    logo.setAttribute('alt', `Logo of ${business.name}`)
    logo.setAttribute('loading', 'lazy');
    card.setAttribute("class", "homepage-div")

    location.textContent = business.location;
    phone.textContent = business.phone;
    website.textContent = 'Website'
    website.setAttribute('href', business.website);
    website.setAttribute('target', '_blank');
    

    card.appendChild(logo);
    card.appendChild(h2);
    card.appendChild(location);
    card.appendChild(phone);
    card.appendChild(website);
    
    spotlights.appendChild(card);
    }