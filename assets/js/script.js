$(document).ready(function() {

  // Create variables

  // Create a global variable to store the note entered
  var notes = [];

  // Add Event Listeners

  // Click event for button
  $(".saveBtn").on("click", function() {
    console.log("I've been clicked");

    // Stores the note to localStorage
  })

  // Create an array with each index holding a string of text from 9 AM to 5 PM

  init();

  // Create a function to load scheduler
  function renderHtmlElements() {

  // Create a for loop of an array 

  // Create the html elements with classes

    // Create a <div> with a class of "row"

    // Create a <section> with classes of "input-group time-block"

    // Create a <div> with a class of "input-group-prepend"

    // Create a <span> with a class of "input-group-text" and a value from 9 to 5

      // Assign text to the <span>

    // Create a <textarea> with a class of "form-control" & aria-label="With textarea"
    
    // Create a <button> with classes of "saveBtn fa fa-floppy-o fa-2x btn btn-secondary"

  // Append the elements as follows:

    // (".row") appends to (".container")

    // <section> appends to (".row")

    // <div> (".input-group-prepend") appends to section

    // span appends to div (".input-group-prepend")

    // <textarea> appends to <section>

    // <button> appends to <section>

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

// As the clock moves into the next day

  // Each <textarea> is reset to empty() value and assign the ".future" class

// As the current hits, the first <textarea> is assigned the ".present" class

// As the clock moves to the next hour, the relevant <textarea> is assigned the ".present" class with the previous hour ".past" class

  // Init
  function init() {
    console.log("page has loaded!!");
    // localStorage getItem to append to the relevant ".row" <textarea>

    // loads the function to display <textarea> colors based on the time

    // loads moment.js
  }

});