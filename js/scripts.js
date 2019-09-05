
// Business Logic for Destinations
function DestinationsList(){
  this.destinations = [],
  this.currentId = 0
}
DestinationsList.prototype.addDestination = function(destination){
  destination.id = this.assignId();
  this.destinations.push(destination);
}
DestinationsList.prototype.assignId = function(){
  this.currentId += 1;
  return this.currentId;
}
DestinationsList.prototype.findDestination = function(id) {
  for(var i = 0; i < this.destinations.length; i ++) {
    if (this.destinations[i].id == id) {
      return this.destinations[i];
    }
  };
}


// Business Logic for places
function Destination(place,activity,time){
  this.place = place,
  this.activity = activity,
  this.time = time
}
Destination.prototype.destinationDetails = function(){
  return "Went to " + this.place + " to " + this.activity + " It's best to go " + this.time;
}

// User Logic

var destinationsList = new DestinationsList();

function displayPlaces(destinationsListToDisplay) {
  var placesList = $("ul#listPlaces");
  var htmlForPlacesList = "";
  destinationsListToDisplay.destinations.forEach(function(destination){
    htmlForPlacesList += "<li id=" + destination.id + ">" +destination.place+"</li>";
  });
  placesList.html(htmlForPlacesList);
};
function showDestination(destinationId){
  var destination = destinationsList.findDestination(destinationId);
  $("#moreInfo").show();
  $(".place").html(destination.place);
  $(".activity").html(destination.activity);
  $(".time").html(destination.time);
};


function attachDestinationListeners(){
  $("ul#listPlaces").on("click", "li", function(){
    showDestination(this.id);
  });
};


function resetForm(){
  $("input#inputDestination").val("");
  $("input#inputActivity").val("");
  $("input#inputTime").val("");
};

$(document).ready(function(){

  attachDestinationListeners();

  $("form#destinationInput").submit(function(event){
    event.preventDefault();

    var inputtedPlace = $("input#inputDestination").val();
    var inputtedActivity = $("input#inputActivity").val();
    var inputtedTime = $("input#inputTime").val();

    var newDestination = new Destination(inputtedPlace,inputtedActivity,inputtedTime);
    destinationsList.addDestination(newDestination);

    displayPlaces(destinationsList);

    $("div#instruction").show();

    resetForm();
  });
});
