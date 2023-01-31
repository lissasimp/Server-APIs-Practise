//do I need to create an empty array of cities?
var cities = [];


//create a function to display weather info for our chosen city
function displayWeatherInfo(event) {}

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
  
// This is our API key - USE a prompt here for user to input?
var apiKey = "76dd56a7c869514402bbcfd7dbd7cbb7";
// var city = $ (this).attr("data-name");


// This .on("click") function will trigger the AJAX Call
$("#search-button").on("click", function(event) {

// event.preventDefault() can be used to prevent an event's default behavior.
// Here, it prevents the submit button from trying to submit a form when clicked

event.preventDefault();

 // This line will grab the text from the input box
 var city = $("#search-input").val().trim();

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + apiKey;

//create an ajax for search button clicked
$.ajax({
    url: queryURL,
    method: "GET",
    }).then(function(response) {  // We store all of the retrieved data inside of an object called "response"
        // $("#today").text(JSON.stringify(response));
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