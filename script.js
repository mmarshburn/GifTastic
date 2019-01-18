// API Goes Here
//javascript, jQuery


var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=AB9RIEKTa6mkYGp8eimWAXETKpgKQ2YQ&limit=10");
xhr.done(function(data) 
{ console.log("success got data", data);
 });


// Buttons 2nd attempt

var rappers = ['Pimp C', 'Bun B', 'Slim Thug', 'Z Ro'];

//Test
$.each(rappers, function)

function createButton(text){
  $("#rapper-buttons").append('<button>' + rappers[i].valueOf() +'</button>' );
};

function arrayToButtons (){
  for (i=0; i<rappers.length; i++);
  createButton(rappers[i]);
};





//Appending buttons
// $("#add-rapper-button").on("click", function(event){
  //  // event.preventDefault();
  //   var rapperValue = $("#find-rapper").val();
  //   console.log(rapperValue);

  //   var holdButtonTag = $("<button></button>")
  //   holdButtonTag.attr("id", rapperValue);
  //   console.log(holdButtonTag);

  //   var input = $("#rapper-search").val().trim();
  //   holdButtonTag.html(input);
  //   $("#rapper-buttons").append(holdButtonTag);
  // });
