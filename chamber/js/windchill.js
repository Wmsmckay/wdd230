const temp = parseInt(document.querySelector("#temp").textContent);
const speed = parseInt(document.getElementById("speed").textContent);

if(temp <= 50 && speed > 3) {
    const windchill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed,0.16) + 0.4275 * temp * Math.pow(speed,0.16)
    document.querySelector("#windchill").innerHTML = `${Math.round(windchill)}&#176;`;
}
else {
    document.querySelector("#windchill").innerHTML = "N/A"
}