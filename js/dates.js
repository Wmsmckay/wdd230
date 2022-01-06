const lastUpdate = `Last Updated ${document.lastModified}`;
const year = new Date().getFullYear();

document.querySelector("#last-updated").textContent = lastUpdate;
document.querySelector("#current-year").textContent = year;