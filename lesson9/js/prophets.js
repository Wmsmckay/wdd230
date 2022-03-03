const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');
// const prophets = jsonObject['prophets'];





fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      console.table(jsonObject);  // temporary checking for valid response and data parsing
    //   return jsonObject;
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
    });

// console.log(data)

function ordinal(number){
    let x = number % 10;
    let y = number % 100;

    if (x === 1 && y !== 11) {
        return `${number}st`;
    } else if (x == 2 && y !== 12) {
        return `${number}nd`;
    } else if (x === 3 && y!== 13) {
        return `${number}rd`;
    }

    return `${number}th`;
}


function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let birthdate = document.createElement('p');
    let birthplace = document.createElement('p');

  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);



    // portrait.setAttribute('alt', 'Portait of ' + prophet.name + ' ' + prophet.lastname);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${ordinal(prophet.order)} Latter-day President`)
    portrait.setAttribute('loading', 'lazy');
  
    // set the birthplace and birthdate
    birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;

    
    // Add/append the section(card) with the h2 element
    // card.attributes(class, "card");
    card.appendChild(h2);
    card.appendChild(document.createElement('hr'))
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(portrait);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
  }