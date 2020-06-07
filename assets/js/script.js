$(document).ready(function() {

  // Create variables

  // Create a global variable to store the note entered
  var notes = [];

  // Create an array with each index holding a string of text from 9 AM to 5 PM
  var timeBlockTextArray = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

  // Add Event Listeners

  // Click event for button
  $(".saveBtn").on("click", function() {
    console.log("I've been clicked");

    // Stores the note to localStorage
  })

  init();

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
      timeSpan.attr("value", [i]);

      // Create a <textarea> with a class of "form-control" & aria-label="With textarea"
      inputTextArea = $("<textarea>");
      inputTextArea.attr("class", "form-control");
      inputTextArea.attr("aria-label", "With textarea");

      // Create a <button> with classes of "saveBtn fa fa-floppy-o fa-2x btn btn-secondary"
      saveButton = $("<button>");
      saveButton.attr("class", "saveBtn fa fa-floppy-o fa-2x btn btn-secondary");

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

    // html with classes desired layout:

    // <div class="row">
    //   <section class="input-group time-block">
    //     <div class="input-group-prepend">
    //       <span class="input-group-text"></span>
    //     </div>
    //     <textarea class="form-control" aria-label="With textarea"></textarea>
    //     <button class="saveBtn fa fa-floppy-o fa-2x btn btn-secondary"></button>
    //   </section>
    // </div>
    }
  }

// As the clock moves into the next day

  // Each <textarea> is reset to empty() value and assign the ".future" class

// As the current hits, the first <textarea> is assigned the ".present" class

// As the clock moves to the next hour, the relevant <textarea> is assigned the ".present" class with the previous hour ".past" class

  // init
  function init() {
    console.log("page has loaded!!");
    // localStorage getItem to append to the relevant ".row" <textarea>

    // Loads the function to display <textarea> colors based on the time

    // Loads moment.js

    // Render HTML
    renderHtmlElements();
  }

});