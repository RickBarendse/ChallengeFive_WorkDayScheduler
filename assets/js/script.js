// declare variables
var now = moment();

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


timeBlockColor();