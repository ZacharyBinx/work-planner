let currentDay = $("#currentDay").text(luxon.DateTime.local().toFormat("ff"));
let currentTime = parseInt(luxon.DateTime.local().toFormat("H"));

for (let i = 9; i < 18; i++) {
    $(".container").append(renderTimeBlock(i));
}

function renderTimeBlock(hour) {
    const $timeSlot = $("<div>")
        .attr("id", "hour-" + hour)
        .attr("class", "row hour time-block");

    const $timeLabel = $("<div>").attr("class", "col-md-1");
    if (hour > 12) {
        $timeLabel.text(hour - 12 + "PM");
    } else if (hour === 12) {
        $timeLabel.text(hour + "PM");
    } else {
        $timeLabel.text(hour + "AM");
    }

    const $textArea = $("<textarea>").attr("class", "col-md-10 description");

    const $btn = $("<button>")
        .attr("class", "btn saveBtn col-md-1")
        .append($("<i>").attr("class", "fas fa-save"));

    $timeSlot.append($timeLabel, $textArea, $btn);

    return $timeSlot;
}

for (let i = 9; i < 18; i++) {
    localStorage.getItem(i + '', 'Log into Zoom');

}
// const notes = {
//     9: "",
//     10: "",
//     11: "",
//     12: "",
//     13: "",
//     14: "",
//     15: "",
//     16: "",
//     17: "",
// }

const notes = [
    {
      hour : "9",
      task : ""
    },
    {
        hour: "9",
        task : ""
    }
  ]

$(".row").on("click", function (e) {
    if (!e.target.matches(".btn")) return;
    var data = $("textarea").val();
    for (let i = 9; i < 18; i++) {
        localStorage.setItem(JSON.stringify(notes[0].hour), JSON.stringify(data));
    }
    console.log(data);

    localStorage.setItem
})
function saveTimeSlot() {

}