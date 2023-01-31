//do I need to create an empty array of cities?
var cities = [];

//create a function to display weather info for our chosen city
function displayWeatherInfo() {
 // This line will grab the text from the input box
var city = $("#search-input").val().trim();
// This is our API key - USE a prompt here for user to input?
var apiKey = "76dd56a7c869514402bbcfd7dbd7cbb7";
  // var city = $ (this).attr("data-name");
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + apiKey;

//create an ajax for search button clicked
$.ajax({
    url: queryURL,
    method: "GET",
    }).then(function(response) {  // We store all of the retrieved data inside of an object called "response"
        // 1. Creating a div to hold the city
     var cityDiv = $("<div class='city'>");

     // 2. Storing the temperature data
     var temperature = response.main.temp;
     console.log(temperature)

     // Creating an element to have the temperature displayed
     var temp = $("<p>").text("Temerature: " + temperature);

     // Displaying the temperature
     cityDiv.append(temp);

     // 3. Storing the wind speed
     var windSpeed = response.wind.speed;
     console.log(windSpeed)

     // Creating an element to hold the wind speed
     var wind = $("<p>").text("Wind Speed: " + windSpeed);

     // Displaying the wind speed
     cityDiv.append(wind);

     // 4. Storing the humidity
     var humidity = response.main.humidity;
     console.log(humidity)

     // Creating an element to hold the wind speed
     var humid = $("<p>").text("Humidity: " + humidity);

     // Displaying the wind speed
     cityDiv.append(humid);
    });

}
//function for displaying city data
function renderButtons() {

    // Deleting the city buttons prior to adding new city buttons
      // (this is necessary otherwise we will have repeat buttons)
      $("#today").empty(); //not sure if this is correct?
    
      // Looping through the array of cities
      for (var i = 0; i < cities.length; i++) {
    
    // Then dynamicaly generating buttons for each city in the array.
        // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class
        a.addClass("city");
        // Adding a data-attribute with a value of the city at index i
        a.attr("data-name", cities[i]);
        // Providing the button's text with a value of the city at index i
        a.text(cities[i]);
        // Adding the button to the HTML
        $("#today").append(a);
      }
    }
    // This function handles events where one button is clicked
    $("#search-button").on("click", function(event) {
        // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the user can hit enter instead of clicking the button if they want
        event.preventDefault();
      
        // This line will grab the text from the input box
        var city = $("#search-input").val().trim();
        // The city from the textbox is then added to our array
        cities.push(city);
      
        // calling renderButtons which handles the processing of our cities array
        renderButtons();
      });
      
      // Calling the renderButtons function at least once to display the initial list of cities
      renderButtons();    
    
    // This .on("click") function will trigger the AJAX Call
    $("#search-button").on("click", function(event) {
    
    // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    
    event.preventDefault();
}),
        
    
 // Adding a click event listener to all elements with a class of "movie-btn"
$(document).on("click", ".search-button", displayWeatherInfo);
