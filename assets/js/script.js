// declare variables
var now = moment();
var saveBtn = $(".saveBtn");


// display current day and time at top of scheduler
$("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));
$("#currentTime").text(moment(now).format("HH:mm"));


// color code time block based on whether it is in the past, present, or future
function timeBlockColor () {
    var hour = moment().hours();
    console.log(hour)

    $(".time-block").each(function () {
        var currentHour = parseInt($(this).attr("id"));
        console.log(currentHour);

        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

// save tasks to local storage when save button is clicked
saveBtn.on("click", function() {
    var time = $(this).siblings(".hour").text();
    var toDoText = $(this).siblings(".description").val();

    localStorage.setItem(time, toDoText);
})

// retrieve tasks from local storage on page reload
function planMyDay () {
    $(".hour").each(function() {
        var currentHour = $(this).text();
        var currentToDoText = localStorage.getItem(currentHour);

        if(currentToDoText !== null) {
            $(this).siblings(".description").val(currentToDoText);
        }
    });
}

timeBlockColor();
planMyDay();