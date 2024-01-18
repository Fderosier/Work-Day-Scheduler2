/// Code selects current day, year, and month to the header.

const SaveBtn = $('.saveBtn')
var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));

// Code is applied to the correct class to the saved user info. 

function timeLoop(context) {
  let currentTime = dayjs().hour()
  const todos = $(".todo").each(function(i,el){
    let elId = $(el).attr("id")
    if (currentTime > elId){
      // past class selector
      $(el).addClass("past")
    }
    else if (currentTime == elId){
      // current class selector
      $(el).addClass("present")
    }
    else {
      // future class selector
      $(el).addClass("future")
    }
  });

}


$(document).ready(function () {
  let _this = this
  SaveBtn.on('click', function () {
    let write = $(this).siblings('.description').val();
    let hour = $(this).parent().attr("id");
    localStorage.setItem(hour, write)
    console.log(write)
  })

// Grabs saved User input and puts it in coresponding area

  $("#9 .description").val(localStorage.getItem("9")),
  $("#10 .description").val(localStorage.getItem("10")),
  $("#11 .description").val(localStorage.getItem("11")),
  $("#12 .description").val(localStorage.getItem("12")),
  $("#13 .description").val(localStorage.getItem("13")),
  $("#14 .description").val(localStorage.getItem("14")),
  $("#15 .description").val(localStorage.getItem("15")),
  $("#16 .description").val(localStorage.getItem("16")),
  $("#17 .description").val(localStorage.getItem("17")),

  timeLoop(_this)
})