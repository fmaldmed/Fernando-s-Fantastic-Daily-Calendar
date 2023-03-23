var currentDate = moment().format("dddd, MMMM Do");
var currentHour = parseInt(moment().format("H"));
var timeDisplayEl = $('#time-display');

console.log(currentHour);

// Display current date on Header
$('#currentDay').text(currentDate);

console.log(currentDate);

// Function to display actual time, joined by setInterval to have up to date time.
function displayTime() {
    var rightNow = moment().format('hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  };

// Function for blocktimes
function timeblock() {
    $(".hour").each(function () {
        var hourblock = parseInt($(this).attr("id").split("-")[1]);
        console.log(hourblock);

        if (hourblock === currentHour) {
            $(this).removeClass("hour");
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        } else if (hourblock < currentHour) {
            $(this).removeClass("hour");
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (hourblock > currentHour) {
            $(this).removeClass("hour");
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
// Save button to Local storage.

$(".saveBtn").click(function(event) {
    event.preventDefault();
    var input = $(this).siblings(".input").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, input);
})


// Get item from local storage 
    $("#hour9 .input").val(localStorage.getItem("hour9"));
    $("#hour10 .input").val(localStorage.getItem("hour10"));
    $("#hour11 .input").val(localStorage.getItem("hour11"));
    $("#hour12 .input").val(localStorage.getItem("hour12"));
    $("#hour13 .input").val(localStorage.getItem("hour13"));
    $("#hour14 .input").val(localStorage.getItem("hour14"));
    $("#hour15 .input").val(localStorage.getItem("hour15"));
    $("#hour16 .input").val(localStorage.getItem("hour16"));
    $("#hour17 .input").val(localStorage.getItem("hour17"));


  // Function Calls.
  timeblock();
  setInterval(displayTime, 1000);