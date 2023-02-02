//do I need to create an empty array of cities?
var cities = [];
function handleFormSearch(event){
    event.preventDefault()
    var city = $("#search-input").val().trim();
    if (!city) {
        console.log('No city filled out in form!');
        return;
      }
      // calling renderButtons which handles the processing of our cities array
    renderButtons();

    //call this function to display city once it has been checked if it is in the api
    displayWeatherInfo(city)
}

//this function saves data to local storage
function saveToStorage(newCity){
    console.log("saving to storage")
    var citiesArr = JSON.parse(localStorage.getItem("cities-searched"))
    console.log(newCity)
    if(citiesArr.includes(newCity)){ //this checks if city has already been searched for. If it hasn't it will be added to array
        return
    }
    citiesArr.push(newCity)
    localStorage.setItem("cities-searched", JSON.stringify(citiesArr))//saves as a string
}

//on loading page, local storage is retrieved
function loadStorage(){
    console.log("Loading storage")
    var citiesArr = JSON.parse(localStorage.getItem("cities-searched"))
    console.log(citiesArr)
    if(citiesArr === null){
        localStorage.setItem("cities-searched", JSON.stringify([]))
    }

    //iterate through the array and render buttons()
}

//create a function to display weather info for our chosen city
function displayWeatherInfo(city) {
 // This line will grab the text from the input box
// This is our API key - USE a prompt here for user to input?
var apiKey = "76dd56a7c869514402bbcfd7dbd7cbb7";
  // var city = $ (this).attr("data-name");
var current = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + apiKey;
var forecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&appid=" + apiKey;

//create an ajax for search button clicked - displays current data
$.ajax({
    url: current,
    method: "GET",
    }).then(function(response) {  // We store all of the retrieved data inside of an object called "response"
       console.log(current)
       console.log("GOt current weather api response")
       console.log(response)

        // 1. Creating a div to hold the city
     var cityDiv = $("<div class='cityInfo'>");

     //2. Storing the name data
     var cityName = response.name; //need today's date
     console.log(cityName);
     saveToStorage(cityName)

     //creating an element to have the name displayed
     var temp = $("<h1>").text(cityName);

     //3. Storing the icon data
    


     // 4. Storing the temperature data
     var temperature = response.main.temp;
     console.log("Temperature: " + temperature + "°C")

     // Creating an element to have the temperature displayed
     var temp = $("<p>").text("Temperature: " + temperature + "°C");

     // Displaying the temperature
     $(".cityInfo").append(temp);

     // 5. Storing the wind speed
     var windSpeed = response.wind.speed;
     console.log("Wind Speed: " + windSpeed + "KPH")

     // Creating an element to hold the wind speed
     var wind = $("<p>").text("Wind Speed: " + windSpeed + "KPH");

     // Displaying the wind speed
     $(".cityInfo").append(wind);

     // 6. Storing the humidity
     var humidity = response.main.humidity;
     console.log("Humidity: " + humidity + "%")

     // Creating an element to hold the wind speed
     var humid = $("<p>").text("Humidity: " + humidity + "%");

     // Displaying the wind speed
     cityDiv.append(humid);
    });
//create data for 5 day weather forecast
$.ajax({
    url: forecast,
    method: "GET",
    }).then(function(response) { 
        console.log("Getting forecast information") // We store all of the retrieved data inside of an object called "response"
        console.log(response)
    });
}
//function for displaying city data
function renderButtons() {

      // Looping through the array of cities
      for (var i = 0; i < localStorage.length; i++) {
    
    // Then dynamicaly generating buttons for each city in the array.
        // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class
        a.addClass("pastCity");
        // Adding a data-attribute with a value of the city at index i
        a.attr("data-name", localStorage[i]);
        // Providing the button's text with a value of the city at index i
        a.text(localStorage[i]);
        a.on("click",function(event){
            event.preventDefault()
            console.log("Button pressed")
            console.log(event)
            console.log(event.target)
            console.log(this)
            displayWeatherInfo(event.target.innerText)
        })
        console.log(a)
        // Adding the button to the HTML
        $("#today").append(a);
      }
    }
   
      
      // Calling the renderButtons function at least once to display the initial list of cities
      renderButtons();    
    
        
    
 // Adding a click event listener to all elements with a class of "movie-btn"
$(document).on("click", ".search-button", handleFormSearch);
loadStorage()
//information only showing in console log but not on page
//not sure how to include date
//local storage var savedCity = localStorage.getItem(""); localStorage.setItem("", savedCity);
//format looks wrong
//should I be using long/lat or is city ok?
//icon?