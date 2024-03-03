const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput")
const stateInput = document.querySelector(".stateInput");
const card = document.querySelector(".card");
const apiKey = "2b3ebe951f4165a313c08c1e2c8272ff";

weatherForm.addEventListener("submit", async event => {

    event.preventDefault();

    const city = cityInput.value;
    const state = stateInput.value;

    if(city){
        try{
            const weatherData = await getWeatherData(city, state);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("Please enter a city");
    }
});

async function getWeatherData(city, state, country){

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}, ${state},${country}&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }
    let data = await response.json();
    console.log(data);
    return data;
}
function displayWeatherInfo(data) {

    console.log("Displaying weather...", data);
    const { name: city,
        main: {temp, humidity},
        weather: [{description, id}]} = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");
    const location = document.createElement("h2");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${((temp - 273.15) * 9/5 + 32).toFixed(1)}°F`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);
        location.textContent = `lon: ${data.coord.lon}
        lat: ${data.coord.lat}`;

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");
    location.classList.add("weatherLocation");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
    card.appendChild(location);
}

// question for mentor session, how to do this better ^

function getWeatherEmoji(weatherId){

    switch(true){
        case(weatherId >= 200 && weatherId < 300):
            return "⛈️";
        case(weatherId >= 300 && weatherId < 400):
            return "🌧️";
        case(weatherId >= 500 && weatherId < 600):
            return "🌧️";
        case(weatherId >= 600 && weatherId < 700):
            return "❄️";
        case(weatherId >= 700 && weatherId < 800):
            return "🌫️";
        case (weatherId === 800):
            return "☀️";
        case (weatherId >= 801 && weatherId < 810):
            return "☁️";
            default:
            return "?";
}
}
function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}
// let age = 21;
// let isAdult = false;

// if (age >= 13) {
//     if (age >= 65) {
//        isAdult = true;
//        console.log("You pay the Senior Citizen price of $25!");
//     } else {
//        isAdult = true;
//        console.log("You pay the full ticket price of $35!");
//     }
// } else {
//    console.log("You pay the Child ticket price of $15!");
// }

// let currentCupsOfRice = 0
// let requiredCupsOfRice = 5

// for (let requiredCupsOfRice = 1; requiredCupsOfRice < 6; requiredCupsOfRice++) {
//     currentCupsOfRice += 1;
  
//     console.log('The bowl contains ' + requiredCupsOfRice + ' cups of rice.');
//     if (currentCupsOfRice >= 6) {
//         console.log("We have enough rice!")
//     }
//   }

//   function calculateTip(amount) {
//     var tip = Math.round(amount * 0.2);
//     return tip;
// }
// var tipAmount = calculateTip(totalBill);
// console.log(tipAmount);
// Ask mentor how do I make it display state and country

// conditional statement if ('expressed only if the value is true')

//let firstName = Sam
// if (firstName == 'sam'){console.log('Hello Sam!');} else{console.log('Hey, ' + firstName);} There can only be two paths in these statements- the path for true or the path for false. Black and white To combat this we can use else if statements. This may seem identical to IF statement but boolean expression only gets evaluated if the preceding if statement was false. let costOfMilk = 2; if (costOfMilk < 2){console.log('We will by 2 gallons');} else if(costOfMilk < 3){console.log('We will buy only 1 gallon');} else{ console.log('No thanks, i'll go elsewhere.);}

//var grade = 'C'; switch (grade) {case 'A': console.log('90-100'); break(break is telling java script if grade = this break out of the case statement.); case 'B': console.log('80-89'); break(break is telling java script if grade = this break out of the case statement.); case 'C': console.log('70-79'); break(break is telling java script if grade = this break out of the case statement.);}

//for Loop: The next type of loop is a for Loop. for Loops contain a bit more syntax, but do more with fewer lines. Let's look at the same example as above converted to a for Loop: for (var cupsOfFlour = 0; cupsOfFlour < 5; cupsOfFlour++) { console.log('Scooping a cup of flour into the bowl'); console.log('There are ' + cupsOfFlour + ' cups of flour in the bowl');} Let's take a look at our first loop, the while Loop: var cupsOfFlour = 0; while (cupsOfFlour < 5) {console.log('Scooping a cup of flour into the bowl'); cupsOfFlour += 1; console.log('There are ' + cupsOfFlour + ' cups of flour in the bowl');}

