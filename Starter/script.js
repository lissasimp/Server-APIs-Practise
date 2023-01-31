//do I need to create an empty array of cities?
var cities = [ ];

//create a function to display weather info for our chosen city
    function displayWeatherInfo(event) {}


// This is our API key - USE a prompt here for user to input?
var apiKey = "76dd56a7c869514402bbcfd7dbd7cbb7";
// var city = $ (this).attr("data-name");


// This .on("click") function will trigger the AJAX Call
$("#search-button").on("click", function(event) {

// event.preventDefault() can be used to prevent an event's default behavior.
// Here, it prevents the submit button from trying to submit a form when clicked

event.preventDefault();

//Get text from input box
var city = $("search-input").val();

//Construct our query url
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

//create an ajax for search button clicked
$.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?q=London&appid=76dd56a7c869514402bbcfd7dbd7cbb7",
    method: "GET"
    }).then(function(response) {  // We store all of the retrieved data inside of an object called "response"
        $("#today").text(JSON.stringify(response));
    });
        
 // Log the queryURL
    console.log(queryURL);
        console.log("Working")
     
        

// Here we are building the URL we need to query the database
// var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=76dd56a7c869514402bbcfd7dbd7cbb7"

// var cities;


//     var searchButton= $(event.target);
    
// var searchButton = $("#search-button")


// //user types in city
// //presses search (search button needs to be under the input box and blue)
// //user is displayed withthe city name; the date; an icon representation of weather conditions; the temperature; the humidity; the wind speed
// //they will also be presented with the above data for the subsequent 5 days
// //the city names will be saved to local storage and will remain on the page

// //things to think about
// //use a prompt to prompt user for api key?
// //css styling 
},
)