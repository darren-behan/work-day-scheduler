$(document).ready(function() {

  // Create variables
  var currentDate = moment().format("dddd, MMMM Do YYYY");;
  var currentHour = moment().hour();
  var notesArray = [];
  var notesObject = {};

  // Create an array with each index holding a string of text from 9 AM to 5 PM
  var timeBlockTextArray = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

  init();

  // init
  function init() {

    // Render HTML
    renderHtmlElements();

    // localStorage getItem to append to the relevant ".row" <textarea>
    renderNotes();

    // Loads the function to display <textarea> colors based on the time
    styleTextAreaBasedOnTime();
  }

  // Event Listeners

  // Click event for save button
  $(".saveBtn").on("click", function(event) {
    event.preventDefault();

    // Store the data-index of button
    var buttonId = $(this).attr("data-index");

    // Store the text from the textarea
    var textAreaValue = $(this).closest("section").find("textarea").val();

    // Object to store the note and it's row unique key
    notesObject = {};

    // Create key-value pair in notesObject with the key being the buttonId and the value being that rows textAreaValue
    notesObject[buttonId] = textAreaValue;

    // Push the notesObject to the notesArray
    notesArray.push(notesObject);
    
    storeNotes();
  })

  // Create a function to load scheduler
  function renderHtmlElements() {
    // Assign current date
    $("#currentDay").html(currentDate);

    // Assign current time
    setInterval(function () {
      $("#currentTime").html(moment().format('LTS'));
    }, 1000);

    // Create a for loop of an array 
    for (var i = 0; i < timeBlockTextArray.length; i++) {

      // Stores each index of the timeBlockTextArray
      timeBlockHour = timeBlockTextArray[i];

      // Create the html elements with classes:

      // Create a <div> with a class of "row"
      rowDiv = $("<div>");
      rowDiv.attr("class", "row");

      // Create a <section> with classes of "input-group time-block"
      timeBlockSection = $("<section>");
      timeBlockSection.attr("class", "input-group time-block");

      // Create a <div> with a class of "input-group-prepend"
      timeDiv = $("<div>");
      timeDiv.attr("class", "input-group-prepend");

      // Create a <span> with a class of "input-group-text", a value from 9 to 5 & text from the timeBlockTextArray 
      timeSpan = $("<span>" + timeBlockHour + ":00" + "</span>");
      timeSpan.attr("class", "input-group-text");
      timeSpan.attr("value", i);

      // Create a <textarea> with a class of "form-control" & aria-label="With textarea"
      inputTextArea = $("<textarea>");
      inputTextArea.attr("id", timeBlockTextArray[i]);
      inputTextArea.attr("class", "form-control");
      inputTextArea.attr("aria-label", "With textarea");         

      // Create a <button> with classes of "saveBtn fa fa-floppy-o fa-2x btn btn-secondary"
      saveButton = $("<button>");
      saveButton.attr("type", "button");
      saveButton.attr("class", "fa fa-floppy-o fa-2x btn btn-success saveBtn");
      saveButton.attr("data-index", timeBlockTextArray[i]);

      // Append the elements as follows:

      // (".row") appends to (".container")
      $(".container").append(rowDiv);

      // <section> appends to (".row")
      rowDiv.append(timeBlockSection);

      // <div> (".input-group-prepend") appends to section
      timeBlockSection.append(timeDiv);

      // span appends to div (".input-group-prepend")
      timeDiv.append(timeSpan);

      // <textarea> appends to <section>
      timeBlockSection.append(inputTextArea);

      // <button> appends to <section>
      timeBlockSection.append(saveButton);
    }
  }

  function renderNotes() {
    // Get stored notes from localStorage
    // Parsing the JSON string to an object
    var storedNotes = JSON.parse(localStorage.getItem("note"));

    // If notes were retrieved from localStorage, update the notes array to it
    if (storedNotes !== null) {
      notesArray = storedNotes;
    }

    // Clearing the textarea
    $(".form-control").val('');

    // Render notes to the DOM
    // Loop through notesArray
    for (var i = 0; i < notesArray.length; i++) {
      // Assign each note (key/value) to a variable
      var note = notesArray[i];
      // Assign the key of each note to a variable
      var noteKey = Object.keys(note);
      // Assign the value of the note to a variable
      var noteValue = Object.values(note);
      // Assign the values to it's respective textarea
      $("#" + noteKey).val(noteValue[0]);
    }
  }

  // Create a function to style each textarea based on the current time
  function styleTextAreaBasedOnTime() {
    // Map each textarea id, return each id and store in an array
    textAreaId = $(".form-control").map(function() {
      // Return textarea id
      return this.id;
    });

    // For loop through each textarea id
    for (var i = 0; i < textAreaId.length; i++) {
      // Parse each string and returns an integer
      var textAreaInt = parseInt(textAreaId[i]);
      // If any hour in the textAreaInt array is equal to the current hour, assign the class "present" which makes that textarea red
      if (currentHour === textAreaInt) {
        $("#" + textAreaId[i]).addClass("present");
        // If any hour in the textAreaInt array is less than the current hour, assign the class "future" which makes that textarea green
      } else if (currentHour < textAreaInt) {
        $("#" + textAreaId[i]).addClass("future");
        // If any hour in the textAreaInt array is greater than the current hour, assign the class "past" which makes that textarea grey
      } else {
        $("#" + textAreaId[i]).addClass("past");
      }
    }
  }

  // Create a function to store each note to the localStorage 
  function storeNotes() {
    // Store the note in the localStorage
    localStorage.setItem("note", JSON.stringify(notesArray)); 
  }
});