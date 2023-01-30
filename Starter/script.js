var searchButton = $("#search-button")

// This is our API key - USE a prompt here for user to input?
var apiKey = "76dd56a7c869514402bbcfd7dbd7cbb7";
// var searchKey = " ";
var city = " ";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "units=metric" + "&appid" + apiKey;

$ (document).ready(function () {
$("#search-button").on("click", function(event) {
        event.preventDefault();

    console.log(searchButton)
        console.log("Working")
        city = $ ("#search-input").val()
        // if(city != " ")
        // $.ajax({
        //     url: queryURL,
        //     method: "GET"

        //   })
        //     // We store all of the retrieved data inside of an object called "response"
        //     .then(function(response) {
          
        //       // Log the queryURL
        //       console.log(queryURL);
    }
    )

// Here we are building the URL we need to query the database
// var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=76dd56a7c869514402bbcfd7dbd7cbb7"

// var cities;

//create a function to display weather info for our chosen city
// function displayWeatherInfo(event) {
//     var searchButton= $(event.target);
    

//     var cityName = searchButton.attr("#search-input");

//   var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=76dd56a7c869514402bbcfd7dbd7cbb7";
  
// // Here we run our AJAX call to the OpenWeatherMap API
// $.ajax({
//     url: queryURL,
//     method: "GET"
//   })
//     // We store all of the retrieved data inside of an object called "response"
//     .then(function(response) {
  
//       // Log the queryURL
//       console.log(queryURL);
  
//       // Log the resulting object
//       console.log(response);

//       $("#today").html("<h1>" + response.name + " Weather Details</h1>");
//     }); 
// }

// //user types in city
// //presses search (search button needs to be under the input box and blue)
// //user is displayed withthe city name; the date; an icon representation of weather conditions; the temperature; the humidity; the wind speed
// //they will also be presented with the above data for the subsequent 5 days
// //the city names will be saved to local storage and will remain on the page

// //things to think about
// //use a prompt to prompt user for api key?
// //css styling 

});