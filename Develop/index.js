
//-------Display current day at top of CALENDAR----------
var theDay = moment().format("MMM Do YY");
$('#currentDay').append(theDay);


//---Create the variables to save "time" text to local storage-------
var time1 = $("1").text();
var time2 = $("2").text();
var time3 = $("3").text();
var time4 = $("4").text();
var time5 = $("5").text();
var time6 = $("6").text();
var time7 = $("7").text();
var time8 = $("8").text();
var time9 = $("9").text();
var time10 = $("10").text();

//Current time done with moment.js
var currentTime = moment().hours();


//***FUNCTION: The function to render local storage information on page load
$(document).ready(function () {

    //-------Load from local storage-------
    $('#text-1').html(localStorage.getItem('time1'));
    $('#text-2').html(localStorage.getItem('time2'));
    $('#text-3').html(localStorage.getItem('time3'));
    $('#text-4').html(localStorage.getItem('time4'));
    $('#text-5').html(localStorage.getItem('time5'));
    $('#text-6').html(localStorage.getItem('time6'));
    $('#text-7').html(localStorage.getItem('time7'));
    $('#text-8').html(localStorage.getItem('time8'));
    $('#text-9').html(localStorage.getItem('time9')); 
    $('#text-10').html(localStorage.getItem('time10'));



    //****FUNCTION: Save each slot & text to local storage when "Save" button clicked
    $('btn').on("click", function () {
        localStorage.setItem('time1', $('#text-1').val());
        localStorage.setItem('time2', $('#text-2').val());
        localStorage.setItem('time3', $('#text-3').val());
        localStorage.setItem('time4', $('#text-4').val());
        localStorage.setItem('time5', $('#text-5').val());
        localStorage.setItem('time6', $('#text-6').val());
        localStorage.setItem('time7', $('#text-7').val());
        localStorage.setItem('time8', $('#text-8').val());
        localStorage.setItem('time9', $('#text-9').val());
        localStorage.setItem('time10', $('#text-10').val());
    });



    //***FUNCTION-------Color code each time-slot for past present and future------
    function colorCodeTime() {

        $('.time-block').each(function () {
            var timeBlock = parseInt($(this).attr('id'));

            if (currentTime < timeBlock) {
                $(this).addClass('future');
            }
            else if (currentTime > timeBlock) {
                $(this).addClass('past');
            }
            else if (currentTime = timeBlock) {
                $(this).addClass('present')
            }

        });

    }
    colorCodeTime()
});

//-------------------END READY FUNCTION---------------------------------------






