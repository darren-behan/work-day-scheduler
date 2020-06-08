$(document).ready(function() {

  // Create variables

  // Create a global variable to store the note entered
  var notesArray = [];
  var notesObject = {};
  var savedNotes;
  var storedNotes;

  // Create an array with each index holding a string of text from 9 AM to 5 PM
  var timeBlockTextArray = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

  init();

  // init
  function init() {

    // Render HTML
    renderHtmlElements();

    // Store notes submitted by user to localStorage
    storeNotes();

    // localStorage getItem to append to the relevant ".row" <textarea>
    getNote();

    // Loads the function to display <textarea> colors based on the time

    // Loads moment.js

  }

  // Create a function to load scheduler
  function renderHtmlElements() {

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
      timeSpan = $("<span>" + timeBlockHour + "</span>");
      timeSpan.attr("class", "input-group-text");
      timeSpan.attr("value", i);

      // Create a <textarea> with a class of "form-control" & aria-label="With textarea"
      inputTextArea = $("<textarea>");
      inputTextArea.attr("id", "area-" + i);
      inputTextArea.attr("class", "form-control");
      inputTextArea.attr("aria-label", "With textarea");            

      // Create a <button> with classes of "saveBtn fa fa-floppy-o fa-2x btn btn-secondary"
      saveButton = $("<button>");
      saveButton.attr("type", "button");
      saveButton.attr("class", "fa fa-floppy-o fa-2x btn btn-success saveBtn");
      saveButton.attr("data-index", i);

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

  // As the clock moves into the next day

    // Each <textarea> is reset to empty() value and assign the ".future" class

  // As the current hits, the first <textarea> is assigned the ".present" class

  // As the clock moves to the next hour, the relevant <textarea> is assigned the ".present" class with the previous hour ".past" class

  function storeNotes() {
    // Click event for save button
    $(".saveBtn").on("click", function() {
      // Store the data-index of button
      var rowUniqueKey = $(this).attr("data-index");
      console.log(rowUniqueKey);

      // Store the textarea value of the row the button was clicked
      var textAreaValue = $(".form-control").val();
      console.log(textAreaValue);

      // Object to store the note and it's row unique key
      notesObject = {};

      // Create key-value pair in notesObject with the key being the rowUniqueKey and the value being that rows textAreaValue
      notesObject[rowUniqueKey] = textAreaValue;

      // Push the notesObject to the notesArray
      notesArray.push(notesObject);
      console.log(notesArray);

      // Store the note in the localStorage
      localStorage.setItem("note", JSON.stringify(notesArray));      
    })
  }

  function getNote() {
    console.log("I've been retrieved");
  }

});