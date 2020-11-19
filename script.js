// These variables through luxon library set the date and time for styling/functionality
let currentDay = $("#currentDay").text(luxon.DateTime.local().toFormat("ff"));
let currentTime = parseInt(luxon.DateTime.local().toFormat("H"));

// created a for loop using military times for the time blocks in the planner
for (let i = 9; i < 18; i++) {

    // this will be the container all time blocks are appended to
    $(".container").append(renderTimeBlock(i));
}
// this function renders the time blocks for each hour represented
function renderTimeBlock(hour) {

    // this is the creation of the row with ids needed
    const $timeSlot = $("<div>")
        .attr("id", "hour-" + hour)
        .attr("class", "row hour time-block");

    // this is setting the correct am/pm for the represented hours and label for the time block
    const $timeLabel = $("<div>").attr("class", "col-md-1");
    if (hour > 12) {
        $timeLabel.text(hour - 12 + "PM");
    } else if (hour === 12) {
        $timeLabel.text(hour + "PM");
    } else {
        $timeLabel.text(hour + "AM");
    }


    // creation of the text area for the user to add plans
    const $textArea = $("<textarea>").attr("class", "col-md-10 description");
    
    //if and if else statements determine color coding of the time blocks based on current time 
    if (hour > currentTime){

        $textArea.addClass("future");
    }else if(hour == currentTime){
        
        $textArea.addClass("present");    
    }else if(hour < currentTime){
        
        $textArea.addClass("past");
    }

    // creation of the save button we use for onclick function and setting local storage
    const $btn = $("<button>")
        .attr("class", "btn saveBtn col-md-1")
        .append($("<i>").attr("class", "fas fa-save"))
        .data("block-hour", hour);

    // this appends all items to create the initial page on load
    $timeSlot.append($timeLabel, $textArea, $btn);

    return $timeSlot;
}

// for loop to get item from local storage and load it into the appropriate time block
for (let i = 9; i < 18; i++) {
    var getTimeBlock = localStorage.getItem("timeblock-" + i.toString());
    $(`#hour-${i} textarea`).text(getTimeBlock);
}

// event listener for save button which sets the text into the local storage
$(".time-block .btn").on("click", function (e) {

    var blockHour = $(this).data("block-hour");
    var blockText = $(`#hour-${blockHour} textarea`).val();

    localStorage.setItem(`timeblock-${blockHour}`, blockText);
});