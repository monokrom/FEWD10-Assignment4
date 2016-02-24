$(document).ready(function () {


    // click event
    $("#submit-btn").click(function () {
            event.preventDefault();

            //Declare variable – Remove case sensitive
            var city = $('#city-type').val().toLowerCase();



            // Accept multiple names


            if ($.inArray(city, ['nyc', 'new york', 'new york city']) >= 0) {
                city = 'nyc';
                $('body').removeClass();
                $('body').addClass('nyc');

            } else if ($.inArray(city, ['san francisco', 'bay area']) >= 0) {
                city = 'sanf';
                $('body').removeClass();
                $('body').addClass('sf');

            } else if ($.inArray(city, ['la', 'lax', 'los angeles']) >= 0) {
                city = 'la';
                $('body').removeClass();
                $('body').addClass('la');

            } else if ($.inArray(city, ['austin', 'atx']) >= 0) {
                city = 'austin';
                $('body').removeClass();
                $('body').addClass('austin');


            } else if ($.inArray(city, ['sydney', 'syd']) >= 0) {
                city = 'sydney';
                $('body').removeClass();
                $('body').addClass('sydney');


            } else console.log('No go dude!');


            /*

// Accept multiple names FAIL
        if (city == 'nyc' || 'new york' || 'new york city') {
            city = 'nyc';
        } else if (city == 'san francisco' || 'bay area') {
            city = 'sanf';
        } else if (city == "la" || ("los angeles" || "lax") {
            city = 'la';
        } else if (city == 'austin' || 'atx') {
            city = 'austin';
        } else if (city == 'sydney' || 'syd') {
            city = 'sydney'; 
        } else {
            alert(city);

        };

*/

       
    });
});







/*
$('#submit-btn').click(function () {
    var city = ('#city-type').val();
    console.log(city);

    //if submits this || this || this

    if (city == "New York" || "New York City" || "NYC") {
        //change background pic    
        $('body').addClass('nyc');
    };

});
*/