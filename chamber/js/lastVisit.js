const visit_value = window.localStorage.getItem('lastVisit');

if(visit_value === undefined) {
    visit_value = new Date(Data.now());
}

const last_visit = Date.parse(visit_value);
let visit = document.getElementById('last_visit')
let num_days = Math.floor((Date.now() - last_visit) / (1000 * 60 * 60 * 24));

window.localStorage.setItem('lastVisit', new Date(Date.now()));

visit.textContent = num_days;